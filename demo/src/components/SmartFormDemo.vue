<template>
  <div class="smartform-demo">
    <!-- Header Section -->
    <div class="demo-header">
      <h2>SmartForm Demo - All Field Types</h2>
      <p class="demo-description">
        Explore all available field types with AI-powered validation.
        The advanced form demonstrates comprehensive validation including type checking,
        length constraints, pattern matching, and AI semantic validation.
      </p>
    </div>

    <!-- Basic Form Section -->
    <div class="form-section">
      <div class="section-header">
        <h3>📝 Basic Contact Form</h3>
        <span class="badge badge-basic">Standard Validation</span>
      </div>
      <p class="section-description">Simple form with basic validation rules</p>
      <AiSmartForm
        :client="aiClient"
        :schema="basicSchema"
        @submit="handleSubmit"
      />
    </div>

    <!-- Advanced Form Section -->
    <div class="form-section advanced">
      <div class="section-header">
        <h3>🚀 Comprehensive Form - All Field Types</h3>
        <span class="badge badge-ai">AI-Powered Validation</span>
      </div>
      <p class="section-description">
        Complete demonstration of all available field types with AI validation:
      </p>
      <div class="field-types-grid">
        <div class="field-type-badge">✏️ Text Input</div>
        <div class="field-type-badge">📧 Email</div>
        <div class="field-type-badge">🔒 Password</div>
        <div class="field-type-badge">🔢 Number</div>
        <div class="field-type-badge">📅 Date</div>
        <div class="field-type-badge">🔗 URL</div>
        <div class="field-type-badge">📞 Phone</div>
        <div class="field-type-badge">📝 Textarea</div>
        <div class="field-type-badge">📋 Select (Single)</div>
        <div class="field-type-badge">📋 Select (Multiple)</div>
        <div class="field-type-badge">🔘 Radio</div>
        <div class="field-type-badge">☑️ Checkbox</div>
      </div>
      <AiSmartForm
        :client="aiClient"
        :schema="advancedSchema"
        validation="ai"
        theme="light"
        @submit="handleAdvancedSubmit"
      />
    </div>

    <!-- Form Results Section -->
    <div v-if="submittedData" class="results">
      <h3>✅ Form Submitted Successfully</h3>

      <!-- AI Analysis Section - Displayed prominently -->
      <div v-if="submittedData._aiAnalysis" class="ai-analysis">
        <h3>🤖 AI Analysis of Your Submission:</h3>
        <div class="analysis-content" v-html="formatAnalysis(submittedData._aiAnalysis)"></div>
      </div>

      <!-- Error Message Section -->
      <div v-if="submittedData._error" class="error-message">
        <h3>❌ Error:</h3>
        <div class="error-content">{{ submittedData._error }}</div>
      </div>

      <!-- Submitted Data Section (Collapsed) -->
      <details class="submitted-data-details">
        <summary>📊 View Submitted Data (JSON)</summary>
        <pre>{{ JSON.stringify(submittedData._aiAnalysis ? {...submittedData, _aiAnalysis: '(See analysis above)'} : submittedData, null, 2) }}</pre>
      </details>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// Import our local component
import AiSmartForm from './AiSmartForm.vue';

export default defineComponent({
  name: 'SmartFormDemo',
  components: {
    AiSmartForm,
  },
  props: {
    aiClient: {
      type: Object,
      required: true
    }
  },
  setup() {
    const submittedData = ref<any>(null);

    // Basic form schema - Simple contact form
    const basicSchema = {
      title: 'Contact Information',
      description: 'Basic form with standard validation',
      fields: [
        {
          name: 'name',
          label: 'Full Name',
          type: 'text',
          required: true,
          placeholder: 'John Doe',
          validation: {
            minLength: 3,
            message: 'Name must be at least 3 characters'
          }
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          required: true,
          placeholder: 'john@example.com'
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          placeholder: 'Your message here...',
          rows: 4
        }
      ]
    };

    // Advanced form schema - Comprehensive with AI validation
    const advancedSchema = {
      title: 'Comprehensive Form with AI Validation',
      description: 'Demonstrates all field types with AI-powered validation',
      fields: [
        // Text Inputs
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true,
          placeholder: 'John',
          validation: {
            minLength: 2,
            maxLength: 50,
            message: 'First name must be between 2-50 characters'
          }
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          required: true,
          placeholder: 'Doe',
          validation: {
            minLength: 2,
            maxLength: 50,
            message: 'Last name must be between 2-50 characters'
          }
        },
        {
          name: 'username',
          label: 'Username',
          type: 'text',
          required: true,
          placeholder: 'johndoe123',
          validation: {
            pattern: '^[a-zA-Z0-9_]{3,20}$',
            message: 'Username must be 3-20 characters (letters, numbers, underscore only)'
          }
        },

        // Email
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          required: true,
          placeholder: 'john.doe@company.com',
          validation: {
            pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
            message: 'Please enter a valid professional email address'
          }
        },

        // Password
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          required: true,
          placeholder: 'Enter a strong password',
          validation: {
            minLength: 8,
            message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
          }
        },
        {
          name: 'confirmPassword',
          label: 'Confirm Password',
          type: 'password',
          required: true,
          placeholder: 'Re-enter your password'
        },

        // Number
        {
          name: 'age',
          label: 'Age',
          type: 'number',
          required: true,
          min: 18,
          max: 120,
          placeholder: '25',
          validation: {
            message: 'Age must be between 18 and 120'
          }
        },
        {
          name: 'salary',
          label: 'Expected Salary (USD)',
          type: 'number',
          min: 0,
          step: 1000,
          placeholder: '50000'
        },

        // Date
        {
          name: 'dob',
          label: 'Date of Birth',
          type: 'date',
          required: true
        },
        {
          name: 'startDate',
          label: 'Available Start Date',
          type: 'date'
        },

        // URL
        {
          name: 'website',
          label: 'Personal Website',
          type: 'url',
          placeholder: 'https://www.example.com'
        },
        {
          name: 'linkedin',
          label: 'LinkedIn Profile',
          type: 'url',
          placeholder: 'https://linkedin.com/in/johndoe'
        },

        // Tel
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          required: true,
          placeholder: '+1 (555) 123-4567',
          validation: {
            pattern: '^[\\d\\s\\-\\+\\(\\)]{10,}$',
            message: 'Please enter a valid phone number'
          }
        },

        // Textarea
        {
          name: 'bio',
          label: 'Professional Bio',
          type: 'textarea',
          placeholder: 'Tell us about yourself...',
          rows: 5,
          validation: {
            maxLength: 500,
            message: 'Bio must not exceed 500 characters'
          }
        },
        {
          name: 'experience',
          label: 'Work Experience',
          type: 'textarea',
          placeholder: 'Describe your work experience...',
          rows: 4
        },

        // Select (Single)
        {
          name: 'country',
          label: 'Country',
          type: 'select',
          required: true,
          placeholder: 'Select your country',
          options: [
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' },
            { value: 'de', label: 'Germany' },
            { value: 'fr', label: 'France' },
            { value: 'in', label: 'India' },
            { value: 'other', label: 'Other' }
          ]
        },
        {
          name: 'experience_level',
          label: 'Experience Level',
          type: 'select',
          required: true,
          placeholder: 'Select your experience level',
          options: [
            { value: 'entry', label: 'Entry Level (0-2 years)' },
            { value: 'mid', label: 'Mid Level (3-5 years)' },
            { value: 'senior', label: 'Senior (6-10 years)' },
            { value: 'expert', label: 'Expert (10+ years)' }
          ]
        },

        // Select (Multiple)
        {
          name: 'skills',
          label: 'Technical Skills',
          type: 'select',
          multiple: true,
          placeholder: 'Select your skills',
          options: [
            { value: 'javascript', label: 'JavaScript' },
            { value: 'typescript', label: 'TypeScript' },
            { value: 'python', label: 'Python' },
            { value: 'java', label: 'Java' },
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue.js' },
            { value: 'angular', label: 'Angular' },
            { value: 'nodejs', label: 'Node.js' },
            { value: 'docker', label: 'Docker' },
            { value: 'kubernetes', label: 'Kubernetes' }
          ]
        },
        {
          name: 'interests',
          label: 'Interests',
          type: 'select',
          multiple: true,
          placeholder: 'Select your interests',
          options: [
            { value: 'tech', label: 'Technology' },
            { value: 'music', label: 'Music' },
            { value: 'sports', label: 'Sports' },
            { value: 'reading', label: 'Reading' },
            { value: 'travel', label: 'Travel' },
            { value: 'gaming', label: 'Gaming' },
            { value: 'cooking', label: 'Cooking' },
            { value: 'photography', label: 'Photography' }
          ]
        },

        // Radio
        {
          name: 'employment_type',
          label: 'Preferred Employment Type',
          type: 'radio',
          required: true,
          options: [
            { value: 'fulltime', label: 'Full-time' },
            { value: 'parttime', label: 'Part-time' },
            { value: 'contract', label: 'Contract' },
            { value: 'freelance', label: 'Freelance' }
          ]
        },
        {
          name: 'remote_preference',
          label: 'Remote Work Preference',
          type: 'radio',
          required: true,
          options: [
            { value: 'remote', label: 'Fully Remote' },
            { value: 'hybrid', label: 'Hybrid' },
            { value: 'onsite', label: 'On-site' }
          ]
        },

        // Checkbox (Single)
        {
          name: 'subscribe',
          label: 'Subscribe to newsletter',
          type: 'checkbox'
        },
        {
          name: 'terms',
          label: 'I agree to the terms and conditions',
          type: 'checkbox',
          required: true
        },
        {
          name: 'privacy',
          label: 'I have read and accept the privacy policy',
          type: 'checkbox',
          required: true
        }
      ]
    };

    const handleSubmit = (data: any) => {
      submittedData.value = data;
      console.log('Basic form submitted:', data);
    };

    const handleAdvancedSubmit = (data: any) => {
      submittedData.value = data;
      console.log('Advanced form submitted with AI analysis:', data);

      // Log the AI analysis if available
      if (data._aiAnalysis) {
        console.log('AI Analysis:', data._aiAnalysis);
      }
    };

    // Format the AI analysis to make it more readable
    const formatAnalysis = (analysis: string): string => {
      if (!analysis) return '';

      // Replace numbered points with styled elements
      let formatted = analysis.replace(/(\d+\.\s*"[^"]+"):\s*([^\n]+)/g,
        '<div class="analysis-point"><span class="field-name">$1</span> <span class="field-analysis">$2</span></div>');

      // Also handle the format without quotes
      formatted = formatted.replace(/(\d+\.\s*)([^:]+):\s*([^\n]+)/g,
        '<div class="analysis-point"><span class="field-name">$1$2:</span> <span class="field-analysis">$3</span></div>');

      // Replace newlines with <br> tags
      formatted = formatted.replace(/\n\n/g, '<br><br>');
      formatted = formatted.replace(/\n/g, '<br>');

      // Highlight key phrases
      formatted = formatted.replace(/(improvement|issue|concern|good|excellent|missing|invalid|suggestion|valid|complete|appropriate|well-formatted)/gi,
        '<span class="highlight">$1</span>');

      // Add color coding for positive/negative feedback
      formatted = formatted.replace(/(good|excellent|valid|complete|appropriate|well-formatted)/gi,
        '<span class="highlight positive">$1</span>');

      formatted = formatted.replace(/(issue|concern|missing|invalid)/gi,
        '<span class="highlight negative">$1</span>');

      return formatted;
    };

    return {
      basicSchema,
      advancedSchema,
      submittedData,
      handleSubmit,
      handleAdvancedSubmit,
      formatAnalysis
    };
  }
});
</script>

<style scoped>
.smartform-demo {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header Section */
.demo-header {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.demo-header h2 {
  margin: 0 0 10px 0;
  font-size: 2rem;
  font-weight: 700;
}

.demo-description {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.95;
  line-height: 1.6;
}

/* Form Sections */
.form-section {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
}

.form-section.advanced {
  border: 2px solid #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.section-header h3 {
  margin: 0;
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 600;
}

.section-description {
  color: #64748b;
  margin: 0 0 20px 0;
  font-size: 1rem;
  line-height: 1.5;
}

/* Badges */
.badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-basic {
  background-color: #e0e7ff;
  color: #4338ca;
}

.badge-ai {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}

/* Field Types Grid */
.field-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin-bottom: 25px;
}

.field-type-badge {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid #bae6fd;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: #0369a1;
}

/* Results Section */
.results {
  margin-top: 20px;
  padding: 25px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border-radius: 12px;
  border: 2px solid #86efac;
  box-shadow: 0 4px 6px rgba(34, 197, 94, 0.1);
}

.results h3 {
  margin: 0 0 20px 0;
  color: #166534;
  font-size: 1.5rem;
}

pre {
  white-space: pre-wrap;
  font-family: 'Monaco', 'Menlo', monospace;
  color: #334155;
  padding: 15px;
  background-color: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow-x: auto;
}

/* AI Analysis */
.ai-analysis {
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-radius: 10px;
  border-left: 5px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
}

.ai-analysis h3 {
  margin: 0 0 15px 0;
  color: #1e40af;
  font-size: 1.3rem;
}

.analysis-content {
  white-space: pre-wrap;
  padding: 18px;
  background-color: white;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.7;
  border: 1px solid #bfdbfe;
}

.analysis-point {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
}

.analysis-point:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.field-name {
  font-weight: 700;
  color: #1e40af;
  display: block;
  margin-bottom: 6px;
  font-size: 1.05rem;
}

.field-analysis {
  display: block;
  padding-left: 15px;
  border-left: 3px solid #93c5fd;
  color: #475569;
}

/* Highlights */
.highlight {
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}

.highlight.positive {
  color: #15803d;
  background-color: rgba(34, 197, 94, 0.15);
}

.highlight.negative {
  color: #dc2626;
  background-color: rgba(239, 68, 68, 0.15);
}

.highlight:not(.positive):not(.negative) {
  color: #2563eb;
  background-color: rgba(59, 130, 246, 0.15);
}

/* Submitted Data Details */
.submitted-data-details {
  margin-top: 25px;
}

.submitted-data-details summary {
  cursor: pointer;
  padding: 12px 16px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border-radius: 8px;
  font-weight: 600;
  color: #334155;
  border: 1px solid #cbd5e1;
  transition: all 0.2s ease;
}

.submitted-data-details summary:hover {
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Error Message */
.error-message {
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  border-radius: 10px;
  border-left: 5px solid #ef4444;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.1);
}

.error-message h3 {
  margin: 0 0 15px 0;
  color: #991b1b;
  font-size: 1.3rem;
}

.error-content {
  white-space: pre-wrap;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  color: #7f1d1d;
  border: 1px solid #fecaca;
}

/* Responsive Design */
@media (max-width: 768px) {
  .smartform-demo {
    padding: 10px;
    gap: 25px;
  }

  .demo-header {
    padding: 20px;
  }

  .demo-header h2 {
    font-size: 1.5rem;
  }

  .form-section {
    padding: 20px;
  }

  .field-types-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 8px;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>