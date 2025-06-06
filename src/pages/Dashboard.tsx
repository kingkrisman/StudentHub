import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../App";
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  BookOpen,
  Award,
  Heart,
  Share2,
  Filter,
  MapPin,
  Briefcase,
  Zap,
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data with enhanced features
  const userData = {
    name: user?.name || "Student User",
    email: user?.email || "student@university.edu.ng",
    avatar: user?.avatar || "",
    university: "University of Lagos",
    course: "Computer Science",
    year: "3rd Year",
    profileCompletion: 85,
    totalEarnings: 125000,
    completedJobs: 23,
    activeJobs: 3,
    rating: 4.8,
    reviews: 45,
    skillLevel: "Intermediate",
    joinDate: "January 2024",
    followers: 89,
    following: 156,
  };

  // Enhanced recent jobs with more details
  const recentJobs = [
    {
      id: 1,
      title: "Design Instagram Story Templates",
      client: "Fashion Brand Lagos",
      amount: 25000,
      status: "In Progress",
      progress: 75,
      deadline: "2 days",
      category: "Design",
      priority: "high",
      messages: 3,
      liked: true,
    },
    {
      id: 2,
      title: "Write Product Descriptions",
      client: "E-commerce Startup",
      amount: 15000,
      status: "Completed",
      progress: 100,
      deadline: "Completed",
      category: "Writing",
      priority: "medium",
      messages: 0,
      rating: 5,
    },
    {
      id: 3,
      title: "University Event Photography",
      client: "Student Union UNILAG",
      amount: 40000,
      status: "Pending Review",
      progress: 100,
      deadline: "Under Review",
      category: "Photography",
      priority: "medium",
      messages: 1,
    },
  ];

  // New opportunities based on user skills
  const recommendations = [
    {
      id: 1,
      title: "Logo Design for Fintech Startup",
      amount: 30000,
      category: "Design",
      match: 95,
      skills: ["Logo Design", "Brand Identity", "Adobe Illustrator"],
      client: "TechStart Nigeria",
      urgency: "Medium",
      applications: 12,
    },
    {
      id: 2,
      title: "Social Media Content Creation",
      amount: 20000,
      category: "Content Creation",
      match: 88,
      skills: ["Content Writing", "Instagram", "Canva"],
      client: "Beauty Brand",
      urgency: "High",
      applications: 8,
    },
    {
      id: 3,
      title: "Website Copywriting",
      amount: 45000,
      category: "Writing",
      match: 82,
      skills: ["Copywriting", "SEO", "Marketing"],
      client: "Digital Agency",
      urgency: "Low",
      applications: 15,
    },
  ];

  // Real-time notifications
  const recentNotifications = [
    {
      id: 1,
      type: "message",
      title: "New message from Fashion Brand Lagos",
      message: "Client has approved your design concept",
      time: "5 min ago",
      read: false,
      priority: "high",
    },
    {
      id: 2,
      type: "payment",
      title: "Payment received",
      message: "₦15,000 has been credited to your wallet",
      time: "1 hour ago",
      read: false,
      priority: "medium",
    },
    {
      id: 3,
      type: "job",
      title: "New job match",
      message: "3 new jobs match your skills",
      time: "2 hours ago",
      read: true,
      priority: "low",
    },
    {
      id: 4,
      type: "review",
      title: "New review received",
      message: "Client left you a 5-star review",
      time: "3 hours ago",
      read: true,
      priority: "medium",
    },
  ];

  // Quick stats
  const quickStats = [
    {
      label: "This Month",
      value: `₦${(userData.totalEarnings * 0.3).toLocaleString()}`,
      change: "+23%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "Active Proposals",
      value: "7",
      change: "+2",
      trend: "up",
      icon: Eye,
    },
    {
      label: "Profile Views",
      value: "156",
      change: "+12%",
      trend: "up",
      icon: Users,
    },
    {
      label: "Success Rate",
      value: "94%",
      change: "+3%",
      trend: "up",
      icon: CheckCircle,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending Review":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {userData.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-gray-600 mt-1">
                {userData.university} • {userData.course} • {userData.year}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-current text-yellow-500" />
                <span>{userData.rating}</span>
              </Badge>
              <Badge variant="outline">{userData.skillLevel}</Badge>
            </div>
          </div>

          {/* Profile Completion Alert */}
          {userData.profileCompletion < 100 && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-800 font-medium">
                    Complete your profile to get more opportunities
                  </span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("/profile")}
                >
                  Complete Profile
                </Button>
              </div>
              <Progress value={userData.profileCompletion} className="mt-2" />
              <p className="text-blue-600 text-sm mt-1">
                {userData.profileCompletion}% complete
              </p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p
                      className={`text-sm ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Jobs and Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    onClick={() => navigate("/jobs")}
                  >
                    <Search className="h-6 w-6" />
                    <span>Browse Jobs</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    onClick={() => navigate("/jobs/post")}
                  >
                    <Plus className="h-6 w-6" />
                    <span>Post Job</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    onClick={() => navigate("/wallet")}
                  >
                    <Wallet className="h-6 w-6" />
                    <span>Wallet</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-20 flex-col space-y-2"
                    onClick={() => navigate("/profile")}
                  >
                    <User className="h-6 w-6" />
                    <span>Profile</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Active Jobs */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                  Active Jobs ({recentJobs.length})
                </CardTitle>
                <Link to="/jobs/my-jobs">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div
                      key={job.id}
                      className={`p-4 border rounded-lg hover:shadow-md transition-shadow border-l-4 ${getPriorityColor(job.priority)}`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {job.title}
                            </h3>
                            {job.liked && (
                              <Heart className="h-4 w-4 text-red-500 fill-current" />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {job.client}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />₦
                              {job.amount.toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {job.deadline}
                            </span>
                            {job.messages > 0 && (
                              <span className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-1" />
                                {job.messages} messages
                              </span>
                            )}
                          </div>
                          {job.status === "In Progress" && (
                            <div className="mt-3">
                              <div className="flex items-center justify-between text-sm">
                                <span>Progress</span>
                                <span>{job.progress}%</span>
                              </div>
                              <Progress value={job.progress} className="mt-1" />
                            </div>
                          )}
                        </div>
                        <div className="ml-4 flex flex-col items-end">
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                          {job.rating && (
                            <div className="flex items-center mt-2">
                              {[...Array(job.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 text-yellow-500 fill-current"
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommended Jobs */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Recommended for You
                </CardTitle>
                <Link to="/jobs">
                  <Button variant="outline" size="sm">
                    See All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((job) => (
                    <div
                      key={job.id}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => navigate(`/jobs/${job.id}`)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {job.title}
                            </h3>
                            <Badge variant="outline" className="text-green-600">
                              {job.match}% match
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {job.client}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {job.skills.slice(0, 3).map((skill, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />₦
                              {job.amount.toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {job.applications} proposals
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Badge
                            variant={
                              job.urgency === "High"
                                ? "destructive"
                                : job.urgency === "Medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {job.urgency}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Notifications and Stats */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-yellow-600" />
                  Notifications
                  {recentNotifications.filter((n) => !n.read).length > 0 && (
                    <Badge variant="destructive" className="ml-2">
                      {recentNotifications.filter((n) => !n.read).length}
                    </Badge>
                  )}
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Mark all read
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentNotifications.slice(0, 4).map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                        !notification.read
                          ? "bg-blue-50 border-blue-200"
                          : "bg-white"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-1 rounded-full ${
                            notification.type === "message"
                              ? "bg-blue-100"
                              : notification.type === "payment"
                                ? "bg-green-100"
                                : notification.type === "job"
                                  ? "bg-purple-100"
                                  : "bg-yellow-100"
                          }`}
                        >
                          {notification.type === "message" && (
                            <MessageSquare className="h-3 w-3 text-blue-600" />
                          )}
                          {notification.type === "payment" && (
                            <DollarSign className="h-3 w-3 text-green-600" />
                          )}
                          {notification.type === "job" && (
                            <Briefcase className="h-3 w-3 text-purple-600" />
                          )}
                          {notification.type === "review" && (
                            <Star className="h-3 w-3 text-yellow-600" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-purple-600" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Followers</span>
                    <span className="font-semibold">{userData.followers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Following</span>
                    <span className="font-semibold">{userData.following}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Reviews</span>
                    <span className="font-semibold">{userData.reviews}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate("/community")}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Join Community
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-orange-600" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">First 5-Star Review</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Earned ₦100k+</p>
                      <p className="text-xs text-gray-500">1 week ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Completed 20 Jobs</p>
                      <p className="text-xs text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
