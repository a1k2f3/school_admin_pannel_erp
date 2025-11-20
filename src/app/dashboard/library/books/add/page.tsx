"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AddBook() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/library/books"><Button variant="ghost" size="icon"><ArrowLeft /></Button></Link>
        <h1 className="text-4xl font-bold text-teal-700">Add New Book</h1>
      </div>

      <Card className="border-2 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-center">
          <BookOpen className="w-20 h-20 mx-auto mb-4" />
          <CardTitle className="text-3xl">Book Details</CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2"><Label className="text-lg">Title</Label><Input placeholder="Harry Potter and the Philosopher's Stone" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Author</Label><Input placeholder="J.K. Rowling" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">ISBN</Label><Input placeholder="978-0439708180" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Category</Label><Input placeholder="Fiction" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Copies Available</Label><Input type="number" placeholder="25" className="h-14 text-lg" /></div>
            <div className="space-y-2"><Label className="text-lg">Shelf No</Label><Input placeholder="A-12" className="h-14 text-lg" /></div>
          </div>
          <div className="space-y-2"><Label className="text-lg">Description</Label><Textarea placeholder="Brief summary..." className="min-h-32" /></div>

          <div className="flex justify-end gap-6 pt-8 border-t">
            <Button variant="outline" size="lg">Cancel</Button>
            <Button size="lg" className="gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 px-12">
              <BookOpen className="w-6 h-6" /> Add to Library
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}