import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-primary text-white pt-16 mt-20 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(255,122,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">Career Mitra</h2>
            <p className="text-green-50 text-sm leading-relaxed">
              Find the latest government job alerts in India including central and state jobs, SSC, UPSC, banking, railway, and defense jobs. Get real-time personalized notifications.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-orange-500 transition-all">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white hover:text-green-600 transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5 border-b border-white/30 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-green-50">
              <li><Link href="/about-us" className="hover:text-white hover:translate-x-1 transition-transform inline-block">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-white hover:translate-x-1 transition-transform inline-block">FAQs</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Latest Jobs */}
          <div>
            <h3 className="text-lg font-bold mb-5 border-b border-white/30 pb-2 inline-block">Top Categories</h3>
            <ul className="space-y-3 text-green-50">
              <li><Link href="/latest-govt-jobs" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Latest Govt Jobs</Link></li>
              <li><Link href="/central-govt-jobs" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Central Govt Jobs</Link></li>
              <li><Link href="/state-jobs/andhra-pradesh" className="hover:text-white hover:translate-x-1 transition-transform inline-block">AP Govt Jobs</Link></li>
              <li><Link href="/state-jobs/telangana" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Telangana Jobs</Link></li>
              <li><Link href="/internship" className="hover:text-white hover:translate-x-1 transition-transform inline-block">Internships</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-5 border-b border-white/30 pb-2 inline-block">Get Job Alerts</h3>
            <p className="text-green-50 mb-4 text-sm">Subscribe to get daily notifications directly to your inbox.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-green-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button 
                type="button" 
                className="px-4 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="border-t border-white/20 bg-black/10 text-center py-6 text-sm text-green-50">
        <p>&copy; {new Date().getFullYear()} Career Mitra. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
