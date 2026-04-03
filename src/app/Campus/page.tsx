export default function Campus() {
  return (
    <section id="campus" className="py-24 bg-lightBlue px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Heading (Same) */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
            Campus & Facilities
          </h2>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {[
            { icon: "📚", title: "Modern Library", desc: "Well-stocked with books, journals & e-resources." },
            { icon: "🧪", title: "State-of-the-Art Labs", desc: "Modern computer labs with latest equipment." },
            { icon: "🚌", title: "Transport", desc: "Bus facility from major surrounding areas." },
            { icon: "🔐", title: "Security", desc: "24/7 CCTV surveillance for safety." },
            { icon: "💻", title: "Digital Library", desc: "Access to books, journals & digital resources." },
            { icon: "📶", title: "Wi-Fi Campus", desc: "High-speed internet available across campus." },
            { icon: "🍽️", title: "Canteen", desc: "Hygienic and affordable food options." },
            { icon: "🏀", title: "Sports", desc: "Indoor & outdoor sports facilities." }
          ].map((item, index) => (

            <div
              key={index}
              className="group relative bg-slate-800 rounded-2xl p-6 text-center
              shadow-md
              hover:-translate-y-2 hover:shadow-2xl
              hover:bg-slate-700
              transition-all duration-500 cursor-pointer overflow-hidden"
            >

              {/* Icon Circle */}
              <div className="mx-auto w-12 h-12 flex items-center justify-center 
              rounded-full bg-slate-700 text-white mb-3
              group-hover:bg-slate-600 
              group-hover:scale-110 
              transition-all duration-500 text-2xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-white 
              transition duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 mt-2">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}