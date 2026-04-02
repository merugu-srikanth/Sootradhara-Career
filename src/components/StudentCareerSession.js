'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBell,
  FaBuilding,
  FaLightbulb,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
  FaFileAlt,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaStar,
  FaTrophy,
  FaChartLine,
  FaRegClock,
  FaRegGem,
} from 'react-icons/fa';

const StudentCareerSession = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: <FaBell />,
      title: "Personalized Alerts",
      description: "We notify you of relevant government job openings based on your unique profile. Never miss an opportunity that matches your qualifications.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      delay: 0
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: "Beyond Campus Placements",
      description: "We uncover lesser-known public sector careers often overlooked by students. Explore opportunities in PSUs, autonomous bodies, and more.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      delay: 0.1
    },
    {
      id: 3,
      icon: <FaLightbulb />,
      title: "Unthought Careers",
      description: "Otherwise less known and preferred careers like translators, secretarial assistance, parliamentary officials, and protocol officers will be focused.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      delay: 0.2
    },
    {
      id: 4,
      icon: <FaGraduationCap />,
      title: "Support for +2 Graduates",
      description: "Opportunities curated specifically for intermediate, ITI, or Polytechnic graduates. SSC GD, RRB Group D, State Police, and more.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      delay: 0.3
    },
    {
      id: 5,
      icon: <FaMapMarkerAlt />,
      title: "Pan-India Coverage",
      description: "Track job openings across all states and central departments. From Kashmir to Kanyakumari, we've got you covered.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      delay: 0.4
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      title: "Strategic Sectors",
      description: "Priority alerts from defence, space research (ISRO), DRDO, forest services, intelligence bureaus, and more strategic departments.",
      color: "from-slate-700 to-gray-800",
      bgColor: "bg-gray-100",
      iconBg: "bg-gray-200",
      iconColor: "text-gray-700",
      delay: 0.5
    },
    {
      id: 7,
      icon: <FaUsers />,
      title: "Inclusive Career Discovery",
      description: "Special focus will be given to professionals and technical fields like polytechnic, ITI, diploma holders, and vocational training graduates.",
      color: "from-teal-500 to-green-500",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      delay: 0.6
    },
    {
      id: 8,
      icon: <FaFileAlt />,
      title: "Recruitment Process",
      description: "A brief overview of how and what the recruitment process is all about - application, exam patterns, interviews, and final selection.",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      delay: 0.7
    }
  ];

  const stats = [
    { value: "500+", label: "Exam Updates", icon: <FaBell />, color: "from-orange-500 to-orange-600" },
    { value: "50+", label: "PSU Recruiters", icon: <FaBuilding />, color: "from-green-500 to-green-600" },
    { value: "25+", label: "Strategic Sectors", icon: <FaShieldAlt />, color: "from-purple-500 to-purple-600" },
    { value: "100%", label: "Free Access", icon: <FaStar />, color: "from-amber-500 to-amber-600" },
  ];

  const recruitmentSteps = [
    { step: "01", title: "Notification", desc: "Official release of exam dates and vacancies", icon: "📢" },
    { step: "02", title: "Application", desc: "Online form filling and fee payment", icon: "📝" },
    { step: "03", title: "Prelims", desc: "First stage screening examination", icon: "📚" },
    { step: "04", title: "Mains", desc: "Descriptive and subject-specific exam", icon: "✍️" },
    { step: "05", title: "Interview", desc: "Personality test and document verification", icon: "🎯" },
    { step: "06", title: "Selection", desc: "Final merit list and joining", icon: "🏆" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Hero Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-green-500 px-4 py-1.5 rounded-full text-white text-sm font-medium mb-5 shadow-lg">
            <FaRocket size={14} />
            <span>Your Gateway to Government Jobs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Focused on{' '}
            <span className="bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
              Government Jobs
            </span>
          </h1>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-5"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your complete platform for government exam preparation, personalized alerts, 
            and career guidance across all strategic sectors in India.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 text-center shadow-xl text-white`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl backdrop-blur">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black">{stat.value}</div>
              <div className="text-white/90 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid - 8 Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              className={`${feature.bgColor} rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex flex-col items-start">
                <div className={`${feature.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-2xl ${feature.iconColor}`}>{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                
                {/* Animated indicator */}
                <div className={`mt-4 flex items-center gap-1 text-sm font-medium ${feature.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <span>Learn more</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recruitment Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <FaFileAlt size={14} />
              <span>Step by Step Guide</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Understanding the{' '}
              <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                Recruitment Process
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recruitmentSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-all"
              >
                <div className="text-3xl">{step.icon}</div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full">{step.step}</span>
                    <h4 className="font-bold text-gray-800">{step.title}</h4>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaTrophy className="text-orange-400 text-2xl" />
                <span className="text-orange-400 font-semibold">Why Students Trust Us</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Your Success is Our Mission
              </h3>
              <p className="text-gray-300 mb-6">
                We've helped thousands of students achieve their dream government jobs through 
                personalized guidance, timely updates, and comprehensive preparation strategies.
              </p>
              <div className="space-y-3">
                {[
                  "Personalized exam strategy for each student",
                  "Real-time updates on all government vacancies",
                  "Expert mentorship from selected officers",
                  "Free mock tests and study materials"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-400 text-sm" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                Start Your Journey
                <FaArrowRight size={14} />
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Practice Tests</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">👨‍🏫</div>
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-300 text-sm">Expert Mentors</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">⏰</div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Crack Your Dream Government Exam?
            </h3>
            <p className="text-white/90 mb-5">
              Join thousands of successful aspirants who started their journey with us
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Get Personalized Alerts
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Explore Careers
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentCareerSession;