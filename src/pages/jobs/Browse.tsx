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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "../../App";
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
  Heart,
  Bookmark,
  Share2,
  TrendingUp,
  Calendar,
  Shield,
  Verified,
  Sort,
  Grid,
  List,
  Eye,
  MessageSquare,
} from "lucide-react";

const BrowseJobs = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [jobType, setJobType] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState(new Set());

  const jobs = [
    {
      id: 1,
      title: "Design a modern logo for fintech startup",
      description:
        "Looking for a creative designer to create a professional logo for our new fintech company. Should be modern, trustworthy, and memorable. Need multiple concepts and revisions included.",
      category: "Freelancing",
      subcategory: "Design",
      amount: 25000,
      type: "Fixed Price",
      duration: "1-2 weeks",
      experienceLevel: "Intermediate",
      location: "Remote",
      skills: ["Logo Design", "Adobe Illustrator", "Brand Identity"],
      client: {
        name: "TechStart Nigeria",
        avatar: "",
        rating: 4.8,
        reviews: 23,
        jobsPosted: 45,
        paymentVerified: true,
        location: "Lagos, Nigeria",
        memberSince: "2023",
      },
      urgency: "Medium",
      featured: true,
      posted: "2 hours ago",
      applicants: 12,
      interviewing: 2,
      budget: "₦20,000 - ₦30,000",
      tags: ["Urgent", "Top Client"],
      verified: true,
    },
    {
      id: 2,
      title: "Social media content creation for beauty brand",
      description:
        "Need a creative content creator to develop engaging posts for Instagram and TikTok. Must understand beauty trends and have experience with lifestyle content.",
      category: "Content Creation",
      subcategory: "Social Media",
      amount: 18000,
      type: "Fixed Price",
      duration: "3-4 weeks",
      experienceLevel: "Beginner",
      location: "Lagos, Nigeria",
      skills: ["Content Creation", "Instagram", "TikTok", "Photography"],
      client: {
        name: "Beauty Hub Lagos",
        avatar: "",
        rating: 4.6,
        reviews: 156,
        jobsPosted: 89,
        paymentVerified: true,
        location: "Lagos, Nigeria",
        memberSince: "2022",
      },
      urgency: "High",
      featured: false,
      posted: "5 hours ago",
      applicants: 28,
      interviewing: 5,
      budget: "₦15,000 - ₦20,000",
      tags: ["Popular"],
      verified: true,
    },
    {
      id: 3,
      title: "University event photography coverage",
      description:
        "Professional photographer needed for university graduation ceremony. Must have experience with event photography and own professional equipment.",
      category: "Freelancing",
      subcategory: "Photography",
      amount: 40000,
      type: "Fixed Price",
      duration: "1 day",
      experienceLevel: "Advanced",
      location: "Ibadan, Oyo",
      skills: ["Event Photography", "Photo Editing", "Professional Equipment"],
      client: {
        name: "University of Ibadan",
        avatar: "",
        rating: 4.9,
        reviews: 67,
        jobsPosted: 23,
        paymentVerified: true,
        location: "Ibadan, Nigeria",
        memberSince: "2021",
      },
      urgency: "Medium",
      featured: true,
      posted: "1 day ago",
      applicants: 8,
      interviewing: 1,
      budget: "₦35,000 - ₦45,000",
      tags: ["Verified Client"],
      verified: true,
    },
    {
      id: 4,
      title: "Website content writing for startup",
      description:
        "Need an experienced copywriter to create compelling website content for our tech startup. Includes homepage, about page, and service descriptions.",
      category: "Freelancing",
      subcategory: "Writing",
      amount: 35000,
      type: "Fixed Price",
      duration: "2-3 weeks",
      experienceLevel: "Intermediate",
      location: "Remote",
      skills: ["Copywriting", "SEO Writing", "Web Content"],
      client: {
        name: "InnovateNG",
        avatar: "",
        rating: 4.7,
        reviews: 34,
        jobsPosted: 12,
        paymentVerified: true,
        location: "Abuja, Nigeria",
        memberSince: "2023",
      },
      urgency: "Low",
      featured: false,
      posted: "2 days ago",
      applicants: 15,
      interviewing: 3,
      budget: "₦30,000 - ₦40,000",
      tags: [],
      verified: true,
    },
    {
      id: 5,
      title: "Mobile app UI/UX design",
      description:
        "Looking for a skilled UI/UX designer to create modern, user-friendly interface for our mobile application. Need wireframes, prototypes, and final designs.",
      category: "Freelancing",
      subcategory: "Design",
      amount: 80000,
      type: "Fixed Price",
      duration: "4-6 weeks",
      experienceLevel: "Advanced",
      location: "Remote",
      skills: ["UI/UX Design", "Figma", "Mobile Design", "Prototyping"],
      client: {
        name: "AppDev Solutions",
        avatar: "",
        rating: 4.9,
        reviews: 89,
        jobsPosted: 156,
        paymentVerified: true,
        location: "Lagos, Nigeria",
        memberSince: "2020",
      },
      urgency: "Medium",
      featured: true,
      posted: "3 days ago",
      applicants: 22,
      interviewing: 4,
      budget: "₦70,000 - ₦90,000",
      tags: ["Top Client", "High Budget"],
      verified: true,
    },
    {
      id: 6,
      title: "University textbook tutoring - Mathematics",
      description:
        "Need experienced mathematics tutor for university-level calculus and linear algebra. Online sessions preferred, must be patient and good at explaining concepts.",
      category: "Tutoring",
      subcategory: "Mathematics",
      amount: 12000,
      type: "Hourly",
      duration: "Ongoing",
      experienceLevel: "Intermediate",
      location: "Remote",
      skills: ["Mathematics", "Tutoring", "Online Teaching"],
      client: {
        name: "Study Group UNILAG",
        avatar: "",
        rating: 4.5,
        reviews: 45,
        jobsPosted: 23,
        paymentVerified: true,
        location: "Lagos, Nigeria",
        memberSince: "2023",
      },
      urgency: "Medium",
      featured: false,
      posted: "1 week ago",
      applicants: 18,
      interviewing: 2,
      budget: "₦1,000/hour",
      tags: ["Ongoing"],
      verified: true,
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
    "Remote",
    "Lagos, Nigeria",
    "Abuja, FCT",
    "Ibadan, Oyo",
    "Kano, Kano",
    "Port Harcourt, Rivers",
    "Enugu, Enugu",
  ];

  const jobTypes = ["All Types", "Fixed Price", "Hourly", "Contract"];

  const experienceLevels = [
    "All Levels",
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "highest-paid", label: "Highest Paid" },
    { value: "lowest-paid", label: "Lowest Paid" },
    { value: "most-relevant", label: "Most Relevant" },
    { value: "most-applicants", label: "Most Popular" },
  ];

  const toggleSaveJob = (jobId) => {
    setSavedJobs((prev) => {
      const newSaved = new Set(prev);
      if (newSaved.has(jobId)) {
        newSaved.delete(jobId);
      } else {
        newSaved.add(jobId);
      }
      return newSaved;
    });
  };

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
      job.location.includes(selectedLocation.split(",")[0]) ||
      job.location === selectedLocation;

    const matchesPrice =
      job.amount >= priceRange[0] && job.amount <= priceRange[1];

    const matchesJobType =
      !jobType || jobType === "All Types" || job.type === jobType;

    const matchesExperience =
      !experienceLevel ||
      experienceLevel === "All Levels" ||
      job.experienceLevel === experienceLevel;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLocation &&
      matchesPrice &&
      matchesJobType &&
      matchesExperience
    );
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.posted) - new Date(a.posted);
      case "oldest":
        return new Date(a.posted) - new Date(b.posted);
      case "highest-paid":
        return b.amount - a.amount;
      case "lowest-paid":
        return a.amount - b.amount;
      case "most-applicants":
        return b.applicants - a.applicants;
      default:
        return 0;
    }
  });

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const JobCard = ({ job }) => (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${
        job.featured ? "ring-2 ring-blue-500 ring-opacity-20" : ""
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {job.featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  Featured
                </Badge>
              )}
              {job.verified && (
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-600"
                >
                  <Shield className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
              <Badge className={getUrgencyColor(job.urgency)}>
                {job.urgency}
              </Badge>
            </div>
            <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
              <Link to={`/jobs/${job.id}`} className="hover:underline">
                {job.title}
              </Link>
            </CardTitle>
            <CardDescription className="mt-2 line-clamp-2">
              {job.description}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleSaveJob(job.id)}
              className={
                savedJobs.has(job.id) ? "text-red-500" : "text-gray-400"
              }
            >
              <Heart
                className={`h-4 w-4 ${savedJobs.has(job.id) ? "fill-current" : ""}`}
              />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Client Information */}
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={job.client.avatar} alt={job.client.name} />
              <AvatarFallback>{job.client.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-medium text-sm">{job.client.name}</p>
                {job.client.paymentVerified && (
                  <Verified className="h-4 w-4 text-blue-500" />
                )}
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                  {job.client.rating} ({job.client.reviews})
                </div>
                <span>•</span>
                <span>{job.client.jobsPosted} jobs posted</span>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <DollarSign className="h-4 w-4 mr-2" />
                <span className="font-semibold">
                  ₦{job.amount.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{job.duration}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                <span>{job.applicants} proposals</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex flex-wrap gap-1">
              {job.skills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {job.skills.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{job.skills.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Tags */}
          {job.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {job.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs text-blue-600"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Posted {job.posted}</span>
              {job.interviewing > 0 && (
                <span className="text-green-600 font-medium">
                  {job.interviewing} interviewing
                </span>
              )}
            </div>
            <Link to={`/jobs/${job.id}`}>
              <Button size="sm">
                View Details
                <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Jobs</h1>
          <p className="text-gray-600">
            Find the perfect opportunity to earn money while studying
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for jobs, skills, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-40">
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
              <SelectTrigger className="w-40">
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

            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="border-t pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget Range: ₦{priceRange[0].toLocaleString()} - ₦
                    {priceRange[1].toLocaleString()}
                  </label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100000}
                    min={0}
                    step={5000}
                    className="w-full"
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Experience Level
                  </label>
                  <Select
                    value={experienceLevel}
                    onValueChange={setExperienceLevel}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Posted Within */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Posted Within
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="any">Any Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Quick Filter Checkboxes */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="featured" />
                  <label htmlFor="featured" className="text-sm">
                    Featured Jobs Only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="verified" />
                  <label htmlFor="verified" className="text-sm">
                    Verified Clients Only
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remote" />
                  <label htmlFor="remote" className="text-sm">
                    Remote Jobs Only
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold">
              {sortedJobs.length} jobs found
            </h2>
            {savedJobs.size > 0 && (
              <Badge variant="outline">{savedJobs.size} saved</Badge>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {/* View Mode Toggle */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort Options */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <Sort className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Jobs Grid */}
        {sortedJobs.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
                : "space-y-4"
            }
          >
            {sortedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
                setSelectedLocation("");
                setPriceRange([0, 100000]);
                setJobType("");
                setExperienceLevel("");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {sortedJobs.length > 0 && sortedJobs.length >= 10 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Jobs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BrowseJobs;
