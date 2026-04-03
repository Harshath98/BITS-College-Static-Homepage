export default function VisionMission() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
       <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
    Our Vision & Mission
  </h2>
  <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* Our Vision */}
          <div className="group bg-slate-700
          border border-slate-600 p-6 rounded-2xl shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <h3 className="text-xl font-semibold text-white mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-slate-100 leading-relaxed">
              To be recognized as an outstanding institution in technical education, 
              creating a vibrant quality-oriented environment.
            </p>
          </div>

          {/* Excellence */}
          <div className="group bg-slate-700
          border border-slate-600 p-6 rounded-2xl shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <h3 className="text-xl font-semibold text-white mb-3">
              Excellence
            </h3>
            <p className="text-sm text-slate-100 leading-relaxed">
              Empowering students and faculty to enhance capabilities 
              towards excellence in professional and personal growth.
            </p>
          </div>

          {/* Our Mission */}
          <div className="group bg-slate-700
          border border-slate-600 p-6 rounded-2xl shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <h3 className="text-xl font-semibold text-white mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-slate-100 leading-relaxed">
              To provide contemporary knowledge in engineering, 
              promote professional proficiency and develop responsible citizenship.
            </p>
          </div>

          {/* Community */}
          <div className="group bg-slate-700
          border border-slate-600 p-6 rounded-2xl shadow-md
          hover:-translate-y-2 hover:shadow-2xl
          hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <h3 className="text-xl font-semibold text-white mb-3">
              Community
            </h3>
            <p className="text-sm text-slate-100 leading-relaxed">
              Building awareness, training and a holistic approach 
              towards developing responsible citizens for society.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}