"use client";

import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RolesPermissions() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 p-8">
      <h1 className="text-6xl font-bold text-center text-indigo-700">Roles & Permissions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {["Principal", "Admin", "Teacher", "Accountant", "Librarian", "Reception"].map((role) => (
          <Card key={role} className="border-4 shadow-xl hover:shadow-2xl transition-all">
            <CardHeader className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-center py-10">
              <CardTitle className="text-4xl">{role}</CardTitle>
              <Badge className="mt-4 text-xl px-8">Active</Badge>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {["View Students", "Edit Fees", "Send SMS", "Generate Reports", "Manage Timetable"].map((perm) => (
                <div key={perm} className="flex items-center justify-between">
                  <span className="text-lg font-medium">{perm}</span>
                  <Switch defaultChecked={role === "Principal" || role === "Admin"} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}