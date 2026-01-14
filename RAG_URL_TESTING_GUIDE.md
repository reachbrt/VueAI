# RAG URL Testing Guide

## ✅ What Was Fixed

I've enhanced the RAG (Retrieval-Augmented Generation) plugin in the demo to ensure URLs added to the knowledge base are properly fetched, processed, and used to answer user questions.

### Changes Made:

1. **Enhanced Logging** - Added comprehensive console logging throughout the RAG pipeline:
   - `packages/chatbot/src/utils/rag.ts` - URL fetching with detailed status
   - `packages/chatbot/src/composables/useRAG.ts` - Document processing and context retrieval
   - `demo/src/components/RAGDemo.vue` - User feedback and debugging

2. **Improved Error Handling** - Better error messages and user feedback when:
   - URL fetching fails (CORS issues, network errors)
   - Content extraction fails
   - Document processing fails

3. **Better User Feedback** - Enhanced alerts showing:
   - Document details (name, chunks, word count)
   - Suggested questions to ask
   - Detailed error messages with troubleshooting tips

## 🧪 How to Test

### Method 1: Using the Demo (Recommended)

1. **Start the demo server** (already running on http://localhost:8080)

2. **Navigate to the RAG Demo page**

3. **Add a URL to the knowledge base:**
   - Click "🔗 Add Sample URL" button, OR
   - Use the URL input field in the knowledge base panel
   - Enter a URL (e.g., `https://aivue.netlify.app/`)
   - Click "Add URL"

4. **Check the browser console** (F12 → Console tab) to see:
   ```
   🔗 Fetching URL: https://aivue.netlify.app/
   📡 Attempting direct fetch...
   ✅ Direct fetch successful! Content length: XXXX characters
   📝 Converting HTML to text...
   ✅ Text extracted successfully! Length: XXXX characters, Words: ~XXX
   📚 useRAG: Adding URL to knowledge base: https://aivue.netlify.app/
   📄 useRAG: Content fetched, length: XXXX characters
   📝 useRAG: Processing document as: AIVue Demo Site
   ✅ useRAG: Document added successfully! ID: doc-xxx, Chunks: XX
   ```

5. **Ask questions about the URL content:**
   - Type a question in the chat: "What is AIVue?"
   - Check console for context retrieval:
   ```
   🔍 useRAG: Retrieving context for query: "What is AIVue?"
   📚 useRAG: Knowledge base has 1 documents
   📊 useRAG: Retrieved 3 relevant chunks
   📝 useRAG: Context preview: [From AIVue Demo Site]: ...
   ```

6. **Verify the AI response** uses the knowledge base content

### Method 2: Using the Test Page

1. **Open the test page:**
   ```bash
   open tests/rag-url-test.html
   ```

2. **Enter a URL** in the input field

3. **Click "Test Fetch"** to see:
   - URL fetching process
   - Content extraction
   - Chunking results
   - Preview of fetched content

### Method 3: Manual Console Testing

1. **Open browser console** on the demo page

2. **Run these commands:**
   ```javascript
   // Import RAG utilities
   const { fetchUrlContent, chunkText } = await import('@aivue/chatbot');
   
   // Test URL fetching
   const content = await fetchUrlContent('https://aivue.netlify.app/');
   console.log('Content length:', content.length);
   console.log('Preview:', content.substring(0, 500));
   
   // Test chunking
   const chunks = chunkText(content, 'test-doc', 'Test Document');
   console.log('Chunks created:', chunks.length);
   ```

## 📊 Expected Behavior

### When Adding a URL:

1. **Direct Fetch Attempt** - Tries to fetch the URL directly
2. **CORS Proxy Fallback** - If direct fetch fails, uses `api.allorigins.win` proxy
3. **HTML to Text Conversion** - Extracts readable text from HTML
4. **Chunking** - Splits content into 500-word chunks with 50-word overlap
5. **Storage** - Saves to localStorage with key `aivue-demo-rag-kb`
6. **Success Feedback** - Shows alert with document details

### When Asking Questions:

1. **Query Analysis** - User question is analyzed
2. **Context Retrieval** - Top 3 most relevant chunks are retrieved using TF-IDF
3. **Context Injection** - Retrieved chunks are added to the AI prompt
4. **Strict Instructions** - AI is instructed to ONLY use knowledge base context
5. **Response Generation** - AI answers based on the provided context

### If No Relevant Context Found:

The AI will respond with: **"I can only answer from the context of knowledge base data."**

## 🔍 Debugging Tips

### Check Console Logs:

All RAG operations are logged with emojis for easy identification:
- 🔗 URL fetching
- 📡 Network requests
- ✅ Success messages
- ❌ Error messages
- 📚 Knowledge base operations
- 🔍 Context retrieval
- 📊 Statistics

### Common Issues:

1. **CORS Errors** - The proxy should handle this automatically
2. **Empty Content** - Some sites may block scraping
3. **No Relevant Chunks** - Try more specific questions
4. **API Key Missing** - Ensure environment variables are set

### Verify Knowledge Base:

```javascript
// Check localStorage
const kb = JSON.parse(localStorage.getItem('aivue-demo-rag-kb') || '[]');
console.log('Knowledge base documents:', kb.length);
console.log('Total chunks:', kb.reduce((sum, doc) => sum + doc.chunks.length, 0));
```

## ✨ Features

- ✅ **Automatic CORS Handling** - Uses proxy when needed
- ✅ **HTML to Text Conversion** - Extracts clean text from web pages
- ✅ **Smart Chunking** - Preserves paragraph boundaries
- ✅ **TF-IDF Retrieval** - Finds most relevant content
- ✅ **Strict Context Mode** - AI only uses knowledge base
- ✅ **Persistent Storage** - Knowledge base saved in localStorage
- ✅ **Comprehensive Logging** - Full visibility into the process

## 🎯 Test URLs

Try these URLs to test the RAG functionality:

1. **AIVue Demo** - `https://aivue.netlify.app/`
2. **Wikipedia** - `https://en.wikipedia.org/wiki/Artificial_intelligence`
3. **GitHub README** - `https://raw.githubusercontent.com/reachbrt/vueai/main/README.md`

## 📝 Notes

- The RAG implementation uses **localStorage** for persistence
- Documents are chunked into **500-word segments** with **50-word overlap**
- By default, **top 3 chunks** are retrieved for each query
- The AI is **strictly instructed** to only use knowledge base context
- URL fetching supports **CORS proxy fallback** for restricted sites

