import Image from "next/image"
import Link from "next/link"

export default function Placements() {
  return (
    <section id="placements" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
            Training & Placements
          </h2>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We bridge the gap between academics and industry by preparing students
            with real-world skills and connecting them with top recruiters.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="group bg-slate-700 border border-slate-600
          text-white p-6 rounded-2xl shadow-md text-center
          hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="mt-2 text-sm text-slate-100">Placement Rate</p>
          </div>

          <div className="group bg-slate-700 border border-slate-600
          text-white p-6 rounded-2xl shadow-md text-center
          hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">₹</div>
            <h3 className="text-3xl font-bold">6 LPA</h3>
            <p className="mt-2 text-sm text-slate-100">Highest Package</p>
          </div>

          <div className="group bg-slate-700 border border-slate-600
          text-white p-6 rounded-2xl shadow-md text-center
          hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-2 text-sm text-slate-100">Recruiting Companies</p>
          </div>

          <div className="group bg-slate-700 border border-slate-600
          text-white p-6 rounded-2xl shadow-md text-center
          hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-800
          transition-all duration-500 cursor-pointer">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="mt-2 text-sm text-slate-100">Students Placed</p>
          </div>

        </div>

        {/* Our Top Recruiters Heading (Campus Style) */}
        <div className="text-center mt-20 mb-12">
          <h3 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
            Our Top Recruiters
          </h3>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center gap-10">

          <Link href="https://www.sirisapps.com/" target="_blank">
            <div className="bg-white w-40 h-40 rounded-full 
            flex items-center justify-center 
            shadow-md hover:shadow-xl 
            transition duration-300 hover:scale-105">
              <Image
                src="/SIRIS APPS LOGO.jpeg"
                alt="Company 1"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </Link>

          <Link href="https://www.jilaba.com/" target="_blank">
            <div className="bg-white w-40 h-40 rounded-full 
            flex items-center justify-center 
            shadow-md hover:shadow-xl 
            transition duration-300 hover:scale-105">
              <Image
                src="/jilaba.jpeg"
                alt="Company 2"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="bg-white w-40 h-40 rounded-full 
          flex items-center justify-center 
          shadow-md hover:shadow-xl 
          transition duration-300 hover:scale-105">
            <Image
              src="/VS4U LOGO.jpeg"
              alt="Company 3"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  )
}