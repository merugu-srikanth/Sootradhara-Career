"use client";// app/page.tsx (or components/GovernmentJobCards.tsx)
import React from 'react';

export default function GovernmentJobCards({ jobTxt } = {}) {
  const defaultJobCards = [
    {
      id: 1,
      title: "SSC Combined Graduate Level (CGL) 2025",
      description: "Staff Selection Commission invites online applications for Group B & Group C posts across ministries. Graduation required, age 18-32 years.",
      postDate: "15 Mar 2025",
      vacancies: "12,874",
      colorTheme: "orange",
      badge: "Popular",
      accentClass: "orange",
    },
    {
      id: 2,
      title: "UPSC Civil Services (IAS) Prelims 2026",
      description: "Union Public Service Commission invites applications for IAS, IPS, IFS, and other central services. Graduates in any discipline can apply.",
      postDate: "01 Apr 2025",
      vacancies: "1,105",
      colorTheme: "green",
      badge: "Elite",
      accentClass: "green",
    },
    {
      id: 3,
      title: "Railway RRB NTPC 2025",
      description: "Indian Railways recruitment for under-graduate & graduate level posts including Clerk, Time Keeper, Station Master, and Goods Guard.",
      postDate: "28 Feb 2025",
      vacancies: "48,290",
      colorTheme: "black",
      badge: "New",
      accentClass: "black",
    },
    {
      id: 4,
      title: "IBPS PO / Clerk 2025",
      description: "Institute of Banking Personnel Selection (IBPS) – Probationary Officers & Clerks recruitment for public sector banks. Graduation & computer knowledge required.",
      postDate: "10 Jan 2025",
      vacancies: "12,938",
      colorTheme: "orange",
      badge: "Mega Drive",
      accentClass: "orange",
    },
    {
      id: 5,
      title: "State Police Constable & SI Recruitment 2025",
      description: "Uttar Pradesh Police Recruitment Board (UPPRPB) invites online applications for Constable, Sub-Inspector & equivalent posts. Physical eligibility required.",
      postDate: "20 March 2025",
      vacancies: "8,424",
      colorTheme: "green",
      badge: "Urgent",
      accentClass: "green",
    },
  ];

  const parseJobsFromText = (text) => {
    if (!text || typeof text !== "string") return [];
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && line.includes("|"))
      .map((line) => {
        const parts = line.split("|").map((part) => part.trim());
        const [id, title, description, postDate, vacancies, colorTheme, badge, accentClass] = parts;
        return {
          id: Number(id) || 0,
          title: title || "",
          description: description || "",
          postDate: postDate || "",
          vacancies: vacancies || "",
          colorTheme: colorTheme || "orange",
          badge: badge || "",
          accentClass: accentClass || "orange",
        };
      });
  };

  const sampleTxtData = `
1|SSC Combined Graduate Level (CGL) 2025|Staff Selection Commission invites online applications for Group B & Group C posts across ministries. Graduation required, age 18-32 years.|15 Mar 2025|12,874|orange|Popular|orange
2|UPSC Civil Services (IAS) Prelims 2026|Union Public Service Commission invites applications for IAS, IPS, IFS, and other central services. Graduates in any discipline can apply.|01 Apr 2025|1,105|green|Elite|green
3|Railway RRB NTPC 2025|Indian Railways recruitment for under-graduate & graduate level posts including Clerk, Time Keeper, Station Master, and Goods Guard.|28 Feb 2025|48,290|black|New|black
4|IBPS PO / Clerk 2025|Institute of Banking Personnel Selection (IBPS) – Probationary Officers & Clerks recruitment for public sector banks. Graduation & computer knowledge required.|10 Jan 2025|12,938|orange|Mega Drive|orange
5|State Police Constable & SI Recruitment 2025|Uttar Pradesh Police Recruitment Board (UPPRPB) invites online applications for Constable, Sub-Inspector & equivalent posts. Physical eligibility required.|20 March 2025|8,424|green|Urgent|green
`;

  const parsedJobs = parseJobsFromText(jobTxt || sampleTxtData);
  const jobCards = parsedJobs.length > 0 ? parsedJobs : defaultJobCards;

 const getColorClasses = (theme, type) => {
  const colors = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-500",
      hover: "hover:border-orange-300",
      lightBg: "bg-orange-100",
      iconBg: "bg-orange-100",
      iconText: "text-orange-600",
      badgeBg: "bg-orange-100",
      badgeText: "text-orange-800",
      accentFrom: "from-orange-400",
      accentTo: "to-orange-500",
      statBg: "bg-orange-50",
      statText: "text-orange-800",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-500",
      hover: "hover:border-green-300",
      lightBg: "bg-green-100",
      iconBg: "bg-green-100",
      iconText: "text-green-600",
      badgeBg: "bg-green-100",
      badgeText: "text-green-800",
      accentFrom: "from-green-400",
      accentTo: "to-green-500",
      statBg: "bg-green-50",
      statText: "text-green-800",
    },
    black: {
      bg: "bg-gray-100",
      text: "text-gray-900",
      border: "border-gray-800",
      hover: "hover:border-gray-400",
      lightBg: "bg-gray-200",
      iconBg: "bg-gray-200",
      iconText: "text-gray-700",
      badgeBg: "bg-gray-800",
      badgeText: "text-white",
      accentFrom: "from-gray-600",
      accentTo: "to-gray-800",
      statBg: "bg-gray-100",
      statText: "text-gray-800",
    },
  };

  return (colors[theme] && colors[theme][type]) || colors.orange[type];
};

  // Card Type 1: Left Accent Border Card
  const CardType1 = ({ job }) => {
    const borderColor = getColorClasses(job.accentClass, "border");
    const badgeBg = getColorClasses(job.accentClass, "badgeBg");
    const badgeText = getColorClasses(job.accentClass, "badgeText");
    const statBg = getColorClasses(job.accentClass, "statBg");
    const statText = getColorClasses(job.accentClass, "statText");
    
    return (
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
        <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${borderColor} rounded-l-2xl`}></div>
        <div className="p-5 pl-7">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{job.title}</h2>
            <span className={`text-[11px] font-bold px-2 py-1 rounded-md ${badgeBg} ${badgeText}`}>{job.badge}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{job.description}</p>
          <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
            <div className="flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-3 py-1.5 rounded-full">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Post Date: <span className="font-medium text-gray-700">{job.postDate}</span></span>
            </div>
            <div className={`flex items-center gap-1.5 ${statBg} px-3 py-1.5 rounded-full text-xs font-semibold ${statText}`}>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Vacancies: <span className="font-bold">{job.vacancies}</span></span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card Type 2: Top Gradient Bar Card
  const CardType2 = ({ job }) => {
    const gradientFrom = getColorClasses(job.accentClass, "accentFrom");
    const gradientTo = getColorClasses(job.accentClass, "accentTo");
    const badgeBg = getColorClasses(job.accentClass, "badgeBg");
    const badgeText = getColorClasses(job.accentClass, "badgeText");
    
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
        <div className={`h-1.5 w-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800 leading-tight">{job.title}</h2>
            <span className={`text-[11px] font-bold px-2 py-1 rounded-md ${badgeBg} ${badgeText}`}>{job.badge}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2 leading-relaxed">{job.description}</p>
          <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-3">
            <div className="flex items-center gap-2">
              <div className="bg-gray-50 p-1.5 rounded-lg">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Post Date</p>
                <p className="text-sm font-medium text-gray-700">{job.postDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`p-1.5 rounded-lg ${getColorClasses(job.accentClass, "iconBg")}`}>
                <svg className={`h-4 w-4 ${getColorClasses(job.accentClass, "iconText")}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Vacancies</p>
                <p className={`text-sm font-bold ${getColorClasses(job.accentClass, "statText")}`}>{job.vacancies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card Type 3: Ribbon & Grid Stats Card
  const CardType3 = ({ job }) => {
    const iconBg = getColorClasses(job.accentClass, "iconBg");
    const iconText = getColorClasses(job.accentClass, "iconText");
    const statBg = getColorClasses(job.accentClass, "statBg");
    const statText = getColorClasses(job.accentClass, "statText");
    
    return (
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
        <div className="absolute -top-1 -right-1 w-16 h-16 overflow-hidden pointer-events-none">
          <div className={`absolute rotate-45 ${getColorClasses(job.accentClass, "badgeBg")} ${getColorClasses(job.accentClass, "badgeText")} text-[10px] font-bold py-1 right-[-22px] top-[18px] w-24 text-center shadow-sm`}>
            {job.badge}
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start gap-2">
            <div className={`${iconBg} p-2 rounded-xl`}>
              <svg className={`h-5 w-5 ${iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-gray-800 leading-snug">{job.title}</h2>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{job.description}</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-gray-50 rounded-xl p-2 text-center">
              <span className="text-gray-500 text-[11px] block">📅 Post Date</span>
              <span className="font-semibold text-gray-800 text-sm">{job.postDate}</span>
            </div>
            <div className={`${statBg} rounded-xl p-2 text-center`}>
              <span className={`text-[11px] block ${statText}`}>👥 Total Vacancies</span>
              <span className={`font-bold text-sm ${statText}`}>{job.vacancies}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card Type 4: Borderless Elevated Card
  const CardType4 = ({ job }) => {
    const iconBg = getColorClasses(job.accentClass, "iconBg");
    const iconText = getColorClasses(job.accentClass, "iconText");
    const badgeBg = getColorClasses(job.accentClass, "badgeBg");
    const badgeText = getColorClasses(job.accentClass, "badgeText");
    const statText = getColorClasses(job.accentClass, "statText");
    
    return (
      <div className="bg-white rounded-3xl shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <span className={`text-xs font-bold ${badgeText} ${badgeBg} px-3 py-1 rounded-full`}>📢 {job.badge}</span>
              <h2 className="text-2xl font-bold text-gray-800 mt-2">{job.title}</h2>
            </div>
            <div className={`${iconBg} p-2 rounded-2xl`}>
              <svg className={`h-6 w-6 ${iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M6 14h6m-6 4h12M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">{job.description}</p>
          <div className="mt-5 flex flex-wrap justify-between items-center bg-gray-50/70 rounded-2xl p-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Posted on</p>
                <p className="text-xs font-semibold text-gray-800">{job.postDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-full ${iconBg} flex items-center justify-center`}>
                <svg className={`h-4 w-4 ${iconText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase">Vacancies</p>
                <p className={`text-sm font-black ${statText}`}>{job.vacancies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Card Type 5: Left Border Accent with Split Info
  const CardType5 = ({ job }) => {
    const borderColor = getColorClasses(job.accentClass, "border");
    const badgeBg = getColorClasses(job.accentClass, "badgeBg");
    const badgeText = getColorClasses(job.accentClass, "badgeText");
    const statBg = getColorClasses(job.accentClass, "statBg");
    const statText = getColorClasses(job.accentClass, "statText");
    
    return (
      <div className={`bg-white rounded-xl border-l-8 ${borderColor} shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${badgeBg} ${badgeText}`}>⚠️ {job.badge}</span>
              <span className="text-gray-400 text-[10px]">Advt. 2025</span>
            </div>
            <svg className={`h-5 w-5 ${statText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-800 mt-2 tracking-tight">{job.title}</h2>
          <p className="text-gray-600 text-xs mt-1 line-clamp-2">{job.description}</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm bg-gray-50 rounded-lg px-3 py-2">
              <span className="text-gray-500 font-medium">📅 Post Date:</span>
              <span className="font-semibold text-gray-800">{job.postDate}</span>
            </div>
            <div className={`flex items-center justify-between text-sm ${statBg} rounded-lg px-3 py-2`}>
              <span className={`font-medium ${statText}`}>👥 Number of Posts:</span>
              <span className={`font-extrabold text-base ${statText}`}>{job.vacancies}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cardTypes = [CardType1, CardType2, CardType3, CardType4, CardType5];
  const cardComponents = jobCards.map((job, index) => {
    const CardComp = cardTypes[index % cardTypes.length];
    return <CardComp key={job.id || index} job={job} />;
  });

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide mb-3">
            <span>🏛️</span> | Government Jobs
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Latest Govt Job <span className="text-orange-600">Notifications</span>
          </h1>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore 5 unique card designs with title, description, post date & number of vacancies
          </p>
        </div>

        {/* Cards Grid - 5 different types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 auto-rows-fr">
          {cardComponents}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center border-t border-gray-100 pt-8">
          <p className="text-gray-400 text-xs flex justify-center items-center gap-1">
            <span>🇮🇳</span> Trusted Government Job Alerts • Updated Weekly • Orange, Green & Black Color Accents
          </p>
        </div>
      </div>
    </div>
  );
}