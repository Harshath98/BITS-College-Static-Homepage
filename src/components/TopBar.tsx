"use client";

import Marquee from "react-fast-marquee";
import { Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 h-[40px] 
    bg-[#0B1F3A] text-white text-sm flex items-center">

      <Marquee
        speed={40}
        pauseOnHover={true}
        pauseOnClick={true}
        gradient={false}
      >
        <div className="flex items-center">

          {/* Counselling Code */}
          <span className="mx-16 whitespace-nowrap text-[#EEF0F5] font-medium">
            Counselling Code: <b>BEMA</b>
          </span>

          {/* Phone */}
          <div
            onClick={() => {
              window.open("tel:+91766601179", "_self");
            }}
            className="flex items-center gap-2 mx-16 whitespace-nowrap hover:text-[#3B82F6] transition cursor-pointer"
          >
            <Phone size={16} />
            +91 766601179
          </div>

          {/* Email */}
          <div
            onClick={() => {
              window.open(
                "mailto:principal.k@jntua.ac.in?subject=BITS Admission Enquiry&body=Hello Sir/Madam,%0D%0A%0D%0AI would like to apply for admission at Bheema Institute of Technology and Science.%0D%0APlease provide me with more details regarding the application process.%0D%0A%0D%0AThank You.",
                "_self"
              );
            }}
            className="flex items-center gap-2 mx-16 whitespace-nowrap hover:text-[#3B82F6] transition cursor-pointer"
          >
            <Mail size={16} />
            principal.k@jntua.ac.in
          </div>

        </div>
      </Marquee>

    </div>
  );
};

export default TopBar;