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
        {/* ቀጣይ Sections እዚህ ይገባሉ */}
      </main>
    </div>
  );
}