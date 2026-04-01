import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-4 rounded-full shadow-2xl shadow-orange-500/40 hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-white text-green-600 font-semibold px-4 py-2 text-sm rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
