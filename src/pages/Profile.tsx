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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Smartphone,
  Camera,
  Edit,
  Plus,
  X,
  Star,
  Calendar,
  MapPin,
  Mail,
  Phone,
  School,
  Award,
  Upload,
  Download,
  Eye,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import { useAuth } from "../App";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [newSkill, setNewSkill] = useState("");

  // Mock user profile data
  const [profile, setProfile] = useState({
    // Basic Info
    firstName: "Adebayo",
    lastName: "Johnson",
    email: "adebayo.johnson@unilag.edu.ng",
    phone: "+234 901 234 5678",
    bio: "I'm a passionate Computer Science student at University of Lagos with strong skills in graphic design and web development. I love creating innovative solutions and helping fellow students with their academic and business needs.",
    avatar: "",

    // Academic Info
    university: "University of Lagos (UNILAG)",
    course: "Computer Science",
    level: "300 Level",
    graduationYear: "2025",
    studentId: "19/55BC047",

    // Location
    state: "Lagos",
    city: "Lagos",

    // Professional Info
    title: "Graphic Designer & Web Developer",
    hourlyRate: 2500,
    availability: "Part-time",
    languages: ["English", "Yoruba", "Hausa"],

    // Skills
    skills: [
      { name: "Graphic Design", level: "Expert", endorsements: 15 },
      { name: "Adobe Illustrator", level: "Advanced", endorsements: 12 },
      { name: "Web Development", level: "Intermediate", endorsements: 8 },
      { name: "JavaScript", level: "Intermediate", endorsements: 6 },
      { name: "Logo Design", level: "Expert", endorsements: 20 },
      { name: "Brand Identity", level: "Advanced", endorsements: 10 },
    ],

    // Stats
    totalEarnings: 125000,
    completedJobs: 24,
    rating: 4.8,
    responseTime: "2 hours",
    completionRate: 96,

    // Portfolio
    portfolio: [
      {
        id: 1,
        title: "Modern Logo Design",
        category: "Graphic Design",
        image: "",
        likes: 25,
      },
      {
        id: 2,
        title: "E-commerce Website",
        category: "Web Development",
        image: "",
        likes: 18,
      },
      {
        id: 3,
        title: "Brand Identity Package",
        category: "Branding",
        image: "",
        likes: 32,
      },
      {
        id: 4,
        title: "Mobile App UI",
        category: "UI/UX Design",
        image: "",
        likes: 28,
      },
    ],

    // Reviews
    reviews: [
      {
        id: 1,
        client: "TechCorp Solutions",
        rating: 5,
        comment:
          "Exceptional work! Adebayo delivered exactly what we needed and even exceeded our expectations. The logo design was perfect and captured our brand essence beautifully.",
        project: "Logo Design for Tech Startup",
        date: "2024-01-15",
        amount: 25000,
      },
      {
        id: 2,
        client: "Mrs. Adebayo",
        rating: 5,
        comment:
          "Excellent tutor! My daughter's mathematics improved significantly under his guidance. Very patient and explains concepts clearly.",
        project: "Mathematics Tutoring",
        date: "2024-01-10",
        amount: 16000,
      },
      {
        id: 3,
        client: "Bella Fashion House",
        rating: 4,
        comment:
          "Great work on our social media content. Creative ideas and professional execution. Will definitely work with him again.",
        project: "Social Media Content Creation",
        date: "2024-01-05",
        amount: 30000,
      },
    ],

    // Certifications
    certifications: [
      {
        name: "Adobe Certified Expert - Illustrator",
        issuer: "Adobe",
        date: "2023-11-15",
      },
      {
        name: "Google Analytics Certified",
        issuer: "Google",
        date: "2023-09-20",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "2023-08-10",
      },
    ],
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save profile logic here
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setProfile((prev) => ({
        ...prev,
        skills: [
          ...prev.skills,
          { name: newSkill.trim(), level: "Beginner", endorsements: 0 },
        ],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillName: string) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.name !== skillName),
    }));
  };

  const profileCompletion = 85; // Calculate based on filled fields

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
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
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant={isEditing ? "default" : "outline"}
              >
                {isEditing ? (
                  <CheckCircle className="mr-2 h-4 w-4" />
                ) : (
                  <Edit className="mr-2 h-4 w-4" />
                )}
                {isEditing ? "Save Changes" : "Edit Profile"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile.avatar} />
                  <AvatarFallback className="text-2xl">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button
                    size="icon"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile.firstName} {profile.lastName}
                  </h1>
                  <Badge className="bg-green-100 text-green-800">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified Student
                  </Badge>
                </div>

                <p className="text-lg text-gray-600 mb-2">{profile.title}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <School className="h-4 w-4 mr-1" />
                    <span>{profile.university}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {profile.city}, {profile.state}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    <span>
                      {profile.rating} ({profile.reviews.length} reviews)
                    </span>
                  </div>
                </div>

                {!isEditing ? (
                  <p className="text-gray-700">{profile.bio}</p>
                ) : (
                  <Textarea
                    value={profile.bio}
                    onChange={(e) =>
                      setProfile((prev) => ({ ...prev, bio: e.target.value }))
                    }
                    rows={3}
                    placeholder="Tell potential clients about yourself..."
                  />
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    ₦{profile.totalEarnings.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">Total Earned</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">
                    {profile.completedJobs}
                  </p>
                  <p className="text-xs text-gray-500">Jobs Done</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">
                    {profile.completionRate}%
                  </p>
                  <p className="text-xs text-gray-500">Success Rate</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Completion */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Profile Strength</h3>
              <span className="text-sm text-gray-600">
                {profileCompletion}% Complete
              </span>
            </div>
            <Progress value={profileCompletion} className="h-2 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Profile photo added</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Skills listed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Upload className="h-4 w-4 text-yellow-500" />
                <span>Add portfolio samples</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>First Name</Label>
                          <Input
                            value={profile.firstName}
                            onChange={(e) =>
                              setProfile((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Last Name</Label>
                          <Input
                            value={profile.lastName}
                            onChange={(e) =>
                              setProfile((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                          value={profile.email}
                          onChange={(e) =>
                            setProfile((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input
                          value={profile.phone}
                          onChange={(e) =>
                            setProfile((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{profile.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{profile.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>
                          {profile.city}, {profile.state}
                        </span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <School className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="font-medium">{profile.university}</p>
                      <p className="text-sm text-gray-500">{profile.course}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Level</p>
                      <p className="font-medium">{profile.level}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Graduation</p>
                      <p className="font-medium">{profile.graduationYear}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Student ID</p>
                      <p className="font-medium">{profile.studentId}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="space-y-2">
                        <Label>Professional Title</Label>
                        <Input
                          value={profile.title}
                          onChange={(e) =>
                            setProfile((prev) => ({
                              ...prev,
                              title: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Hourly Rate (₦)</Label>
                        <Input
                          type="number"
                          value={profile.hourlyRate}
                          onChange={(e) =>
                            setProfile((prev) => ({
                              ...prev,
                              hourlyRate: parseInt(e.target.value),
                            }))
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Availability</Label>
                        <Select
                          value={profile.availability}
                          onValueChange={(value) =>
                            setProfile((prev) => ({
                              ...prev,
                              availability: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Weekends">
                              Weekends only
                            </SelectItem>
                            <SelectItem value="Evenings">
                              Evenings only
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Hourly Rate</span>
                        <span className="font-semibold">
                          ₦{profile.hourlyRate.toLocaleString()}/hour
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Availability</span>
                        <span className="font-semibold">
                          {profile.availability}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Response Time</span>
                        <span className="font-semibold">
                          {profile.responseTime}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-2">Languages</p>
                        <div className="flex flex-wrap gap-2">
                          {profile.languages.map((language) => (
                            <Badge key={language} variant="secondary">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Certifications
                    {isEditing && (
                      <Button size="sm" variant="outline">
                        <Plus className="h-4 w-4" />
                      </Button>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{cert.name}</p>
                        <p className="text-xs text-gray-500">
                          {cert.issuer} •{" "}
                          {new Date(cert.date).toLocaleDateString()}
                        </p>
                      </div>
                      {isEditing && (
                        <Button size="icon" variant="ghost" className="h-6 w-6">
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription>
                    Showcase your best work to attract clients
                  </CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {profile.portfolio.map((item) => (
                    <Card
                      key={item.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        <Camera className="h-8 w-8 text-gray-400" />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {item.category}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span>{item.likes} likes</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
                <CardDescription>
                  What clients say about working with you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{review.client}</h4>
                        <p className="text-sm text-gray-500">
                          {review.project}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">"{review.comment}"</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-semibold">
                        ₦{review.amount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Skills & Expertise</CardTitle>
                  <CardDescription>
                    Highlight your abilities to attract relevant jobs
                  </CardDescription>
                </div>
                {isEditing && (
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add new skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    />
                    <Button onClick={addSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{skill.name}</h4>
                          {isEditing && (
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-6 w-6"
                              onClick={() => removeSkill(skill.name)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{skill.level}</span>
                          <span className="text-green-600">
                            {skill.endorsements} endorsements
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Choose what notifications you want to receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-gray-500">
                        Receive job alerts and updates via email
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-gray-500">
                        Get urgent updates via SMS
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Job Recommendations</p>
                      <p className="text-sm text-gray-500">
                        Receive personalized job suggestions
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Updates</p>
                      <p className="text-sm text-gray-500">
                        Platform news and feature updates
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Control who can see your information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-gray-500">
                        Make your profile visible to clients
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Earnings</p>
                      <p className="text-sm text-gray-500">
                        Display total earnings on profile
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Contact Info</p>
                      <p className="text-sm text-gray-500">
                        Allow clients to see contact details
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Search Engine Indexing</p>
                      <p className="text-sm text-gray-500">
                        Allow search engines to find your profile
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                </CardContent>
              </Card>

              {/* Account Security */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Security</CardTitle>
                  <CardDescription>
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Change Password</Label>
                    <div className="space-y-2">
                      <Input type="password" placeholder="Current password" />
                      <Input type="password" placeholder="New password" />
                      <Input
                        type="password"
                        placeholder="Confirm new password"
                      />
                    </div>
                    <Button size="sm">Update Password</Button>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-500">
                          Add an extra layer of security
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Account Actions</CardTitle>
                  <CardDescription>
                    Manage your account data and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Download Your Data</p>
                        <p className="text-sm text-gray-500">
                          Get a copy of all your account data
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Export Portfolio</p>
                        <p className="text-sm text-gray-500">
                          Download your portfolio items
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <p className="font-medium text-red-600">Danger Zone</p>
                      <p className="text-sm text-gray-500">
                        These actions cannot be undone
                      </p>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          className="w-full text-red-600 border-red-300 hover:bg-red-50"
                        >
                          Deactivate Account
                        </Button>
                        <Button variant="destructive" className="w-full">
                          Delete Account Permanently
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;