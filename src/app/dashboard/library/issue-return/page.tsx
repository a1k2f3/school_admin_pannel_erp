"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function IssueReturn() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 p-6">
      <h1 className="text-5xl font-bold text-center text-emerald-700">Issue / Return Books</h1>

      <div className="grid grid-cols-2 gap-8">
        <Card className="p-10 text-center">
          <Input placeholder="Scan Student ID / Enter Name" className="h-16 text-xl text-center mb-8" />
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="bg-emerald-100 w-32 h-32 rounded-full" />
              <div className="text-left">
                <p className="text-2xl font-bold">Aarav Sharma</p>
                <p className="text-xl">Class 10-A • Roll 01</p>
              </div>
            </div>
            <Button size="lg" className="w-full text-xl gap-4 bg-emerald-600">
              <CheckCircle2 className="w-8 h-8" /> Issue Book
            </Button>
          </div>
        </Card>

        <Card className="p-10 text-center">
          <Input placeholder="Scan Book Barcode / ISBN" className="h-16 text-xl text-center mb-8" />
          <Button size="lg" className="w-full text-xl gap-4 bg-orange-600">
            <XCircle className="w-8 h-8" /> Return Book
          </Button>
        </Card>
      </div>
    </div>
  );
}