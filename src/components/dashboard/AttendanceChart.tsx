import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const attendanceData = [
  { day: "Mon", present: 94, absent: 6 },
  { day: "Tue", present: 96, absent: 4 },
  { day: "Wed", present: 92, absent: 8 },
  { day: "Thu", present: 95, absent: 5 },
  { day: "Fri", present: 89, absent: 11 },
  { day: "Sat", present: 97, absent: 3 },
];

export function AttendanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarCheck className="w-5 h-5" />
          Weekly Attendance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip  />
            <Legend />
            <Line type="monotone" dataKey="present" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981" }} name="Present %" />
            <Line type="monotone" dataKey="absent" stroke="#ef4444" strokeWidth={3} dot={{ fill: "#ef4444" }} name="Absent %" />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold text-green-600">95.2%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Average Attendance This Week</p>
        </div>
      </CardContent>
    </Card>
  );
}