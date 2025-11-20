"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Bell } from "lucide-react";
import Link from "next/link";

export default function CreateNotice() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/communication/notices"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-cyan-700">Create New Notice</h1>
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center">
          <Bell className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Send Notice to Parents</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="space-y-2"><Input placeholder="Notice Title" className="h-16 text-xl" /></div>
          <div className="space-y-2"><Textarea placeholder="Write your message here..." className="min-h-64 text-lg" /></div>
          <div className="grid grid-cols-3 gap-6">
            <Button variant="outline" size="lg">All Parents</Button>
            <Button variant="outline" size="lg">Class 10 Only</Button>
            <Button variant="outline" size="lg">Hostel Students</Button>
          </div>
          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Save as Draft</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 px-12">
              <Bell className="w-6 h-6" /> Send Notice Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}