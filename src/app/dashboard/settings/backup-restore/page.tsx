"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudDownload, Shield, Database, Badge } from "lucide-react";

export default function BackupRestore() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 p-8">
      <h1 className="text-6xl font-bold text-center text-red-700">Database Backup & Security</h1>

      <Card className="border-4 shadow-2xl bg-gradient-to-br from-red-50 to-orange-50">
        <CardHeader className="text-center py-16">
          <Shield className="w-32 h-32 mx-auto text-red-600 mb-8" />
          <CardTitle className="text-5xl text-red-800">Your Data is 100% Safe</CardTitle>
          <p className="text-3xl mt-6 text-gray-700">Automated Daily Backups • Encrypted • Instant Restore</p>
        </CardHeader>
        <CardContent className="p-12 space-y-10">
          <div className="text-center">
            <p className="text-3xl text-gray-600">Last Backup</p>
            <p className="text-7xl font-bold text-red-700 mt-6">20 Nov 2025, 2:00 AM</p>
            <Badge className="text-2xl px-10 py-4 mt-8 bg-green-600">SUCCESSFUL</Badge>
          </div>
          <div className="flex justify-center gap-12">
            <Button size="lg" className="text-2xl px-16 py-10 gap-6 bg-red-600 hover:bg-red-700">
              <CloudDownload className="w-10 h-10" /> Download Latest Backup
            </Button>
            <Button size="lg" variant="outline" className="text-2xl px-16 py-10 gap-6 border-red-600 text-red-700">
              <Database className="w-10 h-10" /> Create Manual Backup Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}