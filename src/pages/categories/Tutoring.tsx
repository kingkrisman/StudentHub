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
  GraduationCap,
  Calculator,
  Book,
  Globe,
  Code,
  Microscope,
  PenTool,
  Users,
  Clock,
  Star,
  MapPin,
  TrendingUp,
  Award,
  Target,
  ArrowRight,
  Search,
} from "lucide-react";

const Tutoring = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const subjects = [
    {
      id: "mathematics",
      name: "Mathematics",
      icon: <Calculator className="h-6 w-6" />,
      description: "Algebra, Calculus, Statistics, Geometry",
      tutors: 156,
      avgRate: 2500,
      levels: ["Primary", "Secondary", "University", "JAMB/WAEC"],
      popular: ["Calculus", "Statistics", "Algebra", "JAMB Math"],
    },
    {
      id: "sciences",
      name: "Sciences",
      icon: <Microscope className="h-6 w-6" />,
      description: "Physics, Chemistry, Biology, Earth Science",
      tutors: 134,
      avgRate: 2800,
      levels: ["Secondary", "University", "JAMB/WAEC"],
      popular: ["Physics", "Chemistry", "Biology", "JAMB Science"],
    },
    {
      id: "english",
      name: "English & Literature",
      icon: <Book className="h-6 w-6" />,
      description: "English Language, Literature, Writing, Grammar",
      tutors: 189,
      avgRate: 2200,
      levels: ["Primary", "Secondary", "University", "IELTS/TOEFL"],
      popular: ["Essay Writing", "Grammar", "Literature", "IELTS"],
    },
    {
      id: "languages",
      name: "Languages",
      icon: <Globe className="h-6 w-6" />,
      description: "French, German, Spanish, Arabic, Chinese",
      tutors: 67,
      avgRate: 3000,
      levels: ["Beginner", "Intermediate", "Advanced", "Conversational"],
      popular: ["French", "Spanish", "Arabic", "Conversational"],
    },
    {
      id: "programming",
      name: "Programming & Tech",
      icon: <Code className="h-6 w-6" />,
      description: "Python, JavaScript, Java, Web Development",
      tutors: 89,
      avgRate: 3500,
      levels: ["Beginner", "Intermediate", "Advanced", "Professional"],
      popular: ["Python", "JavaScript", "Web Dev", "Data Science"],
    },
    {
      id: "business",
      name: "Business & Finance",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Accounting, Economics, Business Studies, Finance",
      tutors: 76,
      avgRate: 2800,
      levels: ["Secondary", "University", "Professional"],
      popular: ["Accounting", "Economics", "Business", "Finance"],
    },
  ];

  const featuredTutors = [
    {
      id: 1,
      name: "Adebayo Johnson",
      subject: "Mathematics",
      specialization: "Calculus & Statistics",
      rate: 3000,
      rating: 4.9,
      reviews: 47,
      students: 89,
      university: "University of Lagos",
      level: "400 Level - Mathematics",
      experience: "3 years",
      verified: true,
      languages: ["English", "Yoruba"],
      availability: "Weekdays 4-8pm, Weekends",
      bio: "Passionate mathematics tutor with expertise in calculus and statistics. Helped 89 students improve their grades significantly.",
      achievements: ["Top 5% Tutor", "95% Success Rate", "JAMB Expert"],
    },
    {
      id: 2,
      name: "Fatima Hassan",
      subject: "Sciences",
      specialization: "Physics & Chemistry",
      rate: 2800,
      rating: 4.8,
      reviews: 38,
      students: 65,
      university: "University of Ibadan",
      level: "Masters - Physics",
      experience: "2 years",
      verified: true,
      languages: ["English", "Hausa"],
      availability: "Flexible schedule",
      bio: "Physics and chemistry tutor with strong background in helping students understand complex concepts through practical examples.",
      achievements: ["Science Expert", "WAEC Specialist", "Lab Expert"],
    },
    {
      id: 3,
      name: "David Okafor",
      subject: "Programming & Tech",
      specialization: "Python & Web Development",
      rate: 4000,
      rating: 4.7,
      reviews: 29,
      students: 42,
      university: "Covenant University",
      level: "300 Level - Computer Science",
      experience: "2 years",
      verified: true,
      languages: ["English", "Igbo"],
      availability: "Evenings & Weekends",
      bio: "Programming tutor specializing in Python and web development. Focus on practical, project-based learning.",
      achievements: ["Tech Mentor", "Project Expert", "Industry Experience"],
    },
  ];

  const examPrep = [
    {
      exam: "JAMB UTME",
      subjects: ["Mathematics", "English", "Physics", "Chemistry", "Biology"],
      tutors: 245,
      avgRate: 2500,
      successRate: "94%",
    },
    {
      exam: "WAEC/NECO",
      subjects: ["Core Subjects", "Electives", "Practical Classes"],
      tutors: 189,
      avgRate: 2200,
      successRate: "96%",
    },
    {
      exam: "POST-UTME",
      subjects: ["University-specific preparation", "Interview prep"],
      tutors: 156,
      avgRate: 3000,
      successRate: "92%",
    },
    {
      exam: "Professional Exams",
      subjects: ["ICAN", "ACCA", "CFA", "Professional Certifications"],
      tutors: 67,
      avgRate: 4500,
      successRate: "88%",
    },
  ];

  const successStories = [
    {
      student: "Kemi Adebisi",
      improvement: "From 45% to 89% in Mathematics",
      exam: "JAMB 2023",
      score: "346/400",
      tutor: "Adebayo Johnson",
      duration: "3 months",
    },
    {
      student: "Ahmed Musa",
      improvement: "From F9 to A1 in Physics",
      exam: "WAEC 2023",
      score: "A1 in Physics",
      tutor: "Fatima Hassan",
      duration: "6 months",
    },
    {
      student: "Grace Okoro",
      improvement: "Zero to Full-Stack Developer",
      exam: "Portfolio Project",
      score: "Job Offer",
      tutor: "David Okafor",
      duration: "8 months",
    },
  ];

  const tutoringTips = [
    {
      title: "Set Clear Learning Goals",
      description:
        "Work with your tutor to establish specific, measurable objectives for each session.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Practice Regularly",
      description:
        "Consistent practice between sessions is key to mastering any subject.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "Ask Questions Freely",
      description:
        "Don't hesitate to ask questions - it's the fastest way to clear up confusion.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Track Your Progress",
      description:
        "Keep notes on your improvement and celebrate small wins along the way.",
      icon: <TrendingUp className="h-5 w-5" />,
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
                  Offer Tutoring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-fit mx-auto mb-6">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with verified student tutors who understand your academic
            challenges. Get personalized help in any subject and excel in your
            studies with affordable, peer-to-peer tutoring.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search subjects or tutors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {subjects.map((subject) => (
                  <SelectItem key={subject.id} value={subject.id}>
                    {subject.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link to="/jobs">
              <Button className="w-full">Find Tutors</Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">711</h3>
              <p className="text-gray-600">Verified Tutors</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
              <p className="text-gray-600">Avg. Rating</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">94%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₦2,800</h3>
              <p className="text-gray-600">Avg. Rate/Hour</p>
            </CardContent>
          </Card>
        </div>

        {/* Subjects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <Card
                key={subject.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {subject.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {subject.tutors} tutors available
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{subject.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">From</span>
                    <span className="font-semibold text-green-600">
                      ₦{subject.avgRate.toLocaleString()}/hour
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Popular Topics:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {subject.popular.map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="text-xs"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Tutors */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Top-Rated Tutors
            </h2>
            <Link to="/jobs">
              <Button variant="outline">
                View All Tutors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredTutors.map((tutor) => (
              <Card
                key={tutor.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full text-white font-bold text-lg">
                      {tutor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{tutor.name}</h3>
                      <p className="text-sm text-gray-600">
                        {tutor.specialization}
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm text-gray-600">
                            {tutor.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          ({tutor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    {tutor.verified && (
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{tutor.bio}</p>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">University:</span>
                      <span className="font-medium">{tutor.university}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{tutor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Students Taught:</span>
                      <span className="font-medium">{tutor.students}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {tutor.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="secondary"
                        className="text-xs"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      ₦{tutor.rate.toLocaleString()}/hr
                    </span>
                    <Button>Contact Tutor</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Exam Preparation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Exam Preparation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examPrep.map((exam, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exam.exam}
                    </h3>
                    <Badge className="bg-green-100 text-green-800">
                      {exam.successRate} Success Rate
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Available Tutors:</span>
                      <span className="font-medium">{exam.tutors}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Average Rate:</span>
                      <span className="font-medium">
                        ₦{exam.avgRate.toLocaleString()}/hour
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Subjects Available:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exam.subjects.map((subject) => (
                        <Badge
                          key={subject}
                          variant="secondary"
                          className="text-xs"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Success Stories */}
          <Card>
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
              <CardDescription>
                Real results from students who found their perfect tutors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {successStories.map((story, index) => (
                <div key={index} className="p-4 border rounded-lg bg-green-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">
                      {story.student}
                    </h4>
                    <Badge className="bg-green-500 text-white">
                      {story.score}
                    </Badge>
                  </div>
                  <p className="text-sm text-green-700 font-medium mb-2">
                    {story.improvement}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span>Tutor: {story.tutor}</span>
                    <span>{story.duration}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tips for Success */}
          <Card>
            <CardHeader>
              <CardTitle>Tips for Effective Tutoring</CardTitle>
              <CardDescription>
                Make the most of your tutoring sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tutoringTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">
                        {tip.title}
                      </h4>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have improved their grades with
              personalized tutoring. Find your perfect tutor today and start
              your journey to academic success!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Find a Tutor
                </Button>
              </Link>
              <Link to="/jobs/post">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Become a Tutor
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tutoring;
