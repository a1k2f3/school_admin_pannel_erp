// app/forgot-password/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, School } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="p-4 bg-blue-600 rounded-full">
              <School className="w-10 h-10 text-white" />
            </div>
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Forgot Password?</CardTitle>
            <CardDescription className="text-base mt-3">
              No worries! Enter your admin email and we'll send you a password reset link.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">
              Admin Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="admin@your-school.com"
                className="pl-11 h-12 text-base"
                required
              />
            </div>
          </div>

          <Button className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700">
            Send Reset Link
          </Button>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <div className="text-center text-sm text-gray-600 dark:text-gray-400">
            Remember your password?{" "}
            <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-700 underline">
              Back to Login
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <ArrowLeft className="w-4 h-4" />
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Return to Home
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-sm text-gray-500">
        © 2025 Your School Name • Admin Portal
      </div>
    </div>
  );
}