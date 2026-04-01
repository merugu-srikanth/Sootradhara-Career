import JobCard from "../../../components/JobCard";
import SectionTitle from "../../../components/SectionTitle";
import AnimatedSection from "../../../components/AnimatedSection";

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateName = state.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${stateName} Govt Jobs 2026 | Latest State Job Alerts - Career Mitra`,
    description: `Find all latest ${stateName} government jobs, recruitment notifications, admit cards, and results for 2026 on Career Mitra.`,
  };
}

export default async function StateJobs({ params }) {
  const { state } = await params;
  const stateName = state.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  const jobs = [
    { title: `${stateName} Revenue Inspector`, org: `${stateName} State Govt`, lastDate: "10 Feb 2026", location: stateName, slug: `${state}-revenue-inspector` },
    { title: `${stateName} Police Sub Inspector`, org: `${stateName} Police`, lastDate: "20 Mar 2026", location: stateName, slug: `${state}-police-si` },
    { title: `${stateName} High Court Clerk`, org: `${stateName} High Court`, lastDate: "05 Apr 2026", location: stateName, slug: `${state}-high-court-clerk` },
  ];

  return (
    <div className="bg-[#fafafa] py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <SectionTitle 
            title={`${stateName} Govt Jobs`} 
            subtitle={`Showing latest government job opportunities in ${stateName}.`} 
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
