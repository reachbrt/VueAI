import { ref, reactive, Ref } from 'vue';
import { AIClient } from '@aivue/core';

export interface SmartFormOptions {
  client: AIClient;
  schema: Record<string, any>;
  initialData?: Record<string, any>;
  validationMode?: 'onChange' | 'onBlur' | 'onSubmit';
  autoCorrect?: boolean;
  feedbackDelay?: number;
  onError?: (error: Error) => void;
}

export interface SmartFormReturn {
  formData: Record<string, any>;
  errors: Record<string, string>;
  isLoading: Ref<boolean>;
  handleChange: (field: string, value: any) => void;
  validate: (field?: string) => Promise<boolean>;
  fixWithAI: (field: string) => Promise<void>;
  reset: () => void;
  submitForm: () => Promise<boolean>;
}

/**
 * Composable for AI-powered form validation and correction
 * 
 * @param options Configuration options
 * @returns SmartForm state and methods
 */
export function useSmartForm(options: SmartFormOptions): SmartFormReturn {
  const {
    client,
    schema,
    initialData = {},
    validationMode = 'onChange',
    autoCorrect = false,
    feedbackDelay = 500,
    onError = () => {}
  } = options;

  // Initialize form data from schema and initial data
  const formData = reactive<Record<string, any>>({});
  const errors = reactive<Record<string, string>>({});
  const isLoading = ref(false);
  let debounceTimeout: number | null = null;

  // Initialize form data
  for (const field in schema) {
    if (initialData[field] !== undefined) {
      formData[field] = initialData[field];
    } else if (schema[field].type === 'checkbox') {
      formData[field] = schema[field].defaultValue || false;
    } else if (schema[field].type === 'select' || schema[field].type === 'radio') {
      formData[field] = schema[field].defaultValue || '';
    } else {
      formData[field] = schema[field].defaultValue || '';
    }
  }

  /**
   * Handle field change
   * 
   * @param field Field name
   * @param value New value
   */
  const handleChange = (field: string, value: any): void => {
    formData[field] = value;
    
    // Clear previous timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    // Validate after delay if validationMode is onChange
    if (validationMode === 'onChange') {
      debounceTimeout = window.setTimeout(() => {
        validate(field);
      }, feedbackDelay);
    }
  };

  /**
   * Validate a field or the entire form
   * 
   * @param field Optional field name to validate
   * @returns Promise<boolean> indicating if validation passed
   */
  const validate = async (field?: string): Promise<boolean> => {
    // If field is provided, validate only that field
    if (field) {
      return validateField(field);
    }
    
    // Otherwise validate all fields
    const validationPromises = Object.keys(schema).map(validateField);
    const results = await Promise.all(validationPromises);
    return results.every(Boolean);
  };

  /**
   * Validate a specific field
   *
   * @param field Field name
   * @returns Promise<boolean> indicating if validation passed
   */
  const validateField = async (field: string): Promise<boolean> => {
    const fieldSchema = schema[field];
    const value = formData[field];

    // Clear previous error
    delete errors[field];

    // Skip validation if field is not in schema
    if (!fieldSchema) {
      return true;
    }

    // 1. Required field validation (with whitespace check)
    if (fieldSchema.required) {
      if (value === undefined || value === null) {
        errors[field] = fieldSchema.requiredMessage || `${fieldSchema.label || field} is required`;
        return false;
      }

      // For strings, check if empty or only whitespace
      if (typeof value === 'string' && value.trim() === '') {
        errors[field] = fieldSchema.requiredMessage || `${fieldSchema.label || field} is required`;
        return false;
      }

      // For arrays (checkboxes), check if empty
      if (Array.isArray(value) && value.length === 0) {
        errors[field] = fieldSchema.requiredMessage || `${fieldSchema.label || field} is required`;
        return false;
      }

      // For booleans (single checkbox), must be true if required
      if (fieldSchema.type === 'checkbox' && !value) {
        errors[field] = fieldSchema.requiredMessage || `${fieldSchema.label || field} must be checked`;
        return false;
      }
    }

    // Skip further validation if value is empty and not required
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      return true;
    }

    // 2. Type-specific validation
    const typeValidationError = validateFieldType(field, value, fieldSchema);
    if (typeValidationError) {
      errors[field] = typeValidationError;
      return false;
    }

    // 3. Min/Max length validation (for text fields)
    if (fieldSchema.minLength !== undefined && typeof value === 'string') {
      if (value.length < fieldSchema.minLength) {
        errors[field] = fieldSchema.minLengthMessage ||
          `${fieldSchema.label || field} must be at least ${fieldSchema.minLength} characters`;
        return false;
      }
    }

    if (fieldSchema.maxLength !== undefined && typeof value === 'string') {
      if (value.length > fieldSchema.maxLength) {
        errors[field] = fieldSchema.maxLengthMessage ||
          `${fieldSchema.label || field} must not exceed ${fieldSchema.maxLength} characters`;
        return false;
      }
    }

    // 4. Min/Max value validation (for number fields)
    if (fieldSchema.min !== undefined && fieldSchema.type === 'number') {
      const numValue = Number(value);
      if (numValue < fieldSchema.min) {
        errors[field] = fieldSchema.minMessage ||
          `${fieldSchema.label || field} must be at least ${fieldSchema.min}`;
        return false;
      }
    }

    if (fieldSchema.max !== undefined && fieldSchema.type === 'number') {
      const numValue = Number(value);
      if (numValue > fieldSchema.max) {
        errors[field] = fieldSchema.maxMessage ||
          `${fieldSchema.label || field} must not exceed ${fieldSchema.max}`;
        return false;
      }
    }

    // 5. Pattern validation
    if (fieldSchema.pattern && value) {
      const regex = new RegExp(fieldSchema.pattern);
      if (!regex.test(String(value))) {
        errors[field] = fieldSchema.patternMessage || `Invalid ${fieldSchema.label || field}`;
        return false;
      }
    }

    // 6. Custom validation function
    if (fieldSchema.validate && typeof fieldSchema.validate === 'function') {
      try {
        const result = await fieldSchema.validate(value, formData);
        if (result !== true) {
          errors[field] = result || `Invalid ${fieldSchema.label || field}`;
          return false;
        }
      } catch (error: any) {
        errors[field] = error.message || `Validation error for ${fieldSchema.label || field}`;
        return false;
      }
    }

    // 7. AI validation (only if all basic validations pass)
    if (fieldSchema.aiValidation && value) {
      try {
        const isValid = await validateWithAI(field, value);
        return isValid;
      } catch (error: any) {
        onError(error);
        return true; // Don't fail validation on AI error
      }
    }

    return true;
  };

  /**
   * Validate field based on its type
   *
   * @param field Field name
   * @param value Field value
   * @param fieldSchema Field schema
   * @returns Error message or null if valid
   */
  const validateFieldType = (field: string, value: any, fieldSchema: any): string | null => {
    const fieldLabel = fieldSchema.label || field;

    switch (fieldSchema.type) {
      case 'email':
        // RFC 5322 compliant email regex (simplified)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(String(value))) {
          return fieldSchema.typeMessage || `Please enter a valid email address`;
        }
        break;

      case 'number':
        const numValue = Number(value);
        if (isNaN(numValue)) {
          return fieldSchema.typeMessage || `${fieldLabel} must be a valid number`;
        }
        break;

      case 'url':
        try {
          new URL(String(value));
        } catch {
          return fieldSchema.typeMessage || `Please enter a valid URL`;
        }
        break;

      case 'tel':
      case 'phone':
        // Basic phone validation (10+ digits)
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(String(value))) {
          return fieldSchema.typeMessage || `Please enter a valid phone number`;
        }
        break;

      case 'date':
        const dateValue = new Date(value);
        if (isNaN(dateValue.getTime())) {
          return fieldSchema.typeMessage || `Please enter a valid date`;
        }
        break;
    }

    return null;
  };

  /**
   * Validate a field value using AI
   *
   * @param field Field name
   * @param value Field value
   * @returns Promise<boolean> indicating if validation passed
   */
  const validateWithAI = async (field: string, value: any): Promise<boolean> => {
    const fieldSchema = schema[field];

    try {
      // Build validation context
      const validationRules: string[] = [];

      // Add type-specific rules
      if (fieldSchema.type === 'email') {
        validationRules.push('Must be a professional email address');
      } else if (fieldSchema.type === 'number') {
        validationRules.push('Must be a valid number');
        if (fieldSchema.min !== undefined) {
          validationRules.push(`Minimum value: ${fieldSchema.min}`);
        }
        if (fieldSchema.max !== undefined) {
          validationRules.push(`Maximum value: ${fieldSchema.max}`);
        }
      } else if (fieldSchema.type === 'url') {
        validationRules.push('Must be a valid and accessible URL');
      } else if (fieldSchema.type === 'tel' || fieldSchema.type === 'phone') {
        validationRules.push('Must be a valid phone number');
      }

      // Add length rules
      if (fieldSchema.minLength !== undefined) {
        validationRules.push(`Minimum length: ${fieldSchema.minLength} characters`);
      }
      if (fieldSchema.maxLength !== undefined) {
        validationRules.push(`Maximum length: ${fieldSchema.maxLength} characters`);
      }

      // Add custom validation rules from schema
      if (fieldSchema.validationRules && Array.isArray(fieldSchema.validationRules)) {
        validationRules.push(...fieldSchema.validationRules);
      }

      // Create a comprehensive prompt for the AI
      const prompt = `
You are validating a form field. Perform semantic and contextual validation.

Field Information:
- Name: ${fieldSchema.label || field}
- Type: ${fieldSchema.type || 'text'}
- Value: "${value}"
${fieldSchema.description ? `- Description: ${fieldSchema.description}` : ''}

Validation Rules:
${validationRules.length > 0 ? validationRules.map(rule => `- ${rule}`).join('\n') : '- Standard validation for this field type'}

Additional Context:
- Check for common mistakes, typos, or formatting issues
- Verify the value makes sense in the context of the field
- Consider professional and business standards
- Check for potential security issues (SQL injection, XSS, etc.)

Response Format:
- If valid: Respond with exactly "VALID"
- If invalid: Respond with "INVALID: [brief, specific reason]"

Be strict but fair. Focus on semantic correctness, not just syntax.
      `.trim();

      // Call the AI client to validate the field
      const response = await client.chat([
        { role: 'system', content: 'You are an expert form validation assistant. You validate user inputs for correctness, appropriateness, and security. You are strict but helpful.' },
        { role: 'user', content: prompt }
      ]);

      const trimmedResponse = response.trim();

      if (trimmedResponse.startsWith('VALID')) {
        return true;
      } else if (trimmedResponse.startsWith('INVALID:')) {
        errors[field] = trimmedResponse.substring(9).trim();

        // Auto-correct if enabled
        if (autoCorrect) {
          await fixWithAI(field);
        }

        return false;
      }

      // If response doesn't match expected format, assume valid
      return true;
    } catch (error: any) {
      onError(error);
      return true; // Don't fail validation on AI error
    }
  };

  /**
   * Fix a field value using AI
   *
   * @param field Field name
   */
  const fixWithAI = async (field: string): Promise<void> => {
    const fieldSchema = schema[field];
    const value = formData[field];

    try {
      // Build context for fixing
      const constraints: string[] = [];

      if (fieldSchema.type === 'email') {
        constraints.push('Must be a valid email format (user@domain.com)');
      } else if (fieldSchema.type === 'number') {
        constraints.push('Must be a numeric value');
        if (fieldSchema.min !== undefined) {
          constraints.push(`Must be >= ${fieldSchema.min}`);
        }
        if (fieldSchema.max !== undefined) {
          constraints.push(`Must be <= ${fieldSchema.max}`);
        }
      } else if (fieldSchema.type === 'url') {
        constraints.push('Must be a valid URL with protocol (https://)');
      } else if (fieldSchema.type === 'tel' || fieldSchema.type === 'phone') {
        constraints.push('Must be a valid phone number format');
      }

      if (fieldSchema.minLength !== undefined) {
        constraints.push(`Minimum ${fieldSchema.minLength} characters`);
      }
      if (fieldSchema.maxLength !== undefined) {
        constraints.push(`Maximum ${fieldSchema.maxLength} characters`);
      }

      // Create a comprehensive prompt for the AI to fix the field
      const prompt = `
You are fixing an invalid form field value.

Field Information:
- Name: ${fieldSchema.label || field}
- Type: ${fieldSchema.type || 'text'}
- Current Value: "${value}"
- Error: ${errors[field]}
${fieldSchema.description ? `- Description: ${fieldSchema.description}` : ''}

Constraints:
${constraints.length > 0 ? constraints.map(c => `- ${c}`).join('\n') : '- Standard constraints for this field type'}

Instructions:
1. Analyze the current value and the error
2. Correct the value while preserving the user's intent
3. Ensure the corrected value meets all constraints
4. Return ONLY the corrected value, nothing else
5. Do not add quotes, explanations, or extra text

Examples:
- If email "john@invalid" → return "john@example.com"
- If number "abc" → return "0"
- If phone "123" → return "123-456-7890"

Corrected value:
      `.trim();

      // Call the AI client to fix the field
      const response = await client.chat([
        { role: 'system', content: 'You are an expert at correcting form input values. You fix errors while preserving user intent. You return only the corrected value with no additional text.' },
        { role: 'user', content: prompt }
      ]);

      // Clean up the response
      let correctedValue = response.trim();

      // Remove quotes if AI added them
      if ((correctedValue.startsWith('"') && correctedValue.endsWith('"')) ||
          (correctedValue.startsWith("'") && correctedValue.endsWith("'"))) {
        correctedValue = correctedValue.slice(1, -1);
      }

      // Convert to appropriate type
      if (fieldSchema.type === 'number') {
        const numValue = Number(correctedValue);
        if (!isNaN(numValue)) {
          formData[field] = numValue;
        } else {
          formData[field] = correctedValue;
        }
      } else if (fieldSchema.type === 'checkbox') {
        formData[field] = correctedValue.toLowerCase() === 'true' || correctedValue === '1';
      } else {
        formData[field] = correctedValue;
      }

      // Clear the error before re-validating
      delete errors[field];

      // Validate the field again
      await validateField(field);
    } catch (error: any) {
      onError(error);
    }
  };

  /**
   * Reset the form to initial values
   */
  const reset = (): void => {
    // Reset form data
    for (const field in schema) {
      if (initialData[field] !== undefined) {
        formData[field] = initialData[field];
      } else if (schema[field].type === 'checkbox') {
        formData[field] = schema[field].defaultValue || false;
      } else if (schema[field].type === 'select' || schema[field].type === 'radio') {
        formData[field] = schema[field].defaultValue || '';
      } else {
        formData[field] = schema[field].defaultValue || '';
      }
    }
    
    // Clear errors
    for (const field in errors) {
      delete errors[field];
    }
  };

  /**
   * Submit the form
   * 
   * @returns Promise<boolean> indicating if submission was successful
   */
  const submitForm = async (): Promise<boolean> => {
    isLoading.value = true;
    
    try {
      const isValid = await validate();
      return isValid;
    } catch (error: any) {
      onError(error);
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    validate,
    fixWithAI,
    reset,
    submitForm
  };
}

export default useSmartForm;
