export default function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
            Admissions 2025-26
          </h2>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Admissions through EAPCET conducted by the Government of Andhra Pradesh.
            Begin your journey towards a bright engineering career.
          </p>
        </div>

        {/* Admission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* A Category */}
          <div className="group bg-slate-700 border border-slate-600
                          text-white p-6 rounded-2xl shadow-md text-center
                          hover:-translate-y-2 hover:shadow-2xl
                          hover:bg-slate-800
                          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="text-4xl font-bold">70%</h3>
            <p className="mt-2 text-sm font-semibold">
              A-Category (EAPCET)
            </p>
            <p className="text-xs mt-1 text-slate-200">
              Allotted by Convener based on EAPCET merit
            </p>
          </div>

          {/* B Category */}
          <div className="group bg-slate-700 border border-slate-600
                          text-white p-6 rounded-2xl shadow-md text-center
                          hover:-translate-y-2 hover:shadow-2xl
                          hover:bg-slate-800
                          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">🏫</div>
            <h3 className="text-4xl font-bold">30%</h3>
            <p className="mt-2 text-sm font-semibold">
              B-Category (NRI/Mgmt)
            </p>
            <p className="text-xs mt-1 text-slate-200">
              Earmarked for NRI / Management candidates
            </p>
          </div>

          {/* Lateral Entry */}
          <div className="group bg-slate-700 border border-slate-600
                          text-white p-6 rounded-2xl shadow-md text-center
                          hover:-translate-y-2 hover:shadow-2xl
                          hover:bg-slate-800
                          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">📘</div>
            <h3 className="text-4xl font-bold">10%</h3>
            <p className="mt-2 text-sm font-semibold">
              Lateral Entry (ECET)
            </p>
            <p className="text-xs mt-1 text-slate-200">
              Diploma holders admitted to 2nd year B.Tech
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}