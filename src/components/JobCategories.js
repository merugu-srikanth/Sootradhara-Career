'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLayerGroup,
  FaDesktop,
  FaBriefcase,
  FaLandmark,
  FaTrain,
  FaShieldAlt,
  FaBuilding,
  FaFlag,
  FaChevronRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';

const JobCategories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    {
      id: 1,
      icon: <FaLayerGroup />,
      name: "UPSC – Union Public Service Commission",
      shortDesc: "IAS, IPS, IFS, CDS, NDA & more",
      description: "UPSC conducts India's most prestigious exams like IAS, CDS, NDA, and Engineering Services. Graduation required; age 21–32; criteria vary by exam. Gateway to top civil services positions in India."
    },
    {
      id: 2,
      icon: <FaDesktop />,
      name: "Staff Selection Commission (SSC)",
      shortDesc: "CGL, CHSL, MTS, GD Constable",
      description: "SSC recruits staff for Group B and C posts in various ministries. Exams include SSC CGL, CHSL, MTS, GD Constable, and others across India. One of the largest recruitment bodies."
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      name: "Public Sector Undertakings (PSUs)",
      shortDesc: "BHEL, ONGC, NTPC, IOCL, SAIL",
      description: "PSUs recruit for technical, managerial, and administrative roles through GATE scores and direct exams. Major recruiters include BHEL, ONGC, NTPC, IOCL, SAIL, and other central enterprises."
    },
    {
      id: 4,
      icon: <FaLandmark />,
      name: "Banking & Insurance",
      shortDesc: "IBPS, SBI, RBI, LIC, SEBI",
      description: "Banking and insurance sectors offer stable careers through exams by IBPS, SBI, RBI, LIC, and other insurers. Recruitments also in financial regulators like SEBI, NABARD, and IRDAI."
    },
    {
      id: 5,
      icon: <FaTrain />,
      name: "Indian Railways",
      shortDesc: "RRB NTPC, Group D, JE, ALP",
      description: "One of the world's largest employers, conducts recruitment through RRBs. Offers opportunities in technical, non-technical, and paramedical categories across Group A, B, C, and D posts."
    },
    {
      id: 6,
      icon: <FaShieldAlt />,
      name: "Ministry of Defence",
      shortDesc: "NDA, CDS, AFCAT, DRDO, HAL",
      description: "Recruits for armed forces, civilian roles, and technical positions through NDA, CDS, and AFCAT. Also oversees Defence PSUs like HAL, DRDO, BEL, and BEML for engineers and scientists."
    },
    {
      id: 7,
      icon: <FaFlag />,
      name: "State Services",
      shortDesc: "APPSC, TSPSC, Group 1,2,3,4",
      description: "State PSCs recruit for various government departments through Group exams. Includes technical posts in Engineering, Panchayat Raj, Women & Child Welfare, Agriculture, Forestry, and more."
    },
    {
      id: 8,
      icon: <FaBuilding />,
      name: "Central Ministries",
      shortDesc: "58 Ministries, 94+ Departments",
      description: "Government of India comprises 58 ministries and over 94 departments. Opportunities include scientists, trainers, administrators, and diverse roles across various organizations and institutes."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Explore Your Future
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            A Glance at Different{' '}
            <span className="bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent">
              Careers
            </span>
          </h2>
          
          <div className="w-28 h-1.5 bg-gradient-to-r from-orange-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
            Find here a brief idea about what each recruitment is about. 
            This will help you understand the scope of various recruitments.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative h-[340px] w-full cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Front Card */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  rotateY: hoveredCard === category.id ? 180 : 0,
                  zIndex: hoveredCard === category.id ? 0 : 10,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="bg-white rounded-2xl shadow-xl h-full p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-24 h-24 bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                  >
                    <div className="text-orange-500 group-hover:text-green-600 transition-colors duration-300 text-4xl">
                      {category.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{category.name}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-3"></div>
                  <p className="text-gray-500 text-sm line-clamp-3">{category.shortDesc}</p>
                  <div className="mt-4 flex items-center gap-1 text-orange-500 font-medium text-sm">
                    <span>Explore</span>
                    <FaChevronRight size={12} />
                  </div>
                </div>
              </motion.div>

              {/* Back Card */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{
                  rotateY: hoveredCard === category.id ? 0 : -180,
                  zIndex: hoveredCard === category.id ? 10 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl h-full p-6 flex flex-col justify-between border border-orange-500/20">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 text-2xl">
                        {category.icon}
                      </div>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                        #{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 line-clamp-2">{category.name}</h4>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-3"></div>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
                      {category.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between items-center">
                    <span className="text-xs text-ronage-400">Want to know more details?</span>
                    <FaExternalLinkAlt size={12} className="text-orange-400" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gray-900 rounded-full p-1 pr-4 shadow-lg border border-orange-500/20">
            <span className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
              Limited Seats
            </span>
            <span className="text-gray-300 text-sm font-medium">Explore all categories & apply now</span>
            <motion.button
              whileHover={{ x: 5 }}
              className="ml-2 text-orange-400 hover:text-green-400 transition-colors"
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default JobCategories;