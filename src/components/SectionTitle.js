export default function SectionTitle({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
        {title} <span className="text-green-600 text-4xl leading-none">.</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-2xl text-lg font-medium">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-20 bg-gradient-primary rounded-full ${centered ? "mx-auto" : ""}`}></div>
    </div>
  );
}
