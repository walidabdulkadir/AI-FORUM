import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  MessageSquare,
  Search,
  PenSquare,
  Library,
  ArrowRight,
  CheckCircle2,
  Layers,
  FileText,
  Database,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const scrollToHowItWorks = () => {
    document
      .getElementById('how-it-works')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCourseRag = () => {
    document
      .getElementById('course-rag')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-orange-100 selection:text-orange-900">
      {/* 1. HEADER SECTION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            aria-label="Evangadi Forum home"
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <span
              aria-hidden
              className="w-9 h-9 rounded-lg bg-orange-500 text-white flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors"
            >
              <MessageSquare size={20} strokeWidth={2} />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 leading-tight">
                Evangadi Forum
              </span>
              <span className="text-[11px] text-slate-500 leading-tight">
                Learn together. Ask with context.
              </span>
            </span>
          </button>

          <nav aria-label="Marketing" className="hidden md:flex items-center gap-7">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Overview
            </button>
            <button
              type="button"
              onClick={scrollToCourseRag}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Course RAG
            </button>
            <button
              type="button"
              onClick={scrollToHowItWorks}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              How it works
            </button>
          </nav>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-sm transition-colors"
              >
                Open forum
                <ArrowRight size={16} aria-hidden />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => navigate('/auth')}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/auth')}
                  className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-sm transition-colors"
                >
                  Create account
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main>
    {/* 2. HERO SECTION */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <Motion.p
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Sparkles size={14} aria-hidden />
                Keyword search + embedding similarity
              </Motion.p>
              <Motion.h1
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                A calm place for{' '}
                <span className="text-orange-500">technical Q&A</span>
              </Motion.h1>
              <Motion.p
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Post with enough context for peers to help in one pass. Search
                the archive by phrase or by meaning, keep your threads in one
                place, and ground questions in{' '}
                <strong className="font-semibold text-slate-900">
                  course documents
                </strong>{' '}
                with retrieval-augmented generation (RAG) so answers cite the
                right syllabus, readings, and handouts.
              </Motion.p>
              <Motion.div
                className="flex flex-wrap items-center gap-3.5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <button
                  type="button"
                  onClick={() =>
                    navigate(isAuthenticated ? '/dashboard' : '/auth')
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-sm transition-colors"
                >
                  {isAuthenticated ? 'Go to home' : 'Get started'}
                  <ArrowRight size={16} aria-hidden />
                </button>
                {!isAuthenticated && (
                  <button
                    type="button"
                    onClick={scrollToHowItWorks}
                    className="px-5 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors"
                  >
                    See how it works
                  </button>
                )}
              </Motion.div>
            </div>

            <aside
              aria-label="What you get"
              className="lg:col-span-5 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                At a glance
              </p>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    aria-hidden
                    className="text-orange-500 shrink-0 mt-0.5"
                  />
                  <span>Markdown threads and replies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    aria-hidden
                    className="text-orange-500 shrink-0 mt-0.5"
                  />
                  <span>Semantic search on question embeddings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    aria-hidden
                    className="text-orange-500 shrink-0 mt-0.5"
                  />
                  <span>Optional AI draft tips when you ask or answer</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    aria-hidden
                    className="text-orange-500 shrink-0 mt-0.5"
                  />
                  <span className="leading-relaxed">
                    <strong className="font-semibold text-slate-900">
                      Course RAG:
                    </strong>{' '}
                    upload or sync course materials, retrieve the best chunks
                    for each question, and answer with citations, not generic
                    web text.
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}