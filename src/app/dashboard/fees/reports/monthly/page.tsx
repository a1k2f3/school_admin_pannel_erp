"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, IndianRupee } from "lucide-react";

export default function MonthlyReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Monthly Fee Report – November 2025
        </h1>
        <p className="text-2xl text-gray-700 mt-4">Target: ₹1.8 Crore • Achieved: ₹1.42 Crore</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-pink-50 text-center">
          <CardHeader>
            <TrendingUp className="w-16 h-16 mx-auto text-purple-600" />
            <CardTitle className="text-3xl mt-4">Collected</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-purple-700 flex items-center justify-center gap-3">
              <IndianRupee className="w-14 h-14" />1.42 Cr
            </p>
            <p className="text-xl mt-4 text-green-600">+18% vs last month</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-300 text-center">
          <CardHeader><CardTitle className="text-3xl">Pending</CardTitle></CardHeader>
          <CardContent>
            <p className="text-7xl font-bold text-orange-700">₹38 Lakh</p>
            <p className="text-xl mt-4">From 312 students</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-300 text-center">
          <CardHeader><CardTitle className="text-3xl">Collection Rate</CardTitle></CardHeader>
          <CardContent>
            <p className="text-8xl font-bold text-emerald-700">79%</p>
            <Button className="mt-6 bg-emerald-600">View Full Breakdown</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}