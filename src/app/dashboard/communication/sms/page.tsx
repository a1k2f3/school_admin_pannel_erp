"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function SendSMS() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      <h1 className="text-5xl font-bold text-center text-blue-700">Send Bulk SMS</h1>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-4 border-blue-300 rounded-3xl p-12">
        <div className="text-center space-y-8">
          <Textarea placeholder="Type your SMS here... (Max 160 characters)" className="min-h-48 text-2xl text-center" />
          <div className="text-6xl font-bold text-blue-700">148</div>
          <Badge className="text-2xl px-8 py-4 bg-green-600">2,450 Parents Selected</Badge>
          <div className="flex justify-center gap-8">
            <Button size="lg" className="text-2xl px-16 py-8 gap-6 bg-gradient-to-r from-blue-600 to-cyan-600">
              Send SMS Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}