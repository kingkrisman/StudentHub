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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Smartphone,
  Calendar,
  DollarSign,
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Download,
  Upload,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

const MyJobs = () => {
  const [activeTab, setActiveTab] = useState("active");

  // Mock data for active jobs
  const activeJobs = [
    {
      id: 1,
      title: "Design a logo for tech startup",
      category: "Freelancing",
      client: {
        name: "TechCorp Solutions",
        avatar: "",
        rating: 4.8,
      },
      amount: 25000,
      progress: 65,
      status: "in_progress",
      deadline: "2024-01-25",
      startDate: "2024-01-15",
      description:
        "Modern logo design for fintech startup focusing on trust and innovation",
      milestones: [
        { name: "Initial concepts", completed: true, dueDate: "2024-01-17" },
        { name: "Client feedback", completed: true, dueDate: "2024-01-20" },
        { name: "Revisions", completed: false, dueDate: "2024-01-23" },
        { name: "Final delivery", completed: false, dueDate: "2024-01-25" },
      ],
      messagesCount: 8,
      lastMessage: "2 hours ago",
    },
    {
      id: 2,
      title: "Mathematics tutoring for JAMB preparation",
      category: "Tutoring",
      client: {
        name: "Mrs. Adebayo",
        avatar: "",
        rating: 4.9,
      },
      amount: 4000,
      progress: 30,
      status: "in_progress",
      deadline: "2024-02-28",
      startDate: "2024-01-10",
      description:
        "Weekly mathematics sessions preparing student for JAMB examination",
      milestones: [
        { name: "Assessment test", completed: true, dueDate: "2024-01-12" },
        { name: "Study plan creation", completed: true, dueDate: "2024-01-15" },
        { name: "Week 1-2 sessions", completed: false, dueDate: "2024-01-25" },
        {
          name: "Progress evaluation",
          completed: false,
          dueDate: "2024-02-05",
        },
      ],
      sessionsCompleted: 3,
      totalSessions: 10,
      messagesCount: 5,
      lastMessage: "1 day ago",
    },
    {
      id: 3,
      title: "Social media content for fashion brand",
      category: "Content Creation",
      client: {
        name: "Bella Fashion House",
        avatar: "",
        rating: 4.5,
      },
      amount: 30000,
      progress: 80,
      status: "in_progress",
      deadline: "2024-01-30",
      startDate: "2024-01-05",
      description:
        "Create engaging Instagram and TikTok content for fashion brand",
      milestones: [
        { name: "Content strategy", completed: true, dueDate: "2024-01-08" },
        { name: "Week 1 content", completed: true, dueDate: "2024-01-12" },
        { name: "Week 2 content", completed: true, dueDate: "2024-01-19" },
        { name: "Week 3 content", completed: false, dueDate: "2024-01-26" },
      ],
      postsCreated: 24,
      totalPosts: 30,
      messagesCount: 12,
      lastMessage: "30 minutes ago",
    },
  ];

  // Mock data for completed jobs
  const completedJobs = [
    {
      id: 4,
      title: "Event planning for university graduation",
      category: "Event Planning",
      client: {
        name: "Federal University of Technology",
        avatar: "",
        rating: 4.6,
      },
      amount: 75000,
      completedDate: "2024-01-10",
      rating: 5,
      review:
        "Excellent work! The graduation ceremony was perfectly organized. Highly recommended!",
      deliverables: [
        "Event timeline",
        "Vendor coordination",
        "Setup management",
      ],
    },
    {
      id: 5,
      title: "Content writing for tech blog",
      category: "Content Creation",
      client: {
        name: "TechNews Nigeria",
        avatar: "",
        rating: 4.7,
      },
      amount: 45000,
      completedDate: "2024-01-05",
      rating: 4,
      review:
        "Great articles with good research. Delivered on time and met all requirements.",
      deliverables: [
        "3 blog articles",
        "SEO optimization",
        "Social media snippets",
      ],
    },
  ];

  // Mock data for applications
  const applications = [
    {
      id: 6,
      title: "Mobile app UI design",
      category: "Freelancing",
      amount: 50000,
      appliedDate: "2024-01-18",
      status: "pending",
      client: "StartupXYZ",
      proposal: "I submitted a detailed proposal with portfolio samples",
    },
    {
      id: 7,
      title: "Physics tutor for secondary school",
      category: "Tutoring",
      amount: 3500,
      appliedDate: "2024-01-17",
      status: "shortlisted",
      client: "Mr. Johnson",
      proposal: "Applied with my teaching credentials and experience",
    },
    {
      id: 8,
      title: "Video editing for YouTube channel",
      category: "Content Creation",
      amount: 20000,
      appliedDate: "2024-01-16",
      status: "rejected",
      client: "CreativeStudio",
      proposal: "Provided video editing samples and timeline",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "shortlisted":
        return "bg-purple-100 text-purple-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in_progress":
        return <Clock className="h-4 w-4" />;
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
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
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student Hub
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/jobs/post">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Post New Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Jobs</h1>
          <p className="text-gray-600">
            Manage your active projects, completed work, and applications
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Jobs</p>
                  <p className="text-2xl font-bold">{activeJobs.length}</p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold">{completedJobs.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Applications</p>
                  <p className="text-2xl font-bold">{applications.length}</p>
                </div>
                <Upload className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold">₦134k</p>
                </div>
                <DollarSign className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">
              Active Jobs ({activeJobs.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedJobs.length})
            </TabsTrigger>
            <TabsTrigger value="applications">
              Applications ({applications.length})
            </TabsTrigger>
          </TabsList>

          {/* Active Jobs */}
          <TabsContent value="active" className="space-y-6">
            {activeJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <span>{job.category}</span>
                        <span>•</span>
                        <span>
                          Started {new Date(job.startDate).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span>
                          Due {new Date(job.deadline).toLocaleDateString()}
                        </span>
                      </div>
                      <CardDescription>{job.description}</CardDescription>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(job.status)}>
                        {getStatusIcon(job.status)}
                        <span className="ml-1 capitalize">
                          {job.status.replace("_", " ")}
                        </span>
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={job.client.avatar} />
                        <AvatarFallback>
                          {job.client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{job.client.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-3 w-3 text-yellow-400 mr-1 fill-current" />
                          <span>{job.client.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">
                        ₦{job.amount.toLocaleString()}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        <span>{job.messagesCount} messages</span>
                        <span className="ml-2">{job.lastMessage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{job.progress}% complete</span>
                    </div>
                    <Progress value={job.progress} className="h-2" />
                  </div>

                  {/* Milestones */}
                  <div className="space-y-2">
                    <h4 className="font-medium">Milestones</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {job.milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 p-2 rounded ${
                            milestone.completed ? "bg-green-50" : "bg-gray-50"
                          }`}
                        >
                          {milestone.completed ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Clock className="h-4 w-4 text-gray-400" />
                          )}
                          <span
                            className={`text-sm ${milestone.completed ? "text-green-800" : "text-gray-600"}`}
                          >
                            {milestone.name}
                          </span>
                          <span className="text-xs text-gray-500 ml-auto">
                            {new Date(milestone.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4">
                    <Link to={`/jobs/${job.id}`}>
                      <Button>
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message Client
                    </Button>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Work
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Completed Jobs */}
          <TabsContent value="completed" className="space-y-6">
            {completedJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <span>{job.category}</span>
                        <span>•</span>
                        <span>
                          Completed{" "}
                          {new Date(job.completedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Completed
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={job.client.avatar} />
                        <AvatarFallback>
                          {job.client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{job.client.name}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-3 w-3 text-yellow-400 mr-1 fill-current" />
                          <span>{job.client.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">
                        ₦{job.amount.toLocaleString()}
                      </p>
                      <div className="flex items-center text-sm">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < job.rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-gray-500">
                          ({job.rating})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "{job.review}"
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-medium mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.deliverables.map((deliverable, index) => (
                        <Badge key={index} variant="secondary">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Files
                    </Button>
                    <Button variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact Client
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Applications */}
          <TabsContent value="applications" className="space-y-6">
            {applications.map((application) => (
              <Card
                key={application.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {application.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{application.category}</span>
                        <span>•</span>
                        <span>
                          Applied{" "}
                          {new Date(
                            application.appliedDate,
                          ).toLocaleDateString()}
                        </span>
                        <span>•</span>
                        <span>{application.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold text-green-600">
                          ₦{application.amount.toLocaleString()}
                        </p>
                        <Badge className={getStatusColor(application.status)}>
                          {application.status.charAt(0).toUpperCase() +
                            application.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{application.proposal}</p>

                  <div className="flex items-center space-x-4">
                    <Link to={`/jobs/${application.id}`}>
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View Job
                      </Button>
                    </Link>
                    {application.status === "pending" && (
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Proposal
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Withdraw
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MyJobs;
