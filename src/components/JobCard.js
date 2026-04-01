import Link from "next/link";
import { FiCalendar, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function JobCard({
  title = "Govt Job Title",
  org = "Organization Name",
  lastDate = "To Be Announced",
  location = "India",
  slug = "example-job",
}) {
  return (
    <div className="bg-white rounded-2xl   border-gray-100 hover-shadow transition-all duration-300 flex flex-col h-full group">
      {/* Dynamic Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">
          New Alert
        </span>
        <button className="text-gray-300 hover:text-green-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </button>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
        {title}
      </h3>

      <div className="space-y-2 mb-6 flex-grow">
        <div className="flex items-center text-gray-600 text-sm">
          <FiBriefcase className="mr-2 text-green-600" />
          <span className="font-medium text-gray-700">{org}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FiCalendar className="mr-2 text-orange-500" />
          <span>
            Last Date:{" "}
            <span className="font-semibold text-gray-800">{lastDate}</span>
          </span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <FiMapPin className="mr-2 text-gray-400" />
          <span>{location}</span>
        </div>
      </div>

      <Link
        href={`/job/${slug}`}
        className="w-full py-3 px-4 rounded-xl bg-gray-50 text-center text-green-700 font-semibold border border-gray-200 group-hover:bg-gradient-primary group-hover:border-transparent group-hover:text-orange-500 transition-all duration-300 block"
      >
        View Details
      </Link>
    </div>
  );
}
