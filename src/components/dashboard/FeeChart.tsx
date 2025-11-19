import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const feeData = [
  { month: "Jan", collected: 650000, pending: 120000 },
  { month: "Feb", collected: 720000, pending: 98000 },
  { month: "Mar", collected: 780000, pending: 85000 },
  { month: "Apr", collected: 820000, pending: 70000 },
  { month: "May", collected: 880000, pending: 60000 },
  { month: "Jun", collected: 842000, pending: 128000 },
];

export function FeeChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IndianRupee className="w-5 h-5" />
          Fee Collection Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={feeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
            <Tooltip
              formatter={(value: number) => `₹${value.toLocaleString()}`}
              contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: "8px" }}
            />
            <Legend />
            <Area type="monotone" dataKey="collected" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Collected" />
            <Area type="monotone" dataKey="pending" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Pending" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}