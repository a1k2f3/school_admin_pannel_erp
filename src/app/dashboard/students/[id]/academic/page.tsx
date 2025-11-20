// app/(dashboard)/students/[id]/academic/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function AcademicTab({ params }: { params: { id: string } }) {
  const results = [
    { subject: "Mathematics", marks: 92, grade: "A+" },
    { subject: "Science", marks: 88, grade: "A" },
    { subject: "English", marks: 85, grade: "A" },
    { subject: "Hindi", marks: 90, grade: "A+" },
    { subject: "Social Studies", marks: 87, grade: "A" },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Final Term Result 2024-25</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <p className="text-4xl font-bold text-green-600">87.5%</p>
              <p className="text-sm text-gray-600">Overall Percentage</p>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <p className="text-4xl font-bold text-blue-600">2nd</p>
              <p className="text-sm text-gray-600">Class Rank</p>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <p className="text-4xl font-bold text-purple-600">A</p>
              <p className="text-sm text-gray-600">Overall Grade</p>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Marks</TableHead>
                <TableHead>Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((r) => (
                <TableRow key={r.subject}>
                  <TableCell className="font-medium">{r.subject}</TableCell>
                  <TableCell>{r.marks}/100</TableCell>
                  <TableCell>
                    <Badge variant={r.grade === "A+" ? "default" : "secondary"}>{r.grade}</Badge>
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