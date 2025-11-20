"use client";

import { use } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Clock, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BookDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/library/books"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-teal-700">Harry Potter and the Philosopher's Stone</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 text-center p-8">
          <div className="bg-teal-100 w-full h-96 rounded-xl mb-6" />
          <Badge className="text-xl px-8 py-3 bg-green-600">AVAILABLE</Badge>
          <p className="text-3xl font-bold mt-4">22 Copies</p>
        </Card>

        <Card className="md:col-span-2 space-y-6">
          <CardHeader><CardTitle className="text-3xl">Book Information</CardTitle></CardHeader>
          <CardContent className="space-y-6 text-lg">
            <div className="grid grid-cols-2 gap-6">
              <div><strong>Author:</strong> J.K. Rowling</div>
              <div><strong>ISBN:</strong> 978-0439708180</div>
              <div><strong>Category:</strong> Fiction / Fantasy</div>
              <div><strong>Shelf:</strong> A-12</div>
              <div><strong>Total Copies:</strong> 25</div>
              <div><strong>Issued:</strong> 3</div>
            </div>
            <div className="pt-6 border-t">
              <strong>Description:</strong> The first book in the Harry Potter series...
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}