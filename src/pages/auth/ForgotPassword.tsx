import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Mail, ArrowLeft, Send } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student Hub
              </span>
            </Link>
            <Link to="/auth/signin">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md mt-20">
        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-full w-fit mb-4">
              {isSubmitted ? (
                <Send className="h-8 w-8 text-white" />
              ) : (
                <Mail className="h-8 w-8 text-white" />
              )}
            </div>
            <CardTitle className="text-2xl font-bold">
              {isSubmitted ? "Check Your Email" : "Reset Password"}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {isSubmitted
                ? "We've sent password reset instructions to your email address"
                : "Enter your email address and we'll send you instructions to reset your password"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@university.edu.ng"
                      className="pl-10"
                      required
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Enter the email address associated with your Student Hub
                    account
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg py-3"
                >
                  Send Reset Instructions
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            ) : (
              <div className="space-y-6 text-center">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    We've sent password reset instructions to:
                  </p>
                  <p className="font-semibold text-gray-900">{email}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-left">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Next Steps:
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Check your email inbox (including spam folder)</li>
                    <li>• Click the reset link in the email</li>
                    <li>• Create a new password</li>
                    <li>• Sign in with your new password</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Try Different Email
                  </Button>

                  <Link to="/auth/signin">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                      Back to Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            <div className="text-center mt-6 text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                to="/auth/signin"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
