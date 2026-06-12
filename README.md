# DocuMind AI - PDF Chatbot



<img width="1859" height="977" alt="image" src="https://github.com/user-attachments/assets/fb7459a2-1473-4935-9d64-dc1a7399a723" />

<img width="1893" height="920" alt="image" src="https://github.com/user-attachments/assets/4869897a-bcc2-4782-b025-a4096358450f" />

<img width="1905" height="912" alt="image" src="https://github.com/user-attachments/assets/99e530e6-aa02-420b-88bc-85d137d35f84" />

<img width="1919" height="962" alt="image" src="https://github.com/user-attachments/assets/102e86ca-00a1-47f2-81c0-b05c81b35aa9" />


An AI-powered PDF chatbot that lets you upload documents and have intelligent conversations about their content. Built with React, TypeScript, and Google Gemini AI.

## Features

- **PDF Upload & Parsing** - Drag and drop PDFs with real-time text extraction using pdf.js
- **AI-Powered Chat** - Ask questions about your documents with streaming responses from Gemini 2.0 Flash
- **Split-Pane Viewer** - Side-by-side PDF viewer and chat interface with page navigation
- **Markdown Responses** - Rich formatted answers with copy, like, and regenerate actions
- **Dark/Light Theme** - Full theme support with smooth transitions
- **Suggested Prompts** - Quick-start buttons like "Summarize this document" and "What are the key points?"
- **Landing Page & Pricing** - Marketing pages with feature highlights and tiered pricing plans

## Tech Stack

- **Frontend** - React 19, TypeScript, React Router
- **Styling** - Tailwind CSS v4 with Material Design 3 color tokens
- **AI** - Google Generative AI SDK (Gemini 2.0 Flash)
- **PDF** - pdfjs-dist for client-side text extraction
- **Build** - Vite 8 with Rolldown bundler
- **Icons** - Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- A [Google Gemini API key](https://aistudio.google.com/apikey)

### Installation

```bash
git clone https://github.com/BlackAlpha-debug/AI-PDF-Chatbot.git
cd AI-PDF-Chatbot
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer
│   ├── ChatWindow.tsx   # Chat container
│   ├── MessageBubble.tsx
│   ├── MessageInput.tsx
│   ├── PDFPreview.tsx
│   ├── PDFViewer.tsx    # Split-pane PDF viewer with page controls
│   ├── ThemeToggle.tsx
│   └── UploadZone.tsx
├── hooks/
│   ├── useGeminiChat.ts  # Gemini streaming chat with conversation history
│   ├── usePDFExtractor.ts
│   └── useTheme.tsx
├── pages/
│   ├── Dashboard.tsx    # Main app with sidebar, chat, and PDF viewer
│   ├── Landing.tsx      # Marketing landing page
│   └── Pricing.tsx      # Pricing tiers (Free / Pro / Enterprise)
├── utils/
│   ├── pdfParser.ts     # pdf.js text extraction with progress
│   └── systemPrompt.ts  # Document analyst system prompt
├── App.tsx              # Router setup
├── main.tsx
└── style.css            # Tailwind imports and custom theme tokens
```

## How It Works

1. **Upload** - Select a PDF via the sidebar; pdf.js extracts all text client-side
2. **Index** - The extracted text (up to 100k characters) is injected into a system prompt
3. **Chat** - Questions are sent to Gemini 2.0 Flash via streaming chat with full conversation history
4. **Review** - View the PDF side-by-side while chatting, with page navigation controls

## License

MIT
