import JobCard from "../../components/JobCard";
import SectionTitle from "../../components/SectionTitle";
import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "Central Govt Jobs 2026 | UPSC, SSC, RRB Notifications - Career Mitra",
  description: "Get all central government job alerts for 2026 including UPSC, SSC, Railways, Defense, and PSU recruitments. Apply online via Career Mitra.",
};

export default function CentralJobs() {
  const dummyJobs = [
    { title: "Railway RRB NTPC Notification", org: "Indian Railways", lastDate: "15 Feb 2026", location: "All India", slug: "railway-jobs-2026-notification" },
    { title: "SSC CGL Examination 2026", org: "Staff Selection Commission", lastDate: "28 Feb 2026", location: "All India", slug: "ssc-cgl-2026" },
    { title: "UPSC Civil Services Prelims", org: "UPSC", lastDate: "25 Mar 2026", location: "All India", slug: "upsc-civil-services-2026" },
    { title: "Indian Army Agniveer Rally", org: "Indian Army", lastDate: "15 Apr 2026", location: "Various", slug: "indian-army-agniveer-2026" },
  ];

  return (
    <div className="bg-[#fafafa] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title="Central Govt Jobs 2026" 
            subtitle="Explore high-profile central government jobs and recruitment drives." 
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
