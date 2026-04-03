"use client";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      setSuccessMessage("");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return;
    }

    setSuccessMessage("Message sent successfully!");
    setErrorMessage("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      title: "Our Location",
      details: "Dhanapuram, Adoni, Andhra Pradesh - 518302",
      icon: MapPinIcon,
    },
    {
      title: "Phone Number",
      details: "+91 7660011182",
      subDetails: "Mon-Sat, 9am - 5pm",
      icon: PhoneIcon,
    },
    {
      title: "Email Address",
      details: "principal.2k@jntua.ac.in",
      icon: EnvelopeIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-black rounded-lg text-sm text-white hover:bg-gray-800 transition-colors mb-8"
          >
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <a
              href="mailto:principal.2k@jntua.ac.in"
              className="flex items-center gap-4 hover:opacity-80 transition"
            >
              <EnvelopeIcon className="w-12 h-12 text-yellow-400 cursor-pointer" />
              <span className="bg-blue-800 px-3 py-1 rounded-full text-sm font-semibold text-blue-200 border border-blue-700">
                Get in Touch
              </span>
            </a>
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Have questions about admissions, academics, or campus life? We are
            here to help.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-4 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Reach out to us through any of the following channels.
              </p>
            </div>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-6 hover:bg-black transition-all duration-300"
              >
                <div className=" p-4  rounded-xl ">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover: text-yellow-500 transition-colors duration-300" />
                </div>
                <div> 
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:! text-yellow-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 font-medium group-hover:text-white transition-colors duration-300">
                    {item.details}
                  </p>
                  {item.subDetails && (
                    <p className="text-sm text-gray-500 mt-1 group-hover:text-yellow-500 transition-colors duration-300">
                      {item.subDetails}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-blue-900 rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Error Message */}
              {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                  {errorMessage}
                </div>
              )}





              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-yellow-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 outline-none"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-yellow-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 outline-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
              {/* Success Message */}
              {successMessage && (
                <p className="text-green-500 text-center font-semibold text-lg animate-fadeIn">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>



    </div>
  );
}