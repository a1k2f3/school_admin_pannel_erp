// app/(dashboard)/teachers/documents/page.tsx
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function TeacherDocuments() {
  const docs = ["Aadhar Card", "PAN Card", "Resume", "Degree Certificate"];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Teacher Documents Repository</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc) => (
          <div key={doc} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FileText className="w-12 h-12 text-purple-600" />
                <div>
                  <p className="font-semibold text-lg">{doc}</p>
                  <p className="text-sm text-gray-500">Uploaded by Priya Sharma</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Download</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}