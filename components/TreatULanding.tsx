"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ShieldCheckIcon, MapPinIcon, UsersIcon, SparklesIcon, CheckCircleIcon, ArrowRightIcon, XMarkIcon, ChatBubbleLeftRightIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const TreatULanding = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, city }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-[#4ec9b7] rounded-full">
            <CheckCircleIcon className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">You&apos;re In!</h2>
          <p className="text-gray-400 mb-2">
            Thanks for joining, {name}. We&apos;ll notify you when we launch in {city}.
          </p>
          <p className="text-sm text-gray-500">Check your email for updates.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">TreatU</div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#how" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
            <a href="#join" className="bg-[#4ec9b7] text-black px-5 py-2 rounded-full font-medium hover:bg-[#4ec9b7]/90 transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6 px-4 py-1.5 bg-[#4ec9b7]/10 rounded-full">
                <span className="text-[#4ec9b7] text-sm font-medium">LAUNCHING SOON</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Dating Apps Are Broken.<br />
                <span className="text-[#4ec9b7]">We Fixed Them.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                No more endless chatting. No more ghosting. Just real dates at real venues with real people who actually want to meet.
              </p>
              <a
                href="#join"
                className="inline-flex items-center gap-2 bg-[#4ec9b7] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4ec9b7]/90 transition-all"
              >
                Join the Waitlist
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#4ec9b7]/20 via-gray-900 to-gray-950 rounded-3xl p-8 border border-white/10 aspect-[3/4]">
                {/* Mock Phone Screen */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 h-full flex flex-col justify-between border border-white/5">
                  <div className="space-y-4">
                    <div className="bg-[#4ec9b7]/20 border border-[#4ec9b7]/30 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-[#4ec9b7]/30 rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-3 bg-white/20 rounded w-24 mb-2"></div>
                          <div className="h-2 bg-white/10 rounded w-16"></div>
                        </div>
                      </div>
                      <div className="h-2 bg-white/10 rounded w-full mb-2"></div>
                      <div className="h-2 bg-white/10 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                      <MapPinIcon className="w-5 h-5 text-[#4ec9b7]" />
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-32 mb-1"></div>
                        <div className="h-2 bg-white/10 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="bg-[#4ec9b7] rounded-lg py-4 text-center">
                      <div className="h-3 bg-black/20 rounded w-32 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sound Familiar?</h2>
            <p className="text-gray-400 text-lg">The modern dating app experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Endless Texting</h3>
              <p className="text-gray-400">Days of chatting that goes absolutely nowhere. When was the last time you actually met someone?</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <XMarkIcon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Constant Ghosting</h3>
              <p className="text-gray-400">Conversation dies. Plans fall through. Everyone&apos;s too comfortable behind a screen.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <ClockIcon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Time Wasted</h3>
              <p className="text-gray-400">Hours spent swiping and messaging. Zero dates. Dating apps keep you on the app, not on dates.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Here&apos;s How <span className="text-[#4ec9b7]">TreatU</span> Changes Everything
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We partner with cafes, bars, and venues so you skip the texting and go straight to meeting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              {/* Visual mockup */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-white/5">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-gray-800/50 border border-white/10 rounded-xl p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4ec9b7] to-[#0891b2] rounded-full flex items-center justify-center">
                      <MapPinIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">The Coffee House</div>
                      <div className="text-sm text-gray-400">Shoreditch, London</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 bg-[#4ec9b7] rounded w-20"></div>
                        <span className="text-xs text-gray-500">4.8★</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 border border-white/10 rounded-xl p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <HeartIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">The Wine Bar</div>
                      <div className="text-sm text-gray-400">Covent Garden, London</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 bg-purple-500 rounded w-20"></div>
                        <span className="text-xs text-gray-500">4.9★</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 border border-white/10 rounded-xl p-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <UsersIcon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white mb-1">Rooftop Lounge</div>
                      <div className="text-sm text-gray-400">Camden, London</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 bg-orange-500 rounded w-20"></div>
                        <span className="text-xs text-gray-500">4.7★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">Curated Venues, Not Random Meetups</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We partner with the best spots in your city. When you match, you both pick from a selection of great cafes, bars, or activities. No awkward "where should we meet?" No sketchy locations. Just quality venues where you&apos;ll actually enjoy your time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4ec9b7]/10 rounded-lg flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-[#4ec9b7]" />
                  </div>
                  <div>
                    <div className="font-semibold">Pre-Vetted Locations</div>
                    <div className="text-sm text-gray-500">Safe, public, popular spots</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4ec9b7]/10 rounded-lg flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-[#4ec9b7]" />
                  </div>
                  <div>
                    <div className="font-semibold">Instant Date Setup</div>
                    <div className="text-sm text-gray-500">Pick a spot, pick a time, done</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4ec9b7]/10 rounded-lg flex items-center justify-center">
                    <UsersIcon className="w-5 h-5 text-[#4ec9b7]" />
                  </div>
                  <div>
                    <div className="font-semibold">People Who Want to Meet</div>
                    <div className="text-sm text-gray-500">Everyone here is serious about dating IRL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-20 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">From match to meeting in minutes, not days</p>
          </div>

          <div className="space-y-16">
            {/* Step 1 - Match */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#4ec9b7] rounded-xl flex items-center justify-center">
                    <SparklesIcon className="w-7 h-7 text-black" />
                  </div>
                  <span className="text-6xl font-bold text-white/5">1</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Match with Someone You Like</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Browse profiles of people in your city who are actually looking to meet up. When you both like each other, you match. Simple.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-white/5">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4ec9b7] to-[#0891b2] rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-white/20 rounded w-32 mb-2"></div>
                      <div className="h-3 bg-white/10 rounded w-24 mb-3"></div>
                      <div className="flex gap-2">
                        <div className="h-6 bg-[#4ec9b7]/20 border border-[#4ec9b7]/50 rounded-full w-16"></div>
                        <div className="h-6 bg-[#4ec9b7]/20 border border-[#4ec9b7]/50 rounded-full w-20"></div>
                      </div>
                    </div>
                  </div>
                  <div className="h-3 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-4/5 mb-4"></div>
                  <div className="flex gap-3 justify-center pt-4">
                    <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <XMarkIcon className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="w-16 h-16 bg-[#4ec9b7]/20 border-2 border-[#4ec9b7] rounded-full flex items-center justify-center">
                      <HeartIcon className="w-8 h-8 text-[#4ec9b7]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 - Pick Venue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-white/5">
                  <div className="space-y-3">
                    <div className="bg-gray-800/50 border-2 border-[#4ec9b7] rounded-xl p-4 flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#4ec9b7] to-[#0891b2] rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/20 rounded w-28 mb-2"></div>
                        <div className="h-2 bg-white/10 rounded w-20"></div>
                      </div>
                      <CheckCircleIcon className="w-6 h-6 text-[#4ec9b7]" />
                    </div>
                    <div className="bg-gray-800/50 border border-white/10 rounded-xl p-4 flex items-center gap-3 opacity-50">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/20 rounded w-28 mb-2"></div>
                        <div className="h-2 bg-white/10 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 border border-white/10 rounded-xl p-4 flex items-center gap-3 opacity-50">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/20 rounded w-28 mb-2"></div>
                        <div className="h-2 bg-white/10 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#4ec9b7] rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-7 h-7 text-black" />
                  </div>
                  <span className="text-6xl font-bold text-white/5">2</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Pick a Venue Together</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Choose from our curated list of cafes, bars, and date spots. Both of you suggest places you like, then agree on one. No back-and-forth texting for days.
                </p>
              </div>
            </motion.div>

            {/* Step 3 - Meet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#4ec9b7] rounded-xl flex items-center justify-center">
                    <CalendarIcon className="w-7 h-7 text-black" />
                  </div>
                  <span className="text-6xl font-bold text-white/5">3</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Set a Time & Go</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Pick a date and time that works for both of you. Get a reminder before your date. Show up. That&apos;s it. No more pen pals.
                </p>
                <div className="bg-[#4ec9b7]/10 border border-[#4ec9b7]/30 rounded-xl p-4">
                  <p className="text-[#4ec9b7] text-sm font-medium">
                    💡 Pro tip: Most dates happen within 3 days of matching
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-white/5">
                <div className="bg-gray-800/50 border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                    <div className="w-12 h-12 bg-[#4ec9b7]/30 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/20 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-white/10 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPinIcon className="w-5 h-5 text-[#4ec9b7]" />
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-28 mb-1"></div>
                        <div className="h-2 bg-white/10 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-[#4ec9b7]" />
                      <div className="flex-1">
                        <div className="h-2 bg-white/20 rounded w-32 mb-1"></div>
                        <div className="h-2 bg-white/10 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-[#4ec9b7] rounded-lg py-3 flex items-center justify-center gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-black" />
                    <div className="h-3 bg-black/20 rounded w-24"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section id="join" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Ready for Real Dates?</h2>
            <p className="text-gray-400 text-lg">Join the waitlist and be the first to stop texting and start meeting</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-4 bg-gray-900 border border-white/10 rounded-xl focus:outline-none focus:border-[#4ec9b7] transition-colors text-white placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 bg-gray-900 border border-white/10 rounded-xl focus:outline-none focus:border-[#4ec9b7] transition-colors text-white placeholder-gray-500"
              />
            </div>

            <div>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full px-5 py-4 bg-gray-900 border border-white/10 rounded-xl focus:outline-none focus:border-[#4ec9b7] transition-colors text-white"
              >
                <option value="">Select Your City</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Leeds">Leeds</option>
                <option value="Bristol">Bristol</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4ec9b7] text-black font-bold py-4 rounded-xl hover:bg-[#4ec9b7]/90 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>

            <p className="text-center text-sm text-gray-500">
              No spam. We&apos;ll only email you when we launch.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">© 2025 TreatU. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TreatULanding;
