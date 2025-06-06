import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Zap,
  Shield,
  TrendingUp,
  BookOpen,
  Palette,
  ShoppingBag,
  Calendar,
  Video,
  GraduationCap,
  Star,
  Check,
  ArrowRight,
  Smartphone,
  DollarSign,
  Globe,
} from "lucide-react";

const Index = () => {
  const hustleTypes = [
    {
      title: "Freelancing",
      description: "Offer services like design, writing, tutoring",
      example: "Design a logo for ₦10,000",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Student Market",
      description: "Sell anything—notes, fashion, gadgets",
      example: "Sell sneakers for ₦20,000",
      icon: <ShoppingBag className="h-6 w-6" />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Event Planning",
      description: "Help plan birthdays, shows, campus events",
      example: "Earn ₦50k per event",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Content Creation",
      description: "Create trending videos, memes, or blog posts",
      example: "Get paid ₦5,000 per viral post",
      icon: <Video className="h-6 w-6" />,
      color: "bg-pink-50 text-pink-600",
    },
    {
      title: "Internships",
      description: "Connect with paid student-friendly internships",
      example: "Get ₦50k/month remote work",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Tutoring",
      description: "Teach subjects and get paid per session",
      example: "Earn ₦1k per student per hour",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  const howItWorksSteps = [
    {
      step: "1",
      title: "Sign Up",
      description: "Create a profile using your student email or ID",
      icon: <Users className="h-8 w-8" />,
    },
    {
      step: "2",
      title: "List Your Skills or Hustle",
      description:
        "Are you a writer, designer, tutor, or event planner? List it!",
      icon: <Star className="h-8 w-8" />,
    },
    {
      step: "3",
      title: "Find Gigs & Tasks",
      description:
        "Businesses, fellow students, and companies post jobs you can apply for",
      icon: <TrendingUp className="h-8 w-8" />,
    },
    {
      step: "4",
      title: "Work & Get Paid",
      description:
        "Complete the task, get verified, and receive your payment instantly",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      step: "5",
      title: "Earn Recognition",
      description: "Build your credibility with verified reviews and ratings",
      icon: <Shield className="h-8 w-8" />,
    },
  ];

  const features = [
    {
      title: "No Long Application Process",
      description: "Just sign up and start earning",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Instant Payouts",
      description: "Get your money directly to your bank account",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Community Support",
      description:
        "Connect with other students for collabs, advice, and networking",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Verified Profiles",
      description: "No scams! Only real students and trusted businesses",
      icon: <Shield className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student Hub
              </span>
            </div>
            <div className="flex space-x-4">
              <Link to="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/auth/signup">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-800 hover:bg-green-200"
          >
            <Globe className="h-4 w-4 mr-1" />
            For Nigerian Students
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Student Money &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Opportunity Hub
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            An online community for Nigerian students to{" "}
            <strong>earn money</strong>, <strong>learn skills</strong>, and
            connect with real opportunities, all from their phones. Whether
            you're freelancing, running a small hustle, or looking for
            internships, we make it easy to find work, get paid fast, and build
            your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/auth/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 py-3"
              >
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Browse Opportunities
              </Button>
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₦50M+</div>
              <div className="text-gray-600">Earned by Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Universities</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in just 5 simple steps and begin earning money today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-600 font-bold text-sm -mt-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {index < howItWorksSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Make Money */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Make Money on the Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Turn your skills into income with these proven earning
              opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hustleTypes.map((hustle) => (
              <Link
                key={hustle.title}
                to={
                  hustle.title === "Freelancing"
                    ? "/categories/freelancing"
                    : hustle.title === "Student Market"
                      ? "/categories/student-market"
                      : hustle.title === "Event Planning"
                        ? "/categories/event-planning"
                        : hustle.title === "Content Creation"
                          ? "/categories/content-creation"
                          : hustle.title === "Internships"
                            ? "/categories/internships"
                            : hustle.title === "Tutoring"
                              ? "/categories/tutoring"
                              : "/jobs"
                }
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm cursor-pointer">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${hustle.color} flex items-center justify-center mb-4`}
                    >
                      {hustle.icon}
                    </div>
                    <CardTitle className="text-xl">{hustle.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {hustle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                      <div className="text-sm text-gray-600 mb-1">Example:</div>
                      <div className="font-semibold text-gray-900">
                        {hustle.example}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      <span>Explore {hustle.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Why Students Love It */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students Will Love It
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for students, by students who understand your
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-lg text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            This is Not Just an App—It's a Movement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-white">
              <div className="bg-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                <Users className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Students Supporting Students
              </h3>
              <p className="opacity-90">
                Earn from each other and grow together
              </p>
            </div>

            <div className="text-white">
              <div className="bg-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                <TrendingUp className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                More Than a Side Hustle
              </h3>
              <p className="opacity-90">
                Build real work experience while still in school
              </p>
            </div>

            <div className="text-white">
              <div className="bg-white/20 p-4 rounded-lg mb-4 backdrop-blur-sm">
                <Star className="h-8 w-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Your Future Starts Now
              </h3>
              <p className="opacity-90">
                What if your campus hustle becomes a big career?
              </p>
            </div>
          </div>

          <Link to="/auth/signup">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 font-semibold"
            >
              Join the Movement Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerian students who are already building their
            future, one opportunity at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg px-8 py-3"
              >
                Create Your Profile
              </Button>
            </Link>
            <Link to="/jobs">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-gray-900"
              >
                Browse Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">Student Hub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering Nigerian students to earn, learn, and grow together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/jobs" className="hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/safety" className="hover:text-white">
                    Safety Guidelines
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/community" className="hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2024 Student Hub. All rights reserved. Built for Nigerian
              students, by students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
