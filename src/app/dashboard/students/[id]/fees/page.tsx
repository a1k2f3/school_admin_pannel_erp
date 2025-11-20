// app/(dashboard)/students/[id]/fees/page.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function FeesTab() {
  const payments = [
    { month: "April 2025", amount: 15000, status: "Paid", date: "2025-04-05" },
    { month: "May 2025", amount: 15000, status: "Paid", date: "2025-05-03" },
    { month: "June 2025", amount: 15000, status: "Pending", date: null },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader><CardTitle>Total Fees</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold">₹1,80,000</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Paid</CardTitle></CardHeader>
          <CardContent><p className="text-3xl font-bold text-green-600">₹30,000</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Pending</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">₹1,50,000</p>
            <Badge variant="destructive" className="mt-2">Defaulter</Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Payment History</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Month</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.month}>
                  <TableCell>{p.month}</TableCell>
                  <TableCell>₹{p.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={p.status === "Paid" ? "default" : "destructive"}>
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{p.date || "-"}</TableCell>
                  <TableCell>
                    {p.status === "Pending" && (
                      <Button size="sm">Pay Now</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}