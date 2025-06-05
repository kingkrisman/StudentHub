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
import {
  Smartphone,
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Lock,
  Users,
  Phone,
  MapPin,
  CreditCard,
  Flag,
  MessageSquare,
  FileText,
  HelpCircle,
} from "lucide-react";

const Safety = () => {
  const safetyCategories = [
    {
      title: "Meeting Clients Safely",
      icon: <Users className="h-6 w-6" />,
      description: "Guidelines for safe in-person meetings",
      tips: [
        "Always meet in public places like cafes, libraries, or university campuses",
        "Inform a friend or family member about your meeting details",
        "Bring a friend along if possible, especially for first meetings",
        "Trust your instincts - if something feels wrong, leave immediately",
        "Keep your phone charged and easily accessible",
        "Verify the client's identity before meeting",
      ],
    },
    {
      title: "Online Safety",
      icon: <Lock className="h-6 w-6" />,
      description: "Protecting yourself in digital interactions",
      tips: [
        "Never share personal information like home address or ID numbers",
        "Use the platform's messaging system instead of giving out your personal contacts",
        "Be cautious of clients asking for sensitive information",
        "Use strong, unique passwords for your Student Hub account",
        "Enable two-factor authentication when available",
        "Be wary of suspicious links or downloads",
      ],
    },
    {
      title: "Payment Security",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Safe payment practices and avoiding scams",
      tips: [
        "Only use Student Hub's secure payment system",
        "Never accept payment through untraceable methods",
        "Be suspicious of overpayment scams",
        "Don't start work before payment terms are agreed upon",
        "Keep records of all payment communications",
        "Report any payment irregularities immediately",
      ],
    },
    {
      title: "Identifying Scams",
      icon: <Eye className="h-6 w-6" />,
      description: "Red flags and warning signs to watch for",
      tips: [
        "Offers that seem too good to be true usually are",
        "Requests for upfront payments or fees",
        "Poor grammar and spelling in communications",
        "Urgency tactics and pressure to decide quickly",
        "Requests to move communication off the platform",
        "Vague job descriptions or unrealistic expectations",
      ],
    },
  ];

  const emergencyContacts = [
    {
      title: "Student Hub Support",
      description: "Report safety concerns or get immediate help",
      contact: "support@studenthub.ng",
      phone: "+234 800 STUDENT",
      available: "24/7",
    },
    {
      title: "Nigeria Police Emergency",
      description: "For immediate safety threats",
      contact: "Emergency Line",
      phone: "199 or 911",
      available: "24/7",
    },
    {
      title: "Campus Security",
      description: "Contact your university security",
      contact: "Your University Security",
      phone: "Check your university website",
      available: "Varies by institution",
    },
  ];

  const reportingSteps = [
    {
      step: "1",
      title: "Document Everything",
      description:
        "Take screenshots of conversations, save messages, and note important details like dates and times.",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      step: "2",
      title: "Use the Report Button",
      description:
        "Click the report button on the user's profile or in your conversation to flag inappropriate behavior.",
      icon: <Flag className="h-5 w-5" />,
    },
    {
      step: "3",
      title: "Contact Support",
      description:
        "Reach out to our support team with detailed information about the incident.",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      step: "4",
      title: "Follow Up",
      description:
        "Our team will investigate and update you on the actions taken within 24-48 hours.",
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  const verificationFeatures = [
    {
      title: "Student ID Verification",
      description: "All users must verify their student status with valid ID",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "University Email Confirmation",
      description:
        "Account registration requires institutional email verification",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      title: "Identity Verification",
      description: "Optional enhanced verification for trusted user status",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Review System",
      description: "Client and service provider ratings help build trust",
      icon: <Shield className="h-5 w-5" />,
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
              <Link to="/help">
                <Button variant="outline">Get Help</Button>
              </Link>
              <Button className="bg-red-600 hover:bg-red-700">
                <Flag className="mr-2 h-4 w-4" />
                Report Issue
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 p-3 rounded-full w-fit mx-auto mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Safety Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your safety is our top priority. Learn how to stay safe while using
            Student Hub, identify potential risks, and know what to do if you
            encounter any issues.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="text-left">
                <h3 className="font-semibold text-yellow-800">
                  Important Reminder
                </h3>
                <p className="text-yellow-700 text-sm">
                  If you ever feel unsafe or encounter suspicious behavior,
                  trust your instincts and report it immediately. We're here to
                  help 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Essential Safety Guidelines
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safetyCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.tips.map((tip, tipIndex) => (
                      <div
                        key={tipIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Verification Features */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 mr-2 text-green-600" />
              How We Keep You Safe
            </CardTitle>
            <CardDescription>
              Built-in safety features that protect our student community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {verificationFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Reporting Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Flag className="h-6 w-6 mr-2 text-red-600" />
                How to Report Issues
              </CardTitle>
              <CardDescription>
                Step-by-step guide to reporting safety concerns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-full text-red-600 font-bold text-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-6 w-6 mr-2 text-blue-600" />
                Emergency Contacts
              </CardTitle>
              <CardDescription>
                Who to contact in case of emergency or safety concerns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {contact.description}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-2 text-gray-400" />
                        <span className="font-medium">{contact.phone}</span>
                      </div>
                      {contact.contact !== "Emergency Line" &&
                        contact.contact !== "Your University Security" && (
                          <div className="flex items-center text-sm">
                            <MessageSquare className="h-3 w-3 mr-2 text-gray-400" />
                            <span>{contact.contact}</span>
                          </div>
                        )}
                      <div className="flex items-center text-sm text-green-600">
                        <CheckCircle className="h-3 w-3 mr-2" />
                        <span>Available {contact.available}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Common Scams */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
              Common Scams to Avoid
            </CardTitle>
            <CardDescription>
              Be aware of these common tactics used by scammers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border-l-4 border-red-500 bg-red-50">
                <h4 className="font-semibold text-red-800 mb-2">
                  Fake Payment Confirmations
                </h4>
                <p className="text-sm text-red-700">
                  Scammers may send fake payment screenshots or claim they've
                  paid when they haven't. Always verify payments through the
                  official platform.
                </p>
              </div>

              <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  Upfront Fee Requests
                </h4>
                <p className="text-sm text-yellow-700">
                  Legitimate clients never ask for upfront fees or "registration
                  costs." These are always scams designed to steal your money.
                </p>
              </div>

              <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Too Good to Be True Offers
                </h4>
                <p className="text-sm text-orange-700">
                  Extremely high payments for simple tasks are usually scams.
                  Research typical rates for your services.
                </p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                <h4 className="font-semibold text-purple-800 mb-2">
                  Personal Information Requests
                </h4>
                <p className="text-sm text-purple-700">
                  Never share sensitive information like bank details,
                  passwords, or ID numbers outside of secure, verified channels.
                </p>
              </div>

              <div className="p-4 border-l-4 border-pink-500 bg-pink-50">
                <h4 className="font-semibold text-pink-800 mb-2">
                  Urgent Decision Pressure
                </h4>
                <p className="text-sm text-pink-700">
                  Scammers often create false urgency to pressure quick
                  decisions. Take time to verify opportunities.
                </p>
              </div>

              <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Off-Platform Communication
                </h4>
                <p className="text-sm text-blue-700">
                  Be cautious of clients who immediately want to move
                  communication to external platforms or apps.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Safe, Stay Smart</h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Remember, your safety is always more important than any
              opportunity. When in doubt, reach out to our support team or
              trusted friends and family for advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                <Flag className="mr-2 h-5 w-5" />
                Report an Issue
              </Button>
              <Link to="/help">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-red-600"
                >
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Get Help
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Safety;
