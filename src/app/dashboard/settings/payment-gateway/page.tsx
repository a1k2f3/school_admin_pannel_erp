"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CreditCard} from "lucide-react";
import { Label } from "recharts";

export default function PaymentGateway() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-8">
      <h1 className="text-6xl font-bold text-center text-emerald-700">Payment Gateway Settings</h1>

      <Card className="border-4 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-600 text-white text-center py-16">
          <CreditCard className="w-32 h-32 mx-auto mb-8" />
          <CardTitle className="text-5xl">Razorpay</CardTitle>
          <Badge className="text-3xl px-12 py-5 mt-8 bg-green-600">LIVE & ACTIVE</Badge>
        </CardHeader>
        <CardContent className="p-12 space-y-10">
          <div className="grid grid-cols-2 gap-10">
            <div><Label className="text-xl">Key ID</Label><Input defaultValue="rzp_live_AbCdEfGhIj" className="h-14 text-lg font-mono" /></div>
            <div><Label className="text-xl">Key Secret</Label><Input type="password" defaultValue="••••••••••••••••" className="h-14 text-lg font-mono" /></div>
          </div>
          <div className="text-center pt-10">
            <p className="text-8xl font-bold text-emerald-700">₹8.42 Cr</p>
            <p className="text-3xl mt-4">Collected via Online Payments</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}