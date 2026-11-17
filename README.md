# AI-Powered Evangadi Forum

A full-stack question-and-answer forum with AI built in. Users can ask and answer questions, discover related content by meaning rather than keywords, get AI suggestions while writing, and upload private PDFs to search and chat with them using Retrieval-Augmented Generation (RAG).

This project combines a modern React frontend, a Node.js/Express backend, MySQL persistence, and Google Gemini-powered semantic search and AI assistance.

---

## Features

### Community forum

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Ask, answer, edit, and delete questions and answers
- Markdown-based Q&A experience with rich formatting support
- Syntax-highlighted code blocks with copy support
- Personalized “My Questions” dashboard

### AI-powered discovery

- Semantic search for questions using embeddings
- Related-question suggestions based on similarity
- AI Draft Coach for improving a question before posting
- Answer Fit evaluation to check how well a response addresses the original question

### Knowledge base (RAG)

- Upload private PDFs up to 10 MB each
- Search within a selected PDF semantically
- Ask the AI grounded questions based on the PDF content
- Source-backed responses with numbered references

---

## Tech stack

| Layer          | Technology                                                         |
| -------------- | ------------------------------------------------------------------ |
| Frontend       | React 19, Vite, React Router, Axios, React Markdown, Framer Motion |
| Backend        | Node.js, Express 5, JWT, bcryptjs, multer                          |
| Database       | MySQL 8                                                            |
| AI             | Google Gemini (`@google/genai`) for embeddings and generation      |
| PDF processing | `pdf-parse` and document chunking                                  |
| Hosting        | Railway (backend + database), Vercel (frontend)                    |
| Testing        | Vitest + Testing Library (frontend), Node test runner (backend)    |

---

## System overview

```text
Browser (React + Vite)
      |
      | HTTPS / JSON + JWT
      v
Express API ───────────────► Google Gemini API
   |                             (embeddings, text generation)
   |
   |─ PDF files on disk (uploads/)
   v
MySQL (users, questions, answers, documents, chunks, vectors)
```

---

## Prerequisites

Before running the app locally, make sure you have:

- Node.js 20 or newer
- MySQL 8 installed locally or via XAMPP/WAMP
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/)
- Git

---

## Getting started locally

### 1. Clone the repository

```bash
git clone https://github.com/walidabdulkadir/AI-FORUM.git
cd AI-FORUM
```

### 2. Create the database

Create an empty MySQL database for the app:

```bash
mysql -u root -p -e "CREATE DATABASE evangadi_forum CHARACTER SET utf8mb4;"
```

Then import the schema file:

```bash
mysql -u root -p evangadi_forum < backend/db/schema.sql
```

If you are using phpMyAdmin, create the database manually and import `backend/db/schema.sql` using the Import tab.

> Important: the schema file uses `DROP TABLE IF EXISTS`, so re-importing it will erase existing data in that database.

---

## Running checks

### Frontend build

```bash
cd frontend
npm install
npm run build
```

### Backend startup

```bash
cd backend
npm install
npm run dev
```

---

## Deployment

This project is designed for a simple deployment setup:

- Frontend: Vercel
- Backend: Railway
- Database: MySQL on Railway or a managed MySQL provider
- AI service: Google Gemini through your API key

---

## Contributing

Contributions are welcome.

If you want to help:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the relevant checks
5. Open a pull request with a clear description
