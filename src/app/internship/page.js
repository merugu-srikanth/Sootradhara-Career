import AnimatedSection from "../../components/AnimatedSection";
import JobCard from "../../components/JobCard";
import SectionTitle from "../../components/SectionTitle";

export const metadata = {
  title: "Internship Alerts India | Latest Internships for Students & Freshers - Career Mitra",
  description: "Get updated internship opportunities in India including work from home, government, and private internships. Receive real-time alerts, application details, and career opportunities with Careermitra.",
  keywords: "Internship Alerts India, Internship Alerts Telangana, Career Mitra",
};

export default function Internships() {
  const dummyInternships = [
    { title: "NITI Aayog Internship Scheme", org: "Govt of India", lastDate: "10th of every month", location: "Delhi", slug: "niti-aayog-internship" },
    { title: "AICTE Virtual Internship", org: "AICTE", lastDate: "Open all year", location: "Work from Home", slug: "aicte-virtual-internship" },
    { title: "ISRO Student Internship", org: "ISRO", lastDate: "Varies", location: "Bangalore", slug: "isro-internship" },
    { title: "Ministry of Finance Internship", org: "Govt of India", lastDate: "30 May 2026", location: "Delhi", slug: "mof-internship" },
  ];

  return (
    <div className="bg-[#fafafa] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Latest Internship Opportunities" 
            subtitle="Gain real-world experience. Browse top government and private internships." 
            centered={true}
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyInternships.map((job, index) => (
            <AnimatedSection key={job.slug} animation="fade-up" className={`delay-[${index * 50}ms]`}>
              <JobCard {...job} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
