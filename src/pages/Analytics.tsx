import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "../App";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Eye,
  Star,
  Calendar,
  Clock,
  Target,
  Award,
  Briefcase,
  MessageSquare,
  FileText,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Filter,
  RefreshCw,
} from "lucide-react";

const Analytics = () => {
  const { user } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [selectedMetric, setSelectedMetric] = useState("earnings");

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalEarnings: 450000,
      earningsChange: 23.5,
      totalJobs: 67,
      jobsChange: 12.3,
      profileViews: 2340,
      viewsChange: 8.7,
      avgRating: 4.8,
      ratingChange: 2.1,
      responseRate: 96,
      completionRate: 98,
      repeatClients: 34,
      skillsRated: 15,
    },
    earnings: {
      monthly: [
        { month: "Jan", amount: 45000 },
        { month: "Feb", amount: 52000 },
        { month: "Mar", amount: 48000 },
        { month: "Apr", amount: 61000 },
        { month: "May", amount: 58000 },
        { month: "Jun", amount: 67000 },
        { month: "Jul", amount: 72000 },
        { month: "Aug", amount: 69000 },
        { month: "Sep", amount: 78000 },
        { month: "Oct", amount: 83000 },
        { month: "Nov", amount: 91000 },
        { month: "Dec", amount: 95000 },
      ],
      byCategory: [
        { category: "Design", amount: 180000, jobs: 23, percentage: 40 },
        { category: "Writing", amount: 135000, jobs: 18, percentage: 30 },
        { category: "Tutoring", amount: 90000, jobs: 15, percentage: 20 },
        { category: "Content", amount: 45000, jobs: 11, percentage: 10 },
      ],
    },
    performance: {
      applicationSuccess: 75,
      interviewSuccess: 85,
      projectSuccess: 98,
      clientSatisfaction: 94,
      deliveryTime: 96,
      communicationRating: 97,
    },
    skills: [
      {
        name: "UI/UX Design",
        level: 95,
        jobs: 23,
        earnings: 180000,
        growth: 15,
      },
      {
        name: "Copywriting",
        level: 88,
        jobs: 18,
        earnings: 135000,
        growth: 12,
      },
      {
        name: "Mathematics Tutoring",
        level: 92,
        jobs: 15,
        earnings: 90000,
        growth: 8,
      },
      {
        name: "Social Media",
        level: 85,
        jobs: 11,
        earnings: 45000,
        growth: 25,
      },
      { name: "Logo Design", level: 90, jobs: 12, earnings: 72000, growth: 18 },
    ],
    clients: [
      {
        name: "TechStart Nigeria",
        projects: 5,
        totalPaid: 125000,
        avgRating: 5.0,
        lastProject: "2 days ago",
        type: "Repeat Client",
      },
      {
        name: "Fashion Brand Lagos",
        projects: 3,
        totalPaid: 75000,
        avgRating: 4.9,
        lastProject: "1 week ago",
        type: "Regular Client",
      },
      {
        name: "InnovateNG",
        projects: 2,
        totalPaid: 50000,
        avgRating: 4.8,
        lastProject: "3 days ago",
        type: "New Client",
      },
    ],
    goals: [
      {
        name: "Monthly Earnings",
        target: 100000,
        current: 95000,
        progress: 95,
        timeLeft: "5 days",
        status: "on-track",
      },
      {
        name: "Client Rating",
        target: 4.9,
        current: 4.8,
        progress: 98,
        timeLeft: "Ongoing",
        status: "needs-attention",
      },
      {
        name: "Projects Completed",
        target: 75,
        current: 67,
        progress: 89,
        timeLeft: "25 days",
        status: "on-track",
      },
      {
        name: "Skill Development",
        target: 5,
        current: 3,
        progress: 60,
        timeLeft: "60 days",
        status: "behind",
      },
    ],
  };

  const getChangeIcon = (change) => {
    return change > 0 ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    );
  };

  const getChangeColor = (change) => {
    return change > 0 ? "text-green-600" : "text-red-600";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "on-track":
        return "text-green-600";
      case "needs-attention":
        return "text-yellow-600";
      case "behind":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "on-track":
        return "bg-green-100 text-green-800";
      case "needs-attention":
        return "bg-yellow-100 text-yellow-800";
      case "behind":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-gray-600">
                Track your performance and earnings insights
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 3 months</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>

              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Earnings
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₦{analyticsData.overview.totalEarnings.toLocaleString()}
                  </p>
                  <div
                    className={`flex items-center mt-1 ${getChangeColor(analyticsData.overview.earningsChange)}`}
                  >
                    {getChangeIcon(analyticsData.overview.earningsChange)}
                    <span className="text-sm ml-1">
                      {Math.abs(analyticsData.overview.earningsChange)}% vs last
                      period
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Completed Jobs
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsData.overview.totalJobs}
                  </p>
                  <div
                    className={`flex items-center mt-1 ${getChangeColor(analyticsData.overview.jobsChange)}`}
                  >
                    {getChangeIcon(analyticsData.overview.jobsChange)}
                    <span className="text-sm ml-1">
                      {Math.abs(analyticsData.overview.jobsChange)}% vs last
                      period
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Profile Views
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsData.overview.profileViews.toLocaleString()}
                  </p>
                  <div
                    className={`flex items-center mt-1 ${getChangeColor(analyticsData.overview.viewsChange)}`}
                  >
                    {getChangeIcon(analyticsData.overview.viewsChange)}
                    <span className="text-sm ml-1">
                      {Math.abs(analyticsData.overview.viewsChange)}% vs last
                      period
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-full">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Average Rating
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analyticsData.overview.avgRating}
                  </p>
                  <div
                    className={`flex items-center mt-1 ${getChangeColor(analyticsData.overview.ratingChange)}`}
                  >
                    {getChangeIcon(analyticsData.overview.ratingChange)}
                    <span className="text-sm ml-1">
                      {Math.abs(analyticsData.overview.ratingChange)}% vs last
                      period
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-full">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="earnings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Earnings Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-blue-600" />
                    Monthly Earnings Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.earnings.monthly
                      .slice(-6)
                      .map((month, index) => (
                        <div
                          key={month.month}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm font-medium">
                            {month.month}
                          </span>
                          <div className="flex items-center space-x-2">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${(month.amount / Math.max(...analyticsData.earnings.monthly.map((m) => m.amount))) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold w-20 text-right">
                              ₦{month.amount.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Earnings by Category */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-green-600" />
                    Earnings by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analyticsData.earnings.byCategory.map((category) => (
                      <div key={category.category}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">
                            {category.category}
                          </span>
                          <span className="text-sm font-semibold">
                            ₦{category.amount.toLocaleString()} (
                            {category.percentage}%)
                          </span>
                        </div>
                        <Progress value={category.percentage} className="h-2" />
                        <div className="text-xs text-gray-500 mt-1">
                          {category.jobs} jobs completed
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(analyticsData.performance).map(
                ([metric, value]) => (
                  <Card key={metric}>
                    <CardContent className="p-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {metric
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </h3>
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {value}%
                        </div>
                        <Progress value={value} className="h-2" />
                        <p className="text-xs text-gray-500 mt-2">
                          {value >= 90
                            ? "Excellent"
                            : value >= 80
                              ? "Good"
                              : value >= 70
                                ? "Average"
                                : "Needs Improvement"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Strengths</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-green-600">
                        <Award className="h-4 w-4 mr-2" />
                        98% project completion rate
                      </li>
                      <li className="flex items-center text-green-600">
                        <Star className="h-4 w-4 mr-2" />
                        97% communication rating
                      </li>
                      <li className="flex items-center text-green-600">
                        <Clock className="h-4 w-4 mr-2" />
                        96% on-time delivery
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      Areas for Improvement
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-yellow-600">
                        <Target className="h-4 w-4 mr-2" />
                        Increase application success rate
                      </li>
                      <li className="flex items-center text-yellow-600">
                        <Users className="h-4 w-4 mr-2" />
                        Focus on client retention
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-purple-600" />
                  Skills Performance
                </CardTitle>
                <CardDescription>
                  Track your skills development and earnings by skill
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {analyticsData.skills.map((skill) => (
                    <div key={skill.name} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <Badge
                          variant="outline"
                          className="bg-purple-50 text-purple-700"
                        >
                          Level {skill.level}%
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-3">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Jobs</p>
                          <p className="text-xl font-bold">{skill.jobs}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Earnings</p>
                          <p className="text-xl font-bold">
                            ₦{skill.earnings.toLocaleString()}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Growth</p>
                          <p className="text-xl font-bold text-green-600">
                            +{skill.growth}%
                          </p>
                        </div>
                      </div>

                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-indigo-600" />
                  Top Clients
                </CardTitle>
                <CardDescription>
                  Your most valuable client relationships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analyticsData.clients.map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{client.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>{client.projects} projects</span>
                          <span>
                            ₦{client.totalPaid.toLocaleString()} total
                          </span>
                          <span>Last: {client.lastProject}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                          <span className="font-semibold">
                            {client.avgRating}
                          </span>
                        </div>
                        <Badge variant="outline">{client.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-orange-600" />
                  Goals & Targets
                </CardTitle>
                <CardDescription>
                  Track your progress towards your goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {analyticsData.goals.map((goal) => (
                    <div key={goal.name} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{goal.name}</h3>
                        <Badge className={getStatusBadge(goal.status)}>
                          {goal.status.replace("-", " ")}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                        <span>
                          {typeof goal.current === "number" && goal.current < 10
                            ? goal.current
                            : typeof goal.current === "number"
                              ? goal.current.toLocaleString()
                              : goal.current}{" "}
                          /{" "}
                          {typeof goal.target === "number" && goal.target < 10
                            ? goal.target
                            : typeof goal.target === "number"
                              ? goal.target.toLocaleString()
                              : goal.target}
                        </span>
                        <span>{goal.timeLeft}</span>
                      </div>

                      <Progress value={goal.progress} className="h-2" />

                      <div className="flex items-center justify-between mt-2 text-sm">
                        <span className={getStatusColor(goal.status)}>
                          {goal.progress}% complete
                        </span>
                        <span className="text-gray-500">
                          {goal.status === "on-track"
                            ? "On track"
                            : goal.status === "needs-attention"
                              ? "Needs focus"
                              : "Behind schedule"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Analytics;
