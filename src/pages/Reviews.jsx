import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Phone, ChevronRight, ThumbsUp, Share2, CheckCircle2, MessageSquare } from 'lucide-react';
import { business } from '../data/business.js';
import { customerReviews, reviewTopics } from '../data/reviews.js';
import { usePageMeta, useBreadcrumbSchema } from '../components/Seo.js';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import CTASection from '../components/CTASection.jsx';

export default function Reviews() {
  const [selectedTopic, setSelectedTopic] = useState('All');

  usePageMeta({
    title: 'Customer Reviews | First Choice Electricians, Los Angeles',
    description:
      'Read all 14 verified 5.0-star customer reviews for First Choice Electricians in Los Angeles. Quality workmanship, prompt service, panel repairs & lighting.',
    path: '/reviews',
  });

  useBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Reviews', path: '/reviews' },
  ]);

  const filteredReviews = selectedTopic === 'All'
    ? customerReviews
    : customerReviews.filter(r => 
        r.keywords?.some(k => k.toLowerCase().includes(selectedTopic.toLowerCase())) ||
        r.text.toLowerCase().includes(selectedTopic.toLowerCase())
      );

  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Customer Reviews' }]} />

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-slate-950 border-b border-slate-800">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-bold uppercase tracking-wider text-xs px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-4">
            Customer Feedback & Ratings
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Verified Customer Reviews
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every job is backed by reliable workmanship and direct phone communication. See what local Los Angeles clients say about our work.
          </p>

          {/* Rating Summary Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black text-white">5.0</span>
              <div className="text-left">
                <div className="flex gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  14 Verified Reviews
                </div>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-3">
              <a
                href={business.mapsShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Write a review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter / Sort Topics Bar */}
      <section className="py-6 bg-slate-900/60 border-b border-slate-800 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="text-slate-400 font-semibold mr-2 shrink-0 uppercase tracking-wider">Topics:</span>
            {reviewTopics.map((topic) => (
              <button
                key={topic.name}
                onClick={() => setSelectedTopic(topic.name)}
                className={`px-3 py-1.5 rounded-full font-medium shrink-0 transition-all ${
                  selectedTopic === topic.name
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                }`}
              >
                {topic.name} <span className="opacity-75 text-[11px] ml-1">({topic.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredReviews.map((review, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top user row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 font-bold flex items-center justify-center text-sm shadow-md">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-bold text-base flex items-center gap-2">
                          {review.name}
                          {review.tag && (
                            <span className="px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
                              {review.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400">
                          {review.reviewCount || '1 review'}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-slate-400 shrink-0 font-medium">
                      {review.date}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {review.text}
                  </p>
                </div>

                {/* Bottom Actions Bar (Like / Share) */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Like</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </button>
                  </div>
                  <span className="flex items-center gap-1 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Customer
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Google Profile Link Out */}
          <div className="mt-14 text-center p-8 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">Want to see all reviews on Google Maps?</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Check our verified business profile for full photos, updates, and customer feedback.
            </p>
            <a
              href={business.mapsShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 border border-slate-700 hover:border-amber-400 text-white font-bold text-sm transition-all shadow-md"
            >
              View First Choice Electricians on Google
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
