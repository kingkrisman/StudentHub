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
  Briefcase,
  Code,
  PieChart,
  Palette,
  TrendingUp,
  Users,
  Building,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Calendar,
  Award,
  CheckCircle,
  ArrowRight,
  Search,
  Target,
} from "lucide-react";

const Internships = () => {
  const [selectedField, setSelectedField] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const internshipFields = [
    {
      id: "technology",
      name: "Technology & IT",
      icon: <Code className="h-6 w-6" />,
      description:
        "Software development, web design, data analysis, cybersecurity",
      positions: 156,
      avgStipend: 75000,
      companies: ["Startups", "Tech Companies", "Banks", "Agencies"],
      skills: [
        "Programming",
        "Web Development",
        "Data Analysis",
        "UI/UX Design",
      ],
    },
    {
      id: "marketing",
      name: "Marketing & Communications",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Digital marketing, content creation, social media, PR",
      positions: 134,
      avgStipend: 50000,
      companies: ["Agencies", "Startups", "Media Houses", "Corporations"],
      skills: [
        "Digital Marketing",
        "Content Creation",
        "Analytics",
        "Communication",
      ],
    },
    {
      id: "finance",
      name: "Finance & Accounting",
      icon: <PieChart className="h-6 w-6" />,
      description: "Financial analysis, accounting, investment, banking",
      positions: 89,
      avgStipend: 65000,
      companies: ["Banks", "Fintech", "Investment Firms", "Corporations"],
      skills: [
        "Financial Analysis",
        "Accounting",
        "Excel",
        "Investment Analysis",
      ],
    },
    {
      id: "design",
      name: "Design & Creative",
      icon: <Palette className="h-6 w-6" />,
      description: "Graphic design, UI/UX, brand design, product design",
      positions: 112,
      avgStipend: 55000,
      companies: ["Design Studios", "Startups", "Media", "Agencies"],
      skills: ["Graphic Design", "UI/UX", "Adobe Suite", "Prototyping"],
    },
    {
      id: "operations",
      name: "Operations & Management",
      icon: <Building className="h-6 w-6" />,
      description: "Project management, operations, consulting, strategy",
      positions: 78,
      avgStipend: 60000,
      companies: ["Consulting", "Corporations", "Startups", "NGOs"],
      skills: ["Project Management", "Strategy", "Operations", "Analytics"],
    },
    {
      id: "hr",
      name: "Human Resources",
      icon: <Users className="h-6 w-6" />,
      description: "Recruitment, training, employee relations, HR analytics",
      positions: 67,
      avgStipend: 45000,
      companies: ["Corporations", "HR Agencies", "Startups", "Consulting"],
      skills: ["Recruitment", "Training", "Communication", "HR Systems"],
    },
  ];

  const featuredInternships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechHub Nigeria",
      field: "Technology & IT",
      type: "Remote",
      duration: "3 months",
      stipend: 80000,
      location: "Lagos, Nigeria (Remote)",
      applicants: 45,
      posted: "2 days ago",
      requirements: ["React/JavaScript", "Node.js", "Git", "Problem Solving"],
      description:
        "Join our development team to build innovative fintech solutions. Work on real projects with mentorship from senior developers.",
      benefits: [
        "Mentorship",
        "Certificate",
        "Possible Full-time",
        "Flexible Hours",
      ],
      urgent: false,
      featured: true,
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "GrowthMax Agency",
      field: "Marketing & Communications",
      type: "Hybrid",
      duration: "6 months",
      stipend: 55000,
      location: "Abuja, FCT",
      applicants: 32,
      posted: "1 week ago",
      requirements: [
        "Social Media",
        "Content Creation",
        "Analytics",
        "Communication",
      ],
      description:
        "Learn digital marketing strategies while managing real client campaigns. Gain hands-on experience in all aspects of digital marketing.",
      benefits: [
        "Training Program",
        "Client Exposure",
        "Certificate",
        "Networking",
      ],
      urgent: true,
      featured: true,
    },
    {
      id: 3,
      title: "Financial Analyst Intern",
      company: "Investment Partners Ltd",
      field: "Finance & Accounting",
      type: "On-site",
      duration: "4 months",
      stipend: 70000,
      location: "Lagos, Nigeria",
      applicants: 28,
      posted: "3 days ago",
      requirements: [
        "Excel",
        "Financial Modeling",
        "Research",
        "Attention to Detail",
      ],
      description:
        "Support our investment team with financial analysis and research. Perfect opportunity to learn investment banking fundamentals.",
      benefits: [
        "Industry Exposure",
        "Certification",
        "Mentorship",
        "Full-time Potential",
      ],
      urgent: false,
      featured: false,
    },
    {
      id: 4,
      title: "UI/UX Design Intern",
      company: "Creative Studio",
      field: "Design & Creative",
      type: "Hybrid",
      duration: "3 months",
      stipend: 60000,
      location: "Port Harcourt, Rivers",
      applicants: 38,
      posted: "5 days ago",
      requirements: [
        "Figma",
        "Adobe Creative Suite",
        "Design Thinking",
        "Prototyping",
      ],
      description:
        "Work on user experience design for mobile and web applications. Collaborate with cross-functional teams on exciting projects.",
      benefits: [
        "Portfolio Building",
        "Design Mentorship",
        "Latest Tools",
        "Team Collaboration",
      ],
      urgent: false,
      featured: true,
    },
  ];

  const topCompanies = [
    {
      name: "TechHub Nigeria",
      industry: "Technology",
      internships: 12,
      rating: 4.8,
      locations: ["Lagos", "Abuja", "Remote"],
      size: "50-100 employees",
      perks: [
        "Flexible Hours",
        "Mentorship",
        "Modern Office",
        "Learning Budget",
      ],
    },
    {
      name: "GrowthMax Agency",
      industry: "Marketing",
      internships: 8,
      rating: 4.7,
      locations: ["Lagos", "Abuja"],
      size: "20-50 employees",
      perks: ["Client Exposure", "Training", "Certification", "Team Events"],
    },
    {
      name: "Investment Partners",
      industry: "Finance",
      internships: 6,
      rating: 4.9,
      locations: ["Lagos", "Port Harcourt"],
      size: "100+ employees",
      perks: [
        "Industry Training",
        "Networking",
        "Full-time Path",
        "Competitive Pay",
      ],
    },
  ];

  const internshipBenefits = [
    {
      title: "Real Work Experience",
      description:
        "Work on actual projects and gain hands-on experience in your field of study.",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Industry Mentorship",
      description:
        "Learn from experienced professionals who guide your career development.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Professional Network",
      description:
        "Build connections that can lead to future job opportunities and collaborations.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Skill Development",
      description:
        "Develop both technical and soft skills that are valuable in the workplace.",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  const applicationTips = [
    "Tailor your CV to match the internship requirements",
    "Write a compelling cover letter showing your passion",
    "Highlight relevant coursework and projects",
    "Include any volunteer work or side projects",
    "Follow up professionally after applying",
    "Prepare for interviews by researching the company",
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
                  Post Internship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full w-fit mx-auto mb-6">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Internship Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Bridge the gap between classroom learning and real-world experience.
            Find paid internships with top companies, gain valuable skills, and
            kickstart your career while still in school.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search internships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedField} onValueChange={setSelectedField}>
              <SelectTrigger>
                <SelectValue placeholder="Field" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fields</SelectItem>
                {internshipFields.map((field) => (
                  <SelectItem key={field.id} value={field.id}>
                    {field.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link to="/jobs">
              <Button className="w-full">Find Internships</Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">636</h3>
              <p className="text-gray-600">Active Internships</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">247</h3>
              <p className="text-gray-600">Partner Companies</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,456</h3>
              <p className="text-gray-600">Student Interns</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₦62k</h3>
              <p className="text-gray-600">Avg. Stipend</p>
            </CardContent>
          </Card>
        </div>

        {/* Internship Fields */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Internship Fields
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipFields.map((field) => (
              <Card
                key={field.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg text-white">
                      {field.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{field.name}</h3>
                      <p className="text-sm text-gray-500">
                        {field.positions} positions
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{field.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Avg. Stipend</span>
                    <span className="font-semibold text-green-600">
                      ₦{field.avgStipend.toLocaleString()}/month
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Required Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {field.skills.map((skill) => (
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

        {/* Featured Internships */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Internship Opportunities
            </h2>
            <Link to="/jobs">
              <Button variant="outline">
                View All Internships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredInternships.map((internship) => (
              <Card
                key={internship.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {internship.title}
                        </h3>
                        {internship.urgent && (
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            Urgent
                          </Badge>
                        )}
                        {internship.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-medium text-blue-600 mb-1">
                        {internship.company}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        {internship.field}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{internship.posted}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">
                        ₦{internship.stipend.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">per month</p>
                      <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">
                        {internship.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{internship.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Requirements:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {internship.requirements.map((req) => (
                          <Badge
                            key={req}
                            variant="secondary"
                            className="text-xs"
                          >
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Benefits:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {internship.benefits.map((benefit) => (
                          <Badge
                            key={benefit}
                            className="bg-green-100 text-green-800 text-xs"
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {internship.applicants} applicants
                    </span>
                    <Link to={`/jobs/${internship.id}`}>
                      <Button>Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Top Companies */}
          <Card>
            <CardHeader>
              <CardTitle>Top Internship Companies</CardTitle>
              <CardDescription>
                Leading companies offering quality internship programs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg text-white font-bold">
                      {company.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-medium">{company.name}</h4>
                      <p className="text-sm text-gray-600">
                        {company.industry}
                      </p>
                      <p className="text-sm text-gray-500">{company.size}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          <span>{company.rating}</span>
                        </div>
                        <span>•</span>
                        <span>{company.internships} internships</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex flex-wrap gap-1 justify-end mb-2">
                      {company.locations.map((location) => (
                        <Badge
                          key={location}
                          variant="secondary"
                          className="text-xs"
                        >
                          {location}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline">
                      View Jobs
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Internship Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Why Internships Matter</CardTitle>
              <CardDescription>
                The value of gaining real work experience as a student
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {internshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Tips */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Internship Application Tips</CardTitle>
            <CardDescription>
              How to stand out and land your dream internship
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Your Career Journey?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't wait until graduation to gain work experience. Start
              building your career today with paid internships that provide real
              value and learning opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Browse Internships
                </Button>
              </Link>
              <Link to="/jobs/post">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Post Internship
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Internships;
