"use client"

import { motion } from "framer-motion"

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
       <div className="text-center mb-16">
  <h2 className="text-4xl font-bold text-[#1E3A8A] tracking-wide">
    Programs Offered
  </h2>
  <div className="w-24 h-1 bg-[#2563EB] mx-auto mt-3 rounded-full"></div>
</div>

        <div className="grid md:grid-cols-3 gap-20 text-left">

          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
            hover:-translate-y-3 hover:shadow-xl 
            transition-all duration-300 cursor-pointer"
          >

            <div className="bg-[#0e2147] text-white p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold">
                B.Tech Programs
              </h3>
              <p className="text-lg opacity-80 mt-1">4 Years</p>
            </div>

            <div className="p-8">
              <ul className="space-y-3 text-gray-700">
                <li>Civil Engineering</li>
                <li>Computer Science & Engineering</li>
                <li>AI & Machine Learning</li>
                <li>Electronics & Communication</li>
                <li>Electrical & Electronics</li>
                <li>Mechanical Engineering</li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    NEW
                  </span>
                  Artificial Intelligence
                </li>
              </ul>
            </div>

          </motion.div>

          {/* M.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
            hover:-translate-y-3 hover:shadow-xl 
            transition-all duration-300 cursor-pointer"
          >

            <div className="bg-[#0e2147] text-white p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold">
                M.Tech Programs
              </h3>
              <p className="text-lg opacity-80 mt-1">2 Years</p>
            </div>

            <div className="p-8">
              <ul className="space-y-3 text-gray-700">
                <li>Computer Science & Engineering</li>
                <li>Embedded Systems</li>
                <li>Electronics Power System</li>
                <li>Computer Aided Manufacturing</li>
                <li>Highway Engineering</li>
              </ul>
            </div>

          </motion.div>

          {/* Diploma */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
            hover:-translate-y-3 hover:shadow-xl 
            transition-all duration-300 cursor-pointer"
          >

            <div className="bg-[#0e2147] text-white p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold">
                Diploma Programs
              </h3>
              <p className="text-lg opacity-80 mt-1">3 Years</p>
            </div>

            <div className="p-8">
              <ul className="space-y-3 text-gray-700">
                <li>Computer Science & Engineering</li>
                <li>Electronics & Communication</li>
                <li>Electrical & Electronics</li>
                <li>Mechanical Engineering</li>
                <li>Civil Engineering</li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    NEW
                  </span>
                  Artificial Intelligence
                </li>
              </ul>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}