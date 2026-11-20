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

        {/* 3. COURSE RAG SECTION */}
        <section
          id="course-rag"
          aria-labelledby="rag-heading"
          className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-100"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-2">
              Retrieval-augmented generation
            </p>
            <h2
              id="rag-heading"
              className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3"
            >
              How course RAG works with the forum
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mb-10">
              Forum search already helps you find <em>similar questions</em>{' '}
              from peers. RAG goes further: it finds{' '}
              <em>evidence inside your own documents</em> (readings, rubrics,
              lab specs) and surfaces those snippets when you write or review an
              answer. That keeps AI assistance on-policy for Evangadi-style
              courses and reduces “confident but wrong” generic answers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                >
                  <FileText size={20} />
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Ingest & chunk
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Upload or connect course files; split them into overlapping
                  chunks and store embeddings the same way we already embed
                  questions, so retrieval stays fast and auditable.
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                >
                  <Database size={20} />
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Retrieve at question time
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When you open Ask or run a search, the app pulls the
                  top-matching chunks from the cohort corpus (with scores), not
                  just other threads. That is ideal for “what does the syllabus
                  say about…” style questions.
                </p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
                <span
                  aria-hidden
                  className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                >
                  <Sparkles size={20} />
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Grounded responses
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Downstream prompts quote or summarize only from retrieved
                  spans, with room for instructors to review sources. The UI
                  makes it obvious when an answer drew on RAG versus peer
                  replies alone.
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-xl p-4 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Live forum threads, semantic question search, draft/fit AI
              helpers, and this RAG pipeline work together: uploads and access
              control live in the Knowledge base per cohort, and RAG-backed
              context shows up in the same thread view you already use.
            </div>
          </div>
        </section>

        {/* 4. COHORT COURSEWORK SECTION */}
        {!isAuthenticated && (
          <>
            <section className="py-16 sm:py-20 bg-white">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
                  Built for cohort coursework
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-10">
                  Same patterns you use after sign-in, without a separate
                  “marketing product.”
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <article className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                    <div
                      aria-hidden
                      className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                    >
                      <Search size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Find related work
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Keyword filters for exact matches, plus similarity search
                      when you are still shaping the right vocabulary.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                    <div
                      aria-hidden
                      className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                    >
                      <MessageSquare size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Readable threads
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Questions and answers stay structured so the group can
                      reuse explanations before exams and interviews.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                    <div
                      aria-hidden
                      className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                    >
                      <Sparkles size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      Lightweight AI help
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Suggestions on your question draft and a quick relevance
                      check on answer drafts. Always your choice to apply or
                      post.
                    </p>
                  </article>

                  <article className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                    <div
                      aria-hidden
                      className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4"
                    >
                      <Layers size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      RAG over your course library
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Instructors and cohorts add PDFs, syllabi, and notes into
                      a controlled corpus. When you ask, the system retrieves
                      the most relevant passages and attaches them to the
                      prompt, so explanations stay tied to your class materials,
                      not the open web.
                    </p>
                  </article>
                </div>
              </div>
            </section>
          </>
        )}

 {/* 5. HOW IT WORKS SECTION */}
            <section
              id="how-it-works"
              aria-labelledby="how-heading"
              className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                  id="how-heading"
                  className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2"
                >
                  How it works
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mb-10">
                  Four steps from question to searchable knowledge for the next
                  person.
                </p>

                <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <li className="bg-white border border-slate-200/80 rounded-2xl p-6 flex items-start gap-4">
                    <span
                      aria-hidden
                      className="w-9 h-9 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <PenSquare size={18} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        Ask with context
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Title, environment, errors, and what you tried, so peers
                        reproduce before they teach.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white border border-slate-200/80 rounded-2xl p-6 flex items-start gap-4">
                    <span
                      aria-hidden
                      className="w-9 h-9 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <MessageSquare size={18} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        Get answers
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Replies live in one thread with markdown and code
                        blocks, visible to everyone in the cohort.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white border border-slate-200/80 rounded-2xl p-6 flex items-start gap-4">
                    <span
                      aria-hidden
                      className="w-9 h-9 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <Search size={18} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        Search two ways
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Classic text search on the feed, or semantic search when
                        you want “questions like this one.”
                      </p>
                    </div>
                  </li>

                  <li className="bg-white border border-slate-200/80 rounded-2xl p-6 flex items-start gap-4">
                    <span
                      aria-hidden
                      className="w-9 h-9 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <Library size={18} />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">
                        Own your trail
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Your topics list keeps authorship clear. The Knowledge
                        base hosts uploads and RAG retrieval so answers can cite
                        your materials. See{' '}
                        <strong className="font-semibold text-slate-900">
                          Course RAG
                        </strong>{' '}
                        above for the full pipeline.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>


{/* Commit 6: Final CTA Section */}
            <section className="py-16 sm:py-20 bg-slate-50/70">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 text-center shadow-xs">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2.5">
                    Ready when you are
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto mb-7">
                    Create a free learner account to post, reply, and search the
                    forum index.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/auth')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-sm transition-colors"
                  >
                    Create free account
                    <ArrowRight size={16} aria-hidden />
                  </button>
                </div>
              </div>
            </section>
        
        {isAuthenticated && (
          <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-[11px] font-bold uppercase tracking-wider text-orange-600 mb-2">
                Signed in
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Back to your workspace
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mb-7">
                Home has the live feed, shortcuts, and search. Your topics lists
                only threads you started. Course-document RAG (ingest, retrieve,
                cite) ties the Knowledge base to threads. Scroll to{' '}
                <strong className="font-semibold text-slate-900">
                  Course RAG
                </strong>{' '}
                on this page for the full picture.
              </p>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow-sm transition-colors"
              >
                Open forum home
                <ArrowRight size={16} aria-hidden />
              </button>
            </div>
          </section>
        )}
            
      </main>

      {/* 7. FOOTER SECTION */}
      <footer className="bg-white border-t border-slate-200/80 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-slate-900">Evangadi Forum</p>
            <p className="text-xs text-slate-500 mt-0.5">
              © {new Date().getFullYear()} · Learner-led Q&A
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
            <button
              type="button"
              onClick={() => navigate('/auth')}
              className="hover:text-slate-900 transition-colors"
            >
              Sign in
            </button>
            <span aria-hidden className="text-slate-300">
              ·
            </span>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Privacy
            </a>
            <span aria-hidden className="text-slate-300">
              ·
            </span>
            <a href="#" className="hover:text-slate-900 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}