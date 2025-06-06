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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Smartphone,
  Palette,
  Code,
  PenTool,
  Camera,
  Video,
  Globe,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Star,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";

const Freelancing = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const subcategories = [
    {
      id: "design",
      name: "Design",
      icon: <Palette className="h-6 w-6" />,
      description: "Logo design, branding, UI/UX, graphic design",
      jobCount: 156,
      avgRate: 15000,
      topSkills: ["Adobe Illustrator", "Photoshop", "Figma", "Logo Design"],
    },
    {
      id: "development",
      name: "Development",
      icon: <Code className="h-6 w-6" />,
      description: "Web development, mobile apps, software solutions",
      jobCount: 89,
      avgRate: 25000,
      topSkills: ["JavaScript", "React", "Python", "Mobile Apps"],
    },
    {
      id: "writing",
      name: "Writing & Content",
      icon: <PenTool className="h-6 w-6" />,
      description: "Content writing, copywriting, technical writing",
      jobCount: 134,
      avgRate: 8000,
      topSkills: ["Content Writing", "SEO", "Copywriting", "Research"],
    },
    {
      id: "photography",
      name: "Photography",
      icon: <Camera className="h-6 w-6" />,
      description: "Event photography, product shots, portraits",
      jobCount: 67,
      avgRate: 12000,
      topSkills: [
        "Photography",
        "Photo Editing",
        "Event Coverage",
        "Portraits",
      ],
    },
    {
      id: "video",
      name: "Video & Animation",
      icon: <Video className="h-6 w-6" />,
      description: "Video editing, motion graphics, animations",
      jobCount: 45,
      avgRate: 18000,
      topSkills: [
        "Video Editing",
        "After Effects",
        "Animation",
        "Motion Graphics",
      ],
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      icon: <Globe className="h-6 w-6" />,
      description: "Social media, SEO, advertising, marketing strategy",
      jobCount: 78,
      avgRate: 10000,
      topSkills: ["Social Media", "SEO", "Google Ads", "Marketing Strategy"],
    },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Modern logo design for fintech startup",
      subcategory: "Design",
      budget: 25000,
      duration: "3 days",
      client: "TechCorp Solutions",
      clientRating: 4.8,
      applicants: 12,
      skills: ["Logo Design", "Brand Identity", "Adobe Illustrator"],
      urgent: true,
    },
    {
      id: 2,
      title: "E-commerce website development",
      subcategory: "Development",
      budget: 75000,
      duration: "2 weeks",
      client: "Fashion Store",
      clientRating: 4.6,
      applicants: 8,
      skills: ["React", "Node.js", "E-commerce", "Payment Integration"],
      urgent: false,
    },
    {
      id: 3,
      title: "Content writing for tech blog",
      subcategory: "Writing & Content",
      budget: 15000,
      duration: "1 week",
      client: "TechNews Nigeria",
      clientRating: 4.7,
      applicants: 23,
      skills: ["Content Writing", "Technology", "SEO", "Research"],
      urgent: false,
    },
    {
      id: 4,
      title: "Product photography for e-commerce",
      subcategory: "Photography",
      budget: 20000,
      duration: "2 days",
      client: "Beauty Products Co",
      clientRating: 4.9,
      applicants: 15,
      skills: [
        "Product Photography",
        "Photo Editing",
        "Lighting",
        "E-commerce",
      ],
      urgent: true,
    },
  ];

  const successStories = [
    {
      freelancer: "Kemi Adebayo",
      project: "Brand Identity Design",
      earnings: "₦450,000 in 3 months",
      rating: 4.9,
      description: "Specialized in logo and brand design for startups",
    },
    {
      freelancer: "David Okafor",
      project: "Web Development",
      earnings: "₦680,000 in 6 months",
      rating: 4.8,
      description: "Built 15+ websites for small businesses",
    },
    {
      freelancer: "Fatima Hassan",
      project: "Content Writing",
      earnings: "₦320,000 in 4 months",
      rating: 4.7,
      description: "Wrote 200+ articles for tech and lifestyle blogs",
    },
  ];

  const tips = [
    {
      title: "Build a Strong Portfolio",
      description:
        "Showcase your best work with detailed case studies and before/after examples.",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Set Competitive Rates",
      description:
        "Research market rates and price your services competitively while valuing your time.",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Deliver Quality Work",
      description:
        "Exceed client expectations to build long-term relationships and get repeat business.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Communicate Effectively",
      description:
        "Keep clients updated on progress and respond to messages promptly.",
      icon: <Users className="h-5 w-5" />,
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
              <Link to="/jobs/post">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                  Post Freelance Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/jobs" className="hover:text-blue-600">
                Opportunities
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">Freelancing</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
            <Palette className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Freelancing Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn your creative skills into income. From design and development
            to writing and marketing, find freelance projects that match your
            expertise and build your portfolio.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search freelance jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedSubcategory}
              onValueChange={setSelectedSubcategory}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {subcategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link to="/jobs">
              <Button>Search Jobs</Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">569</h3>
              <p className="text-gray-600">Active Jobs</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₦15,000</h3>
              <p className="text-gray-600">Avg. Job Value</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,847</h3>
              <p className="text-gray-600">Active Freelancers</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">96%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Subcategories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Freelancing Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-lg text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.jobCount} jobs available
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Avg. Rate</span>
                    <span className="font-semibold text-green-600">
                      ₦{category.avgRate.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Top Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {category.topSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Freelance Jobs
            </h2>
            <Link to="/jobs">
              <Button variant="outline">
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {job.subcategory}
                      </p>
                      <p className="text-sm text-gray-600">by {job.client}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">
                        ₦{job.budget.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span>{job.clientRating}</span>
                      </div>
                      <span>{job.applicants} applicants</span>
                    </div>
                    <Link to={`/jobs/${job.id}`}>
                      <Button size="sm">Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {story.freelancer}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{story.project}</p>
                  <p className="text-lg font-semibold text-green-600 mb-2">
                    {story.earnings}
                  </p>
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(story.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500">
                      ({story.rating})
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips for Success */}
        <Card>
          <CardHeader>
            <CardTitle>Tips for Freelancing Success</CardTitle>
            <CardDescription>
              Learn from experienced freelancers and build a thriving business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Freelancing;
