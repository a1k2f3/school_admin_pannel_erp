"use client";

import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";

export default function HostelFees() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-emerald-700">Hostel Fee Collection</h1>
        <p className="text-8xl font-bold text-emerald-700 mt-8">₹2.84 Crore</p>
        <p className="text-3xl mt-4">Collected This Year</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="bg-emerald-50 border-4 border-emerald-300 rounded-3xl p-10 text-center">
          <p className="text-6xl font-bold text-emerald-700">₹18,000</p>
          <p className="text-xl mt-4">Monthly (AC Room)</p>
        </div>
        <div className="bg-pink-50 border-4 border-pink-300 rounded-3xl p-10 text-center">
          <p className="text-6xl font-bold text-pink-700">₹14,000</p>
          <p className="text-xl mt-4">Monthly (Non-AC)</p>
        </div>
        <div className="bg-orange-50 border-4 border-orange-300 rounded-3xl p-10 text-center">
          <p className="text-6xl font-bold text-orange-700">₹1,25,000</p>
          <p className="text-xl mt-4">Security Deposit</p>
        </div>
      </div>
    </div>
  );
}