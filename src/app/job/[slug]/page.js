import Link from "next/link";
import { FiCalendar, FiMapPin, FiBriefcase, FiCheckCircle, FiShare2, FiArrowLeft } from "react-icons/fi";
import AnimatedSection from "../../../components/AnimatedSection";

// Simulated fetch based on slug for dynamic SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // Format slug to a readable title
  const formattedTitle = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return {
    title: `${formattedTitle} - Career Mitra`,
    description: `Complete details, notification, eligibility, and apply online link for ${formattedTitle} on Career Mitra.`,
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const formattedTitle = slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="bg-[#fafafa] py-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back */}
        <div className="flex justify-between items-center mb-6">
          <Link href="/latest-govt-jobs" className="flex items-center text-gray-500 hover:text-orange-500 transition-colors font-medium">
            <FiArrowLeft className="mr-2" /> Back to Jobs
          </Link>
          <div className="text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Home</Link> / <Link href="/latest-govt-jobs" className="hover:text-gray-700">Jobs</Link> / <span className="text-gray-600">{slug}</span>
          </div>
        </div>

        {/* Main Job Header Card */}
        <AnimatedSection animation="fade-up" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
          {/* Decorative Blob */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-50 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-green-100 text-green-700 font-bold px-4 py-1.5 rounded-full text-sm border border-green-200">
                Active Notification
              </span>
              <button className="flex items-center text-gray-500 hover:text-orange-500 transition-colors bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium">
                <FiShare2 className="mr-2" /> Share
              </button>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              {formattedTitle}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-500 mr-4">
                  <FiBriefcase size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium pb-1">Organization</p>
                  <p className="font-bold text-gray-800">Govt Department</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-xl text-green-600 mr-4">
                  <FiCalendar size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium pb-1">Last Date</p>
                  <p className="font-bold text-gray-800">20 Jan 2026</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-500 mr-4">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium pb-1">Location</p>
                  <p className="font-bold text-gray-800">All India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#apply" className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-bold text-lg hover-scale shadow-lg text-center">
                Apply Online Now
              </a>
              <a href="#notification" className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-orange-500 hover:text-orange-500 transition-colors text-center">
                Download Official PDF
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Job Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection animation="fade-up" className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
                <span className="bg-orange-500 w-2 h-8 rounded-full mr-3"></span> Eligibility Criteria
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p><strong>Educational Qualification:</strong> Candidates must have passed 10th / 12th / Degree from a recognized board or university.</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p><strong>Age Limit:</strong> 18 to 28 Years. Age relaxation applicable as per govt rules.</p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p><strong>Nationality:</strong> Must be a citizen of India.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center border-b pb-4">
                <span className="bg-green-600 w-2 h-8 rounded-full mr-3"></span> Important Dates
              </h2>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b">
                    <th className="py-4 text-gray-600 font-medium">Notification Released</th>
                    <td className="py-4 font-semibold text-gray-900">01 Jan 2026</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 text-gray-600 font-medium">Start Date to Apply</th>
                    <td className="py-4 font-semibold text-gray-900">05 Jan 2026</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-4 text-gray-600 font-medium">Last Date to Apply</th>
                    <td className="py-4 font-bold text-orange-600">20 Jan 2026</td>
                  </tr>
                  <tr>
                    <th className="py-4 text-gray-600 font-medium">Exam Date</th>
                    <td className="py-4 font-semibold text-gray-900">To be announced</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <AnimatedSection animation="fade-left" className="bg-gradient-to-br from-orange-50 to-green-50 rounded-3xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-orange-600 font-bold hover:underline flex items-center">Apply Online Link <FiArrowRight className="ml-2"/></a></li>
                <li><a href="#" className="text-green-600 font-bold hover:underline flex items-center">Official Notification <FiArrowRight className="ml-2"/></a></li>
                <li><a href="#" className="text-blue-600 font-bold hover:underline flex items-center">Official Website <FiArrowRight className="ml-2"/></a></li>
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">Related Jobs</h3>
              <div className="space-y-4">
                <Link href="/job/tspsc-group-2" className="block p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                  <p className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">TSPSC Group 2 Services</p>
                  <p className="text-sm text-gray-500 mt-1">Last Date: 05 Feb 2026</p>
                </Link>
                <Link href="/job/ssc-cgl-2026" className="block p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                  <p className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">SSC CGL Examination 2026</p>
                  <p className="text-sm text-gray-500 mt-1">Last Date: 28 Feb 2026</p>
                </Link>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* Note: FAQ Schema would go here typically as a <script type="application/ld+json"> tag */}
      </div>
    </div>
  );
}
