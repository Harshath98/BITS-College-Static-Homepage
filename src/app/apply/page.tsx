"use client";

export default function ApplyPage() {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          BITS Admission Application Form
        </h2>

        <form className="grid md:grid-cols-2 gap-4">

          {/* PERSONAL DETAILS */}
          <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
          <input type="text" placeholder="Father Name" className="p-3 border rounded-lg" />
          <input type="date" className="p-3 border rounded-lg" />

          <select className="p-3 border rounded-lg">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input type="tel" placeholder="Mobile Number" className="p-3 border rounded-lg" />
          <input type="tel" placeholder="Alternate Mobile Number" className="p-3 border rounded-lg" />
          <input type="email" placeholder="Email Address" className="p-3 border rounded-lg md:col-span-2" />

          {/* ADDRESS */}
          <textarea placeholder="Full Address"
          className="p-3 border rounded-lg md:col-span-2"></textarea>

          <input type="text" placeholder="City" className="p-3 border rounded-lg" />
          <input type="text" placeholder="District" className="p-3 border rounded-lg" />
          <input type="text" placeholder="State" className="p-3 border rounded-lg" />
          <input type="text" placeholder="Pincode" className="p-3 border rounded-lg" />

          {/* ACADEMIC */}
          <input type="text" placeholder="10th School Name" className="p-3 border rounded-lg" />
          <input type="text" placeholder="10th Percentage / CGPA" className="p-3 border rounded-lg" />
          <input type="text" placeholder="12th / Diploma College Name" className="p-3 border rounded-lg" />
          <input type="text" placeholder="12th / Diploma Percentage" className="p-3 border rounded-lg" />
          <input type="text" placeholder="Year of Passing" className="p-3 border rounded-lg" />

          {/* COURSE */}
          <select className="p-3 border rounded-lg">
            <option>Select Course</option>
            <option>B.Tech</option>
            <option>M.Tech</option>
            <option>Diploma</option>
          </select>

          <select className="p-3 border rounded-lg">
            <option>Select Branch</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>

          {/* ENTRANCE EXAMS */}
          <input type="text" placeholder="EAMCET Rank" className="p-3 border rounded-lg" />
          <input type="text" placeholder="POLYCET Rank" className="p-3 border rounded-lg" />

          {/* PARENT DETAILS */}
          <input type="text" placeholder="Parent Name" className="p-3 border rounded-lg" />
          <input type="text" placeholder="Parent Mobile Number" className="p-3 border rounded-lg" />

          {/* HOSTEL */}
          <select className="p-3 border rounded-lg">
            <option>Hostel Required?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          <select className="p-3 border rounded-lg">
            <option>Transport Required?</option>
            <option>Yes</option>
            <option>No</option>
          </select>

          {/* FILE UPLOADS */}
          <label className="md:col-span-2 font-semibold mt-4">Upload Documents:</label>

          <input type="file" className="p-2 border rounded-lg" />
          <input type="file" className="p-2 border rounded-lg" />
          <input type="file" className="p-2 border rounded-lg" />
          <input type="file" className="p-2 border rounded-lg" />

          {/* DECLARATION */}
          <div className="md:col-span-2 flex items-center gap-2 mt-4">
            <input type="checkbox" />
            <label>I hereby declare that the above information is true.</label>
          </div>

          {/* SUBMIT */}
          <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg md:col-span-2 mt-4">
            Submit Application
          </button>

        </form>
      </div>
    </section>
  );
}