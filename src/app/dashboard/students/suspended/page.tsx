// app/(dashboard)/students/suspended/page.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SuspendedStudents() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Suspended Students</h1>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-semibold">Rohan Kumar</p>
              <p className="text-sm text-gray-600">Class 9-B | Suspended: 15 Nov 2025</p>
              <Badge variant="destructive" className="mt-2">Disciplinary Issue</Badge>
            </div>
            <Button>Reactivate</Button>
          </div>
        </div>
      </div>
    </div>
  );
}