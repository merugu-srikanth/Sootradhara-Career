import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "Contact Us - Career Mitra",
  description: "Contact Careermitra for personalized government job alerts, career guidance, and support.",
  keywords: "Contact Us, Career Mitra Contact",
};

export default function ContactUs() {
  return (
    <div className="bg-[#fafafa] py-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
            
            {/* Contact Info Side */}
            <div className="bg-gradient-primary text-white p-10 md:p-12 md:w-2/5 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
                <p className="text-white/80 mb-8">
                  Have a question about a notification, or need career guidance? We are here to help. Drop us a message!
                </p>

                <div className="space-y-6 text-white/90">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>support@careermitra.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10 md:p-12 md:w-3/5">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-gradient-primary text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] transition-all">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
