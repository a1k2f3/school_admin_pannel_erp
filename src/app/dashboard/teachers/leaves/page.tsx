// app/(dashboard)/teachers/leaves/page.tsx
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

export default function TeacherLeaves() {
  const leaves = [
    { id: "LV001", teacher: "Priya Sharma", type: "Casual", from: "10 Mar", to: "15 Mar", days: 5, status: "Approved" },
    { id: "LV002", teacher: "Rahul Verma", type: "Sick", from: "02 Jan", to: "02 Jan", days: 1, status: "Approved" },
    { id: "LV003", teacher: "Anita Desai", type: "Maternity", from: "01 Apr", to: "30 Jun", days: 90, status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Teacher Leave Requests</h1>
          <p className="text-gray-600">Manage all teacher leave applications</p>
        </div>
        <Button className="gap-2"><Calendar className="w-4 h-4" /> New Request</Button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Teacher</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Days</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaves.map((l) => (
              <TableRow key={l.id}>
                <TableCell className="font-medium">{l.id}</TableCell>
                <TableCell className="font-semibold flex items-center gap-2">
                  <User className="w-4 h-4" /> {l.teacher}
                </TableCell>
                <TableCell>{l.type}</TableCell>
                <TableCell>{l.from}</TableCell>
                <TableCell>{l.to}</TableCell>
                <TableCell>{l.days}</TableCell>
                <TableCell>
                  <Badge variant={l.status === "Approved" ? "default" : l.status === "Pending" ? "secondary" : "destructive"}>
                    {l.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button size="sm" variant={l.status === "Pending" ? "default" : "outline"}>
                    {l.status === "Pending" ? "Review" : "View"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}