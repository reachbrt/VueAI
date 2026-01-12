# @aivue/smart-datatable - Detailed Documentation

> **The World's First AI-Native DataTable** - A Vue.js component that doesn't just display data, it understands it.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [What Makes It Different](#what-makes-it-different)
3. [Core Concepts](#core-concepts)
4. [Architecture](#architecture)
5. [AI Features Deep Dive](#ai-features-deep-dive)
6. [Component API](#component-api)
7. [Composables API](#composables-api)
8. [Real-World Use Cases](#real-world-use-cases)
9. [Implementation Guide](#implementation-guide)
10. [Best Practices](#best-practices)

---

## 📦 Overview

### What is @aivue/smart-datatable?

**@aivue/smart-datatable** is an AI-powered data table component for Vue.js that goes beyond traditional data grids. Instead of just displaying rows and columns, it integrates with Large Language Models (LLMs) to provide intelligent data analysis, natural language querying, and automated insights.

### Key Statistics

- **Package Size**: ~45KB (minified + gzipped)
- **Dependencies**: Vue 3.x, @aivue/core
- **AI Providers**: OpenAI, Claude, Gemini, HuggingFace, Ollama, DeepSeek
- **License**: MIT

### Installation

```bash
npm install @aivue/smart-datatable @aivue/core
```

---

## 🎯 What Makes It Different

### Traditional DataTables vs Smart DataTable

| Feature | Traditional DataTable | @aivue/smart-datatable |
|---------|----------------------|------------------------|
| **Search** | Keyword matching | Natural language queries ("show orders from India last 30 days where total > 500") |
| **Insights** | Manual analysis | AI-generated insights, trends, outliers, recommendations |
| **Data Cleaning** | Manual editing | AI-powered transformations (standardize, enrich, categorize) |
| **Row Actions** | Static buttons | AI agents (explain, predict, classify) |
| **Filtering** | UI-based filters | Conversational queries |
| **Understanding** | Displays data | Understands data context and relationships |

### The AI-Native Difference

**Traditional Approach:**
```
User → Filter UI → SQL/Code → Results
```

**AI-Native Approach:**
```
User → Natural Language → LLM → Structured Query → Results
User → "Explain this" → LLM → Contextual Insights
```

---

## 🧠 Core Concepts

### 1. AI-Native Architecture

The component is built with AI as a first-class citizen, not an afterthought:

- **Schema-Aware**: Automatically understands your data structure
- **Context-Preserving**: Maintains conversation history for follow-up queries
- **Type-Intelligent**: Recognizes data types (numbers, dates, strings) for smart operations
- **Sample-Based**: Uses data samples to provide context to LLMs

### 2. Three Integration Levels

#### Level 1: Zero-Config (Simplest)
```vue
<SmartDataTable :data="orders" :ai-client="aiClient" />
```
- Auto-generates columns from data
- Enables basic AI search
- Perfect for prototyping

#### Level 2: Config-Driven (Recommended)
```vue
<SmartDataTable
  :data="orders"
  :columns="columns"
  :ai-client="aiClient"
  :ai-search="true"
  :ai-insights="true"
  :row-agents="agents"
/>
```
- Full control over columns and features
- Custom AI agents and transformations
- Production-ready

#### Level 3: Composable-Based (Advanced)
```vue
<script setup>
const { queryToFilter, applyFilter } = useAiTableQuery({ aiClient, schema });
</script>
```
- Direct access to AI composables
- Custom UI and logic
- Maximum flexibility

### 3. Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     User Interaction                         │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              SmartDataTable Component                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  AI Search   │  │  AI Insights │  │  Row Agents  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    AI Composables Layer                      │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ useAiTableQuery  │  │ useAiInsights    │                │
│  │ useAiRowAgents   │  │ useAiTransform   │                │
│  └──────────────────┘  └──────────────────┘                │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      @aivue/core                             │
│                     AIClient                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              LLM Providers (OpenAI, Claude, etc.)           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Architecture

### Component Structure

```
@aivue/smart-datatable/
├── src/
│   ├── components/
│   │   ├── SmartDataTable.vue          # Main table component (1,743 lines)
│   │   └── SmartDatatableChat.vue      # Chat interface for table queries
│   │
│   ├── composables/
│   │   ├── useSmartDataTable.ts        # Core table logic (search, sort, filter)
│   │   ├── useAiTableQuery.ts          # Natural language → structured queries
│   │   ├── useAiInsights.ts            # AI-powered data insights
│   │   ├── useAiRowAgents.ts           # AI operations on rows
│   │   ├── useAiTransformations.ts     # AI data cleaning & enrichment
│   │   └── useOpenApiIntegration.ts    # OpenAPI schema integration
│   │
│   ├── types/
│   │   └── ai.ts                       # TypeScript interfaces
│   │
│   ├── utils/
│   │   └── export.ts                   # Data export utilities (CSV, JSON, Excel)
│   │
│   └── index.ts                        # Package entry point
```

### State Management

The component uses Vue 3's Composition API with reactive state:

```typescript
// Core State
const data = ref<any[]>([]);              // Original data
const filteredData = ref<any[]>([]);      // After search/filter
const sortedData = ref<any[]>([]);        // After sorting
const selectedRows = ref<any[]>([]);      // Selected rows

// AI State
const aiSearchLoading = ref(false);       // AI search in progress
const aiFilterActive = ref(false);        // AI filter applied
const currentAiFilter = ref<FilterDefinition | null>(null);
const aiInsights = ref<AIInsight[]>([]);  // Generated insights

// UI State
const showAiInsightsPanel = ref(false);   // Insights panel visibility
const showAiChatPanel = ref(false);       // Chat panel visibility
const currentPage = ref(1);               // Pagination
const pageSize = ref(10);                 // Items per page
```

---

## 🤖 AI Features Deep Dive

### Feature 1: Natural Language Querying

**What It Does:**
Converts natural language queries into structured filters that can be applied to your data.

**How It Works:**

1. **User Input**: User types a natural language query
   ```
   "show orders from India last 30 days where total > 500"
   ```

2. **Schema Context**: Component sends table schema to LLM
   ```json
   {
     "columns": [
       { "key": "country", "type": "string", "examples": ["USA", "India", "UK"] },
       { "key": "total", "type": "number", "examples": [100, 500, 1000] },
       { "key": "date", "type": "date", "examples": ["2024-01-01", "2024-02-15"] }
     ],
     "rowCount": 1500,
     "sampleRows": [...]
   }
   ```

3. **LLM Processing**: AI converts query to structured filter
   ```json
   {
     "filter": {
       "conditions": [
         { "column": "country", "operator": "equals", "value": "India" },
         { "column": "date", "operator": "gte", "value": "2024-11-14" },
         { "column": "total", "operator": "gt", "value": 500 }
       ],
       "operator": "AND"
     },
     "explanation": "Filtering orders from India in the last 30 days with total > 500"
   }
   ```

4. **Filter Application**: Component applies filter to data
   ```typescript
   const filtered = data.filter(row => {
     return row.country === "India" &&
            new Date(row.date) >= new Date("2024-11-14") &&
            row.total > 500;
   });
   ```

**Supported Operators:**
- `equals`: Exact match
- `contains`: Substring match
- `gt`, `lt`, `gte`, `lte`: Numeric comparisons
- `in`: Value in array
- `between`: Value in range
- `regex`: Regular expression match

**Example Queries:**
```
✅ "show products where price > 100"
✅ "find customers in USA or Canada"
✅ "orders from last week sorted by total descending"
✅ "items with low stock (< 10 units)"
✅ "active users who signed up this month"
```

**Implementation:**

```vue
<template>
  <SmartDataTable
    :data="orders"
    :ai-client="aiClient"
    :ai-search="true"
    @ai-query="handleAiQuery"
  />
</template>

<script setup>
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-4'
});

function handleAiQuery(result) {
  console.log('Query:', result.query);
  console.log('Filter:', result.filter);
  console.log('Explanation:', result.explanation);
}
</script>
```

**Composable Usage:**

```typescript
import { useAiTableQuery } from '@aivue/smart-datatable';

const schema = ref({
  columns: [
    { key: 'name', type: 'string', label: 'Name' },
    { key: 'price', type: 'number', label: 'Price' }
  ],
  rowCount: 100,
  sampleRows: data.value.slice(0, 5)
});

const { queryToFilter, applyFilter, loading } = useAiTableQuery({
  aiClient,
  schema,
  onQueryResult: (result) => {
    console.log('AI Query Result:', result);
  }
});

// Convert query to filter
const result = await queryToFilter("show products where price > 100");

// Apply filter to data
const filtered = applyFilter(data.value, result.filter);
```

---

### Feature 2: AI Insights & Summaries

**What It Does:**
Automatically analyzes your data and generates actionable insights about trends, patterns, outliers, and recommendations.

**How It Works:**

1. **Data Sampling**: Component sends sample data to LLM
   ```typescript
   const sampleData = data.value.slice(0, 5);
   const schema = {
     columns: [...],
     rowCount: data.value.length,
     sampleRows: sampleData
   };
   ```

2. **AI Analysis**: LLM analyzes data and returns insights
   ```json
   [
     {
       "category": "trends",
       "title": "Sales Increasing in Electronics",
       "description": "Electronics category shows 35% growth over last month",
       "confidence": 0.85,
       "data": { "growth": 35, "category": "Electronics" }
     },
     {
       "category": "outliers",
       "title": "Unusual High-Value Order",
       "description": "Order #1234 has value $15,000, 10x higher than average",
       "confidence": 0.92,
       "data": { "orderId": 1234, "value": 15000, "avgValue": 1500 }
     },
     {
       "category": "recommendations",
       "title": "Restock Low Inventory Items",
       "description": "5 products have stock below 10 units",
       "confidence": 0.78,
       "data": { "lowStockCount": 5 }
     }
   ]
   ```

3. **Display**: Component shows insights in a panel

**Insight Categories:**
- **Trends**: Patterns over time or across categories
- **Outliers**: Unusual or anomalous data points
- **Patterns**: Recurring behaviors or correlations
- **Recommendations**: Actionable suggestions
- **Summary**: High-level overview
- **Predictions**: Future forecasts (if enabled)

**Example Implementation:**

```vue
<template>
  <SmartDataTable
    :data="salesData"
    :ai-client="aiClient"
    :ai-insights="true"
    @ai-insight="handleInsight"
  />
</template>

<script setup>
function handleInsight(insights) {
  insights.forEach(insight => {
    console.log(`[${insight.category}] ${insight.title}`);
    console.log(`  ${insight.description}`);
    console.log(`  Confidence: ${(insight.confidence * 100).toFixed(0)}%`);
  });
}
</script>
```

**Composable Usage:**

```typescript
import { useAiInsights } from '@aivue/smart-datatable';

const {
  insights,
  loading,
  generateInsights,
  getSummary
} = useAiInsights({
  aiClient,
  schema,
  data,
  config: {
    categories: ['trends', 'outliers', 'recommendations']
  }
});

// Generate insights
await generateInsights();

// Get quick summary
const summary = await getSummary();
console.log(summary);
// "Your sales data shows 150 orders totaling $45,000.
//  Electronics is the top category with 40% of revenue."
```

---

### Feature 3: AI Row Agents

**What It Does:**
Execute AI operations on individual rows or selections. Think of it as "AI actions" for your data.

**How It Works:**

1. **Agent Definition**: Define what the agent should do
   ```typescript
   const agents = [
     {
       id: 'explain',
       label: 'Explain Order',
       icon: '📝',
       promptTemplate: 'Explain this order: {{customer}} ordered {{product}} for ${{total}}, status: {{status}}',
       scope: 'single' // or 'multi'
     },
     {
       id: 'predict-delivery',
       label: 'Predict Delivery',
       icon: '📅',
       promptTemplate: 'Predict delivery date for order {{id}} to {{country}}. Current status: {{status}}'
     }
   ];
   ```

2. **Template Interpolation**: Replace placeholders with row data
   ```
   Template: "Explain this order: {{customer}} ordered {{product}} for ${{total}}"
   Row: { customer: "Acme Corp", product: "Laptop", total: 1299 }
   Result: "Explain this order: Acme Corp ordered Laptop for $1299"
   ```

3. **AI Execution**: Send to LLM and get response
   ```
   Response: "This is a high-value order from Acme Corp, a corporate customer.
             The laptop purchase suggests a business equipment upgrade.
             Recommend priority shipping and follow-up for bulk discounts."
   ```

4. **Display**: Show result to user

**Common Agent Types:**

**Explain Agent:**
```typescript
{
  id: 'explain',
  label: 'Explain Record',
  promptTemplate: 'Explain this {{entityType}}: {{description}}',
  handler: (row, result) => {
    showModal({ title: 'Explanation', content: result });
  }
}
```

**Predict Agent:**
```typescript
{
  id: 'predict',
  label: 'Predict Outcome',
  promptTemplate: 'Based on {{historicalData}}, predict {{targetMetric}}'
}
```

**Classify Agent:**
```typescript
{
  id: 'classify',
  label: 'Categorize',
  promptTemplate: 'Classify this item: {{description}}. Categories: {{categories}}'
}
```

**Generate Agent:**
```typescript
{
  id: 'generate-email',
  label: 'Draft Email',
  promptTemplate: 'Write a professional email to {{customer}} about {{subject}}'
}
```

**Example Implementation:**

```vue
<template>
  <SmartDataTable
    :data="orders"
    :row-agents="rowAgents"
    :ai-client="aiClient"
  />
</template>

<script setup>
const rowAgents = [
  {
    id: 'explain',
    label: 'Explain Order',
    icon: '📝',
    promptTemplate: 'Explain this order in simple terms: Customer {{customer}}, Product {{product}}, Total ${{total}}, Status {{status}}',
    handler: (row, result) => {
      alert(`Explanation:\n${result}`);
    }
  },
  {
    id: 'predict-delivery',
    label: 'Predict Delivery',
    icon: '📅',
    promptTemplate: 'Predict delivery date for order {{id}} shipping to {{country}}. Current status: {{status}}. Order date: {{orderDate}}'
  },
  {
    id: 'draft-email',
    label: 'Draft Follow-up Email',
    icon: '✉️',
    promptTemplate: 'Write a professional follow-up email to {{customer}} about their order {{id}} for {{product}}'
  }
];
</script>
```

**Composable Usage:**

```typescript
import { useAiRowAgents } from '@aivue/smart-datatable';

const {
  executeAgent,
  executeAgentBatch,
  results,
  loading
} = useAiRowAgents({
  aiClient,
  schema,
  agents: rowAgents
});

// Execute on single row
const result = await executeAgent(agents[0], selectedRow);
console.log(result.result);

// Execute on multiple rows
const batchResults = await executeAgentBatch(agents[0], selectedRows);
```

---

### Feature 4: AI Data Transformations

**What It Does:**
Intelligently clean, standardize, and enrich your data using AI.

**How It Works:**

1. **Transformation Definition**: Define what to transform
   ```typescript
   const transformations = [
     {
       id: 'standardize-countries',
       label: 'Standardize Country Names',
       scope: 'column',
       targetColumn: 'country',
       promptTemplate: 'Standardize these country names to ISO 3166-1 alpha-2 codes: {{values}}',
       preview: true
     }
   ];
   ```

2. **AI Processing**: LLM returns transformation mapping
   ```json
   {
     "USA": "US",
     "United States": "US",
     "U.S.A.": "US",
     "India": "IN",
     "Bharat": "IN",
     "UK": "GB",
     "United Kingdom": "GB"
   }
   ```

3. **Preview/Apply**: Show changes before applying
   ```typescript
   {
     "changes": [
       { "rowIndex": 0, "column": "country", "oldValue": "USA", "newValue": "US" },
       { "rowIndex": 1, "column": "country", "oldValue": "United States", "newValue": "US" },
       { "rowIndex": 5, "column": "country", "oldValue": "UK", "newValue": "GB" }
     ],
     "affectedRows": 3
   }
   ```

**Transformation Scopes:**
- **column**: Transform entire column
- **row**: Transform each row individually
- **selection**: Transform selected rows only
- **table**: Transform entire table structure

**Common Transformation Types:**

**Standardization:**
```typescript
{
  id: 'standardize-dates',
  label: 'Standardize Date Format',
  scope: 'column',
  targetColumn: 'orderDate',
  promptTemplate: 'Convert these dates to ISO 8601 format (YYYY-MM-DD): {{values}}'
}
```

**Enrichment:**
```typescript
{
  id: 'add-country-code',
  label: 'Add Country Codes',
  scope: 'row',
  promptTemplate: 'For country "{{country}}", return JSON: {"countryCode": "XX", "continent": "YY"}'
}
```

**Categorization:**
```typescript
{
  id: 'categorize-products',
  label: 'Auto-Categorize Products',
  scope: 'column',
  targetColumn: 'product',
  promptTemplate: 'Categorize these products into: Electronics, Furniture, Office, Accessories: {{values}}'
}
```

**Translation:**
```typescript
{
  id: 'translate-descriptions',
  label: 'Translate to English',
  scope: 'column',
  targetColumn: 'description',
  promptTemplate: 'Translate these product descriptions to English: {{values}}'
}
```

**Example Implementation:**

```vue
<template>
  <SmartDataTable
    :data="customers"
    :ai-transformations="transformations"
    :ai-client="aiClient"
  />
</template>

<script setup>
const transformations = [
  {
    id: 'standardize-countries',
    label: 'Standardize Country Names',
    scope: 'column',
    targetColumn: 'country',
    promptTemplate: 'Standardize these country names to ISO codes: {{values}}',
    preview: true
  },
  {
    id: 'fill-missing-emails',
    label: 'Generate Missing Emails',
    scope: 'row',
    promptTemplate: 'Generate a professional email for {{companyName}} in format: contact@domain.com'
  }
];
</script>
```

**Composable Usage:**

```typescript
import { useAiTransformations } from '@aivue/smart-datatable';

const {
  executeTransformation,
  previewChanges,
  applyPreview,
  cancelPreview
} = useAiTransformations({
  aiClient,
  schema,
  data,
  transformations
});

// Execute with preview
const result = await executeTransformation(transformations[0]);
console.log(`${result.affectedRows} rows will be changed`);
console.log('Preview:', previewChanges.value);

// Apply changes
applyPreview();

// Or cancel
cancelPreview();
```

---

### Feature 5: Chat with Your Table

**What It Does:**
Conversational interface to query and analyze your data using natural language.

**How It Works:**

1. **User asks question**: "What is the average order value per country?"
2. **AI analyzes data**: Processes table data and schema
3. **AI responds**: "The average order values are: USA: $1,250, India: $890, UK: $1,100"

**Example Queries:**
```
✅ "What is the total revenue?"
✅ "Which product has the highest sales?"
✅ "Show me the top 5 customers by order value"
✅ "What percentage of orders are from India?"
✅ "Compare sales between Electronics and Furniture categories"
```

**Implementation:**

```vue
<template>
  <SmartDataTable
    :data="orders"
    :ai-client="aiClient"
    :show-chat="true"
  />
</template>
```

The chat interface appears as a panel where users can ask questions about the data.

---

### Feature 6: OpenAPI Integration

**What It Does:**
Automatically generate table columns from OpenAPI/Swagger schemas.

**How It Works:**

1. **Fetch OpenAPI Schema**: Load schema from URL
2. **Extract Operation**: Find the specific API operation
3. **Generate Columns**: Create column definitions from response schema
4. **Infer Types**: Automatically detect data types

**Example:**

```vue
<template>
  <SmartDataTable
    :data="apiData"
    :ai-infer-columns="true"
    :open-api-config="{
      schemaUrl: 'https://api.example.com/openapi.json',
      operationId: 'getOrders'
    }"
  />
</template>
```

This automatically creates columns based on the API response schema.

---

## 📚 Component API

### Props

#### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<any>` | `[]` | Array of data objects to display |
| `columns` | `Column[]` | `[]` | Column definitions (auto-generated if empty) |
| `title` | `String` | `''` | Table title displayed in header |
| `rowKey` | `String` | `'id'` | Unique identifier for rows |
| `theme` | `'light' \| 'dark'` | `'light'` | Visual theme |

#### Search & Filter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `searchPlaceholder` | `String` | `'Search with AI...'` | Search input placeholder |
| `aiSearch` | `Boolean` | `false` | Enable AI-powered natural language search |

#### AI Feature Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `aiClient` | `AIClient` | `undefined` | AI client instance from @aivue/core |
| `aiInsights` | `Boolean` | `false` | Enable AI insights generation |
| `showChat` | `Boolean` | `false` | Show chat interface for table queries |
| `rowAgents` | `RowAgent[]` | `[]` | AI agents for row operations |
| `aiTransformations` | `AITransformation[]` | `[]` | AI data transformations |

#### Pagination Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pagination` | `Boolean` | `true` | Enable pagination |
| `pageSize` | `Number` | `10` | Number of items per page |
| `pageSizeOptions` | `Number[]` | `[5, 10, 25, 50, 100]` | Available page size options |

#### Selection Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectable` | `Boolean` | `false` | Enable row selection |
| `actions` | `Action[]` | `[]` | Row action buttons |

#### Display Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `emptyMessage` | `String` | `'No data available'` | Message when table is empty |
| `loading` | `Boolean` | `false` | Show loading state |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `row-click` | `row: any` | Emitted when a row is clicked |
| `selection-change` | `rows: any[]` | Emitted when row selection changes |
| `export` | `{ data: any[], format: string }` | Emitted when data is exported |
| `ai-query` | `AISearchResult` | Emitted when AI query is executed |
| `ai-insight` | `AIInsight[]` | Emitted when AI insights are generated |
| `sort-change` | `{ key: string, order: 'asc' \| 'desc' }` | Emitted when sorting changes |

### Slots

| Slot | Props | Description |
|------|-------|-------------|
| `cell-{columnKey}` | `{ row, value, column }` | Custom cell renderer for specific column |
| `header-{columnKey}` | `{ column }` | Custom header renderer for specific column |
| `empty` | - | Custom empty state content |
| `loading` | - | Custom loading state content |

### TypeScript Interfaces

#### Column Interface

```typescript
interface Column {
  key: string;                                    // Data property key
  label: string;                                  // Column header label
  sortable?: boolean;                             // Enable sorting (default: true)
  visible?: boolean;                              // Column visibility (default: true)
  formatter?: (value: any, row: any) => string;  // Custom value formatter
  type?: 'string' | 'number' | 'date' | 'boolean'; // Data type for smart sorting
  width?: string;                                 // Column width (e.g., '200px', '20%')
  align?: 'left' | 'center' | 'right';           // Text alignment
}
```

#### Action Interface

```typescript
interface Action {
  label: string;                    // Action button label
  icon?: string;                    // Icon (emoji or text)
  handler: (row: any) => void;      // Click handler function
  condition?: (row: any) => boolean; // Show action conditionally
  variant?: 'primary' | 'danger' | 'secondary'; // Visual style
}
```

#### RowAgent Interface

```typescript
interface RowAgent {
  id: string;                       // Unique agent identifier
  label: string;                    // Display label
  icon?: string;                    // Icon (emoji or text)
  promptTemplate: string;           // AI prompt with {{placeholders}}
  scope?: 'single' | 'multi';      // Single row or multiple rows
  handler?: (row: any, result: string) => void; // Custom result handler
}
```

#### AITransformation Interface

```typescript
interface AITransformation {
  id: string;                       // Unique transformation identifier
  label: string;                    // Display label
  scope: 'column' | 'row' | 'selection' | 'table'; // Transformation scope
  targetColumn?: string;            // Target column (for column scope)
  promptTemplate: string;           // AI prompt with {{placeholders}}
  preview?: boolean;                // Show preview before applying
  handler?: (changes: TransformationChange[]) => void; // Custom handler
}
```

#### TableSchema Interface

```typescript
interface TableSchema {
  columns: Array<{
    key: string;
    type: 'string' | 'number' | 'date' | 'boolean';
    label: string;
    examples?: any[];
  }>;
  rowCount: number;
  sampleRows: any[];
}
```

#### AISearchResult Interface

```typescript
interface AISearchResult {
  query: string;                    // Original user query
  filter?: FilterDefinition;        // Generated filter
  sort?: SortDefinition;            // Generated sort
  explanation: string;              // Human-readable explanation
}

interface FilterDefinition {
  conditions: Array<{
    column: string;
    operator: 'equals' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'between' | 'regex';
    value: any;
  }>;
  operator: 'AND' | 'OR';
}

interface SortDefinition {
  column: string;
  order: 'asc' | 'desc';
}
```

#### AIInsight Interface

```typescript
interface AIInsight {
  id: string;
  category: 'trends' | 'outliers' | 'patterns' | 'recommendations' | 'summary' | 'predictions';
  title: string;
  description: string;
  confidence: number;               // 0-1 confidence score
  data?: any;                       // Supporting data
  actions?: Array<{
    label: string;
    handler: () => void;
  }>;
}
```

---

## 🎓 Composables API

### useSmartDataTable

Core composable for table functionality.

```typescript
import { useSmartDataTable } from '@aivue/smart-datatable';

const {
  // State
  searchQuery,
  sortKey,
  sortOrder,
  loading,

  // Computed
  filteredData,
  sortedData,

  // Methods
  search,
  searchWithAI,
  sort,
  getInsights,
  reset
} = useSmartDataTable({
  data: ref([...]),
  aiClient: aiClientInstance,
  searchable: true,
  sortable: true
});
```

**Methods:**

- `search(query: string)`: Basic text search
- `searchWithAI(query: string)`: AI-powered search
- `sort(key: string)`: Sort by column
- `getInsights()`: Generate AI insights
- `reset()`: Clear all filters and sorts

---

### useAiTableQuery

Natural language query processing.

```typescript
import { useAiTableQuery } from '@aivue/smart-datatable';

const {
  loading,
  error,
  lastQuery,
  lastResult,
  queryToFilter,
  getSuggestions,
  applyFilter
} = useAiTableQuery({
  aiClient,
  schema: ref({
    columns: [...],
    rowCount: 100,
    sampleRows: [...]
  }),
  onQueryResult: (result) => {
    console.log('Query processed:', result);
  }
});
```

**Methods:**

- `queryToFilter(query: string)`: Convert natural language to filter
- `getSuggestions(partialQuery: string)`: Get query suggestions
- `applyFilter(data: any[], filter: FilterDefinition)`: Apply filter to data

---

### useAiInsights

AI-powered data insights.

```typescript
import { useAiInsights } from '@aivue/smart-datatable';

const {
  insights,
  loading,
  error,
  hasInsights,
  generateInsights,
  generateContextualInsights,
  getSummary,
  clearInsights
} = useAiInsights({
  aiClient,
  schema,
  data,
  config: {
    categories: ['trends', 'outliers', 'recommendations']
  }
});
```

**Methods:**

- `generateInsights(categories?: string[])`: Generate insights
- `generateContextualInsights(selectedRows: any[])`: Insights for selection
- `getSummary(currentData?: any[])`: Get quick summary
- `clearInsights()`: Clear all insights

---

### useAiRowAgents

AI operations on rows.

```typescript
import { useAiRowAgents } from '@aivue/smart-datatable';

const {
  agents,
  results,
  loading,
  error,
  executeAgent,
  executeAgentBatch,
  registerAgent,
  unregisterAgent,
  getRowResults,
  clearResults
} = useAiRowAgents({
  aiClient,
  schema,
  agents: [...]
});
```

**Methods:**

- `executeAgent(agent: RowAgent, row: any)`: Execute on single row
- `executeAgentBatch(agent: RowAgent, rows: any[])`: Execute on multiple rows
- `registerAgent(agent: RowAgent)`: Add new agent
- `unregisterAgent(agentId: string)`: Remove agent
- `getRowResults(row: any)`: Get results for specific row
- `clearResults()`: Clear all results

---

### useAiTransformations

AI data transformations.

```typescript
import { useAiTransformations } from '@aivue/smart-datatable';

const {
  transformations,
  loading,
  error,
  previewChanges,
  executeTransformation,
  applyPreview,
  cancelPreview,
  registerTransformation
} = useAiTransformations({
  aiClient,
  schema,
  data,
  transformations: [...]
});
```

**Methods:**

- `executeTransformation(transformation: AITransformation, targetData?: any[])`: Execute transformation
- `applyPreview()`: Apply previewed changes
- `cancelPreview()`: Cancel previewed changes
- `registerTransformation(transformation: AITransformation)`: Add new transformation

---

## 💼 Real-World Use Cases

### Use Case 1: E-commerce Order Management

**Scenario**: Manage thousands of orders with AI assistance

```vue
<template>
  <SmartDataTable
    :data="orders"
    :columns="orderColumns"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
    :row-agents="orderAgents"
    title="Order Management"
  />
</template>

<script setup>
const orderColumns = [
  { key: 'orderId', label: 'Order ID', sortable: true },
  { key: 'customer', label: 'Customer', sortable: true },
  { key: 'total', label: 'Total', sortable: true, type: 'number',
    formatter: (val) => `$${val.toFixed(2)}` },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'country', label: 'Country', sortable: true },
  { key: 'orderDate', label: 'Date', sortable: true, type: 'date' }
];

const orderAgents = [
  {
    id: 'predict-delivery',
    label: 'Predict Delivery',
    icon: '📦',
    promptTemplate: 'Predict delivery date for order {{orderId}} to {{country}}. Status: {{status}}, Order date: {{orderDate}}'
  },
  {
    id: 'fraud-check',
    label: 'Fraud Risk Assessment',
    icon: '🔍',
    promptTemplate: 'Assess fraud risk for order {{orderId}}: Customer {{customer}}, Total ${{total}}, Country {{country}}'
  },
  {
    id: 'draft-email',
    label: 'Draft Customer Email',
    icon: '✉️',
    promptTemplate: 'Write a professional email to {{customer}} about order {{orderId}} status: {{status}}'
  }
];
</script>
```

**AI Queries Users Can Make:**
- "show orders from India last 30 days where total > 500"
- "find pending orders older than 7 days"
- "show high-value orders (> $1000) from this week"

---

### Use Case 2: Customer Support Ticket System

**Scenario**: Manage support tickets with AI-powered insights

```vue
<template>
  <SmartDataTable
    :data="tickets"
    :columns="ticketColumns"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
    :row-agents="ticketAgents"
    :ai-transformations="ticketTransformations"
    title="Support Tickets"
  />
</template>

<script setup>
const ticketColumns = [
  { key: 'ticketId', label: 'Ticket #', sortable: true },
  { key: 'customer', label: 'Customer', sortable: true },
  { key: 'subject', label: 'Subject', sortable: true },
  { key: 'priority', label: 'Priority', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'assignedTo', label: 'Assigned To', sortable: true },
  { key: 'createdAt', label: 'Created', sortable: true, type: 'date' }
];

const ticketAgents = [
  {
    id: 'summarize',
    label: 'Summarize Ticket',
    icon: '📝',
    promptTemplate: 'Summarize this support ticket: Subject: {{subject}}, Description: {{description}}'
  },
  {
    id: 'suggest-solution',
    label: 'Suggest Solution',
    icon: '💡',
    promptTemplate: 'Suggest a solution for this ticket: {{subject}} - {{description}}'
  },
  {
    id: 'classify-urgency',
    label: 'Assess Urgency',
    icon: '⚠️',
    promptTemplate: 'Assess urgency (Low/Medium/High/Critical) for: {{subject}} - {{description}}'
  }
];

const ticketTransformations = [
  {
    id: 'auto-categorize',
    label: 'Auto-Categorize Tickets',
    scope: 'column',
    targetColumn: 'category',
    promptTemplate: 'Categorize these tickets into: Technical, Billing, Feature Request, Bug Report: {{values}}'
  },
  {
    id: 'auto-assign',
    label: 'Auto-Assign to Team',
    scope: 'row',
    promptTemplate: 'Based on ticket {{subject}}, assign to: Support, Engineering, Sales, or Billing team'
  }
];
</script>
```

**AI Queries:**
- "show critical tickets unassigned"
- "find billing issues from last week"
- "show tickets assigned to John that are overdue"

---

### Use Case 3: Sales Analytics Dashboard

**Scenario**: Analyze sales data with AI insights

```vue
<template>
  <SmartDataTable
    :data="salesData"
    :columns="salesColumns"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
    :show-chat="true"
    title="Sales Analytics"
  />
</template>

<script setup>
const salesColumns = [
  { key: 'salesRep', label: 'Sales Rep', sortable: true },
  { key: 'region', label: 'Region', sortable: true },
  { key: 'product', label: 'Product', sortable: true },
  { key: 'revenue', label: 'Revenue', sortable: true, type: 'number',
    formatter: (val) => `$${val.toLocaleString()}` },
  { key: 'units', label: 'Units Sold', sortable: true, type: 'number' },
  { key: 'quarter', label: 'Quarter', sortable: true }
];
</script>
```

**Chat Queries:**
- "What is the total revenue by region?"
- "Who is the top performing sales rep?"
- "Compare Q3 vs Q4 revenue"
- "Which product has the highest profit margin?"

**AI Insights Generated:**
- "Revenue increased 25% in Q4 compared to Q3"
- "North America region accounts for 45% of total revenue"
- "Product X shows declining sales trend over last 3 quarters"
- "Recommendation: Focus on Product Y which has 35% growth"

---

### Use Case 4: Inventory Management

**Scenario**: Manage product inventory with AI predictions

```vue
<template>
  <SmartDataTable
    :data="inventory"
    :columns="inventoryColumns"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
    :row-agents="inventoryAgents"
    title="Inventory Management"
  />
</template>

<script setup>
const inventoryColumns = [
  { key: 'sku', label: 'SKU', sortable: true },
  { key: 'product', label: 'Product', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'stock', label: 'Stock', sortable: true, type: 'number' },
  { key: 'reorderPoint', label: 'Reorder Point', sortable: true, type: 'number' },
  { key: 'lastRestocked', label: 'Last Restocked', sortable: true, type: 'date' }
];

const inventoryAgents = [
  {
    id: 'predict-stockout',
    label: 'Predict Stockout Date',
    icon: '📉',
    promptTemplate: 'Predict when {{product}} (current stock: {{stock}}) will run out based on average daily sales'
  },
  {
    id: 'suggest-reorder',
    label: 'Suggest Reorder Quantity',
    icon: '📦',
    promptTemplate: 'Suggest optimal reorder quantity for {{product}}. Current stock: {{stock}}, Reorder point: {{reorderPoint}}'
  }
];
</script>
```

**AI Queries:**
- "show products with stock below reorder point"
- "find items not restocked in 90 days"
- "show low stock items in Electronics category"

---

### Use Case 5: HR Employee Management

**Scenario**: Manage employee data with AI assistance

```vue
<template>
  <SmartDataTable
    :data="employees"
    :columns="employeeColumns"
    :ai-client="aiClient"
    :ai-search="true"
    :ai-insights="true"
    :row-agents="hrAgents"
    :ai-transformations="hrTransformations"
    title="Employee Directory"
  />
</template>

<script setup>
const employeeColumns = [
  { key: 'employeeId', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'position', label: 'Position', sortable: true },
  { key: 'salary', label: 'Salary', sortable: true, type: 'number' },
  { key: 'hireDate', label: 'Hire Date', sortable: true, type: 'date' },
  { key: 'performance', label: 'Performance', sortable: true }
];

const hrAgents = [
  {
    id: 'career-path',
    label: 'Suggest Career Path',
    icon: '🎯',
    promptTemplate: 'Suggest career progression for {{name}} in {{department}} with {{yearsOfService}} years experience'
  },
  {
    id: 'compensation-analysis',
    label: 'Compensation Analysis',
    icon: '💰',
    promptTemplate: 'Analyze if salary ${{salary}} for {{position}} in {{department}} is competitive'
  }
];

const hrTransformations = [
  {
    id: 'standardize-departments',
    label: 'Standardize Department Names',
    scope: 'column',
    targetColumn: 'department',
    promptTemplate: 'Standardize these department names: {{values}}'
  }
];
</script>
```

---

## 🎯 Best Practices

### 1. AI Client Configuration

**✅ DO:**
```typescript
// Use environment variables for API keys
const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-4', // Use GPT-4 for better accuracy
  temperature: 0.3 // Lower temperature for consistent results
});
```

**❌ DON'T:**
```typescript
// Don't hardcode API keys
const aiClient = new AIClient({
  provider: 'openai',
  apiKey: 'sk-hardcoded-key-here', // NEVER DO THIS
  model: 'gpt-3.5-turbo' // Less accurate for complex queries
});
```

### 2. Schema Definition

**✅ DO:**
```typescript
// Provide rich schema with examples
const schema = ref({
  columns: [
    {
      key: 'country',
      type: 'string',
      label: 'Country',
      examples: ['USA', 'India', 'UK'] // Helps AI understand data
    },
    {
      key: 'total',
      type: 'number',
      label: 'Order Total',
      examples: [100, 500, 1000]
    }
  ],
  rowCount: data.value.length,
  sampleRows: data.value.slice(0, 5) // Provide sample data
});
```

**❌ DON'T:**
```typescript
// Minimal schema without context
const schema = ref({
  columns: [
    { key: 'country', type: 'string', label: 'Country' },
    { key: 'total', type: 'number', label: 'Total' }
  ],
  rowCount: 0,
  sampleRows: []
});
```

### 3. Prompt Templates

**✅ DO:**
```typescript
// Clear, specific prompts with context
{
  id: 'explain',
  label: 'Explain Order',
  promptTemplate: 'Explain this e-commerce order in simple terms for a customer service rep: Customer {{customer}} ordered {{product}} for ${{total}}, current status is {{status}}, ordered on {{orderDate}}'
}
```

**❌ DON'T:**
```typescript
// Vague prompts without context
{
  id: 'explain',
  label: 'Explain',
  promptTemplate: 'Explain {{data}}'
}
```

### 4. Performance Optimization

**✅ DO:**
```typescript
// Limit data sent to AI
const sampleData = data.value.slice(0, 10);

// Cache AI results
const queryCache = new Map();
```

**❌ DON'T:**
```typescript
// Send entire dataset to AI
const result = await aiClient.chat([
  { role: 'user', content: JSON.stringify(data.value) }
]);
```

---

## 🔧 Quick Start Guide

```bash
# Install
npm install @aivue/smart-datatable @aivue/core
```

```vue
<template>
  <SmartDataTable
    :data="orders"
    :ai-client="aiClient"
    :ai-search="true"
  />
</template>

<script setup>
import { ref } from 'vue';
import { SmartDataTable } from '@aivue/smart-datatable';
import '@aivue/smart-datatable/dist/smart-datatable.css';
import { AIClient } from '@aivue/core';

const aiClient = new AIClient({
  provider: 'openai',
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: 'gpt-4'
});

const orders = ref([
  { id: 1, customer: 'Acme Corp', total: 1299, status: 'Completed' }
]);
</script>
```

---

## 📊 Summary

### What It Does

1. **Displays Data**: Traditional datatable with sorting, filtering, pagination
2. **Understands Data**: Uses AI to comprehend structure and relationships
3. **Natural Language Queries**: "show orders from India" → structured filters
4. **Generates Insights**: Finds trends, outliers, patterns automatically
5. **AI Row Operations**: Explain, predict, classify individual rows
6. **Data Transformations**: Clean and enrich data using AI
7. **Conversational Interface**: Chat with your data

### How It Works

1. **Schema Building**: Analyzes your data structure
2. **Context Preparation**: Sends schema + samples to LLM
3. **AI Processing**: LLM understands and executes tasks
4. **Result Application**: Applies AI results to data
5. **User Feedback**: Displays in intuitive UI

### Key Benefits

- ✅ Faster development - no complex filter UIs
- ✅ Better UX - natural language queries
- ✅ Actionable insights - AI finds hidden patterns
- ✅ Data quality - AI cleans and standardizes
- ✅ Flexible - works with any data structure
- ✅ Framework agnostic - portable to React, Angular

---

**Built with ❤️ by the @aivue team**
