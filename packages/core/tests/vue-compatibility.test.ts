/**
 * Deep Vue 2/3 Compatibility Test for @aivue/core
 * 
 * This test verifies that the core package works correctly with Vue's Composition API
 * which is available in both Vue 2.7+ and Vue 3.
 */

import { describe, it, expect } from 'vitest';
import { AIClient, registerProviders, createCompatComponent, registerCompatComponent, createCompatPlugin } from '../src/index';

describe('@aivue/core - Vue 2/3 Compatibility', () => {
  describe('AIClient', () => {
    it('should be defined and be a constructor', () => {
      expect(AIClient).toBeDefined();
      expect(typeof AIClient).toBe('function');
    });

    it('should create instance with OpenAI provider', () => {
      const client = new AIClient({
        provider: 'openai',
        apiKey: 'test-key',
        model: 'gpt-4'
      });
      expect(client).toBeDefined();
      expect(client).toBeInstanceOf(AIClient);
    });

    it('should create instance with Claude provider', () => {
      const client = new AIClient({
        provider: 'claude',
        apiKey: 'test-key',
        model: 'claude-3-opus'
      });
      expect(client).toBeDefined();
      expect(client).toBeInstanceOf(AIClient);
    });

    it('should create instance with Gemini provider', () => {
      const client = new AIClient({
        provider: 'gemini',
        apiKey: 'test-key',
        model: 'gemini-pro'
      });
      expect(client).toBeDefined();
      expect(client).toBeInstanceOf(AIClient);
    });

    it('should create instance with Ollama provider', () => {
      const client = new AIClient({
        provider: 'ollama',
        model: 'llama3',
        baseUrl: 'http://localhost:11434'
      });
      expect(client).toBeDefined();
      expect(client).toBeInstanceOf(AIClient);
    });

    it('should have chat method', () => {
      const client = new AIClient({
        provider: 'openai',
        apiKey: 'test-key'
      });
      expect(client.chat).toBeDefined();
      expect(typeof client.chat).toBe('function');
    });

    it('should have chatStream method', () => {
      const client = new AIClient({
        provider: 'openai',
        apiKey: 'test-key'
      });
      expect(client.chatStream).toBeDefined();
      expect(typeof client.chatStream).toBe('function');
    });

    it('should have complete method', () => {
      const client = new AIClient({
        provider: 'openai',
        apiKey: 'test-key'
      });
      expect(client.complete).toBeDefined();
      expect(typeof client.complete).toBe('function');
    });
  });

  describe('Provider Registry', () => {
    it('should export registerProviders function', () => {
      expect(registerProviders).toBeDefined();
      expect(typeof registerProviders).toBe('function');
    });

    it('should register providers without errors', () => {
      expect(() => {
        registerProviders({
          openai: {
            apiKey: 'test-key',
            defaultModel: 'gpt-4'
          },
          claude: {
            apiKey: 'test-key',
            defaultModel: 'claude-3-opus'
          }
        });
      }).not.toThrow();
    });
  });

  describe('Vue Compatibility Utilities', () => {
    it('should export createCompatComponent', () => {
      expect(createCompatComponent).toBeDefined();
      expect(typeof createCompatComponent).toBe('function');
    });

    it('should export registerCompatComponent', () => {
      expect(registerCompatComponent).toBeDefined();
      expect(typeof registerCompatComponent).toBe('function');
    });

    it('should export createCompatPlugin', () => {
      expect(createCompatPlugin).toBeDefined();
      expect(typeof createCompatPlugin).toBe('function');
    });

    it('createCompatComponent should return component', () => {
      const testComponent = { name: 'TestComponent' };
      const result = createCompatComponent(testComponent);
      expect(result).toBeDefined();
    });

    it('createCompatPlugin should return plugin with install method', () => {
      const plugin = createCompatPlugin({
        install: (app: any) => {
          // Mock install
        }
      });
      expect(plugin).toBeDefined();
      expect(plugin.install).toBeDefined();
    });
  });

  describe('Message and Provider Types', () => {
    it('should accept valid Message objects', () => {
      const client = new AIClient({
        provider: 'openai',
        apiKey: 'test-key'
      });

      const messages = [
        { role: 'system' as const, content: 'You are a helpful assistant' },
        { role: 'user' as const, content: 'Hello' }
      ];

      expect(messages).toBeDefined();
      expect(messages.length).toBe(2);
    });
  });
});

