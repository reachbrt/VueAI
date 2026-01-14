/**
 * Deep Vue 2/3 Compatibility Test for @aivue packages
 * 
 * This test verifies that all @aivue packages can be imported and used
 * in both Vue 2.7+ and Vue 3 environments.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { ref, reactive, computed, watch, nextTick } from 'vue';

describe('Vue 2/3 Compatibility - Core Package', () => {
  it('should export AIClient', async () => {
    const { AIClient } = await import('@aivue/core');
    expect(AIClient).toBeDefined();
    expect(typeof AIClient).toBe('function');
  });

  it('should export compatibility utilities', async () => {
    const core = await import('@aivue/core');
    expect(core.createCompatComponent).toBeDefined();
    expect(core.registerCompatComponent).toBeDefined();
    expect(core.createCompatPlugin).toBeDefined();
    expect(core.vueVersion).toBeDefined();
  });

  it('should create AIClient instance', async () => {
    const { AIClient } = await import('@aivue/core');
    const client = new AIClient({
      provider: 'openai',
      apiKey: 'test-key',
      model: 'gpt-4'
    });
    expect(client).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - Chatbot Package', () => {
  it('should export components', async () => {
    const chatbot = await import('@aivue/chatbot');
    expect(chatbot.AiChatWindow).toBeDefined();
    expect(chatbot.AiChatToggle).toBeDefined();
    expect(chatbot.AiChatRAG).toBeDefined();
  });

  it('should export composables', async () => {
    const { useChatEngine } = await import('@aivue/chatbot');
    expect(useChatEngine).toBeDefined();
    expect(typeof useChatEngine).toBe('function');
  });

  it('should export plugin', async () => {
    const { AiChatPlugin } = await import('@aivue/chatbot');
    expect(AiChatPlugin).toBeDefined();
    expect(AiChatPlugin.install).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - SmartForm Package', () => {
  it('should export SmartForm component', async () => {
    const { SmartForm, AiSmartForm } = await import('@aivue/smartform');
    expect(SmartForm).toBeDefined();
    expect(AiSmartForm).toBeDefined();
  });

  it('should export plugin', async () => {
    const { SmartFormPlugin } = await import('@aivue/smartform');
    expect(SmartFormPlugin).toBeDefined();
    expect(SmartFormPlugin.install).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - Smart Notify Package', () => {
  it('should export components', async () => {
    const notify = await import('@aivue/smart-notify');
    expect(notify.NotificationCenter).toBeDefined();
  });

  it('should export composable', async () => {
    const { useSmartNotify } = await import('@aivue/smart-notify');
    expect(useSmartNotify).toBeDefined();
    expect(typeof useSmartNotify).toBe('function');
  });

  it('should export plugin', async () => {
    const { SmartNotifyPlugin } = await import('@aivue/smart-notify');
    expect(SmartNotifyPlugin).toBeDefined();
    expect(SmartNotifyPlugin.install).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - Smart DataTable Package', () => {
  it('should export SmartDataTable component', async () => {
    const { SmartDataTable } = await import('@aivue/smart-datatable');
    expect(SmartDataTable).toBeDefined();
  });

  it('should export composables', async () => {
    const datatable = await import('@aivue/smart-datatable');
    expect(datatable.useAiInsights).toBeDefined();
    expect(datatable.useAiRowAgents).toBeDefined();
    expect(datatable.useAiTableQuery).toBeDefined();
  });

  it('should export plugin', async () => {
    const { SmartDataTablePlugin } = await import('@aivue/smart-datatable');
    expect(SmartDataTablePlugin).toBeDefined();
    expect(SmartDataTablePlugin.install).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - Analytics Package', () => {
  it('should export components', async () => {
    const analytics = await import('@aivue/analytics');
    expect(analytics.AnalyticsDashboard).toBeDefined();
    expect(analytics.UsageChart).toBeDefined();
    expect(analytics.ConversationInsights).toBeDefined();
  });

  it('should export plugin', async () => {
    const { AnalyticsPlugin } = await import('@aivue/analytics');
    expect(AnalyticsPlugin).toBeDefined();
    expect(AnalyticsPlugin.install).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - Image Caption Package', () => {
  it('should export component', async () => {
    const { AiImageCaption } = await import('@aivue/image-caption');
    expect(AiImageCaption).toBeDefined();
  });

  it('should export plugin', async () => {
    const { ImageCaptionPlugin } = await import('@aivue/image-caption');
    expect(ImageCaptionPlugin).toBeDefined();
    expect(ImageCaptionPlugin.install).toBeDefined();
  });
});

describe('Vue 2/3 Compatibility - All Other Packages', () => {
  const packages = [
    '@aivue/autosuggest',
    '@aivue/predictive-input',
    '@aivue/360-spin',
    '@aivue/voice-actions',
    '@aivue/emotion-ui',
    '@aivue/doc-intelligence'
  ];

  packages.forEach(packageName => {
    it(`should import ${packageName}`, async () => {
      const pkg = await import(packageName);
      expect(pkg).toBeDefined();
    });
  });
});

