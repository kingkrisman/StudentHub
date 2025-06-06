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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  Calendar,
  DollarSign,
  Eye,
  MessageSquare,
  Plus,
  Search,
  Star,
  TrendingUp,
  User,
  Users,
  Wallet,
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Menu,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock user data
  const user = {
    name: "Adebayo Johnson",
    university: "University of Lagos",
    level: "300 Level",
    course: "Computer Science",
    avatar: "",
    rating: 4.8,
    completedJobs: 24,
    totalEarnings: 125000,
    activeJobs: 3,
  };

  const recentJobs = [
    {
      id: 1,
      title: "Design a logo for tech startup",
      category: "Freelancing",
      amount: 15000,
      status: "in_progress",
      deadline: "2 days",
      client: "TechCorp Ltd",
    },
    {
      id: 2,
      title: "Tutor Mathematics for secondary school student",
      category: "Tutoring",
      amount: 5000,
      status: "completed",
      deadline: "Completed",
      client: "Mrs. Adebisi",
    },
    {
      id: 3,
      title: "Event planning for birthday party",
      category: "Event Planning",
      amount: 25000,
      status: "pending",
      deadline: "5 days",
      client: "Kemi Okafor",
    },
  ];

  const opportunities = [
    {
      id: 1,
      title: "Content Writer Needed",
      category: "Content Creation",
      amount: 8000,
      timeframe: "3 days",
      applicants: 12,
    },
    {
      id: 2,
      title: "Mobile App Design",
      category: "Freelancing",
      amount: 35000,
      timeframe: "1 week",
      applicants: 8,
    },
    {
      id: 3,
      title: "Physics Tutor Required",
      category: "Tutoring",
      amount: 3000,
      timeframe: "Per session",
      applicants: 5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "in_progress":
        return <Clock className="h-4 w-4" />;
      case "pending":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>

              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Student Hub
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                />
              </div>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>

              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.university}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your opportunities today
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Earnings
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₦{user.totalEarnings.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                +₦12,000 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.activeJobs}</div>
              <p className="text-xs text-muted-foreground">
                2 ending this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Jobs
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.completedJobs}</div>
              <p className="text-xs text-muted-foreground">+3 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.rating}</div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-3 w-3 ${
                      star <= user.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Jump into your most common tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link to="/jobs/post">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-blue-50 hover:border-blue-300"
                    >
                      <Plus className="h-6 w-6" />
                      <span className="text-xs">Post Job</span>
                    </Button>
                  </Link>

                  <Link to="/jobs">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-green-50 hover:border-green-300"
                    >
                      <Search className="h-6 w-6" />
                      <span className="text-xs">Browse Jobs</span>
                    </Button>
                  </Link>

                  <Link to="/wallet">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-yellow-50 hover:border-yellow-300"
                    >
                      <Wallet className="h-6 w-6" />
                      <span className="text-xs">My Wallet</span>
                    </Button>
                  </Link>

                  <Link to="/profile">
                    <Button
                      variant="outline"
                      className="w-full h-20 flex flex-col items-center justify-center space-y-2 hover:bg-purple-50 hover:border-purple-300"
                    >
                      <User className="h-6 w-6" />
                      <span className="text-xs">My Profile</span>
                    </Button>
                  </Link>
                </div>

                {/* Additional Quick Links */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <Link to="/categories/freelancing">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Freelancing
                    </Button>
                  </Link>
                  <Link to="/categories/tutoring">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Tutoring
                    </Button>
                  </Link>
                  <Link to="/categories/student-market">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-xs"
                    >
                      Marketplace
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            {/* Recent Jobs */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Jobs</CardTitle>
                  <CardDescription>Your latest job activities</CardDescription>
                </div>
                <Link to="/jobs/my-jobs">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div
                      key={job.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">
                          {job.title}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{job.category}</span>
                          <span>•</span>
                          <span>{job.client}</span>
                          <span>•</span>
                          <span>{job.deadline}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            ₦{job.amount.toLocaleString()}
                          </p>
                          <Badge
                            className={`${getStatusColor(job.status)} text-xs`}
                          >
                            {getStatusIcon(job.status)}
                            <span className="ml-1 capitalize">
                              {job.status.replace("_", " ")}
                            </span>
                          </Badge>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Strength</CardTitle>
                <CardDescription>
                  Complete your profile to get more opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Profile Completion</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Profile photo added</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Skills listed</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span>Add portfolio samples</span>
                    </div>
                  </div>

                  <Link to="/profile">
                    <Button size="sm" className="w-full">
                      Complete Profile
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* New Opportunities */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">New Opportunities</CardTitle>
                  <CardDescription>Jobs matching your skills</CardDescription>
                </div>
                <Link to="/jobs">
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunities.map((opportunity) => (
                    <div
                      key={opportunity.id}
                      className="p-3 border rounded-lg hover:bg-gray-50"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {opportunity.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>{opportunity.category}</span>
                        <span>{opportunity.timeframe}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-green-600">
                          ₦{opportunity.amount.toLocaleString()}
                        </span>
                        <span className="text-xs text-gray-500">
                          {opportunity.applicants} applicants
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community</CardTitle>
                <CardDescription>Connect with fellow students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Active Students</span>
                    </div>
                    <span className="text-sm font-semibold">2,847</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">New Messages</span>
                    </div>
                    <span className="text-sm font-semibold">12</span>
                  </div>

                  <Link to="/community">
                    <Button variant="outline" size="sm" className="w-full">
                      Join Community
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
