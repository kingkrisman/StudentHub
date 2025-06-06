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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "../App";
import {
  Bell,
  MessageSquare,
  DollarSign,
  Briefcase,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Shield,
  Award,
  Heart,
  Share2,
  Eye,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Check,
  Archive,
  Trash2,
  Filter,
  Settings,
  Clock,
  Zap,
} from "lucide-react";

const Notifications = () => {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState("all");
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message from Fashion Brand Lagos",
      description:
        "The design looks perfect! Can you make the logo a bit larger?",
      timestamp: "2 minutes ago",
      read: false,
      priority: "high",
      avatar: "",
      sender: "Fashion Brand Lagos",
      actionText: "Reply",
      actionLink: "/messages",
      project: "Instagram Story Templates",
      amount: 25000,
    },
    {
      id: 2,
      type: "payment",
      title: "Payment received",
      description:
        "₦15,000 has been credited to your wallet for 'Website Copywriting' project",
      timestamp: "1 hour ago",
      read: false,
      priority: "high",
      avatar: "",
      sender: "InnovateNG",
      actionText: "View Wallet",
      actionLink: "/wallet",
      project: "Website Copywriting",
      amount: 15000,
    },
    {
      id: 3,
      type: "job_match",
      title: "3 new jobs match your skills",
      description: "New opportunities in Design, Writing, and Content Creation",
      timestamp: "2 hours ago",
      read: true,
      priority: "medium",
      avatar: "",
      actionText: "Browse Jobs",
      actionLink: "/jobs",
      skills: ["UI/UX Design", "Copywriting", "Social Media"],
    },
    {
      id: 4,
      type: "review",
      title: "New 5-star review received",
      description:
        "InnovateNG left you an excellent review: 'Outstanding work quality and fast delivery!'",
      timestamp: "3 hours ago",
      read: true,
      priority: "medium",
      avatar: "",
      sender: "InnovateNG",
      actionText: "View Profile",
      actionLink: "/profile",
      rating: 5,
      project: "Website Copywriting",
    },
    {
      id: 5,
      type: "milestone",
      title: "Milestone completed",
      description:
        "You've successfully completed 25 projects! Keep up the great work.",
      timestamp: "5 hours ago",
      read: true,
      priority: "low",
      avatar: "",
      actionText: "View Achievement",
      actionLink: "/profile",
      milestone: "25 Projects Completed",
      badge: "Experienced Freelancer",
    },
    {
      id: 6,
      type: "application",
      title: "Application status update",
      description:
        "Your proposal for 'Mobile App UI Design' has been shortlisted for interview",
      timestamp: "6 hours ago",
      read: true,
      priority: "high",
      avatar: "",
      sender: "TechSolutions Ltd",
      actionText: "View Details",
      actionLink: "/jobs/123",
      project: "Mobile App UI Design",
      status: "Shortlisted",
    },
    {
      id: 7,
      type: "social",
      title: "New follower",
      description: "Sarah Johnson started following you",
      timestamp: "8 hours ago",
      read: true,
      priority: "low",
      avatar: "",
      sender: "Sarah Johnson",
      actionText: "View Profile",
      actionLink: "/community",
      followerCount: 1,
    },
    {
      id: 8,
      type: "deadline",
      title: "Project deadline reminder",
      description: "'Logo Design for Fintech' is due in 2 days",
      timestamp: "12 hours ago",
      read: true,
      priority: "high",
      avatar: "",
      sender: "TechStart Nigeria",
      actionText: "View Project",
      actionLink: "/jobs/my-jobs",
      project: "Logo Design for Fintech",
      deadline: "2 days",
    },
    {
      id: 9,
      type: "system",
      title: "Profile verification complete",
      description:
        "Your student ID has been verified. You can now access all platform features.",
      timestamp: "1 day ago",
      read: true,
      priority: "medium",
      avatar: "",
      actionText: "View Profile",
      actionLink: "/profile",
      verification: "Student ID",
    },
    {
      id: 10,
      type: "promotion",
      title: "Skill badge earned",
      description:
        "You've earned the 'Content Creator' badge for excellent social media work",
      timestamp: "2 days ago",
      read: true,
      priority: "medium",
      avatar: "",
      actionText: "View Badges",
      actionLink: "/profile",
      badge: "Content Creator",
      skillArea: "Social Media",
    },
  ];

  const notificationSettings = {
    email: {
      messages: true,
      payments: true,
      jobMatches: false,
      reviews: true,
      deadlines: true,
      marketing: false,
    },
    push: {
      messages: true,
      payments: true,
      jobMatches: true,
      reviews: true,
      deadlines: true,
      marketing: false,
    },
    inApp: {
      messages: true,
      payments: true,
      jobMatches: true,
      reviews: true,
      deadlines: true,
      marketing: true,
    },
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-600" />;
      case "payment":
        return <DollarSign className="h-5 w-5 text-green-600" />;
      case "job_match":
        return <Briefcase className="h-5 w-5 text-purple-600" />;
      case "review":
        return <Star className="h-5 w-5 text-yellow-600" />;
      case "milestone":
        return <Award className="h-5 w-5 text-orange-600" />;
      case "application":
        return <Eye className="h-5 w-5 text-indigo-600" />;
      case "social":
        return <Users className="h-5 w-5 text-pink-600" />;
      case "deadline":
        return <Clock className="h-5 w-5 text-red-600" />;
      case "system":
        return <Shield className="h-5 w-5 text-gray-600" />;
      case "promotion":
        return <TrendingUp className="h-5 w-5 text-emerald-600" />;
      default:
        return <Bell className="h-5 w-5 text-gray-600" />;
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

  const filterNotifications = (type) => {
    if (type === "all") return notifications;
    if (type === "unread") return notifications.filter((n) => !n.read);
    return notifications.filter((n) => n.type === type);
  };

  const filteredNotifications = filterNotifications(selectedTab);

  const markAsRead = (id) => {
    // In real app, this would update the backend
    console.log("Mark as read:", id);
  };

  const markAllAsRead = () => {
    // In real app, this would update the backend
    console.log("Mark all as read");
  };

  const deleteNotification = (id) => {
    // In real app, this would delete from backend
    console.log("Delete notification:", id);
  };

  const NotificationCard = ({ notification }) => (
    <Card
      className={`border-l-4 ${getPriorityColor(notification.priority)} ${
        !notification.read ? "bg-blue-50" : "bg-white"
      } hover:shadow-md transition-shadow`}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div
            className={`p-2 rounded-full ${
              !notification.read ? "bg-blue-100" : "bg-gray-100"
            }`}
          >
            {getNotificationIcon(notification.type)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    !notification.read ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {notification.title}
                  {!notification.read && (
                    <div className="inline-block w-2 h-2 bg-blue-600 rounded-full ml-2"></div>
                  )}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {notification.description}
                </p>

                {/* Additional notification details */}
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {notification.project && (
                    <Badge variant="outline" className="text-xs">
                      {notification.project}
                    </Badge>
                  )}

                  {notification.amount && (
                    <Badge className="text-xs bg-green-100 text-green-800">
                      ₦{notification.amount.toLocaleString()}
                    </Badge>
                  )}

                  {notification.rating && (
                    <div className="flex items-center">
                      {[...Array(notification.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  )}

                  {notification.skills && (
                    <div className="flex flex-wrap gap-1">
                      {notification.skills.slice(0, 2).map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {notification.badge && (
                    <Badge className="text-xs bg-purple-100 text-purple-800">
                      {notification.badge}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-500">
                    {notification.timestamp}
                  </span>

                  <div className="flex items-center space-x-2">
                    {notification.actionLink && (
                      <Link to={notification.actionLink}>
                        <Button size="sm" variant="outline">
                          {notification.actionText}
                        </Button>
                      </Link>
                    )}

                    {!notification.read && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="h-3 w-3" />
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SettingsPanel = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Settings className="h-5 w-5 mr-2" />
          Notification Settings
        </CardTitle>
        <CardDescription>Manage how you receive notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(notificationSettings).map(([method, settings]) => (
            <div key={method}>
              <h3 className="font-semibold mb-3 capitalize">
                {method === "inApp" ? "In-App" : method} Notifications
              </h3>
              <div className="space-y-3">
                {Object.entries(settings).map(([setting, enabled]) => (
                  <div
                    key={setting}
                    className="flex items-center justify-between"
                  >
                    <Label htmlFor={`${method}-${setting}`} className="text-sm">
                      {setting
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </Label>
                    <Switch
                      id={`${method}-${setting}`}
                      checked={enabled}
                      onCheckedChange={() => {
                        // Update settings
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Notifications
                {notifications.filter((n) => !n.read).length > 0 && (
                  <Badge variant="destructive" className="ml-3">
                    {notifications.filter((n) => !n.read).length} unread
                  </Badge>
                )}
              </h1>
              <p className="text-gray-600">
                Stay updated with your latest activities
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={markAllAsRead}
                disabled={notifications.filter((n) => !n.read).length === 0}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark all read
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {showSettings && (
          <div className="mb-6">
            <SettingsPanel />
          </div>
        )}

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>All</span>
              <Badge variant="secondary" className="ml-1">
                {notifications.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="unread" className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4" />
              <span>Unread</span>
              {notifications.filter((n) => !n.read).length > 0 && (
                <Badge variant="destructive" className="ml-1">
                  {notifications.filter((n) => !n.read).length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger
              value="message"
              className="flex items-center space-x-2"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Messages</span>
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="flex items-center space-x-2"
            >
              <DollarSign className="h-4 w-4" />
              <span>Payments</span>
            </TabsTrigger>
            <TabsTrigger
              value="job_match"
              className="flex items-center space-x-2"
            >
              <Briefcase className="h-4 w-4" />
              <span>Jobs</span>
            </TabsTrigger>
            <TabsTrigger value="review" className="flex items-center space-x-2">
              <Star className="h-4 w-4" />
              <span>Reviews</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedTab} className="mt-6">
            {filteredNotifications.length > 0 ? (
              <div className="space-y-4">
                {filteredNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No notifications
                </h3>
                <p className="text-gray-600">
                  You're all caught up! New notifications will appear here.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Notifications;
