"use client";

export default function LibraryReport() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-6">
      <h1 className="text-6xl font-bold text-center text-amber-700">Library Usage Report</h1>

      <div className="grid grid-cols-3 gap-10">
        <div className="bg-amber-50 border-4 border-amber-400 rounded-3xl p-12 text-center">
          <p className="text-8xl font-bold text-amber-700">12,450</p>
          <p className="text-3xl mt-4">Total Books</p>
        </div>
        <div className="bg-green-50 border-4 border-green-400 rounded-3xl p-12 text-center">
          <p className="text-8xl font-bold text-green-700">8,420</p>
          <p className="text-3xl mt-4">Books Issued</p>
        </div>
        <div className="bg-orange-50 border-4 border-orange-400 rounded-3xl p-12 text-center">
          <p className="text-8xl font-bold text-orange-700">₹4,250</p>
          <p className="text-3xl mt-4">Fines Collected</p>
        </div>
      </div>
    </div>
  );
}