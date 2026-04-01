import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "About Us - Career Mitra",
  description: "Discover Careermitra’s mission to empower students and job seekers with personalized government job alerts, career resources, and guidance to build a successful future in India.",
  keywords: "Career Mitra, CareerMitra, About Us",
};

export default function AboutUs() {
  return (
    <div className="bg-[#fafafa] py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-gradient">Career Mitra</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-10"></div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left">
              <p>
                Welcome to <strong className="text-gray-900">Career Mitra</strong>, your ultimate destination for everything related to government job alerts in India. We aim to bridge the gap between hard-working aspirants and their dream careers in the public sector.
              </p>
              <p>
                With lakhs of students struggling to find timely and accurate notifications for state and central government jobs, we built this platform to bring you real-time updates directly to your screen. From the latest railway job openings, banking recruitment, SSC, UPSC, and defense jobs, to detailed syllabus guides and admit cards — Career Mitra is the companion every aspirant needs.
              </p>
              <p>
                Our mission is simple: <strong>Empower students and job seekers with personalized, rapid, and 100% accurate job alerts.</strong>
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Choose Career Mitra?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-800">Lightning Fast Updates:</strong> Be the first to know about every new notification.</li>
                <li><strong className="text-gray-800">100% Verified Content:</strong> Authentic links from official government websites only.</li>
                <li><strong className="text-gray-800">User-Friendly Design:</strong> Seamless browsing experience avoiding the clutter commonly found on other platforms.</li>
                <li><strong className="text-gray-800">Personalized Alerts:</strong> Get WhatsApp/Telegram notifications tailored to your qualifications.</li>
              </ul>
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <p className="text-gray-700 font-medium">Join our community and let's achieve success together!</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
