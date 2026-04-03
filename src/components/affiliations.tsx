import Image from "next/image";
import Link from "next/link";

export default function Affiliations() {
  return (
    <section id="affiliations" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
          Affiliations
        </h2>
        <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-12 mt-16">

          {/* JNTUA */}
          <Link href="https://www.jntua.ac.in/" target="_blank">
            <div className="group w-40 h-40 rounded-full 
            bg-white flex items-center justify-center 
            shadow-md hover:shadow-2xl
            transition-all duration-500 cursor-pointer
            hover:scale-110 hover:bg-slate-100">

              <Image
                src="/JNTUA.jpeg"
                alt="JNTUA"
                width={110}
                height={110}
                className="object-contain transition-all duration-500 group-hover:scale-125"
              />
            </div>
          </Link>

          {/* AICTE */}
          <Link href="https://www.aicte-india.org/" target="_blank">
            <div className="group w-40 h-40 rounded-full 
            bg-white flex items-center justify-center 
            shadow-md hover:shadow-2xl
            transition-all duration-500 cursor-pointer
            hover:scale-110 hover:bg-slate-100">

              <Image
                src="/AICTE.jpeg"
                alt="AICTE"
                width={110}
                height={110}
                className="object-contain transition-all duration-500 group-hover:scale-125"
              />
            </div>
          </Link>

          {/* NAAC A++ */}
          <Link href="http://naac.gov.in/index.php/en/" target="_blank">
            <div className="group w-40 h-40 rounded-full 
            bg-white flex items-center justify-center 
            shadow-md hover:shadow-2xl
            transition-all duration-500 cursor-pointer
            hover:scale-110 hover:bg-slate-100">

              <Image
                src="/NAAC.jpeg"
                alt="NAAC A++"
                width={110}
                height={110}
                className="object-contain transition-all duration-500 group-hover:scale-125"
              />
            </div>
          </Link>

          {/* APSCHE */}
          <Link href="https://apsche.ap.gov.in/" target="_blank">
            <div className="group w-40 h-40 rounded-full 
            bg-white flex items-center justify-center 
            shadow-md hover:shadow-2xl
            transition-all duration-500 cursor-pointer
            hover:scale-110 hover:bg-slate-100">

              <Image
                src="/APSCHE.jpeg"
                alt="APSCHE"
                width={110}
                height={110}
                className="object-contain transition-all duration-500 group-hover:scale-125"
              />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}