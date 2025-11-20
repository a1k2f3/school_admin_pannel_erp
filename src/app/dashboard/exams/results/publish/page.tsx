"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Upload } from "lucide-react";

export default function PublishResults() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <h1 className="text-5xl font-bold text-center text-purple-700">Publish Exam Results</h1>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-300 rounded-3xl p-12 text-center">
        <Trophy className="w-32 h-32 mx-auto text-purple-600 mb-8" />
        <h2 className="text-4xl font-bold text-purple-800">Half Yearly Results Ready!</h2>
        <p className="text-2xl mt-6">Class 10 • November 2025</p>

        <div className="flex justify-center gap-8 mt-12">
          <Button size="lg" className="gap-4 text-xl px-12 bg-purple-600 hover:bg-purple-700">
            Publish to Parents
          </Button>
          <Button size="lg" variant="outline" className="gap-4 text-xl px-12 border-purple-600 text-purple-700">
            <Upload className="w-8 h-8" /> Upload to Website
          </Button>
        </div>
      </div>
    </div>
  );
}