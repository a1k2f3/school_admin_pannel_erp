"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Inbox() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold text-purple-700">Parent-Teacher Chat</h1>
        <Badge className="text-2xl px-8 py-4 bg-green-600">1,245 Active Chats</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          {["Mrs. Sharma (Mother of Aarav)", "Mr. Gupta (Father of Riya)"].map((parent) => (
            <div key={parent} className="flex items-center gap-4 p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 cursor-pointer">
              <Avatar className="w-16 h-16"><AvatarFallback>PS</AvatarFallback></Avatar>
              <div>
                <p className="font-bold text-lg">{parent}</p>
                <p className="text-sm text-gray-600">Last message 5 min ago</p>
              </div>
              <Badge className="ml-auto" variant="secondary">2</Badge>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 bg-white border-4 border-purple-300 rounded-3xl p-8 h-96">
          <p className="text-center text-3xl text-gray-500 mt-32">Select a parent to start chatting</p>
        </div>
      </div>
    </div>
  );
}