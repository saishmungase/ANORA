'use client';

import { Send, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';

const Page = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/early', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100 p-10 relative overflow-hidden">

        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-neutral-900 text-white shadow-xl">
            <Sparkles size={32} className="text-indigo-400" />
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-3 tracking-tight">
            Anora is coming.
          </h2>

          <p className="text-neutral-500 mb-8 leading-relaxed">
            Turn your real-time conversations into meaningful content. Join the exclusive waitlist for early access.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 text-neutral-900"
              />

              {error && (
                <p className="text-sm text-red-500 text-left">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 bg-neutral-900 hover:bg-black text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-4 px-6 bg-emerald-50 border border-emerald-100 rounded-2xl animate-in fade-in zoom-in duration-500">
              <p className="text-emerald-700 font-medium">
                🎉 You're on the waitlist! We'll reach out soon.
              </p>
            </div>
          )}

          <p className="mt-6 text-xs text-neutral-400 uppercase tracking-widest font-medium">
            Limited Spots • Spring 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
