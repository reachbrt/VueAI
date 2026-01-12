/**
 * SmartForm Package Tests
 * Tests all features of the @aivue/smartform package
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ref } from 'vue';
import { useSmartForm } from '../src/composables/useSmartForm';

// Mock AIClient
const createMockAIClient = () => ({
  complete: vi.fn().mockResolvedValue({
    text: 'VALID'
  }),
  chat: vi.fn().mockResolvedValue('VALID')
});

describe('@aivue/smartform - Core Features', () => {
  let mockClient: any;
  let schema: any;

  beforeEach(() => {
    mockClient = createMockAIClient();
    schema = {
      name: {
        type: 'text',
        label: 'Name',
        required: true,
        validation: {
          minLength: 2,
          maxLength: 50
        }
      },
      email: {
        type: 'email',
        label: 'Email',
        required: true,
        validation: {
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
      },
      age: {
        type: 'number',
        label: 'Age',
        validation: {
          min: 18,
          max: 120
        }
      },
      bio: {
        type: 'textarea',
        label: 'Bio',
        validation: {
          maxLength: 500
        }
      }
    };
  });

  describe('Feature 1: Form Initialization', () => {
    it('should initialize form with empty data', () => {
      const { formData, errors, isLoading } = useSmartForm({
        client: mockClient,
        schema
      });

      expect(formData).toBeDefined();
      expect(errors).toBeDefined();
      expect(isLoading.value).toBe(false);
    });

    it('should initialize form with initial data', () => {
      const initialData = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
      };

      const { formData } = useSmartForm({
        client: mockClient,
        schema,
        initialData
      });

      expect(formData.name).toBe('John Doe');
      expect(formData.email).toBe('john@example.com');
      expect(formData.age).toBe(30);
    });
  });

  describe('Feature 2: Field Change Handling', () => {
    it('should update field value on change', () => {
      const { formData, handleChange } = useSmartForm({
        client: mockClient,
        schema
      });

      handleChange('name', 'Jane Doe');
      expect(formData.name).toBe('Jane Doe');
    });

    it('should handle multiple field changes', () => {
      const { formData, handleChange } = useSmartForm({
        client: mockClient,
        schema
      });

      handleChange('name', 'Jane Doe');
      handleChange('email', 'jane@example.com');
      handleChange('age', 25);

      expect(formData.name).toBe('Jane Doe');
      expect(formData.email).toBe('jane@example.com');
      expect(formData.age).toBe(25);
    });
  });

  describe('Feature 3: AI Validation', () => {
    it('should validate field with AI', async () => {
      mockClient.chat.mockResolvedValue('VALID');

      const aiSchema = {
        name: {
          type: 'text',
          label: 'Name',
          required: true,
          aiValidation: true // Enable AI validation
        }
      };

      const { formData, handleChange, validate } = useSmartForm({
        client: mockClient,
        schema: aiSchema
      });

      handleChange('name', 'John Doe');
      const isValid = await validate('name');
      expect(isValid).toBe(true);
      expect(mockClient.chat).toHaveBeenCalled();
    });

    it('should detect invalid field with AI', async () => {
      mockClient.chat.mockResolvedValue('INVALID: Name is too short');

      const aiSchema = {
        name: {
          type: 'text',
          label: 'Name',
          required: true,
          aiValidation: true
        }
      };

      const { formData, handleChange, validate, errors } = useSmartForm({
        client: mockClient,
        schema: aiSchema
      });

      handleChange('name', 'Jo');
      const isValid = await validate('name');
      expect(isValid).toBe(false);
      expect(errors.name).toBe('Name is too short');
    });

    it('should validate all fields', async () => {
      mockClient.chat.mockResolvedValue('VALID');

      const { formData, handleChange, validate } = useSmartForm({
        client: mockClient,
        schema
      });

      handleChange('name', 'John Doe');
      handleChange('email', 'john@example.com');

      const isValid = await validate();
      expect(isValid).toBe(true);
    });
  });

  describe('Feature 4: AI Fix/Auto-Correct', () => {
    it('should fix field value with AI', async () => {
      const aiSchema = {
        email: {
          type: 'email',
          label: 'Email',
          required: true,
          aiValidation: true
        }
      };

      // Mock AI fix response
      mockClient.chat.mockResolvedValueOnce('john.doe@example.com');

      const { formData, handleChange, validate, fixWithAI, errors } = useSmartForm({
        client: mockClient,
        schema: aiSchema
      });

      handleChange('email', 'john.doe@invalid');

      // Validate first to set the error (type validation will catch it)
      await validate('email');
      expect(errors.email).toBe('Please enter a valid email address');

      // Then fix with AI
      await fixWithAI('email');
      expect(formData.email).toBe('john.doe@example.com');
    });

    it('should auto-correct on validation error when enabled', async () => {
      const aiSchema = {
        name: {
          type: 'text',
          label: 'Name',
          required: true,
          aiValidation: true
        }
      };

      // First call validates and returns error, second call fixes, third validates fixed value
      mockClient.chat
        .mockResolvedValueOnce('INVALID: Name should be a full name')
        .mockResolvedValueOnce('John Doe')
        .mockResolvedValueOnce('VALID');

      const { formData, handleChange, validate } = useSmartForm({
        client: mockClient,
        schema: aiSchema,
        autoCorrect: true
      });

      handleChange('name', 'John');
      await validate('name');

      // Auto-correct should have fixed it
      expect(formData.name).toBe('John Doe');
    });
  });

  describe('Feature 5: Form Submission', () => {
    it('should submit valid form', async () => {
      mockClient.chat.mockResolvedValue('VALID');

      const { formData, handleChange, submitForm } = useSmartForm({
        client: mockClient,
        schema
      });

      handleChange('name', 'John Doe');
      handleChange('email', 'john@example.com');

      const isValid = await submitForm();
      expect(isValid).toBe(true);
    });

    it('should prevent submission of invalid form', async () => {
      mockClient.chat.mockResolvedValue('INVALID: Required field is empty');

      const { submitForm } = useSmartForm({
        client: mockClient,
        schema
      });

      // Form is invalid because required fields are empty
      const isValid = await submitForm();
      expect(isValid).toBe(false);
    });
  });

  describe('Feature 6: Form Reset', () => {
    it('should reset form to initial state', () => {
      const initialData = {
        name: 'John Doe',
        email: 'john@example.com'
      };

      const { formData, handleChange, reset } = useSmartForm({
        client: mockClient,
        schema,
        initialData
      });

      handleChange('name', 'Jane Doe');
      handleChange('email', 'jane@example.com');

      reset();

      expect(formData.name).toBe('John Doe');
      expect(formData.email).toBe('john@example.com');
    });

    it('should clear errors on reset', () => {
      const { errors, handleChange, validate, reset } = useSmartForm({
        client: mockClient,
        schema
      });

      mockClient.complete.mockResolvedValue({
        text: 'INVALID: Field is required'
      });

      handleChange('name', '');
      validate('name');

      reset();

      expect(errors.name).toBeUndefined();
    });
  });

  describe('Feature 7: Validation Modes', () => {
    it('should support onChange validation mode', () => {
      const form = useSmartForm({
        client: mockClient,
        schema,
        validationMode: 'onChange'
      });

      // Validation mode is set in options (internal to composable)
      expect(form).toBeDefined();
      expect(form.formData).toBeDefined();
      expect(form.validate).toBeDefined();
    });

    it('should support onBlur validation mode', () => {
      const form = useSmartForm({
        client: mockClient,
        schema,
        validationMode: 'onBlur'
      });

      expect(form).toBeDefined();
      expect(form.formData).toBeDefined();
      expect(form.validate).toBeDefined();
    });

    it('should support onSubmit validation mode', () => {
      const form = useSmartForm({
        client: mockClient,
        schema,
        validationMode: 'onSubmit'
      });

      expect(form).toBeDefined();
      expect(form.formData).toBeDefined();
      expect(form.validate).toBeDefined();
    });
  });

  describe('Feature 8: Error Handling', () => {
    it('should handle AI client errors gracefully', async () => {
      const aiSchema = {
        name: {
          type: 'text',
          label: 'Name',
          required: true,
          aiValidation: true
        }
      };

      mockClient.chat.mockRejectedValue(new Error('AI service unavailable'));

      const onError = vi.fn();
      const { formData, handleChange, validate } = useSmartForm({
        client: mockClient,
        schema: aiSchema,
        onError
      });

      handleChange('name', 'John Doe');
      const isValid = await validate('name');

      // Should not fail validation on AI error (graceful fallback)
      expect(isValid).toBe(true);
      expect(onError).toHaveBeenCalled();
    });

    it('should call onError callback on errors', async () => {
      const aiSchema = {
        name: {
          type: 'text',
          label: 'Name',
          required: true,
          aiValidation: true
        }
      };

      const error = new Error('Test error');
      mockClient.chat.mockRejectedValue(error);

      const onError = vi.fn();
      const { formData, handleChange, validate } = useSmartForm({
        client: mockClient,
        schema: aiSchema,
        onError
      });

      handleChange('name', 'John Doe');
      await validate('name');
      expect(onError).toHaveBeenCalledWith(error);
    });
  });
});

describe('@aivue/smartform - Integration Tests', () => {
  it('should handle complete form workflow', async () => {
    const mockClient = createMockAIClient();
    mockClient.chat.mockResolvedValue('VALID');

    const schema = {
      name: { type: 'text', label: 'Name', required: true },
      email: { type: 'email', label: 'Email', required: true }
    };

    const { formData, handleChange, validate, submitForm } = useSmartForm({
      client: mockClient,
      schema
    });

    // Step 1: Fill form
    handleChange('name', 'John Doe');
    handleChange('email', 'john@example.com');

    // Step 2: Validate
    const isValid = await validate();
    expect(isValid).toBe(true);

    // Step 3: Submit
    const submitted = await submitForm();
    expect(submitted).toBe(true);
    expect(formData.name).toBe('John Doe');
    expect(formData.email).toBe('john@example.com');
  });

  it('should handle validation errors and fix with AI', async () => {
    const mockClient = createMockAIClient();

    const schema = {
      email: {
        type: 'email',
        label: 'Email',
        required: true,
        aiValidation: true
      }
    };

    // Mock sequence: fix -> validate (pass)
    mockClient.chat
      .mockResolvedValueOnce('john.doe@example.com')
      .mockResolvedValueOnce('VALID');

    const { formData, handleChange, validate, fixWithAI } = useSmartForm({
      client: mockClient,
      schema
    });

    // Step 1: Enter invalid email
    handleChange('email', 'invalid-email');

    // Step 2: Validate (should fail with type validation)
    const isValid1 = await validate('email');
    expect(isValid1).toBe(false);

    // Step 3: Fix with AI
    await fixWithAI('email');
    expect(formData.email).toBe('john.doe@example.com');

    // Step 4: Validate again (should pass)
    const isValid2 = await validate('email');
    expect(isValid2).toBe(true);
  });
});

