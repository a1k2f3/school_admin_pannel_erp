// app/(dashboard)/students/[id]/documents/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Upload } from "lucide-react";

export default function DocumentsTab() {
  const docs = [
    { name: "Birth Certificate", uploaded: true },
    { name: "Aadhar Card", uploaded: true },
    { name: "Transfer Certificate", uploaded: false },
    { name: "Medical Certificate", uploaded: false },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Student Documents</CardTitle>
          <Button className="gap-2">
            <Upload className="w-4 h-4" /> Upload New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {docs.map((doc) => (
            <div key={doc.name} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-gray-500">
                    {doc.uploaded ? "Uploaded on 2024-04-01" : "Not uploaded"}
                  </p>
                </div>
              </div>
              {doc.uploaded ? (
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" /> Download
                </Button>
              ) : (
                <Button size="sm">Upload</Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}