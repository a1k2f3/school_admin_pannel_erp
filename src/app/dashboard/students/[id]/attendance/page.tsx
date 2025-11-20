// app/(dashboard)/students/[id]/attendance/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function AttendanceTab() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const attendance = [95, 92, 98, 96, 94, 97];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Attendance Record
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">95.3%</p>
              <p className="text-sm text-gray-600">Overall Attendance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">182</p>
              <p className="text-sm text-gray-600">Present Days</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-600">8</p>
              <p className="text-sm text-gray-600">Late Arrivals</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-red-600">3</p>
              <p className="text-sm text-gray-600">Absent Days</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Monthly Trend</h3>
            <div className="grid grid-cols-6 gap-4">
              {months.map((m, i) => (
                <div key={m} className="text-center">
                  <p className="text-sm text-gray-600">{m}</p>
                  <p className="text-2xl font-bold">{attendance[i]}%</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}