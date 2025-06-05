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
import {
  Smartphone,
  Search,
  MessageCircle,
  Book,
  CreditCard,
  Shield,
  Users,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

const Help = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <Book className="h-6 w-6" />,
      description: "Learn the basics of using Student Hub",
      articles: [
        "How to create your student profile",
        "Verifying your student status",
        "Setting up your payment methods",
        "Finding your first opportunity",
        "Understanding our safety guidelines",
      ],
    },
    {
      title: "Jobs & Gigs",
      icon: <Users className="h-6 w-6" />,
      description: "Everything about finding and posting work",
      articles: [
        "How to search for jobs effectively",
        "Writing a winning proposal",
        "Understanding job categories",
        "What makes a good job posting",
        "Managing multiple projects",
      ],
    },
    {
      title: "Payments & Earnings",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Payment, withdrawals, and earnings",
      articles: [
        "How payments work on Student Hub",
        "Withdrawing your earnings",
        "Payment methods and fees",
        "Resolving payment issues",
        "Tax considerations for students",
      ],
    },
    {
      title: "Safety & Security",
      icon: <Shield className="h-6 w-6" />,
      description: "Staying safe while working online",
      articles: [
        "Identifying and avoiding scams",
        "Safe meeting practices",
        "Protecting your personal information",
        "Reporting suspicious activity",
        "Student verification process",
      ],
    },
    {
      title: "Account Settings",
      icon: <Settings className="h-6 w-6" />,
      description: "Managing your account and preferences",
      articles: [
        "Updating your profile information",
        "Changing notification settings",
        "Privacy and visibility controls",
        "Deactivating your account",
        "Two-factor authentication setup",
      ],
    },
    {
      title: "Troubleshooting",
      icon: <HelpCircle className="h-6 w-6" />,
      description: "Solutions to common problems",
      articles: [
        "I can't log into my account",
        "My payment is delayed",
        "I'm not receiving notifications",
        "Issues with job applications",
        "Technical problems and bugs",
      ],
    },
  ];

  const popularArticles = [
    "How to verify your student status",
    "What payment methods are accepted?",
    "How to write a winning job proposal",
    "Safety tips for meeting clients",
    "Understanding our fee structure",
    "How to build a strong profile",
    "Resolving disputes with clients",
    "Getting started as a freelancer",
  ];

  const contactOptions = [
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: <MessageCircle className="h-6 w-6" />,
      availability: "24/7 support",
      action: "Start Chat",
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: <Mail className="h-6 w-6" />,
      availability: "Response within 24 hours",
      action: "Send Email",
    },
    {
      title: "Phone Support",
      description: "Speak directly with support",
      icon: <Phone className="h-6 w-6" />,
      availability: "Mon-Fri, 9AM-6PM",
      action: "Call Now",
    },
  ];

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
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-fit mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions, learn how to use Student Hub
            effectively, and get the support you need to succeed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>

        {/* Popular Articles */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Popular Help Articles</CardTitle>
            <CardDescription>
              Most frequently accessed help topics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularArticles.map((article, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left h-auto p-4"
                >
                  <div>
                    <p className="font-medium">{article}</p>
                    <ArrowRight className="h-4 w-4 mt-2 opacity-60" />
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.articles.length} articles
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="space-y-2">
                    {category.articles
                      .slice(0, 3)
                      .map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <ArrowRight className="h-3 w-3 text-blue-600" />
                          <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                            {article}
                          </span>
                        </div>
                      ))}
                    {category.articles.length > 3 && (
                      <p className="text-sm text-blue-600 cursor-pointer">
                        +{category.articles.length - 3} more articles
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Still Need Help?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
                    <div className="text-white">{option.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 mb-4">
                    <Clock className="h-3 w-3" />
                    <span>{option.availability}</span>
                  </div>
                  <Button className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Resources */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Join Our Student Community
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Connect with other students, share experiences, and get help from
              the community. Our forums are a great place to ask questions and
              learn from others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Join Community
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Browse Discussions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
