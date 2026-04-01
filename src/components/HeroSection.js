"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } },
  };

  const statCardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-scree flex items-center overflow-hidden bg-[#0c0500] font-sans">
      {/* --- Background Image Layer --- */}
      <div
        className="absolute bg-animate inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-images/hero-bg-img2.png')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0500] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_50%_58%,rgba(255,115,0,0.16),transparent)]" />

      {/* --- Decorative Animated Elements --- */}
      {/* Scan line */}
      {/* <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none z-20"
        initial={{ top: "-5%" }}
        animate={{ top: "105%" }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
      /> */}

      {/* Sparkle stars */}
      {[
        { top: "12%", left: "7%", delay: 0 },
        { top: "20%", left: "89%", delay: 0.7 },
        { top: "68%", left: "4%", delay: 1.4, size: "0.9rem" },
        { top: "73%", left: "93%", delay: 0.35, size: "1.3rem" },
        { top: "44%", left: "2%", delay: 1, size: "0.8rem" },
        { top: "38%", left: "96%", delay: 1.75 },
        { top: "55%", left: "50%", delay: 2.1, size: "0.6rem" },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-400/70 pointer-events-none"
          style={{ top: star.top, left: star.left, fontSize: star.size || "1rem" }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
        >
          {i % 2 === 0 ? "✦" : "★"}
        </motion.div>
      ))}

      {/* Floating particles */}
      {[
        { width: "4.42px", height: "7.63px", top: "36.92%", left: "72.76%", x: 8, duration: 5.7 },
        { width: "4.58px", height: "6.84px", top: "15.53%", left: "68.35%", x: -7, duration: 6.2 },
        { width: "7.20px", height: "2.56px", top: "91.12%", left: "24.73%", x: 5, duration: 5.3 },
        { width: "2.86px", height: "4.94px", top: "96.27%", left: "31.92%", x: -9, duration: 7.4 },
        { width: "7.62px", height: "4.41px", top: "2.997%", left: "15.71%", x: 7, duration: 5.9 },
        { width: "3.10px", height: "6.30px", top: "61.25%", left: "9.73%", x: -10, duration: 6.7 },
        { width: "4.41px", height: "6.34px", top: "53.44%", left: "88.03%", x: 4, duration: 6.1 },
        { width: "3.93px", height: "5.47px", top: "21.55%", left: "53.34%", x: -6, duration: 5.8 },
      ].map((particle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-amber-400/40"
          style={{
            width: particle.width,
            height: particle.height,
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.x, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Central Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,120,0,0.2) 0%, rgba(255,80,0,0.08) 50%, transparent 75%)" }}
      />

      {/* --- Content --- */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-30 text-center w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        {/* <motion.div variants={badgeVariant} className="mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-amber-500/40 text-amber-100 font-extrabold text-xs uppercase tracking-wider shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            ✦ #1 Free Job Alert Portal in India ✦
          </div>
        </motion.div> */}

        {/* Headlines */}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-2 drop-shadow-2xl"
        >
          Get Personalized
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl md:text-7xl lg:text-7xl font-black leading-[1.05] mb-6"
        >
          <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-[length:200%_auto] text-transparent bg-clip-text animate-[shimmer_3s_linear_infinite]">
            Govt Job Alerts 2026
          </span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          variants={fadeUp}
          className="text-amber-50/80 text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-semibold"
        >
          Find the latest government job alerts, notifications, and results —&nbsp;
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-extrabold">
            Central &amp; State Jobs
          </span>
          &nbsp;updated in real-time.
        </motion.p>

        {/* Stats Row */}
        {/* <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 md:gap-5 mb-12"
        >
          {[
            { label: "LIVE JOBS", value: "50,000+" },
            { label: "COVERAGE", value: "28 States" },
            { label: "APPLICANTS", value: "10 Lakh+" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statCardVariant}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 bg-white/5 backdrop-blur-md border border-amber-500/30 rounded-2xl text-center"
            >
              <div className="font-serif text-xl md:text-2xl font-black bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-amber-200/60 text-xs font-bold tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12">
          <Link
            href="/latest-govt-jobs"
            className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full font-extrabold text-base md:text-lg shadow-[0_10px_25px_-5px_rgba(249,115,22,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(249,115,22,0.7)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              ★ Browse Latest Jobs
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
          <Link
            href="/state-jobs"
            className="group w-full sm:w-auto px-7 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-lg text-amber-100 rounded-full font-bold text-base md:text-lg border-2 border-amber-500/50 hover:bg-white/20 hover:border-amber-500 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            Search by State
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 md:gap-8">
          {["🏛️ Official Sources", "🔔 Instant Alerts", "📱 Mobile Friendly", "🆓 Always Free"].map((badge, idx) => (
            <div key={idx} className="text-amber-200/60 text-xs md:text-sm font-bold tracking-wide flex items-center gap-1">
              {badge}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0500] to-transparent pointer-events-none" />

    
    </section>
  );
}