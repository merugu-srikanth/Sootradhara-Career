import Link from "next/link";
import JobCard from "../components/JobCard";
import AnimatedSection from "../components/AnimatedSection";
import {
  FiArrowRight,
} from "react-icons/fi";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  const dummyJobs = [
    {
      title: "AP Police Constable Recruitment 2026",
      org: "AP Police",
      lastDate: "20 Jan 2026",
      location: "Andhra Pradesh",
      slug: "ap-police-constable-recruitment-2026",
    },
    {
      title: "Railway RRB NTPC Notification",
      org: "Indian Railways",
      lastDate: "15 Feb 2026",
      location: "All India",
      slug: "railway-jobs-2026-notification",
    },
    {
      title: "SBI Probationary Officer (PO)",
      org: "State Bank of India",
      lastDate: "10 Mar 2026",
      location: "All India",
      slug: "sbi-po-2026",
    },
    {
      title: "TSPSC Group 2 Services",
      org: "Telangana PSC",
      lastDate: "05 Feb 2026",
      location: "Telangana",
      slug: "tspsc-group-2",
    },
    {
      title: "SSC CGL Examination 2026",
      org: "Staff Selection Commission",
      lastDate: "28 Feb 2026",
      location: "All India",
      slug: "ssc-cgl-2026",
    },
    {
      title: "UPSC Civil Services Prelims",
      org: "UPSC",
      lastDate: "25 Mar 2026",
      location: "All India",
      slug: "upsc-civil-services-2026",
    },
  ];

  const states = [
    "Goa",
    "Delhi",
    "Sikkim",
    "Assam",
    "Bihar",
    "Punjab",
    "Odisha",
    "Telangana",
    "Andhra Pradesh",
    "Kerala",
    "Gujarat",
    "Haryana",
    "Tripura",
    "Manipur",
    "Mizoram",
    "Nagaland",
    "Karnataka",
    "Jharkhand",
    "Meghalaya",
    "Rajasthan",
    "Tamil Nadu",
    "West Bengal",
    "Uttarakhand",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Himachal Pradesh",
    "Arunachal Pradesh",
    "Chhattisgarh",
    "Maharashtra",
  ];

  const categories = [
    { name: "10th Pass Jobs", slug: "10th-pass" },
    { name: "12th Pass Jobs", slug: "12th-pass" },
    { name: "Degree Jobs", slug: "degree" },
    { name: "Engineering Jobs", slug: "engineering" },
    { name: "Bank Jobs", slug: "bank" },
    { name: "Defence Jobs", slug: "defence" },
  ];

  return (
    <div className=" overflow-hidden">
      {/* --- HERO SECTION (Preserved as requested) --- */}
      <HeroSection />

      {/* --- FEATURES SECTION --- */}
      {/* <section className="py-20 relative z-20 -mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FiMousePointer, title: "One-Click Apply", desc: "No complex forms. Apply to verified notifications instantly." },
            { icon: FiFilter, title: "No Clutter", desc: "Curated insights only. Say goodbye to irrelevant job spam." },
            { icon: FiRefreshCw, title: "Always in the Loop", desc: "Real-time alerts for internships, policy, and research." }
          ].map((item, i) => (
            <AnimatedSection key={i} animation="fade-up" className={`delay-[${i*100}ms]`}>
              <div className="p-8 rounded-3xl bg-white shadow-xl shadow-orange-500/5 border border-orange-100 hover:-translate-y-2 transition-all duration-500 group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform">
                  <item.icon className="text-white" size={30} />
                </div>
                <h3 className="text-gray-900 font-extrabold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section> */}

      {/* --- LATEST JOBS SECTION --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Latest <span className="text-orange-500">Govt Jobs</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
              Recently announced opportunities across various sectors in India.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyJobs.map((job, index) => (
              <AnimatedSection key={job.slug} animation="fade-up">
                <div className="group relative ">
                  <div className="bg-white p-6 rounded-[1.8rem] h-full shadow-sm group-hover:shadow-none">
                    <JobCard {...job} />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/latest-govt-jobs"
              className="inline-flex items-center px-8 py-3 rounded-full border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg shadow-orange-500/10"
            >
              View All Opportunities <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- MOVING STATES SECTION --- */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Explore by <span className="text-orange-500">State</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Find career opportunities in your local region with ease.
            </p>
          </AnimatedSection>
        </div>

        <div className="space-y-6 overflow-hidden py-4">
          <div className="state-moving left flex gap-4 w-max">
            {states.map((state, i) => (
              <Link
                key={i}
                href={`/state-jobs/${state.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-6 py-3 rounded-2xl bg-white shadow-sm border border-orange-100 font-bold text-gray-700 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all whitespace-nowrap"
              >
                {state}
              </Link>
            ))}
          </div>
          <div className="state-moving right flex gap-4 w-max">
            {[...states].reverse().map((state, i) => (
              <Link
                key={i}
                href={`/state-jobs/${state.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-6 py-3 rounded-2xl bg-white shadow-sm border border-green-100 font-bold text-gray-700 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all whitespace-nowrap"
              >
                {state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CATEGORIES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Jobs by <span className="text-orange-500">Category</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Browse based on your specific academic qualifications.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <AnimatedSection
                key={cat.slug}
                animation="fade-up"
                className={`delay-[${i * 50}ms]`}
              >
                <Link
                  href={`/qualification/${cat.slug}`}
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-orange-500 hover:bg-white hover:shadow-xl hover:shadow-orange-500/10 transition-all group"
                >
                  <span className="font-bold text-xl text-gray-800 group-hover:text-orange-600">
                    {cat.name}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <FiArrowRight />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-500/40">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-green-600 animate-gradient-x"></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 py-16 px-8 text-center text-white">
            <AnimatedSection animation="fade-up">
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Never Miss An Alert!
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Get free real-time updates on WhatsApp or Telegram for every
                notification.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a
                  href="#"
                  className="px-10 py-5 bg-white text-green-600 rounded-full font-black text-xl hover-scale shadow-xl flex items-center justify-center"
                >
                  Join WhatsApp
                </a>
                <a
                  href="#"
                  className="px-10 py-5 bg-blue-500 text-white rounded-full font-black text-xl hover-scale shadow-xl flex items-center justify-center border border-blue-400"
                >
                  Join Telegram
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
