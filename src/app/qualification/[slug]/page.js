import JobCard from "../../../components/JobCard";
import SectionTitle from "../../../components/SectionTitle";
import AnimatedSection from "../../../components/AnimatedSection";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const qualName = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${qualName} Jobs 2026 | Govt Jobs by Qualification - Career Mitra`,
    description: `Find latest government jobs for ${qualName} pass candidates in 2026. Get fresh notifications, syllabus, and online forms strictly based on your qualification.`,
  };
}

export default async function QualificationJobs({ params }) {
  const { slug } = await params;
  const qualName = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  const jobs = [
    { title: `${qualName} Police Constable`, org: "State Police", lastDate: "20 Jan 2026", location: "All India", slug: `police-constable-${slug}` },
    { title: `${qualName} Railway Group D`, org: "Indian Railways", lastDate: "15 Feb 2026", location: "All India", slug: `railway-group-d-${slug}` },
  ];

  return (
    <div className="bg-[#fafafa] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title={`${qualName} Govt Jobs`} 
            subtitle={`Explore all govt job opportunities specifically for ${qualName} graduates/passouts.`} 
            centered={true}
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <AnimatedSection key={job.slug} animation="fade-up" className={`delay-[${index * 50}ms]`}>
              <JobCard {...job} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
