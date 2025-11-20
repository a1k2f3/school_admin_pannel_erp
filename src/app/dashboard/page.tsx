"use client";
import { Users, UserCheck, IndianRupee, AlertCircle } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { FeeChart } from "@/components/dashboard/FeeChart";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
// import "../globals.css";
export default function DashboardHome() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, Admin!</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Here's what's happening in your school today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Students" 
          value="2,450" 
          icon={Users} 
          change="+12%" 
        />
        <StatsCard 
          title="Total Teachers" 
          value="89" 
          icon={UserCheck} 
          change="+3" 
        />
        <StatsCard 
          title="Fees Collected" 
          value="₹84.2L" 
          icon={IndianRupee} 
          change="+18%" 
          color="green" 
        />
        <StatsCard 
          title="Pending Fees" 
          value="₹12.8L" 
          icon={AlertCircle} 
          change="-5%" 
          color="red" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FeeChart />
        </div>
        <div>
          <AttendanceChart />
        </div>
      </div>
    </>
  );
}