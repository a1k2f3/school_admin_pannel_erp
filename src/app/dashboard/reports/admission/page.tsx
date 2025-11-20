"use client";

export default function AdmissionReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <h1 className="text-6xl font-bold text-center text-indigo-700">Admission Analytics 2025-26</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-indigo-50 border-4 border-indigo-400 rounded-3xl p-10 text-center">
          <p className="text-7xl font-bold text-indigo-700">1,840</p>
          <p className="text-2xl mt-4">Total Students</p>
        </div>
        <div className="bg-blue-50 border-4 border-blue-400 rounded-3xl p-10 text-center">
          <p className="text-7xl font-bold text-blue-700">+184</p>
          <p className="text-2xl mt-4">New Admissions</p>
        </div>
        <div className="bg-green-50 border-4 border-green-400 rounded-3xl p-10 text-center">
          <p className="text-7xl font-bold text-green-700">96%</p>
          <p className="text-2xl mt-4">Conversion Rate</p>
        </div>
        <div className="bg-purple-50 border-4 border-purple-400 rounded-3xl p-10 text-center">
          <p className="text-7xl font-bold text-purple-700">₹2.8 Cr</p>
          <p className="text-2xl mt-4">Admission Fees</p>
        </div>
      </div>
    </div>
  );
}