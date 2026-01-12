# Smart DataTable - Angular & React Implementation Guide

> **Complete guide to implementing AI-powered DataTable features in Angular and React**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Core Architecture](#core-architecture)
3. [Feature Implementation](#feature-implementation)
4. [Angular Implementation](#angular-implementation)
5. [React Implementation](#react-implementation)
6. [AI Integration](#ai-integration)
7. [Complete Examples](#complete-examples)

---

## 📦 Overview

### What is Smart DataTable?

An **AI-Native DataTable** that provides:

1. **Natural Language Querying**: Convert "show orders from India where total > 500" to structured filters
2. **AI Insights**: Automatic trend detection, outlier identification, pattern recognition
3. **Row Agents**: AI operations on individual rows (explain, predict, classify)
4. **Data Transformations**: AI-powered data cleaning and enrichment
5. **Chat Interface**: Conversational queries about table data
6. **Smart Filtering**: AI understands data context and relationships

### Technology Stack

- **Vue Version**: Vue 3 Composition API
- **AI Integration**: @aivue/core (AIClient)
- **AI Providers**: OpenAI, Claude, Gemini, HuggingFace, Ollama, DeepSeek
- **TypeScript**: Full type safety
- **State Management**: Reactive refs and computed properties

---

## 🏗️ Core Architecture

### Component Structure

```
SmartDataTable
├── State Management
│   ├── data (original dataset)
│   ├── filteredData (after search/filter)
│   ├── sortedData (after sorting)
│   ├── selectedRows (user selections)
│   ├── aiSearchLoading (AI processing state)
│   └── aiInsights (generated insights)
│
├── AI Features
│   ├── Natural Language Query → useAiTableQuery
│   ├── AI Insights → useAiInsights
│   ├── Row Agents → useAiRowAgents
│   └── Transformations → useAiTransformations
│
├── Core Features
│   ├── Sorting (multi-column)
│   ├── Filtering (text + AI)
│   ├── Pagination
│   ├── Row Selection
│   └── Export (CSV, JSON, Excel)
│
└── UI Components
    ├── Search Bar (AI-powered)
    ├── Insights Panel
    ├── Chat Interface
    └── Data Grid
```

### Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    User Input                                │
│  "show orders from India last 30 days where total > 500"    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Build Schema Context                            │
│  {                                                           │
│    columns: [country, date, total],                         │
│    types: [string, date, number],                           │
│    sampleData: [...first 5 rows]                            │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Send to LLM (via AIClient)                      │
│  System Prompt: "You are analyzing a table with..."         │
│  User Prompt: "Convert query to JSON filter"                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              LLM Returns Structured Filter                   │
│  {                                                           │
│    filter: {                                                 │
│      conditions: [                                           │
│        {column: "country", operator: "equals", value: "India"},│
│        {column: "date", operator: "gte", value: "2024-11-14"},│
│        {column: "total", operator: "gt", value: 500}         │
│      ],                                                      │
│      operator: "AND"                                         │
│    },                                                        │
│    explanation: "Filtering orders from India..."            │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Apply Filter to Data                            │
│  filteredData = data.filter(row => {                        │
│    return row.country === "India" &&                        │
│           row.date >= "2024-11-14" &&                       │
│           row.total > 500;                                  │
│  });                                                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│              Display Results to User                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Feature Implementation

### Feature 1: Natural Language Querying

**How It Works:**

1. User types natural language query
2. Build schema with column info + sample data
3. Send to LLM with structured prompt
4. LLM returns JSON filter definition
5. Apply filter to dataset
6. Display filtered results

**Core Logic (Framework-Agnostic):**

```typescript
// Step 1: Build Schema
function buildSchema(data: any[], columns: Column[]) {
  return {
    columns: columns.map(col => ({
      key: col.key,
      type: col.type,
      label: col.label,
      examples: data.slice(0, 3).map(row => row[col.key])
    })),
    rowCount: data.length,
    sampleRows: data.slice(0, 5)
  };
}

// Step 2: Build System Prompt
function buildSchemaPrompt(schema: TableSchema): string {
  return `You are analyzing a table with these columns:
${schema.columns.map(c => `- ${c.key} (${c.type}): ${c.label}, examples: ${c.examples.join(', ')}`).join('\n')}

Total rows: ${schema.rowCount}

Sample data:
${JSON.stringify(schema.sampleRows, null, 2)}

Convert natural language queries to JSON filters with this structure:
{
  "filter": {
    "conditions": [
      {"column": "columnName", "operator": "equals|contains|gt|lt|gte|lte|in|between|regex", "value": "value"}
    ],
    "operator": "AND|OR"
  },
  "sort": {"column": "columnName", "order": "asc|desc"},
  "explanation": "Brief explanation"
}`;
}

// Step 3: Query to Filter (AI Processing)
async function queryToFilter(
  query: string,
  schema: TableSchema,
  aiClient: AIClient
): Promise<AISearchResult> {
  const systemPrompt = buildSchemaPrompt(schema);
  const userPrompt = `User query: "${query}"

Convert this natural language query into a JSON filter definition. Return ONLY valid JSON.`;

  // Call LLM
  const response = await aiClient.chat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt }
  ], {
    temperature: 0.3, // Low temperature for consistent results
    maxTokens: 1000
  });

  // Parse JSON from response
  const jsonMatch = response.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Invalid AI response');
  }

  const parsed = JSON.parse(jsonMatch[0]);

  return {
    query,
    filter: parsed.filter || undefined,
    sort: parsed.sort || undefined,
    explanation: parsed.explanation
  };
}

// Step 4: Apply Filter to Data
function applyFilter(data: any[], filter: FilterDefinition): any[] {
  if (!filter || !filter.conditions || filter.conditions.length === 0) {
    return data;
  }

  return data.filter(row => {
    const results = filter.conditions.map(condition => {
      const value = row[condition.column];

      switch (condition.operator) {
        case 'equals':
          return value === condition.value;

        case 'contains':
          return String(value).toLowerCase().includes(String(condition.value).toLowerCase());

        case 'gt':
          return Number(value) > Number(condition.value);

        case 'lt':
          return Number(value) < Number(condition.value);

        case 'gte':
          return Number(value) >= Number(condition.value);

        case 'lte':
          return Number(value) <= Number(condition.value);

        case 'in':
          return Array.isArray(condition.value) && condition.value.includes(value);

        case 'between':
          return Array.isArray(condition.value) &&
                 Number(value) >= Number(condition.value[0]) &&
                 Number(value) <= Number(condition.value[1]);

        case 'regex':
          return new RegExp(condition.value).test(String(value));

        default:
          return true;
      }
    });

    // Apply AND/OR operator
    return filter.operator === 'OR'
      ? results.some(r => r)
      : results.every(r => r);
  });
}
```

**TypeScript Interfaces:**

```typescript
interface Column {
  key: string;
  label: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  sortable?: boolean;
  visible?: boolean;
}

interface TableSchema {
  columns: Array<{
    key: string;
    type: string;
    label: string;
    examples?: any[];
  }>;
  rowCount: number;
  sampleRows: any[];
}

interface FilterCondition {
  column: string;
  operator: 'equals' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'between' | 'regex';
  value: any;
}

interface FilterDefinition {
  conditions: FilterCondition[];
  operator: 'AND' | 'OR';
}

interface SortDefinition {
  column: string;
  order: 'asc' | 'desc';
}

interface AISearchResult {
  query: string;
  filter?: FilterDefinition;
  sort?: SortDefinition;
  explanation: string;
}
```

---

### Feature 2: AI Insights Generation

**How It Works:**

1. Sample data (first 5-10 rows)
2. Build schema context
3. Send to LLM with insight categories
4. LLM analyzes and returns insights
5. Display insights in UI

**Core Logic:**

```typescript
// Step 1: Generate Insights
async function generateInsights(
  data: any[],
  schema: TableSchema,
  aiClient: AIClient,
  categories: InsightCategory[] = ['trends', 'outliers', 'patterns', 'recommendations']
): Promise<AIInsight[]> {

  const systemPrompt = `You are analyzing a dataset with ${schema.rowCount} rows.

Columns:
${schema.columns.map(c => `- ${c.key} (${c.type}): ${c.label}`).join('\n')}

Sample data (first 5 rows):
${JSON.stringify(schema.sampleRows, null, 2)}

Analyze this data and provide insights in these categories: ${categories.join(', ')}.

Return a JSON array of insights with this structure:
[
  {
    "category": "trends|outliers|patterns|recommendations|summary|predictions",
    "title": "Short title",
    "description": "Detailed description",
    "confidence": 0.85,
    "data": {"optional": "supporting data"}
  }
]`;

  const response = await aiClient.chat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: 'Analyze the data and provide insights.' }
  ], {
    temperature: 0.7,
    maxTokens: 2000
  });

  // Parse JSON array
  const jsonMatch = response.match(/\[[\s\S]*\]/);
  if (!jsonMatch) {
    throw new Error('Invalid AI response');
  }

  const parsed = JSON.parse(jsonMatch[0]);

  return parsed.map((item: any, index: number) => ({
    id: `insight-${Date.now()}-${index}`,
    category: item.category,
    title: item.title,
    description: item.description,
    confidence: item.confidence || 0.7,
    data: item.data,
    actions: []
  }));
}

// Step 2: Get Quick Summary
async function getSummary(
  data: any[],
  schema: TableSchema,
  aiClient: AIClient
): Promise<string> {

  const systemPrompt = `Provide a brief 2-3 sentence summary of this dataset:

${JSON.stringify(schema.sampleRows.slice(0, 3), null, 2)}

Total rows: ${schema.rowCount}`;

  const response = await aiClient.chat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: 'Summarize this data.' }
  ], {
    temperature: 0.5,
    maxTokens: 200
  });

  return response.trim();
}
```

**TypeScript Interfaces:**

```typescript
type InsightCategory = 'trends' | 'outliers' | 'patterns' | 'recommendations' | 'summary' | 'predictions';

interface AIInsight {
  id: string;
  category: InsightCategory;
  title: string;
  description: string;
  confidence: number; // 0-1
  data?: any;
  actions?: Array<{
    label: string;
    handler: () => void;
  }>;
}
```

---

### Feature 3: AI Row Agents

**How It Works:**

1. Define agent with prompt template
2. Interpolate row data into template
3. Send to LLM
4. Return result
5. Execute optional handler

**Core Logic:**

```typescript
// Step 1: Define Row Agent
interface RowAgent {
  id: string;
  label: string;
  icon?: string;
  promptTemplate: string; // e.g., "Explain this order: {{customer}} ordered {{product}} for ${{total}}"
  scope?: 'single' | 'multi';
  handler?: (row: any, result: string) => void;
}

// Step 2: Interpolate Template
function interpolatePrompt(template: string, data: any): string {
  return template.replace(/\{\{([^}]+)\}\}/g, (match, path) => {
    // Support nested properties: {{customer.name}}
    const value = path.split('.').reduce((obj: any, key: string) => obj?.[key], data);
    return value !== undefined ? String(value) : match;
  });
}

// Step 3: Execute Agent
async function executeAgent(
  agent: RowAgent,
  row: any,
  aiClient: AIClient
): Promise<RowAgentResult> {

  // Interpolate row data into prompt
  const prompt = interpolatePrompt(agent.promptTemplate, row);

  const systemPrompt = `You are an AI assistant helping analyze data in a table.
Provide clear, concise, and actionable responses.`;

  const response = await aiClient.chat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: prompt }
  ], {
    temperature: 0.7,
    maxTokens: 1000
  });

  const result: RowAgentResult = {
    agentId: agent.id,
    row,
    result: response.trim(),
    timestamp: new Date()
  };

  // Execute custom handler if provided
  if (agent.handler) {
    await agent.handler(row, response.trim());
  }

  return result;
}

// Step 4: Execute on Multiple Rows
async function executeAgentBatch(
  agent: RowAgent,
  rows: any[],
  aiClient: AIClient
): Promise<RowAgentResult[]> {

  const results: RowAgentResult[] = [];

  for (const row of rows) {
    const result = await executeAgent(agent, row, aiClient);
    results.push(result);
  }

  return results;
}
```

**TypeScript Interfaces:**

```typescript
interface RowAgentResult {
  agentId: string;
  row: any;
  result: string;
  timestamp: Date;
}
```

**Example Agents:**

```typescript
const agents: RowAgent[] = [
  {
    id: 'explain',
    label: 'Explain Order',
    icon: '📝',
    promptTemplate: 'Explain this order in simple terms: Customer {{customer}}, Product {{product}}, Total ${{total}}, Status {{status}}',
    scope: 'single'
  },
  {
    id: 'predict-delivery',
    label: 'Predict Delivery',
    icon: '📅',
    promptTemplate: 'Predict delivery date for order {{id}} shipping to {{country}}. Current status: {{status}}. Order date: {{orderDate}}'
  },
  {
    id: 'classify-risk',
    label: 'Assess Risk',
    icon: '⚠️',
    promptTemplate: 'Assess fraud risk (Low/Medium/High) for order {{id}}: Customer {{customer}}, Total ${{total}}, Country {{country}}'
  }
];
```

---

### Feature 4: AI Data Transformations

**How It Works:**

1. Define transformation scope (column, row, selection, table)
2. Send data to LLM with transformation instructions
3. LLM returns mapping of old → new values
4. Preview changes
5. Apply transformations

**Core Logic:**

```typescript
// Step 1: Define Transformation
interface AITransformation {
  id: string;
  label: string;
  scope: 'column' | 'row' | 'selection' | 'table';
  targetColumn?: string; // For column scope
  promptTemplate: string;
  preview?: boolean;
  handler?: (changes: TransformationChange[]) => void;
}

// Step 2: Execute Column Transformation
async function transformColumn(
  transformation: AITransformation,
  data: any[],
  columnKey: string,
  aiClient: AIClient
): Promise<TransformationChange[]> {

  // Get unique values from column
  const values = data.map(row => row[columnKey]);
  const uniqueValues = [...new Set(values)].slice(0, 50); // Limit to 50 unique values

  const systemPrompt = `You are transforming data in a table column.

Column: ${columnKey}
Unique values: ${uniqueValues.join(', ')}

Return a JSON object mapping old values to new values:
{
  "oldValue1": "newValue1",
  "oldValue2": "newValue2"
}`;

  const userPrompt = interpolatePrompt(transformation.promptTemplate, { values: uniqueValues });

  const response = await aiClient.chat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt }
  ], {
    temperature: 0.3,
    maxTokens: 2000
  });

  // Parse mapping
  const jsonMatch = response.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Invalid AI response');
  }

  const mapping = JSON.parse(jsonMatch[0]);

  // Build changes array
  const changes: TransformationChange[] = [];
  data.forEach((row, index) => {
    const oldValue = row[columnKey];
    const newValue = mapping[oldValue];

    if (newValue !== undefined && newValue !== oldValue) {
      changes.push({
        rowIndex: index,
        column: columnKey,
        oldValue,
        newValue
      });
    }
  });

  return changes;
}

// Step 3: Execute Row Transformation
async function transformRow(
  transformation: AITransformation,
  row: any,
  rowIndex: number,
  aiClient: AIClient
): Promise<TransformationChange[]> {

  const prompt = interpolatePrompt(transformation.promptTemplate, row);

  const systemPrompt = `You are transforming a row in a table.
Return a JSON object with the transformed values.`;

  const response = await aiClient.chat([
    { role: 'system', content: systemPrompt },
    { role: 'user', content: prompt }
  ], {
    temperature: 0.3,
    maxTokens: 500
  });

  const jsonMatch = response.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Invalid AI response');
  }

  const transformed = JSON.parse(jsonMatch[0]);

  // Build changes
  const changes: TransformationChange[] = [];
  Object.keys(transformed).forEach(key => {
    if (row[key] !== transformed[key]) {
      changes.push({
        rowIndex,
        column: key,
        oldValue: row[key],
        newValue: transformed[key]
      });
    }
  });

  return changes;
}

// Step 4: Apply Changes
function applyTransformationChanges(
  data: any[],
  changes: TransformationChange[]
): any[] {
  const newData = JSON.parse(JSON.stringify(data)); // Deep clone

  changes.forEach(change => {
    if (newData[change.rowIndex]) {
      newData[change.rowIndex][change.column] = change.newValue;
    }
  });

  return newData;
}
```

**TypeScript Interfaces:**

```typescript
interface TransformationChange {
  rowIndex: number;
  column: string;
  oldValue: any;
  newValue: any;
}

interface TransformationResult {
  transformationId: string;
  changes: TransformationChange[];
  affectedRows: number;
  preview?: boolean;
}
```

**Example Transformations:**

```typescript
const transformations: AITransformation[] = [
  {
    id: 'standardize-countries',
    label: 'Standardize Country Names',
    scope: 'column',
    targetColumn: 'country',
    promptTemplate: 'Standardize these country names to ISO 3166-1 alpha-2 codes: {{values}}',
    preview: true
  },
  {
    id: 'fill-missing-emails',
    label: 'Generate Missing Emails',
    scope: 'row',
    promptTemplate: 'Generate a professional email for company {{companyName}} in format: contact@domain.com'
  },
  {
    id: 'categorize-products',
    label: 'Auto-Categorize Products',
    scope: 'column',
    targetColumn: 'product',
    promptTemplate: 'Categorize these products into: Electronics, Furniture, Office, Accessories: {{values}}'
  },
  {
    id: 'translate-descriptions',
    label: 'Translate to English',
    scope: 'column',
    targetColumn: 'description',
    promptTemplate: 'Translate these product descriptions to English: {{values}}'
  }
];
```

---

## 🅰️ Angular Implementation

### Complete Angular Component

```typescript
// smart-datatable.component.ts
import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Column {
  key: string;
  label: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  sortable?: boolean;
  visible?: boolean;
  formatter?: (value: any, row: any) => string;
}

interface AIClient {
  chat(messages: any[], options?: any): Promise<string>;
}

@Component({
  selector: 'app-smart-datatable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="smart-datatable" [class.dark-theme]="theme === 'dark'">
      <!-- Header -->
      <div class="datatable-header">
        <div class="header-left">
          <h3 *ngIf="title">{{ title }}</h3>
          <span class="datatable-count">{{ filteredData.length }} items</span>
        </div>
        <div class="header-right">
          <button *ngIf="aiInsights" (click)="generateInsights()" [disabled]="loading">
            💡 Insights
          </button>
          <button (click)="exportData('csv')">📥 Export</button>
        </div>
      </div>

      <!-- AI Search Bar -->
      <div *ngIf="aiSearch" class="ai-search-container">
        <div class="search-box">
          <span class="search-icon">🤖</span>
          <input
            [(ngModel)]="searchQuery"
            type="text"
            placeholder="Ask AI: e.g., show products where price > 100"
            (keyup.enter)="handleAiSearch()"
            [disabled]="aiSearchLoading"
          />
          <button
            *ngIf="searchQuery && !aiSearchLoading"
            (click)="handleAiSearch()"
          >
            🔍 Search
          </button>
          <button *ngIf="aiSearchLoading" disabled>
            ⏳ Processing...
          </button>
          <button
            *ngIf="aiFilterActive"
            (click)="clearAiFilter()"
          >
            ✕ Clear
          </button>
        </div>
        <div *ngIf="aiFilterActive && aiFilterExplanation" class="ai-filter-info">
          🤖 {{ aiFilterExplanation }}
        </div>
      </div>

      <!-- AI Insights Panel -->
      <div *ngIf="showInsightsPanel && insights.length > 0" class="insights-panel">
        <div class="insights-header">
          <h4>💡 AI Insights</h4>
          <button (click)="showInsightsPanel = false">×</button>
        </div>
        <div class="insights-content">
          <div *ngFor="let insight of insights" class="insight-item" [class]="'insight-' + insight.category">
            <div class="insight-header">
              <strong>{{ insight.title }}</strong>
              <span class="confidence">{{ (insight.confidence * 100).toFixed(0) }}%</span>
            </div>
            <p>{{ insight.description }}</p>
          </div>
        </div>
      </div>

      <!-- Data Table -->
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th *ngFor="let col of visibleColumns" (click)="col.sortable !== false && sort(col.key)">
                {{ col.label }}
                <span *ngIf="sortKey === col.key">
                  {{ sortOrder === 'asc' ? '↑' : '↓' }}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of paginatedData" (click)="handleRowClick(row)">
              <td *ngFor="let col of visibleColumns">
                {{ formatCell(row[col.key], col, row) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div *ngIf="pagination" class="pagination">
        <button (click)="previousPage()" [disabled]="currentPage === 1">
          ← Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button (click)="nextPage()" [disabled]="currentPage === totalPages">
          Next →
        </button>
      </div>
    </div>
  `,
  styles: [`
    .smart-datatable {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 20px;
    }

    .datatable-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .ai-search-container {
      margin-bottom: 20px;
    }

    .search-box {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .search-box input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    .search-box button {
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .search-box button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .ai-filter-info {
      margin-top: 10px;
      padding: 8px 12px;
      background: #e7f3ff;
      border-left: 3px solid #007bff;
      border-radius: 4px;
      font-size: 14px;
    }

    .insights-panel {
      margin-bottom: 20px;
      padding: 16px;
      background: #f8f9fa;
      border-radius: 8px;
    }

    .insights-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .insight-item {
      padding: 12px;
      margin-bottom: 10px;
      background: white;
      border-radius: 6px;
      border-left: 3px solid #007bff;
    }

    .insight-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .confidence {
      font-size: 12px;
      color: #666;
    }

    .table-container {
      overflow-x: auto;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
    }

    .data-table th {
      background: #f8f9fa;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      cursor: pointer;
      user-select: none;
    }

    .data-table th:hover {
      background: #e9ecef;
    }

    .data-table td {
      padding: 12px;
      border-bottom: 1px solid #dee2e6;
    }

    .data-table tr:hover {
      background: #f8f9fa;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
      margin-top: 20px;
    }

    .pagination button {
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .pagination button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `]
})
export class SmartDatatableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columns: Column[] = [];
  @Input() title: string = '';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() aiClient?: AIClient;
  @Input() aiSearch: boolean = false;
  @Input() aiInsights: boolean = false;
  @Input() pagination: boolean = true;
  @Input() pageSize: number = 10;

  @Output() rowClick = new EventEmitter<any>();
  @Output() aiQuery = new EventEmitter<any>();
  @Output() aiInsight = new EventEmitter<any[]>();

  // State
  filteredData: any[] = [];
  sortedData: any[] = [];
  paginatedData: any[] = [];
  searchQuery: string = '';
  sortKey: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';
  currentPage: number = 1;
  loading: boolean = false;
  aiSearchLoading: boolean = false;
  aiFilterActive: boolean = false;
  aiFilterExplanation: string = '';
  showInsightsPanel: boolean = false;
  insights: any[] = [];

  ngOnInit() {
    this.initializeData();
  }

  ngOnChanges() {
    this.initializeData();
  }

  initializeData() {
    if (this.columns.length === 0 && this.data.length > 0) {
      // Auto-generate columns
      this.columns = Object.keys(this.data[0]).map(key => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        type: typeof this.data[0][key] === 'number' ? 'number' : 'string',
        sortable: true,
        visible: true
      }));
    }

    this.filteredData = [...this.data];
    this.updateDisplay();
  }

  get visibleColumns(): Column[] {
    return this.columns.filter(col => col.visible !== false);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.pageSize);
  }

  // AI Search
  async handleAiSearch() {
    if (!this.aiClient || !this.searchQuery) return;

    this.aiSearchLoading = true;
    try {
      const schema = this.buildSchema();
      const result = await this.queryToFilter(this.searchQuery, schema);

      this.aiFilterActive = true;
      this.aiFilterExplanation = result.explanation;
      this.filteredData = this.applyFilter(this.data, result.filter);
      this.updateDisplay();

      this.aiQuery.emit(result);
    } catch (error) {
      console.error('AI search failed:', error);
      alert('AI search failed. Please try again.');
    } finally {
      this.aiSearchLoading = false;
    }
  }

  clearAiFilter() {
    this.aiFilterActive = false;
    this.aiFilterExplanation = '';
    this.searchQuery = '';
    this.filteredData = [...this.data];
    this.updateDisplay();
  }

  // AI Insights
  async generateInsights() {
    if (!this.aiClient) return;

    this.loading = true;
    this.showInsightsPanel = true;

    try {
      const schema = this.buildSchema();
      this.insights = await this.generateAIInsights(schema);
      this.aiInsight.emit(this.insights);
    } catch (error) {
      console.error('Failed to generate insights:', error);
    } finally {
      this.loading = false;
    }
  }

  // Sorting
  sort(key: string) {
    if (this.sortKey === key) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortOrder = 'asc';
    }

    this.filteredData.sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal < bVal) return this.sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return this.sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    this.updateDisplay();
  }

  // Pagination
  updateDisplay() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.filteredData.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplay();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplay();
    }
  }

  // Export
  exportData(format: string) {
    if (format === 'csv') {
      const csv = this.convertToCSV(this.filteredData);
      this.downloadFile(csv, 'data.csv', 'text/csv');
    }
  }

  convertToCSV(data: any[]): string {
    if (data.length === 0) return '';

    const headers = this.visibleColumns.map(col => col.label).join(',');
    const rows = data.map(row =>
      this.visibleColumns.map(col => {
        const value = row[col.key];
        return typeof value === 'string' && value.includes(',')
          ? `"${value}"`
          : value;
      }).join(',')
    );

    return [headers, ...rows].join('\n');
  }

  downloadFile(content: string, filename: string, type: string) {
    const blob = new Blob([content], { type });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  // Formatting
  formatCell(value: any, column: Column, row: any): string {
    if (column.formatter) {
      return column.formatter(value, row);
    }

    if (column.type === 'number' && typeof value === 'number') {
      return value.toLocaleString();
    }

    if (column.type === 'date' && value) {
      return new Date(value).toLocaleDateString();
    }

    return value !== null && value !== undefined ? String(value) : '';
  }

  handleRowClick(row: any) {
    this.rowClick.emit(row);
  }

  // AI Helper Methods
  buildSchema() {
    return {
      columns: this.columns.map(col => ({
        key: col.key,
        type: col.type,
        label: col.label,
        examples: this.data.slice(0, 3).map(row => row[col.key])
      })),
      rowCount: this.data.length,
      sampleRows: this.data.slice(0, 5)
    };
  }

  async queryToFilter(query: string, schema: any): Promise<any> {
    const systemPrompt = this.buildSchemaPrompt(schema);
    const userPrompt = `User query: "${query}"\n\nConvert this to a JSON filter.`;

    const response = await this.aiClient!.chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ], { temperature: 0.3, maxTokens: 1000 });

    const jsonMatch = response.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : {};
  }

  buildSchemaPrompt(schema: any): string {
    return `You are analyzing a table with these columns:
${schema.columns.map((c: any) => `- ${c.key} (${c.type}): ${c.label}`).join('\n')}

Sample data:
${JSON.stringify(schema.sampleRows, null, 2)}

Convert queries to JSON filters with structure:
{
  "filter": {
    "conditions": [{"column": "...", "operator": "equals|contains|gt|lt", "value": "..."}],
    "operator": "AND|OR"
  },
  "explanation": "..."
}`;
  }

  applyFilter(data: any[], filter: any): any[] {
    if (!filter || !filter.conditions) return data;

    return data.filter(row => {
      const results = filter.conditions.map((cond: any) => {
        const value = row[cond.column];
        switch (cond.operator) {
          case 'equals': return value === cond.value;
          case 'contains': return String(value).toLowerCase().includes(String(cond.value).toLowerCase());
          case 'gt': return Number(value) > Number(cond.value);
          case 'lt': return Number(value) < Number(cond.value);
          case 'gte': return Number(value) >= Number(cond.value);
          case 'lte': return Number(value) <= Number(cond.value);
          default: return true;
        }
      });

      return filter.operator === 'OR' ? results.some((r: boolean) => r) : results.every((r: boolean) => r);
    });
  }

  async generateAIInsights(schema: any): Promise<any[]> {
    const systemPrompt = `Analyze this dataset and provide insights.

${JSON.stringify(schema.sampleRows, null, 2)}

Return JSON array:
[{"category": "trends|outliers|patterns", "title": "...", "description": "...", "confidence": 0.85}]`;

    const response = await this.aiClient!.chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Analyze and provide insights.' }
    ], { temperature: 0.7, maxTokens: 2000 });

    const jsonMatch = response.match(/\[[\s\S]*\]/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
  }
}
```

### Usage Example (Angular)

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { SmartDatatableComponent } from './smart-datatable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SmartDatatableComponent],
  template: `
    <app-smart-datatable
      [data]="orders"
      [columns]="columns"
      [aiClient]="aiClient"
      [aiSearch]="true"
      [aiInsights]="true"
      title="Orders"
      (rowClick)="handleRowClick($event)"
      (aiQuery)="handleAiQuery($event)"
    />
  `
})
export class AppComponent {
  aiClient = {
    chat: async (messages: any[], options?: any) => {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env['OPENAI_API_KEY']}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages,
          temperature: options?.temperature || 0.7,
          max_tokens: options?.maxTokens || 1000
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    }
  };

  orders = [
    { id: 1, customer: 'Acme Corp', total: 1299, status: 'Completed', country: 'USA' },
    { id: 2, customer: 'TechStart', total: 599, status: 'Pending', country: 'India' },
    { id: 3, customer: 'Global Inc', total: 2499, status: 'Completed', country: 'UK' }
  ];

  columns = [
    { key: 'id', label: 'Order ID', type: 'number' as const },
    { key: 'customer', label: 'Customer', type: 'string' as const },
    { key: 'total', label: 'Total', type: 'number' as const,
      formatter: (val: number) => `$${val.toFixed(2)}` },
    { key: 'status', label: 'Status', type: 'string' as const },
    { key: 'country', label: 'Country', type: 'string' as const }
  ];

  handleRowClick(row: any) {
    console.log('Row clicked:', row);
  }

  handleAiQuery(result: any) {
    console.log('AI Query:', result);
  }
}
```

---

## ⚛️ React Implementation

### Complete React Component

```typescript
// SmartDataTable.tsx
import React, { useState, useEffect, useMemo } from 'react';
import './SmartDataTable.css';

interface Column {
  key: string;
  label: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  sortable?: boolean;
  visible?: boolean;
  formatter?: (value: any, row: any) => string;
}

interface AIClient {
  chat(messages: any[], options?: any): Promise<string>;
}

interface SmartDataTableProps {
  data: any[];
  columns?: Column[];
  title?: string;
  theme?: 'light' | 'dark';
  aiClient?: AIClient;
  aiSearch?: boolean;
  aiInsights?: boolean;
  pagination?: boolean;
  pageSize?: number;
  onRowClick?: (row: any) => void;
  onAiQuery?: (result: any) => void;
  onAiInsight?: (insights: any[]) => void;
}

export const SmartDataTable: React.FC<SmartDataTableProps> = ({
  data = [],
  columns: propColumns,
  title = '',
  theme = 'light',
  aiClient,
  aiSearch = false,
  aiInsights = false,
  pagination = true,
  pageSize = 10,
  onRowClick,
  onAiQuery,
  onAiInsight
}) => {
  // State
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiSearchLoading, setAiSearchLoading] = useState(false);
  const [aiFilterActive, setAiFilterActive] = useState(false);
  const [aiFilterExplanation, setAiFilterExplanation] = useState('');
  const [showInsightsPanel, setShowInsightsPanel] = useState(false);
  const [insights, setInsights] = useState<any[]>([]);

  // Auto-generate columns if not provided
  const columns = useMemo(() => {
    if (propColumns && propColumns.length > 0) return propColumns;
    if (data.length === 0) return [];

    return Object.keys(data[0]).map(key => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      type: typeof data[0][key] === 'number' ? 'number' as const : 'string' as const,
      sortable: true,
      visible: true
    }));
  }, [propColumns, data]);

  const visibleColumns = useMemo(() =>
    columns.filter(col => col.visible !== false),
    [columns]
  );

  // Initialize filtered data
  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  // Sorted data
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortOrder]);

  // Paginated data
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, pageSize, pagination]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // AI Search
  const handleAiSearch = async () => {
    if (!aiClient || !searchQuery) return;

    setAiSearchLoading(true);
    try {
      const schema = buildSchema();
      const result = await queryToFilter(searchQuery, schema);

      setAiFilterActive(true);
      setAiFilterExplanation(result.explanation);
      setFilteredData(applyFilter(data, result.filter));

      onAiQuery?.(result);
    } catch (error) {
      console.error('AI search failed:', error);
      alert('AI search failed. Please try again.');
    } finally {
      setAiSearchLoading(false);
    }
  };

  const clearAiFilter = () => {
    setAiFilterActive(false);
    setAiFilterExplanation('');
    setSearchQuery('');
    setFilteredData([...data]);
  };

  // AI Insights
  const generateInsights = async () => {
    if (!aiClient) return;

    setLoading(true);
    setShowInsightsPanel(true);

    try {
      const schema = buildSchema();
      const generatedInsights = await generateAIInsights(schema);
      setInsights(generatedInsights);
      onAiInsight?.(generatedInsights);
    } catch (error) {
      console.error('Failed to generate insights:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sorting
  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  // Export
  const exportData = (format: string) => {
    if (format === 'csv') {
      const csv = convertToCSV(filteredData);
      downloadFile(csv, 'data.csv', 'text/csv');
    }
  };

  const convertToCSV = (data: any[]): string => {
    if (data.length === 0) return '';

    const headers = visibleColumns.map(col => col.label).join(',');
    const rows = data.map(row =>
      visibleColumns.map(col => {
        const value = row[col.key];
        return typeof value === 'string' && value.includes(',')
          ? `"${value}"`
          : value;
      }).join(',')
    );

    return [headers, ...rows].join('\n');
  };

  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  // Formatting
  const formatCell = (value: any, column: Column, row: any): string => {
    if (column.formatter) {
      return column.formatter(value, row);
    }

    if (column.type === 'number' && typeof value === 'number') {
      return value.toLocaleString();
    }

    if (column.type === 'date' && value) {
      return new Date(value).toLocaleDateString();
    }

    return value !== null && value !== undefined ? String(value) : '';
  };

  // AI Helper Methods
  const buildSchema = () => {
    return {
      columns: columns.map(col => ({
        key: col.key,
        type: col.type,
        label: col.label,
        examples: data.slice(0, 3).map(row => row[col.key])
      })),
      rowCount: data.length,
      sampleRows: data.slice(0, 5)
    };
  };

  const queryToFilter = async (query: string, schema: any): Promise<any> => {
    const systemPrompt = buildSchemaPrompt(schema);
    const userPrompt = `User query: "${query}"\n\nConvert this to a JSON filter.`;

    const response = await aiClient!.chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ], { temperature: 0.3, maxTokens: 1000 });

    const jsonMatch = response.match(/\{[\s\S]*\}/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : {};
  };

  const buildSchemaPrompt = (schema: any): string => {
    return `You are analyzing a table with these columns:
${schema.columns.map((c: any) => `- ${c.key} (${c.type}): ${c.label}`).join('\n')}

Sample data:
${JSON.stringify(schema.sampleRows, null, 2)}

Convert queries to JSON filters with structure:
{
  "filter": {
    "conditions": [{"column": "...", "operator": "equals|contains|gt|lt", "value": "..."}],
    "operator": "AND|OR"
  },
  "explanation": "..."
}`;
  };

  const applyFilter = (data: any[], filter: any): any[] => {
    if (!filter || !filter.conditions) return data;

    return data.filter(row => {
      const results = filter.conditions.map((cond: any) => {
        const value = row[cond.column];
        switch (cond.operator) {
          case 'equals': return value === cond.value;
          case 'contains': return String(value).toLowerCase().includes(String(cond.value).toLowerCase());
          case 'gt': return Number(value) > Number(cond.value);
          case 'lt': return Number(value) < Number(cond.value);
          case 'gte': return Number(value) >= Number(cond.value);
          case 'lte': return Number(value) <= Number(cond.value);
          default: return true;
        }
      });

      return filter.operator === 'OR' ? results.some(r => r) : results.every(r => r);
    });
  };

  const generateAIInsights = async (schema: any): Promise<any[]> => {
    const systemPrompt = `Analyze this dataset and provide insights.

${JSON.stringify(schema.sampleRows, null, 2)}

Return JSON array:
[{"category": "trends|outliers|patterns", "title": "...", "description": "...", "confidence": 0.85}]`;

    const response = await aiClient!.chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: 'Analyze and provide insights.' }
    ], { temperature: 0.7, maxTokens: 2000 });

    const jsonMatch = response.match(/\[[\s\S]*\]/);
    return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
  };

  return (
    <div className={`smart-datatable ${theme === 'dark' ? 'dark-theme' : ''}`}>
      {/* Header */}
      <div className="datatable-header">
        <div className="header-left">
          {title && <h3>{title}</h3>}
          <span className="datatable-count">{filteredData.length} items</span>
        </div>
        <div className="header-right">
          {aiInsights && (
            <button onClick={generateInsights} disabled={loading}>
              💡 Insights
            </button>
          )}
          <button onClick={() => exportData('csv')}>📥 Export</button>
        </div>
      </div>

      {/* AI Search Bar */}
      {aiSearch && (
        <div className="ai-search-container">
          <div className="search-box">
            <span className="search-icon">🤖</span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAiSearch()}
              placeholder="Ask AI: e.g., show products where price > 100"
              disabled={aiSearchLoading}
            />
            {searchQuery && !aiSearchLoading && (
              <button onClick={handleAiSearch}>🔍 Search</button>
            )}
            {aiSearchLoading && (
              <button disabled>⏳ Processing...</button>
            )}
            {aiFilterActive && (
              <button onClick={clearAiFilter}>✕ Clear</button>
            )}
          </div>
          {aiFilterActive && aiFilterExplanation && (
            <div className="ai-filter-info">
              🤖 {aiFilterExplanation}
            </div>
          )}
        </div>
      )}

      {/* AI Insights Panel */}
      {showInsightsPanel && insights.length > 0 && (
        <div className="insights-panel">
          <div className="insights-header">
            <h4>💡 AI Insights</h4>
            <button onClick={() => setShowInsightsPanel(false)}>×</button>
          </div>
          <div className="insights-content">
            {insights.map((insight, index) => (
              <div key={index} className={`insight-item insight-${insight.category}`}>
                <div className="insight-header">
                  <strong>{insight.title}</strong>
                  <span className="confidence">
                    {(insight.confidence * 100).toFixed(0)}%
                  </span>
                </div>
                <p>{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Data Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {visibleColumns.map(col => (
                <th
                  key={col.key}
                  onClick={() => col.sortable !== false && handleSort(col.key)}
                  style={{ cursor: col.sortable !== false ? 'pointer' : 'default' }}
                >
                  {col.label}
                  {sortKey === col.key && (
                    <span> {sortOrder === 'asc' ? '↑' : '↓'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} onClick={() => onRowClick?.(row)}>
                {visibleColumns.map(col => (
                  <td key={col.key}>
                    {formatCell(row[col.key], col, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};
```

### CSS Styles (SmartDataTable.css)

```css
/* SmartDataTable.css */
.smart-datatable {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
}

.smart-datatable.dark-theme {
  background: #1e1e1e;
  color: #e0e0e0;
}

.datatable-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.datatable-title {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.datatable-count {
  font-size: 14px;
  color: #666;
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
}

.header-right {
  display: flex;
  gap: 8px;
}

.header-right button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.header-right button:hover:not(:disabled) {
  background: #0056b3;
}

.header-right button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.ai-search-container {
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
}

.search-icon {
  font-size: 20px;
}

.search-box input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.search-box input:focus {
  outline: none;
  border-color: #007bff;
}

.search-box button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
}

.search-box button:hover:not(:disabled) {
  background: #0056b3;
}

.search-box button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.ai-filter-info {
  margin-top: 10px;
  padding: 8px 12px;
  background: #e7f3ff;
  border-left: 3px solid #007bff;
  border-radius: 4px;
  font-size: 14px;
}

.insights-panel {
  margin-bottom: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.insights-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.insights-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.insights-header button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.insights-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.insight-item {
  padding: 12px;
  background: white;
  border-radius: 6px;
  border-left: 3px solid #007bff;
}

.insight-item.insight-trends {
  border-left-color: #28a745;
}

.insight-item.insight-outliers {
  border-left-color: #dc3545;
}

.insight-item.insight-patterns {
  border-left-color: #ffc107;
}

.insight-item.insight-recommendations {
  border-left-color: #17a2b8;
}

.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.confidence {
  font-size: 12px;
  color: #666;
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 10px;
}

.insight-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}

.table-container {
  overflow-x: auto;
  margin-bottom: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  background: #f8f9fa;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 2px solid #dee2e6;
  user-select: none;
}

.data-table th:hover {
  background: #e9ecef;
}

.data-table td {
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  font-size: 14px;
}

.data-table tbody tr {
  cursor: pointer;
  transition: background 0.2s;
}

.data-table tbody tr:hover {
  background: #f8f9fa;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.pagination button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.pagination button:hover:not(:disabled) {
  background: #0056b3;
}

.pagination button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 14px;
  color: #666;
}
```

### Usage Example (React)

```typescript
// App.tsx
import React from 'react';
import { SmartDataTable } from './SmartDataTable';

const App: React.FC = () => {
  const aiClient = {
    chat: async (messages: any[], options?: any) => {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages,
          temperature: options?.temperature || 0.7,
          max_tokens: options?.maxTokens || 1000
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    }
  };

  const orders = [
    { id: 1, customer: 'Acme Corp', total: 1299, status: 'Completed', country: 'USA', orderDate: '2024-01-15' },
    { id: 2, customer: 'TechStart', total: 599, status: 'Pending', country: 'India', orderDate: '2024-02-20' },
    { id: 3, customer: 'Global Inc', total: 2499, status: 'Completed', country: 'UK', orderDate: '2024-03-10' },
    { id: 4, customer: 'StartupXYZ', total: 899, status: 'Processing', country: 'India', orderDate: '2024-04-05' },
    { id: 5, customer: 'Enterprise Co', total: 3599, status: 'Completed', country: 'USA', orderDate: '2024-05-12' }
  ];

  const columns = [
    { key: 'id', label: 'Order ID', type: 'number' as const },
    { key: 'customer', label: 'Customer', type: 'string' as const },
    {
      key: 'total',
      label: 'Total',
      type: 'number' as const,
      formatter: (val: number) => `$${val.toFixed(2)}`
    },
    { key: 'status', label: 'Status', type: 'string' as const },
    { key: 'country', label: 'Country', type: 'string' as const },
    { key: 'orderDate', label: 'Order Date', type: 'date' as const }
  ];

  const handleRowClick = (row: any) => {
    console.log('Row clicked:', row);
    alert(`Order #${row.id} - ${row.customer}`);
  };

  const handleAiQuery = (result: any) => {
    console.log('AI Query Result:', result);
  };

  const handleAiInsight = (insights: any[]) => {
    console.log('AI Insights:', insights);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Order Management System</h1>

      <SmartDataTable
        data={orders}
        columns={columns}
        title="Orders"
        aiClient={aiClient}
        aiSearch={true}
        aiInsights={true}
        pagination={true}
        pageSize={10}
        onRowClick={handleRowClick}
        onAiQuery={handleAiQuery}
        onAiInsight={handleAiInsight}
      />
    </div>
  );
};

export default App;
```

---

## 🔌 AI Integration

### Setting Up AIClient

Both Angular and React implementations require an AIClient that implements this interface:

```typescript
interface AIClient {
  chat(messages: Message[], options?: ChatOptions): Promise<string>;
}

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface ChatOptions {
  temperature?: number;
  maxTokens?: number;
  model?: string;
}
```

### OpenAI Implementation

```typescript
class OpenAIClient implements AIClient {
  constructor(private apiKey: string, private model: string = 'gpt-4') {}

  async chat(messages: Message[], options?: ChatOptions): Promise<string> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: options?.model || this.model,
        messages,
        temperature: options?.temperature || 0.7,
        max_tokens: options?.maxTokens || 1000
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }
}

// Usage
const aiClient = new OpenAIClient(process.env.OPENAI_API_KEY!);
```

### Claude (Anthropic) Implementation

```typescript
class ClaudeClient implements AIClient {
  constructor(private apiKey: string, private model: string = 'claude-3-sonnet-20240229') {}

  async chat(messages: Message[], options?: ChatOptions): Promise<string> {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: this.model,
        messages: messages.filter(m => m.role !== 'system'),
        system: messages.find(m => m.role === 'system')?.content,
        max_tokens: options?.maxTokens || 1000,
        temperature: options?.temperature || 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }
}

// Usage
const aiClient = new ClaudeClient(process.env.CLAUDE_API_KEY!);
```

### Ollama (Local) Implementation

```typescript
class OllamaClient implements AIClient {
  constructor(
    private baseUrl: string = 'http://localhost:11434',
    private model: string = 'llama2'
  ) {}

  async chat(messages: Message[], options?: ChatOptions): Promise<string> {
    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: this.model,
        messages,
        stream: false,
        options: {
          temperature: options?.temperature || 0.7,
          num_predict: options?.maxTokens || 1000
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.message.content;
  }
}

// Usage
const aiClient = new OllamaClient('http://localhost:11434', 'llama2');
```

---

## 📊 Complete Examples

### Example 1: E-commerce Orders (React)

```typescript
import React from 'react';
import { SmartDataTable } from './SmartDataTable';
import { OpenAIClient } from './ai-clients';

export const OrdersPage: React.FC = () => {
  const aiClient = new OpenAIClient(process.env.REACT_APP_OPENAI_API_KEY!);

  const orders = [
    { id: 1, customer: 'Acme Corp', product: 'Laptop', total: 1299, status: 'Completed', country: 'USA' },
    { id: 2, customer: 'TechStart', product: 'Mouse', total: 29, status: 'Pending', country: 'India' },
    { id: 3, customer: 'Global Inc', product: 'Monitor', total: 399, status: 'Shipped', country: 'UK' }
  ];

  const columns = [
    { key: 'id', label: 'Order #', type: 'number' as const },
    { key: 'customer', label: 'Customer', type: 'string' as const },
    { key: 'product', label: 'Product', type: 'string' as const },
    {
      key: 'total',
      label: 'Total',
      type: 'number' as const,
      formatter: (val: number) => `$${val.toFixed(2)}`
    },
    { key: 'status', label: 'Status', type: 'string' as const },
    { key: 'country', label: 'Country', type: 'string' as const }
  ];

  return (
    <SmartDataTable
      data={orders}
      columns={columns}
      title="E-commerce Orders"
      aiClient={aiClient}
      aiSearch={true}
      aiInsights={true}
    />
  );
};
```

**Example Queries:**
- "show orders from India"
- "find pending orders"
- "show orders where total > 500"
- "orders from USA or UK"

### Example 2: Customer Support Tickets (Angular)

```typescript
import { Component } from '@angular/core';
import { SmartDatatableComponent } from './smart-datatable.component';
import { OpenAIClient } from './ai-clients';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [SmartDatatableComponent],
  template: `
    <app-smart-datatable
      [data]="tickets"
      [columns]="columns"
      [aiClient]="aiClient"
      [aiSearch]="true"
      [aiInsights]="true"
      title="Support Tickets"
    />
  `
})
export class TicketsComponent {
  aiClient = new OpenAIClient(process.env['OPENAI_API_KEY']!);

  tickets = [
    { id: 1, customer: 'John Doe', subject: 'Login Issue', priority: 'High', status: 'Open' },
    { id: 2, customer: 'Jane Smith', subject: 'Billing Question', priority: 'Medium', status: 'Resolved' },
    { id: 3, customer: 'Bob Johnson', subject: 'Feature Request', priority: 'Low', status: 'Open' }
  ];

  columns = [
    { key: 'id', label: 'Ticket #', type: 'number' as const },
    { key: 'customer', label: 'Customer', type: 'string' as const },
    { key: 'subject', label: 'Subject', type: 'string' as const },
    { key: 'priority', label: 'Priority', type: 'string' as const },
    { key: 'status', label: 'Status', type: 'string' as const }
  ];
}
```

**Example Queries:**
- "show high priority tickets"
- "find open tickets"
- "tickets from John Doe"

---

## 🎯 Summary

### Key Takeaways

1. **Core Logic is Framework-Agnostic**: The AI processing logic (schema building, filter application, insights generation) works the same in Vue, React, and Angular.

2. **AIClient Interface**: All implementations use the same AIClient interface, making it easy to swap AI providers.

3. **State Management**:
   - Vue: `ref()` and `computed()`
   - React: `useState()` and `useMemo()`
   - Angular: Class properties and getters

4. **Component Structure**: All implementations follow the same structure:
   - Header with actions
   - AI search bar
   - Insights panel
   - Data table
   - Pagination

5. **AI Features**:
   - Natural language querying
   - AI insights generation
   - Row agents (can be added)
   - Data transformations (can be added)

### Next Steps

1. **Install dependencies** in your Angular/React project
2. **Copy the component code** and adapt to your needs
3. **Set up AIClient** with your preferred provider
4. **Add custom formatters** and actions
5. **Style to match** your application theme

---

**Built with ❤️ for the AI community**

