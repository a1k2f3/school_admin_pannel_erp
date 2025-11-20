"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function OnlinePayments() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <h1 className="text-4xl font-bold text-blue-700">Online Payments</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-8 text-center">
          <p className="text-5xl font-bold text-green-600">₹85,42,000</p>
          <p className="text-xl mt-3">Via UPI / Cards</p>
        </Card>
        <Card className="p-8 text-center">
          <p className="text-5xl font-bold text-purple-600">1,423</p>
          <p className="text-xl mt-3">Transactions</p>
        </Card>
        <Card className="p-8 text-center">
          <p className="text-5xl font-bold text-orange-600">98.2%</p>
          <p className="text-xl mt-3">Success Rate</p>
        </Card>
      </div>
    </div>
  );
}