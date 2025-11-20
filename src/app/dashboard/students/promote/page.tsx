// app/(dashboard)/students/promote/page.tsx
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function PromoteStudents() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Promote Students</h1>
        <p className="text-gray-600">Promote students to next academic year</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex gap-4 mb-6">
          <Select defaultValue="10">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Current Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">Class 10</SelectItem>
              <SelectItem value="9">Class 9</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="11">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Promote To" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="11">Class 11</SelectItem>
              <SelectItem value="12">Class 12</SelectItem>
            </SelectContent>
          </Select>

          <Button>PROMOTE ALL</Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Roll</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Aarav Sharma</TableCell>
              <TableCell>01</TableCell>
              <TableCell><Badge>Eligible</Badge></TableCell>
              <TableCell><Button size="sm">Promote</Button></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}