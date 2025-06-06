import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "../App";
import {
  Home,
  Briefcase,
  Users,
  DollarSign,
  MessageSquare,
  Bell,
  BarChart3,
  User,
  Settings,
  Shield,
  HelpCircle,
  Smartphone,
  BookOpen,
  Camera,
  Calendar,
  TrendingUp,
  Star,
  Palette,
  PenTool,
  GraduationCap,
  Globe,
  CheckCircle,
  Zap,
  Award,
} from "lucide-react";

const Sitemap = () => {
  const { user } = useAuth();

  const siteStructure = [
    {
      category: "🏠 Homepage & Auth",
      description: "Main landing page and authentication",
      pages: [
        {
          name: "Homepage",
          path: "/",
          icon: Home,
          description: "Landing page with platform overview",
          status: "✅ Working",
          features: [
            "Hero section",
            "Service categories",
            "How it works",
            "Statistics",
            "Features showcase",
          ],
        },
        {
          name: "Sign Up",
          path: "/auth/signup",
          icon: User,
          description: "Student registration with university verification",
          status: "✅ Working",
          features: [
            "Academic info",
            "Student ID upload",
            "Terms agreement",
            "University verification",
          ],
        },
        {
          name: "Sign In",
          path: "/auth/signin",
          icon: User,
          description: "User authentication with social login",
          status: "✅ Working",
          features: [
            "Email/password login",
            "Social login",
            "Remember me",
            "Password reset",
          ],
        },
        {
          name: "Forgot Password",
          path: "/auth/forgot-password",
          icon: Shield,
          description: "Password recovery flow",
          status: "✅ Working",
          features: [
            "Email-based reset",
            "Step-by-step instructions",
            "Confirmation messaging",
          ],
        },
      ],
    },
    {
      category: "📊 Dashboard & Core Features",
      description: "Main user dashboard and core platform features",
      pages: [
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: Home,
          description: "Personalized user dashboard with overview",
          status: "🆕 Enhanced",
          features: [
            "Quick stats",
            "Active jobs",
            "Notifications",
            "Recommendations",
            "Goals tracking",
            "Performance metrics",
          ],
        },
        {
          name: "Profile",
          path: "/profile",
          icon: User,
          description: "Comprehensive profile management",
          status: "✅ Working",
          features: [
            "Personal info",
            "Academic details",
            "Skills management",
            "Portfolio",
            "Reviews",
            "Settings",
          ],
        },
        {
          name: "Wallet",
          path: "/wallet",
          icon: DollarSign,
          description: "Earnings and payment management",
          status: "✅ Working",
          features: [
            "Balance tracking",
            "Transaction history",
            "Withdrawal methods",
            "Payment analytics",
          ],
        },
        {
          name: "Messages",
          path: "/messages",
          icon: MessageSquare,
          description: "Real-time communication with clients",
          status: "🆕 New",
          features: [
            "Real-time chat",
            "File sharing",
            "Project context",
            "Message filtering",
            "Online status",
          ],
        },
        {
          name: "Notifications",
          path: "/notifications",
          icon: Bell,
          description: "Comprehensive notification system",
          status: "🆕 New",
          features: [
            "Real-time alerts",
            "Categorized notifications",
            "Settings control",
            "Read/unread status",
          ],
        },
        {
          name: "Analytics",
          path: "/analytics",
          icon: BarChart3,
          description: "Performance insights and reporting",
          status: "🆕 New",
          features: [
            "Earnings tracking",
            "Performance metrics",
            "Skills analysis",
            "Client insights",
            "Goal tracking",
          ],
        },
      ],
    },
    {
      category: "💼 Job Management",
      description: "Complete job and project management system",
      pages: [
        {
          name: "Browse Jobs",
          path: "/jobs",
          icon: Briefcase,
          description: "Enhanced job discovery with advanced filtering",
          status: "🆕 Enhanced",
          features: [
            "Advanced search",
            "Smart filters",
            "Job recommendations",
            "Save jobs",
            "Application tracking",
          ],
        },
        {
          name: "Post Job",
          path: "/jobs/post",
          icon: Briefcase,
          description: "Multi-step job posting wizard",
          status: "✅ Working",
          features: [
            "4-step wizard",
            "Category-specific options",
            "File uploads",
            "Job preview",
            "Draft saving",
          ],
        },
        {
          name: "My Jobs",
          path: "/jobs/my-jobs",
          icon: Briefcase,
          description: "Manage active and completed projects",
          status: "✅ Working",
          features: [
            "Project tracking",
            "Milestone management",
            "Client communication",
            "Work submission",
          ],
        },
        {
          name: "Job Details",
          path: "/jobs/1",
          icon: Briefcase,
          description: "Detailed job information and application",
          status: "✅ Working",
          features: [
            "Job specifications",
            "Client profile",
            "Application form",
            "Similar jobs",
            "Q&A section",
          ],
        },
      ],
    },
    {
      category: "🎯 Service Categories",
      description: "Specialized service category pages",
      pages: [
        {
          name: "Freelancing",
          path: "/categories/freelancing",
          icon: Palette,
          description: "Design, development, writing services",
          status: "✅ Working",
          features: [
            "6 subcategories",
            "Featured freelancers",
            "Success stories",
            "Rate guidelines",
          ],
        },
        {
          name: "Student Market",
          path: "/categories/student-market",
          icon: BookOpen,
          description: "Buy and sell student items",
          status: "✅ Working",
          features: [
            "6 item categories",
            "Condition ratings",
            "University-specific markets",
            "Safety tips",
          ],
        },
        {
          name: "Tutoring",
          path: "/categories/tutoring",
          icon: GraduationCap,
          description: "Academic tutoring and exam prep",
          status: "✅ Working",
          features: [
            "Subject organization",
            "Exam prep",
            "Tutor profiles",
            "Success tracking",
          ],
        },
        {
          name: "Content Creation",
          path: "/categories/content-creation",
          icon: Camera,
          description: "Social media and digital content",
          status: "✅ Working",
          features: [
            "Platform-specific content",
            "Creator spotlight",
            "Trending analysis",
            "Viral tips",
          ],
        },
        {
          name: "Event Planning",
          path: "/categories/event-planning",
          icon: Calendar,
          description: "Event organization and management",
          status: "✅ Working",
          features: [
            "Event types",
            "Planning process",
            "Featured planners",
            "Budget guidelines",
          ],
        },
        {
          name: "Internships",
          path: "/categories/internships",
          icon: TrendingUp,
          description: "Professional work opportunities",
          status: "✅ Working",
          features: [
            "Industry categories",
            "Company partnerships",
            "Application tips",
            "Success rates",
          ],
        },
      ],
    },
    {
      category: "🤝 Community & Support",
      description: "Community features and support resources",
      pages: [
        {
          name: "Community",
          path: "/community",
          icon: Users,
          description: "Student forums and networking",
          status: "✅ Working",
          features: [
            "Discussion forums",
            "Success stories",
            "Networking events",
            "Top contributors",
          ],
        },
        {
          name: "Help Center",
          path: "/help",
          icon: HelpCircle,
          description: "Comprehensive support system",
          status: "✅ Working",
          features: [
            "FAQ system",
            "Category-based help",
            "Live chat support",
            "Popular topics",
          ],
        },
        {
          name: "Safety Guidelines",
          path: "/safety",
          icon: Shield,
          description: "Platform safety and security",
          status: "✅ Working",
          features: [
            "Meeting safety",
            "Online security",
            "Payment protection",
            "Scam prevention",
          ],
        },
      ],
    },
  ];

  const newFeatures = [
    {
      feature: "Real-time Messaging System",
      description: "Chat with clients, share files, track project context",
      icon: MessageSquare,
      status: "🆕 New",
    },
    {
      feature: "Advanced Notifications",
      description: "Categorized alerts with email/push/in-app controls",
      icon: Bell,
      status: "🆕 New",
    },
    {
      feature: "Analytics Dashboard",
      description: "Comprehensive performance insights and goal tracking",
      icon: BarChart3,
      status: "🆕 New",
    },
    {
      feature: "Enhanced Job Search",
      description: "Smart filters, job recommendations, and saved searches",
      icon: Briefcase,
      status: "🆕 Enhanced",
    },
    {
      feature: "Improved Dashboard",
      description: "Real-time stats, quick actions, and personalized insights",
      icon: Home,
      status: "🆕 Enhanced",
    },
    {
      feature: "Consistent Navigation",
      description: "Header and footer on all pages with improved UX",
      icon: Globe,
      status: "🔧 Fixed",
    },
  ];

  const platformStats = {
    totalPages: siteStructure.reduce(
      (total, category) => total + category.pages.length,
      0,
    ),
    newFeatures: newFeatures.filter((f) => f.status.includes("New")).length,
    enhancedFeatures: newFeatures.filter((f) => f.status.includes("Enhanced"))
      .length,
    workingPages: siteStructure.reduce(
      (total, category) =>
        total +
        category.pages.filter((p) => p.status.includes("Working")).length,
      0,
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🚀 Student Money & Opportunity Hub - Complete Platform
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your comprehensive guide to all platform features and pages
          </p>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {platformStats.totalPages}
                </div>
                <div className="text-sm text-gray-600">Total Pages</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {platformStats.newFeatures}
                </div>
                <div className="text-sm text-gray-600">New Features</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {platformStats.enhancedFeatures}
                </div>
                <div className="text-sm text-gray-600">Enhanced</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {platformStats.workingPages}
                </div>
                <div className="text-sm text-gray-600">Working Pages</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* New Features Showcase */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-6 w-6 mr-2 text-yellow-500" />
              🆕 Latest Features & Improvements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold">{feature.feature}</h3>
                        <Badge variant="outline">{feature.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Complete Site Structure */}
        <div className="space-y-8">
          {siteStructure.map((section, sectionIndex) => (
            <Card key={sectionIndex}>
              <CardHeader>
                <CardTitle className="text-xl">{section.category}</CardTitle>
                <p className="text-gray-600">{section.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <div
                      key={pageIndex}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <page.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{page.name}</h3>
                            <p className="text-sm text-gray-600">
                              {page.description}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            page.status.includes("New")
                              ? "default"
                              : page.status.includes("Enhanced")
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {page.status}
                        </Badge>
                      </div>

                      <div className="mb-3">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Key Features:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {page.features.map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-mono">
                          {page.path}
                        </span>
                        <Link to={page.path}>
                          <Button size="sm" variant="outline">
                            Visit Page
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testing Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
              🧪 Testing Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Authentication Flow:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>Try signing up with student information</li>
                  <li>Use the demo login credentials in Sign In</li>
                  <li>Test password recovery flow</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Core Features:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>Browse the enhanced dashboard with new widgets</li>
                  <li>Test the real-time messaging system</li>
                  <li>Check notifications with different categories</li>
                  <li>Explore the comprehensive analytics dashboard</li>
                  <li>Try the enhanced job search with filters</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Navigation:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>All pages now have consistent header/footer</li>
                  <li>Mobile responsive navigation menu</li>
                  <li>Quick actions in header for logged-in users</li>
                  <li>Notification and message badges</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Summary */}
        <Card className="mt-8 border-green-200 bg-green-50">
          <CardContent className="p-6 text-center">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              🎉 Platform Complete!
            </h2>
            <p className="text-green-700 mb-4">
              All {platformStats.totalPages} pages are functional with{" "}
              {platformStats.newFeatures} new features,
              {platformStats.enhancedFeatures} enhanced features, and
              comprehensive navigation.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/dashboard">
                <Button className="bg-green-600 hover:bg-green-700">
                  Go to Dashboard
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline">Browse Jobs</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Sitemap;
