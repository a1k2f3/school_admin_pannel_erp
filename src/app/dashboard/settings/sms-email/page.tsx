"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SmsEmailSettings() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-8">
      <h1 className="text-6xl font-bold text-center text-blue-700">SMS & Email Gateway Settings</h1>

      <div className="grid grid-cols-2 gap-12">
        <Card className="border-4 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <CardTitle className="text-3xl text-center">SMS Provider (MSG91)</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div><Label>Sender ID</Label><Input defaultValue="DPSDWK" className="h-14 text-lg" /></div>
            <div><Label>Auth Key</Label><Input type="password" defaultValue="••••••••••••••••" className="h-14 text-lg" /></div>
            <div className="flex justify-between items-center">
              <span className="text-xl">SMS Balance</span>
              <Badge className="text-2xl px-8 py-3 bg-green-600">1,84,520 SMS</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-4 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardTitle className="text-3xl text-center">Email (Resend / SMTP)</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div><Label>From Email</Label><Input defaultValue="noreply@dpsdwarka.edu.in" className="h-14 text-lg" /></div>
            <div><Label>SMTP Host</Label><Input defaultValue="smtp.resend.com" className="h-14 text-lg" /></div>
            <div><Label>API Key</Label><Input type="password" defaultValue="re_••••••••" className="h-14 text-lg" /></div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" className="text-2xl px-20 py-8 bg-gradient-to-r from-blue-600 to-purple-600">
          Save All Gateway Settings
        </Button>
      </div>
    </div>
  );
}