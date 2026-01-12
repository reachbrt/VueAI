# 🚀 Quick Start Guide - Creating Angular & React Versions

> **Fast-track guide for creating AngularAI and ReactAI projects based on AIVue packages**

---

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- Basic knowledge of Angular/React
- OpenAI/Claude/Gemini API keys

---

## 🎯 Angular Version (AngularAI)

### Step 1: Create Project

```bash
# Create Angular workspace
ng new angularai --routing --style=scss
cd angularai

# Create library workspace structure
ng generate library @angularai/core --prefix=ai
ng generate library @angularai/chatbot --prefix=ai
ng generate library @angularai/autosuggest --prefix=ai
ng generate library @angularai/smartform --prefix=ai
ng generate library @angularai/analytics --prefix=ai
ng generate library @angularai/image-caption --prefix=ai
ng generate library @angularai/emotion-ui --prefix=ai
ng generate library @angularai/doc-intelligence --prefix=ai
ng generate library @angularai/predictive-input --prefix=ai
ng generate library @angularai/smart-notify --prefix=ai
ng generate library @angularai/voice-actions --prefix=ai
ng generate library @angularai/smart-datatable --prefix=ai
ng generate library @angularai/360-spin --prefix=ai
```

### Step 2: Implement Core Service

```typescript
// projects/angularai-core/src/lib/services/ai-client.service.ts
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

export interface AIConfig {
  provider: 'openai' | 'claude' | 'gemini' | 'ollama';
  apiKey: string;
  model?: string;
}

@Injectable({ providedIn: 'root' })
export class AIClientService {
  private config!: AIConfig;

  configure(config: AIConfig): void {
    this.config = config;
  }

  chat(messages: any[]): Observable<string> {
    return from(this.chatAsync(messages));
  }

  private async chatAsync(messages: any[]): Promise<string> {
    const endpoint = this.getEndpoint();
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        messages,
        model: this.config.model || this.getDefaultModel()
      })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
  }

  private getEndpoint(): string {
    const endpoints = {
      openai: 'https://api.openai.com/v1/chat/completions',
      claude: 'https://api.anthropic.com/v1/messages',
      gemini: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
      ollama: 'http://localhost:11434/api/chat'
    };
    return endpoints[this.config.provider];
  }

  private getDefaultModel(): string {
    const models = {
      openai: 'gpt-4o',
      claude: 'claude-3-7-sonnet-20250219',
      gemini: 'gemini-pro',
      ollama: 'llama2'
    };
    return models[this.config.provider];
  }
}
```

### Step 3: Create Chatbot Component

```bash
ng generate component chat-window --project=angularai-chatbot
```

```typescript
// projects/angularai-chatbot/src/lib/components/chat-window/chat-window.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { AIClientService } from '@angularai/core';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  selector: 'ai-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Input() provider: 'openai' | 'claude' | 'gemini' = 'openai';
  @Input() apiKey: string = '';
  @Input() model: string = 'gpt-4o';

  messages: Message[] = [];
  input: string = '';
  isLoading: boolean = false;

  constructor(private aiClient: AIClientService) {}

  ngOnInit(): void {
    this.aiClient.configure({
      provider: this.provider,
      apiKey: this.apiKey,
      model: this.model
    });
  }

  sendMessage(): void {
    if (!this.input.trim()) return;

    this.messages.push({
      id: Date.now(),
      role: 'user',
      content: this.input
    });

    this.isLoading = true;
    const userInput = this.input;
    this.input = '';

    this.aiClient.chat([
      { role: 'user', content: userInput }
    ]).subscribe({
      next: (response) => {
        this.messages.push({
          id: Date.now(),
          role: 'assistant',
          content: response
        });
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    });
  }
}
```

### Step 4: Build & Publish

```bash
# Build all libraries
ng build @angularai/core
ng build @angularai/chatbot
# ... build others

# Publish to NPM
cd dist/angularai-core
npm publish --access public

cd ../angularai-chatbot
npm publish --access public
```

---

## ⚛️ React Version (ReactAI)

### Step 1: Create Project

```bash
# Create React project with Vite
npm create vite@latest reactai -- --template react-ts
cd reactai

# Set up monorepo
mkdir -p packages/{core,chatbot,autosuggest,smartform,analytics}
```

### Step 2: Configure Workspace

```json
// package.json (root)
{
  "name": "reactai",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev": "vite",
    "build": "npm run build --workspaces",
    "build:core": "npm run build --workspace @reactai/core"
  }
}
```

### Step 3: Implement Core Hook

```typescript
// packages/core/src/hooks/useAIClient.ts
import { useState, useCallback } from 'react';

export interface AIConfig {
  provider: 'openai' | 'claude' | 'gemini';
  apiKey: string;
  model?: string;
}

export function useAIClient(config: AIConfig) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const chat = useCallback(async (messages: any[]): Promise<string> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(getEndpoint(config.provider), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`
        },
        body: JSON.stringify({
          messages,
          model: config.model || getDefaultModel(config.provider)
        })
      });

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, [config]);

  return { chat, isLoading, error };
}

function getEndpoint(provider: string): string {
  const endpoints: Record<string, string> = {
    openai: 'https://api.openai.com/v1/chat/completions',
    claude: 'https://api.anthropic.com/v1/messages',
    gemini: 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent'
  };
  return endpoints[provider];
}

function getDefaultModel(provider: string): string {
  const models: Record<string, string> = {
    openai: 'gpt-4o',
    claude: 'claude-3-7-sonnet-20250219',
    gemini: 'gemini-pro'
  };
  return models[provider];
}
```

### Step 4: Create Chatbot Component

```typescript
// packages/chatbot/src/components/ChatWindow.tsx
import React, { useState } from 'react';
import { useAIClient } from '@reactai/core';
import './ChatWindow.css';

export interface ChatWindowProps {
  provider: 'openai' | 'claude' | 'gemini';
  apiKey: string;
  model?: string;
}

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  provider,
  apiKey,
  model = 'gpt-4o'
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const { chat, isLoading } = useAIClient({ provider, apiKey, model });

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await chat([
        { role: 'user', content: userMessage.content }
      ]);

      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'assistant',
        content: response
      }]);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};
```

### Step 5: Build & Publish

```bash
# Build all packages
npm run build --workspaces

# Publish to NPM
cd packages/core
npm publish --access public

cd ../chatbot
npm publish --access public
```

---

## 📦 Package Checklist

For each package, ensure you have:

- [ ] **package.json** with correct metadata
- [ ] **README.md** with usage examples
- [ ] **TypeScript types** exported
- [ ] **CSS files** (if applicable)
- [ ] **Build configuration** (vite.config.ts or tsconfig.json)
- [ ] **Tests** (unit tests)
- [ ] **Examples** in demo app
- [ ] **CHANGELOG.md** for version history

---

## 🎨 Styling Approach

### Vue (AIVue)
```vue
<style scoped>
.chat-window { /* styles */ }
</style>
```

### Angular (AngularAI)
```scss
// component.scss
.chat-window { /* styles */ }
```

### React (ReactAI)
```css
/* ChatWindow.css */
.chat-window { /* styles */ }
```

**Or use CSS-in-JS**:
```typescript
import styled from 'styled-components';

const ChatWindow = styled.div`
  /* styles */
`;
```

---

## 🔑 Environment Variables

### Vue
```bash
# .env
VITE_OPENAI_API_KEY=sk-...
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

```typescript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

### Angular
```typescript
// environment.ts
export const environment = {
  production: false,
  openaiApiKey: 'sk-...',
  anthropicApiKey: 'sk-ant-...'
};
```

```typescript
import { environment } from '../environments/environment';
const apiKey = environment.openaiApiKey;
```

### React
```bash
# .env
VITE_OPENAI_API_KEY=sk-...
VITE_ANTHROPIC_API_KEY=sk-ant-...
```

```typescript
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
```

---

## 🚀 Deployment

### Build Demo

**Vue**:
```bash
cd demo
npm run build
```

**Angular**:
```bash
ng build --configuration production
```

**React**:
```bash
npm run build
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

---

## 📊 Testing

### Vue (Vitest)
```bash
npm install -D vitest @vue/test-utils
```

```typescript
// test.spec.ts
import { mount } from '@vue/test-utils';
import ChatWindow from './ChatWindow.vue';

describe('ChatWindow', () => {
  it('renders correctly', () => {
    const wrapper = mount(ChatWindow);
    expect(wrapper.exists()).toBe(true);
  });
});
```

### Angular (Jasmine/Karma)
```typescript
// component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatWindowComponent } from './chat-window.component';

describe('ChatWindowComponent', () => {
  let component: ChatWindowComponent;
  let fixture: ComponentFixture<ChatWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWindowComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatWindowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### React (Jest + React Testing Library)
```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

```typescript
// ChatWindow.test.tsx
import { render, screen } from '@testing-library/react';
import { ChatWindow } from './ChatWindow';

describe('ChatWindow', () => {
  it('renders correctly', () => {
    render(<ChatWindow provider="openai" apiKey="test" />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

---

## 🎯 Next Steps

1. **Implement all 17 packages** following the patterns above
2. **Create comprehensive demos** for each package
3. **Write documentation** (README, API docs, examples)
4. **Add tests** for all components and utilities
5. **Publish to NPM** with proper versioning
6. **Deploy demos** to Netlify/Vercel
7. **Create GitHub repository** with proper structure
8. **Add CI/CD** for automated testing and deployment

---

## 📚 Resources

- **Vue Documentation**: https://vuejs.org/
- **Angular Documentation**: https://angular.io/
- **React Documentation**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **Vite**: https://vitejs.dev/
- **NPM Publishing**: https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry

---

## 💡 Tips

1. **Start with Core** - Always implement @core package first
2. **Reuse Logic** - Extract common functionality to utilities
3. **Type Everything** - Use TypeScript for better DX
4. **Document Well** - Good docs = happy users
5. **Test Thoroughly** - Prevent bugs before they happen
6. **Version Carefully** - Follow SemVer strictly
7. **Monitor Usage** - Track downloads and issues

---

**Good luck building AngularAI and ReactAI! 🚀**
