"use client";

import { useState } from "react";
import AnimatedSection from "../../components/AnimatedSection";
import SectionTitle from "../../components/SectionTitle";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "How can I get daily Govt Job alerts for free?",
    answer: "You can join our WhatsApp and Telegram groups or subscribe to our email newsletter on the homepage. We verify and post daily updates completely free of charge.",
  },
  {
    question: "Are these job notifications verified?",
    answer: "Yes, absolutely! Every single job notification posted on Career Mitra is cross-checked with the official government website and public circulars before being published.",
  },
  {
    question: "Do you provide syllabus and previous year question papers?",
    answer: "Yes, for major exams like SSC, UPSC, banking, and state police recruitment, we provide detailed syllabus guides and links to download previous year question paper PDFs.",
  },
  {
    question: "How do I apply for a job listed here?",
    answer: "Each job details page contains an 'Apply Online Now' button in the Quick Links section. Clicking it will redirect you directly to the official application portal for that specific job.",
  },
  {
    question: "Is there any registration fee for Career Mitra?",
    answer: "No! Career Mitra is completely free for all students and job seekers. We will never ask you for money to provide job notifications.",
  }
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#fafafa] py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers about govt job alerts, internships, and career support on Careermitra."
            centered={true}
          />
        </AnimatedSection>
        
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" className={`delay-[${index * 100}ms]`}>
              <div 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
                  <span className="text-orange-500 bg-orange-50 p-2 rounded-full flex-shrink-0">
                    {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="/contact-us" className="inline-block px-8 py-3 bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-500 rounded-xl font-bold transition-all shadow-sm hover:shadow-md">
            Contact Support
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
