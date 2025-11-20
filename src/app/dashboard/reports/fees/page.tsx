"use client";

import { IndianRupee } from "lucide-react";

export default function FeesReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <h1 className="text-6xl font-bold text-center text-emerald-700">Fees Collection Report</h1>

      <div className="grid grid-cols-3 gap-10">
        <div className="bg-emerald-50 border-4 border-emerald-400 rounded-3xl p-12 text-center">
          <IndianRupee className="w-20 h-20 mx-auto text-emerald-700 mb-4" />
          <p className="text-8xl font-bold text-emerald-700">₹8.42 Cr</p>
          <p className="text-3xl mt-4">Collected This Year</p>
        </div>
        <div className="bg-orange-50 border-4 border-orange-400 rounded-3xl p-12 text-center">
          <p className="text-8xl font-bold text-orange-700">₹68.4L</p>
          <p className="text-3xl mt-4">Pending Fees</p>
        </div>
        <div className="bg-red-50 border-4 border-red-400 rounded-3xl p-12 text-center">
          <p className="text-8xl font-bold text-red-700">142</p>
          <p className="text-3xl mt-4">Defaulters</p>
        </div>
      </div>
    </div>
  );
}