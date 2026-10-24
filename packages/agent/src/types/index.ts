import type { Component } from 'vue';

export type AgentStatus = 'idle' | 'running' | 'awaiting-approval' | 'complete' | 'error';

export type AgentRole = 'user' | 'assistant' | 'system';

export interface TextPart {
  type: 'text';
  text: string;
}

export interface ReasoningPart {
  type: 'reasoning';
  text: string;
  done: boolean;
}

export interface ToolPart {
  type: 'tool';
  id: string;
  name: string;
  argsText: string;
  args?: Record<string, unknown>;
  status: 'running' | 'done' | 'error';
  result?: unknown;
}

export interface ApprovalPart {
  type: 'approval';
  id: string;
  title: string;
  detail: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface UiPart {
  type: 'ui';
  name: string;
  props: Record<string, unknown>;
}

export interface SourceItem {
  title: string;
  href?: string;
}

export interface SourcesPart {
  type: 'sources';
  items: SourceItem[];
}

export type PlanStepStatus = 'pending' | 'active' | 'done';

export interface PlanStep {
  id: string;
  title: string;
  status: PlanStepStatus;
}

export interface PlanPart {
  type: 'plan';
  title?: string;
  steps: PlanStep[];
}

export interface SuggestionsPart {
  type: 'suggestions';
  items: string[];
}

export type AgentPart =
  | TextPart
  | ReasoningPart
  | ToolPart
  | ApprovalPart
  | UiPart
  | SourcesPart
  | PlanPart
  | SuggestionsPart;

export interface AgentMessage {
  id: string;
  role: AgentRole;
  parts: AgentPart[];
  createdAt: number;
}

export interface AgentRunState {
  status: AgentStatus;
  messages: AgentMessage[];
  sharedState: Record<string, unknown>;
  error?: string;
  seq: number;
}

export type AgUiEvent =
  | { type: 'RUN_STARTED' }
  | { type: 'RUN_FINISHED' }
  | { type: 'RUN_ERROR'; message: string }
  | { type: 'TEXT_MESSAGE_CONTENT'; delta: string }
  | { type: 'REASONING_MESSAGE_CONTENT'; delta: string }
  | { type: 'REASONING_END' }
  | { type: 'TOOL_CALL_START'; id: string; name: string }
  | { type: 'TOOL_CALL_ARGS'; id: string; delta: string }
  | { type: 'TOOL_CALL_END'; id: string; result?: unknown }
  | { type: 'APPROVAL_REQUEST'; id: string; title: string; detail: string }
  | { type: 'UI'; name: string; props?: Record<string, unknown> }
  | { type: 'SOURCES'; items: SourceItem[] }
  | { type: 'PLAN'; title?: string; steps: PlanStep[] }
  | { type: 'PLAN_STEP'; id: string; status: PlanStepStatus }
  | { type: 'SUGGESTIONS'; items: string[] }
  | { type: 'STATE_SNAPSHOT'; snapshot: Record<string, unknown> }
  | { type: 'STATE_DELTA'; delta: Record<string, unknown> };

export type AgentToolHandler = (args: Record<string, unknown>) => unknown;

export type AgentComponentMap = Record<string, Component>;
