// "use client";
import Link from "next/link";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function JobCard({
  title,
  org,
  lastDate,
  location,
  slug,
  description,
}) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md border border-orange-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Top Gradient */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 to-orange-500"></div>

      <div className="p-5 flex flex-col justify-between h-full relative z-10">
        
        {/* Title */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 leading-snug line-clamp-2 group-hover:text-orange-600 transition">
            {title}
          </h2>
          

          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FiBriefcase className="text-orange-500"/> {org}
          </p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
  {description}
</p>

          <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
            <FiMapPin  className="text-orange-500"/> {location}
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-5 flex justify-between items-center">
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <FiCalendar className="text-orange-500"/>{ " "}
            <span className="font-semibold text-orange-600">
              Deadline: {lastDate}
            </span>
          </div>

          {/* Button */}
          <Link href={`/jobs/${slug}`}>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 hover:scale-105">
              View More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}