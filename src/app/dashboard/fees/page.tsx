// app/(dashboard)/fees/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  IndianRupee, 
  FileText, 
  TrendingUp, 
  AlertCircle,
  Users,
  Receipt,
  Download,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function FeesDashboard() {
  const stats = {
    totalCollected: 12845000,
    totalPending: 1845000,
    collectionRate: 87.5,
    todayCollection: 482500,
    defaulters: 47,
    onlinePayments: 68
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Fees Management Dashboard
        </h1>
        <p className="text-2xl text-gray-700 mt-4">Academic Year 2025-26 • Complete Financial Overview</p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-emerald-800 text-2xl">Total Collected</CardTitle>
            <IndianRupee className="w-12 h-12 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-emerald-700">
              ₹{ (stats.totalCollected / 100000).toFixed(2) } Cr
            </p>
            <Progress value={stats.collectionRate} className="mt-4 h-4" />
            <p className="text-sm text-gray-600 mt-2">{stats.collectionRate}% of annual target</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-300 bg-gradient-to-br from-red-50 to-pink-50 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-red-800 text-2xl">Pending Fees</CardTitle>
            <AlertCircle className="w-12 h-12 text-red-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-red-700">
              ₹{ (stats.totalPending / 100000).toFixed(2) } Lakh
            </p>
            <p className="text-2xl mt-3 text-red-600">{stats.defaulters} Defaulters</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-blue-800 text-2xl">Today's Collection</CardTitle>
            <TrendingUp className="w-12 h-12 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-blue-700">
              ₹{stats.todayCollection.toLocaleString()}
            </p>
            <Badge className="mt-4 text-lg px-6 bg-green-600">+28% vs yesterday</Badge>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-300 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-purple-800 text-2xl">Online Payments</CardTitle>
            <Receipt className="w-12 h-12 text-purple-600" />
          </CardHeader>
          <CardContent>
            <p className="text-6xl font-bold text-purple-700">{stats.onlinePayments}%</p>
            <p className="text-lg mt-2 text-gray-700">of total transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Link href="/dashboard/fees/structure">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 flex flex-col gap-3">
            <FileText className="w-10 h-10" />
            Fee Structure
          </Button>
        </Link>

        <Link href="/dashboard/fees/challan/generate">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 flex flex-col gap-3">
            <FileText className="w-10 h-10" />
            Generate Challan
          </Button>
        </Link>

        <Link href="/dashboard/fees/challan/bulk">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 flex flex-col gap-3">
            <Users className="w-10 h-10" />
            Bulk Challans
          </Button>
        </Link>

        <Link href="/dashboard/fees/payments">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex flex-col gap-3">
            <Receipt className="w-10 h-10" />
            All Payments
          </Button>
        </Link>

        <Link href="/dashboard/fees/payments/pending">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 flex flex-col gap-3">
            <AlertCircle className="w-10 h-10" />
            Pending Fees
          </Button>
        </Link>

        <Link href="/dashboard/fees/reports/daily">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex flex-col gap-3">
            <Calendar className="w-10 h-10" />
            Daily Report
          </Button>
        </Link>

        <Link href="/dashboard/fees/reports/monthly">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 flex flex-col gap-3">
            <TrendingUp className="w-10 h-10" />
            Monthly Report
          </Button>
        </Link>

        <Link href="/dashboard/fees/reports/defaulters">
          <Button className="w-full h-32 text-xl font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 flex flex-col gap-3">
            <AlertCircle className="w-10 h-10" />
            Defaulters List
          </Button>
        </Link>
      </div>

      {/* Bottom Summary */}
      <Card className="border-4 border-emerald-500 bg-gradient-to-r from-emerald-50 to-teal-50">
        <CardContent className="py-12 text-center">
          <h2 className="text-5xl font-bold text-emerald-800 mb-4">
            Outstanding Performance This Year
          </h2>
          <p className="text-3xl text-emerald-700">
            87.5% Collection Rate • Best in Last 5 Years
          </p>
          <div className="flex justify-center gap-8 mt-10">
            <Button size="lg" className="gap-4 text-xl px-10 bg-emerald-600 hover:bg-emerald-700">
              <Download className="w-8 h-8" /> Export Full Report
            </Button>
            <Button size="lg" variant="outline" className="gap-4 text-xl px-10 border-emerald-600 text-emerald-700">
              View Financial Forecast
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}   