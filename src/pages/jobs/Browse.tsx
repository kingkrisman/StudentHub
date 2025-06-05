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
  Search,
  Filter,
  MapPin,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  Star,
  Smartphone,
  Bell,
  User,
} from "lucide-react";

const BrowseJobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Design a modern logo for fintech startup",
      description:
        "Looking for a creative designer to create a professional logo for our new fintech company. Should be modern, trustworthy, and memorable.",
      category: "Freelancing",
      subcategory: "Design",
      amount: 25000,
      type: "Fixed Price",
      duration: "3 days",
      location: "Lagos, Nigeria",
      client: {
        name: "TechCorp Solutions",
        rating: 4.8,
        jobsPosted: 12,
        verified: true,
      },
      skills: [
        "Logo Design",
        "Graphic Design",
        "Adobe Illustrator",
        "Brand Identity",
      ],
      applicants: 15,
      postedTime: "2 hours ago",
      deadline: "3 days",
      urgent: true,
    },
    {
      id: 2,
      title: "Mathematics tutor for JAMB preparation",
      description:
        "Need an experienced mathematics tutor to help prepare my daughter for JAMB. Sessions will be 2 hours, twice per week.",
      category: "Tutoring",
      subcategory: "Mathematics",
      amount: 4000,
      type: "Per Session",
      duration: "2 months",
      location: "Ibadan, Oyo",
      client: {
        name: "Mrs. Adebayo",
        rating: 4.9,
        jobsPosted: 3,
        verified: true,
      },
      skills: ["Mathematics", "JAMB", "Teaching", "Secondary Education"],
      applicants: 8,
      postedTime: "5 hours ago",
      deadline: "1 week",
      urgent: false,
    },
    {
      id: 3,
      title: "Content writer for tech blog",
      description:
        "We need a skilled writer to create engaging articles about technology trends, AI, and startup news. 3 articles per week.",
      category: "Content Creation",
      subcategory: "Writing",
      amount: 15000,
      type: "Per Article",
      duration: "Ongoing",
      location: "Remote",
      client: {
        name: "TechNews Nigeria",
        rating: 4.7,
        jobsPosted: 25,
        verified: true,
      },
      skills: ["Content Writing", "Technology", "SEO", "Research"],
      applicants: 22,
      postedTime: "1 day ago",
      deadline: "5 days",
      urgent: false,
    },
    {
      id: 4,
      title: "Event coordinator for university graduation",
      description:
        "Looking for an experienced event coordinator to help organize our university graduation ceremony. Must have experience with large events.",
      category: "Event Planning",
      subcategory: "Academic Events",
      amount: 75000,
      type: "Fixed Price",
      duration: "2 weeks",
      location: "Abuja, FCT",
      client: {
        name: "Federal University of Technology",
        rating: 4.6,
        jobsPosted: 8,
        verified: true,
      },
      skills: [
        "Event Planning",
        "Project Management",
        "Vendor Coordination",
        "Academic Events",
      ],
      applicants: 12,
      postedTime: "3 hours ago",
      deadline: "1 week",
      urgent: true,
    },
    {
      id: 5,
      title: "Social media manager for fashion brand",
      description:
        "Manage our Instagram and TikTok accounts. Create engaging content, respond to comments, and grow our follower base.",
      category: "Content Creation",
      subcategory: "Social Media",
      amount: 30000,
      type: "Monthly",
      duration: "3 months",
      location: "Lagos, Nigeria",
      client: {
        name: "Bella Fashion House",
        rating: 4.5,
        jobsPosted: 15,
        verified: true,
      },
      skills: [
        "Social Media",
        "Content Creation",
        "Instagram",
        "TikTok",
        "Fashion",
      ],
      applicants: 35,
      postedTime: "6 hours ago",
      deadline: "2 weeks",
      urgent: false,
    },
    {
      id: 6,
      title: "Sell vintage textbooks (Engineering)",
      description:
        "Collection of engineering textbooks from 200-400 level. All in good condition. Perfect for current students.",
      category: "Student Market",
      subcategory: "Academic Materials",
      amount: 45000,
      type: "Fixed Price",
      duration: "Until sold",
      location: "University of Lagos",
      client: {
        name: "Kemi Okafor",
        rating: 4.8,
        jobsPosted: 6,
        verified: true,
      },
      skills: ["Engineering", "Textbooks", "Academic Materials"],
      applicants: 7,
      postedTime: "1 day ago",
      deadline: "No deadline",
      urgent: false,
    },
  ];

  const categories = [
    "All Categories",
    "Freelancing",
    "Tutoring",
    "Content Creation",
    "Event Planning",
    "Student Market",
    "Internships",
  ];

  const locations = [
    "All Locations",
    "Lagos, Nigeria",
    "Abuja, FCT",
    "Ibadan, Oyo",
    "Kano, Kano",
    "Port Harcourt, Rivers",
    "Enugu, Enugu",
    "Remote",
  ];

  const priceRanges = [
    "All Prices",
    "Under ₦5,000",
    "₦5,000 - ₦15,000",
    "₦15,000 - ₦30,000",
    "₦30,000 - ₦50,000",
    "Above ₦50,000",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All Categories" ||
      job.category === selectedCategory;
    const matchesLocation =
      !selectedLocation ||
      selectedLocation === "All Locations" ||
      job.location.includes(selectedLocation.split(",")[0]);

    return matchesSearch && matchesCategory && matchesLocation;
  });

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
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Browse Opportunities
          </h1>
          <p className="text-gray-600">
            Find jobs and gigs that match your skills and interests
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search jobs, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>

              <div className="text-sm text-gray-600">
                {filteredJobs.length} opportunities found
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.slice(1).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? "" : category,
                )
              }
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      {job.urgent && (
                        <Badge className="bg-red-100 text-red-800 text-xs">
                          Urgent
                        </Badge>
                      )}
                      {job.client.verified && (
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          ✓ Verified Client
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{job.category}</span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {job.postedTime}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.slice(0, 4).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {job.skills.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{job.skills.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                        <span className="font-semibold text-green-600">
                          ₦{job.amount.toLocaleString()}
                        </span>
                        <span className="text-gray-500 ml-1">({job.type})</span>
                      </div>

                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span>{job.applicants} applicants</span>
                      </div>

                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span>Deadline: {job.deadline}</span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-6 text-right">
                    <div className="mb-4">
                      <div className="text-sm text-gray-600 mb-1">Client</div>
                      <div className="font-medium text-gray-900">
                        {job.client.name}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="h-3 w-3 text-yellow-400 mr-1 fill-current" />
                        <span>{job.client.rating}</span>
                        <span className="ml-1">
                          ({job.client.jobsPosted} jobs)
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Link to={`/jobs/${job.id}`}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
