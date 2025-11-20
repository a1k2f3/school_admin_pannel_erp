"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SendEmail() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      <h1 className="text-5xl font-bold text-center text-indigo-700">Send Email Broadcast</h1>

      <Card className="border-4 border-indigo-300 shadow-2xl">
        <CardContent className="p-12 space-y-8">
          <Input placeholder="Subject Line" className="h-16 text-2xl" />
          <Textarea placeholder="Write your email content here..." className="min-h-96 text-lg" />
          <div className="flex justify-between items-center">
            <p className="text-xl text-gray-600">Sending to: <strong>2,450 Parents</strong></p>
            <Button size="lg" className="text-xl px-12 gap-4 bg-gradient-to-r from-indigo-600 to-purple-600">
              Send Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}