import JobCard from "../../components/JobCard";
import SectionTitle from "../../components/SectionTitle";
import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "Latest Govt Jobs 2026 | Free Job Alert India - Career Mitra",
  description: "Browse the latest government jobs 2026 across India. Find latest center, state, banking, railway, defense, and police notifications on Career Mitra.",
};

export default function LatestJobs() {
  const dummyJobs = [
    { title: "AP Police Constable Recruitment 2026", org: "AP Police", lastDate: "20 Jan 2026", location: "Andhra Pradesh", slug: "ap-police-constable-recruitment-2026" },
    { title: "Railway RRB NTPC Notification", org: "Indian Railways", lastDate: "15 Feb 2026", location: "All India", slug: "railway-jobs-2026-notification" },
    { title: "SBI Probationary Officer (PO)", org: "State Bank of India", lastDate: "10 Mar 2026", location: "All India", slug: "sbi-po-2026" },
    { title: "TSPSC Group 2 Services", org: "Telangana PSC", lastDate: "05 Feb 2026", location: "Telangana", slug: "tspsc-group-2" },
    { title: "SSC CGL Examination 2026", org: "Staff Selection Commission", lastDate: "28 Feb 2026", location: "All India", slug: "ssc-cgl-2026" },
    { title: "UPSC Civil Services Prelims", org: "UPSC", lastDate: "25 Mar 2026", location: "All India", slug: "upsc-civil-services-2026" },
    { title: "IBPS Clerk Recruitment", org: "IBPS", lastDate: "10 Apr 2026", location: "All India", slug: "ibps-clerk-2026" },
    { title: "Indian Army Agniveer Rally", org: "Indian Army", lastDate: "15 Apr 2026", location: "Various", slug: "indian-army-agniveer-2026" },
    { title: "Delhi Police Head Constable", org: "Delhi Police", lastDate: "30 Apr 2026", location: "Delhi", slug: "delhi-police-hc-2026" },
  ];

  return (
    <div className="bg-[#fafafa] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Latest Govt Jobs 2026" 
            subtitle="Explore freshly announced job notifications across all sectors globally." 
            centered={true}
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyJobs.map((job, index) => (
            <AnimatedSection key={job.slug} animation="fade-up" className={`delay-[${index * 50}ms]`}>
              <JobCard {...job} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
