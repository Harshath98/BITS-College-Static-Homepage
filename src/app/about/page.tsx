"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-4 items-center">

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/about.jpeg"
            alt="Campus"
            className="rounded-2xl w-full h-[300px] md:h-[380px] object-cover shadow-lg"
          />

        
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
            Shaping Future Engineers
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Our college academics are powered by advanced AI-based technologies 
            that enhance the learning experience through smart digital platforms 
            and real-time industry-focused tools. The curriculum is aligned with 
            emerging technology trends, enabling students to develop innovative 
            thinking, practical problem-solving skills, and industry-ready 
            competencies for the future.
          </p>

          {/* Highlight Points */}
          <ul className="mt-6 space-y-2 text-gray-700 text-sm">
            <li>✔ AI Integrated Smart Learning</li>
            <li>✔ Industry-Oriented Curriculum</li>
            <li>✔ Real-Time Technology Exposure</li>
            <li>✔ Innovation Driven Education</li>
          </ul>

        </motion.div>

      </div>
    </section>
  );
}