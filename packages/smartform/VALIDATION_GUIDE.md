# SmartForm Validation Guide

## 🎯 Overview

The SmartForm package now features a **robust, multi-layered validation system** that combines traditional form validation with AI-powered semantic validation.

---

## 🔄 Validation Flow

The validation system follows a **strict order** to ensure efficiency and accuracy:

```
1. Required Field Check
   ↓
2. Type-Specific Validation
   ↓
3. Length Validation (min/max)
   ↓
4. Value Range Validation (min/max)
   ↓
5. Pattern/Regex Validation
   ↓
6. Custom Validation Function
   ↓
7. AI Semantic Validation
```

**Key Principle:** Basic validations run first to catch simple errors quickly, before expensive AI calls.

---

## ✅ Validation Features

### 1. **Required Field Validation**

Checks if required fields have values, with special handling for different types:

```javascript
{
  name: {
    type: 'text',
    required: true,
    requiredMessage: 'Name is required' // Custom message
  }
}
```

**Handles:**
- `undefined` and `null` values
- Empty strings (`''`)
- Whitespace-only strings (`'   '`)
- Empty arrays (for multi-select)
- Unchecked checkboxes

---

### 2. **Type-Specific Validation**

Automatic validation based on field type:

#### **Email Validation**
```javascript
{
  email: {
    type: 'email',
    typeMessage: 'Please enter a valid email' // Custom message
  }
}
```
- Uses RFC 5322 compliant regex
- Validates format: `user@domain.com`

#### **Number Validation**
```javascript
{
  age: {
    type: 'number',
    min: 18,
    max: 120,
    minMessage: 'Must be at least 18',
    maxMessage: 'Must not exceed 120'
  }
}
```
- Checks if value is numeric
- Validates min/max range

#### **URL Validation**
```javascript
{
  website: {
    type: 'url',
    typeMessage: 'Please enter a valid URL'
  }
}
```
- Uses native URL constructor
- Requires protocol (http://, https://)

#### **Phone Validation**
```javascript
{
  phone: {
    type: 'tel', // or 'phone'
    typeMessage: 'Please enter a valid phone number'
  }
}
```
- Validates 10+ digits
- Allows spaces, dashes, parentheses

#### **Date Validation**
```javascript
{
  birthdate: {
    type: 'date',
    typeMessage: 'Please enter a valid date'
  }
}
```
- Validates date format
- Checks if date is valid

---

### 3. **Length Validation**

For text fields:

```javascript
{
  username: {
    type: 'text',
    minLength: 3,
    maxLength: 20,
    minLengthMessage: 'Username must be at least 3 characters',
    maxLengthMessage: 'Username must not exceed 20 characters'
  }
}
```

---

### 4. **Pattern Validation**

Custom regex patterns:

```javascript
{
  zipCode: {
    type: 'text',
    pattern: /^\d{5}(-\d{4})?$/,
    patternMessage: 'Please enter a valid ZIP code (12345 or 12345-6789)'
  }
}
```

---

### 5. **Custom Validation Function**

For complex validation logic:

```javascript
{
  password: {
    type: 'password',
    validate: async (value, formData) => {
      // Return true if valid
      if (value.length < 8) {
        return 'Password must be at least 8 characters';
      }
      
      if (!/[A-Z]/.test(value)) {
        return 'Password must contain an uppercase letter';
      }
      
      if (!/[0-9]/.test(value)) {
        return 'Password must contain a number';
      }
      
      return true; // Valid
    }
  },
  
  confirmPassword: {
    type: 'password',
    validate: (value, formData) => {
      if (value !== formData.password) {
        return 'Passwords do not match';
      }
      return true;
    }
  }
}
```

**Function Signature:**
```typescript
validate: (value: any, formData: Record<string, any>) => boolean | string | Promise<boolean | string>
```

**Return Values:**
- `true` - Field is valid
- `string` - Field is invalid, string is the error message
- `false` - Field is invalid, uses default error message

---

### 6. **AI Semantic Validation**

Intelligent, context-aware validation:

```javascript
{
  companyName: {
    type: 'text',
    aiValidation: true,
    description: 'Official company name',
    validationRules: [
      'Must be a real company name',
      'Should not contain offensive language',
      'Should be properly capitalized'
    ]
  }
}
```

**AI Validation Features:**
- Semantic correctness
- Context awareness
- Professional standards
- Security checks (SQL injection, XSS)
- Typo detection
- Format appropriateness

**AI Prompt Includes:**
- Field type and description
- All validation constraints
- Custom validation rules
- Security considerations

---

## 🛠️ Complete Schema Example

```javascript
const formSchema = {
  // Text with length constraints
  username: {
    type: 'text',
    label: 'Username',
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
    patternMessage: 'Username can only contain letters, numbers, and underscores'
  },
  
  // Email with AI validation
  email: {
    type: 'email',
    label: 'Email Address',
    required: true,
    aiValidation: true,
    selfHeal: true,
    description: 'Professional email address'
  },
  
  // Number with range
  age: {
    type: 'number',
    label: 'Age',
    required: true,
    min: 18,
    max: 120
  },
  
  // Custom validation
  password: {
    type: 'password',
    label: 'Password',
    required: true,
    minLength: 8,
    validate: (value) => {
      if (!/[A-Z]/.test(value)) return 'Must contain uppercase';
      if (!/[a-z]/.test(value)) return 'Must contain lowercase';
      if (!/[0-9]/.test(value)) return 'Must contain number';
      if (!/[!@#$%^&*]/.test(value)) return 'Must contain special character';
      return true;
    }
  },
  
  // AI validation with rules
  bio: {
    type: 'textarea',
    label: 'Bio',
    maxLength: 500,
    aiValidation: true,
    description: 'Professional biography',
    validationRules: [
      'Should be professional and appropriate',
      'Should not contain personal contact information',
      'Should be well-written and grammatically correct'
    ]
  }
};
```

---

## 🎨 Custom Error Messages

Every validation type supports custom error messages:

```javascript
{
  email: {
    type: 'email',
    required: true,
    requiredMessage: 'We need your email to contact you',
    typeMessage: 'That doesn\'t look like a valid email address'
  },
  
  age: {
    type: 'number',
    min: 18,
    max: 120,
    minMessage: 'You must be at least 18 years old',
    maxMessage: 'Please enter a valid age'
  },
  
  username: {
    type: 'text',
    minLength: 3,
    maxLength: 20,
    minLengthMessage: 'Username is too short (minimum 3 characters)',
    maxLengthMessage: 'Username is too long (maximum 20 characters)',
    pattern: /^[a-zA-Z0-9_]+$/,
    patternMessage: 'Username can only contain letters, numbers, and underscores'
  }
}
```

---

## 🚀 Best Practices

### 1. **Validation Order Matters**
- Put cheap validations first (required, type, length)
- Put expensive validations last (AI, async custom functions)

### 2. **Use Type-Specific Fields**
```javascript
// ✅ Good - automatic validation
{ type: 'email' }

// ❌ Bad - requires manual pattern
{ type: 'text', pattern: /email-regex/ }
```

### 3. **Combine Validations**
```javascript
{
  email: {
    type: 'email',        // Type validation
    required: true,       // Required validation
    aiValidation: true,   // AI semantic validation
    selfHeal: true        // Auto-fix errors
  }
}
```

### 4. **Provide Clear Error Messages**
```javascript
{
  age: {
    type: 'number',
    min: 18,
    minMessage: 'You must be 18 or older to register'  // Clear and specific
  }
}
```

### 5. **Use AI for Semantic Validation**
```javascript
// Use AI for things that need context
{
  companyName: {
    aiValidation: true,
    description: 'Official registered company name'
  }
}

// Don't use AI for simple format checks
{
  zipCode: {
    pattern: /^\d{5}$/  // Simple regex is faster
  }
}
```

---

**Last Updated:** 2025-12-16  
**Package Version:** 1.3.5

