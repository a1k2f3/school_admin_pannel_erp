"use client";

import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";

export default function ReportCards() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-700">Generate Report Cards</h1>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-4 border-indigo-300 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold">Class 10 - Half Yearly 2025</h2>
        <p className="text-xl mt-4">156 Students • Ready to Print</p>

        <div className="flex justify-center gap-8 mt-12">
          <Button size="lg" className="gap-4 bg-indigo-600">
            <Download className="w-8 h-8" /> Download All PDFs
          </Button>
          <Button size="lg" variant="outline" className="gap-4 border-indigo-600 text-indigo-700">
            <Printer className="w-8 h-8" /> Print All
          </Button>
        </div>
      </div>
    </div>
  );
}