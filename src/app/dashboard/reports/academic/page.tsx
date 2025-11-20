"use client";

export default function AcademicReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <h1 className="text-6xl font-bold text-center text-purple-700">Academic Performance Report</h1>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-400 rounded-3xl p-16 text-center">
        <p className="text-9xl font-bold text-purple-700">97.4%</p>
        <p className="text-4xl mt-6">Class 10 Board Result 2025</p>
        <p className="text-2xl mt-4">42 Students Scored 95%+</p>
        <p className="text-2xl mt-2">School Topper: Aarav Sharma – 98.8%</p>
      </div>
    </div>
  );
}