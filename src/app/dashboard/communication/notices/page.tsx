// app/(dashboard)/communication/notices/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Plus, Bell, Users, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Notices() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <div className="text-center py-10">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          School Communication Center
        </h1>
        <p className="text-3xl text-gray-700 mt-6">Notices • SMS • Email • Parent Chat</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <Card className="border-2 border-cyan-300 bg-gradient-to-br from-cyan-50 to-blue-50 text-center">
          <CardHeader><Bell className="w-16 h-16 mx-auto text-cyan-600" /></CardHeader>
          <CardContent><p className="text-6xl font-bold text-cyan-700">156</p><p className="text-xl mt-2">Notices Sent</p></CardContent>
        </Card>
        <Card className="border-2 border-blue-300 text-center"><CardHeader><Megaphone className="w-16 h-16 mx-auto text-blue-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-blue-700">2.4L</p><p className="text-xl mt-2">SMS Sent</p></CardContent></Card>
        <Card className="border-2 border-indigo-300 text-center"><CardHeader><Users className="w-16 h-16 mx-auto text-indigo-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-indigo-700">1,840</p><p className="text-xl mt-2">Parents Online</p></CardContent></Card>
        <Card className="border-2 border-purple-300 text-center"><CardHeader><Bell className="w-16 h-16 mx-auto text-purple-600" /></CardHeader><CardContent><p className="text-6xl font-bold text-purple-700">99.2%</p><p className="text-xl mt-2">Read Rate</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Link href="/dashboard/communication/notices/create"><Button className="h-32 text-xl gap-4 bg-cyan-600 hover:bg-cyan-700"><Plus className="w-10 h-10" />New Notice</Button></Link>
        <Link href="/dashboard/communication/sms"><Button className="h-32 text-xl gap-4 bg-blue-600 hover:bg-blue-700"><Megaphone className="w-10 h-10" />Send SMS</Button></Link>
        <Link href="/dashboard/communication/email"><Button className="h-32 text-xl gap-4 bg-indigo-600 hover:bg-indigo-700"><Mail className="w-10 h-10" />Send Email</Button></Link>
        <Link href="/dashboard/communication/inbox"><Button className="h-32 text-xl gap-4 bg-purple-600 hover:bg-purple-700"><MessageCircle className="w-10 h-10" />Parent Chat</Button></Link>
      </div>

      <Card className="border-2 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <CardTitle className="text-3xl">Recent Notices</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          {["Holiday Notice – Diwali Break", "PTM Schedule – Class 10", "Fee Reminder – Q3"].map((n) => (
            <div key={n} className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl hover:bg-cyan-50 transition-all">
              <div>
                <p className="text-2xl font-bold">{n}</p>
                <p className="text-gray-600">Sent to All Parents • 18 Nov 2025</p>
              </div>
              <Badge className="text-lg px-6 bg-green-600">98% Read</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}