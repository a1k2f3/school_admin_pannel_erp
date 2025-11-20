"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText } from "lucide-react";

export default function BulkChallan() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-indigo-700">Bulk Generate Fee Challans</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-8 text-center cursor-pointer hover:scale-105 transition-all border-2">
          <FileText className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
          <h3 className="text-2xl font-bold">Class 10</h3>
          <Badge className="mt-3">156 Students</Badge>
          <Button className="mt-6 w-full bg-indigo-600">Generate All</Button>
        </Card>
        {/* Repeat for other classes */}
      </div>

      <Card className="p-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
        <Download className="w-20 h-20 mx-auto text-green-600 mb-6" />
        <h2 className="text-3xl font-bold text-green-800">156 Challans Generated!</h2>
        <Button size="lg" className="mt-6 gap-3 bg-green-600">
          <Download className="w-6 h-6" /> Download All as ZIP
        </Button>
      </Card>
    </div>
  );
}