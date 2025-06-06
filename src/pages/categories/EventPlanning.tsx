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
  Calendar,
  PartyPopper,
  GraduationCap,
  Heart,
  Building,
  Music,
  Camera,
  Users,
  MapPin,
  Clock,
  Star,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Award,
} from "lucide-react";

const EventPlanning = () => {
  const [selectedEventType, setSelectedEventType] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const eventTypes = [
    {
      id: "academic",
      name: "Academic Events",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Graduations, seminars, conferences, award ceremonies",
      planners: 89,
      avgBudget: 125000,
      examples: [
        "Graduation Ceremony",
        "Academic Conference",
        "Faculty Seminar",
        "Award Night",
      ],
      complexity: "Medium to High",
    },
    {
      id: "social",
      name: "Social Events",
      icon: <PartyPopper className="h-6 w-6" />,
      description: "Birthday parties, hangouts, celebrations, reunions",
      planners: 234,
      avgBudget: 45000,
      examples: [
        "Birthday Party",
        "Class Reunion",
        "Welcome Party",
        "Farewell Event",
      ],
      complexity: "Low to Medium",
    },
    {
      id: "corporate",
      name: "Corporate Events",
      icon: <Building className="h-6 w-6" />,
      description: "Company events, product launches, networking, workshops",
      planners: 67,
      avgBudget: 200000,
      examples: [
        "Product Launch",
        "Team Building",
        "Corporate Dinner",
        "Workshop",
      ],
      complexity: "High",
    },
    {
      id: "wedding",
      name: "Weddings",
      icon: <Heart className="h-6 w-6" />,
      description: "Traditional weddings, court weddings, engagement parties",
      planners: 123,
      avgBudget: 350000,
      examples: [
        "Traditional Wedding",
        "White Wedding",
        "Engagement Party",
        "Bridal Shower",
      ],
      complexity: "Very High",
    },
    {
      id: "entertainment",
      name: "Entertainment Events",
      icon: <Music className="h-6 w-6" />,
      description: "Concerts, shows, festivals, talent competitions",
      planners: 156,
      avgBudget: 175000,
      examples: ["Concert", "Talent Show", "Festival", "Comedy Show"],
      complexity: "High",
    },
    {
      id: "sports",
      name: "Sports Events",
      icon: <Award className="h-6 w-6" />,
      description:
        "Tournaments, competitions, sports festivals, award ceremonies",
      planners: 78,
      avgBudget: 85000,
      examples: [
        "Football Tournament",
        "Sports Festival",
        "Marathon",
        "Award Ceremony",
      ],
      complexity: "Medium",
    },
  ];

  const featuredEvents = [
    {
      id: 1,
      title: "University of Lagos 2024 Graduation Ceremony",
      type: "Academic Events",
      budget: 500000,
      duration: "6 weeks planning",
      location: "Lagos, Nigeria",
      attendees: "2,000+ guests",
      planner: {
        name: "EventPro Nigeria",
        rating: 4.9,
        events: 45,
      },
      description:
        "Complete planning and coordination for university graduation ceremony including venue setup, catering, and logistics",
      requirements: [
        "Event Coordination",
        "Venue Management",
        "Catering",
        "Audio/Visual",
      ],
      urgent: false,
      featured: true,
    },
    {
      id: 2,
      title: "Tech Startup Product Launch Event",
      type: "Corporate Events",
      budget: 300000,
      duration: "4 weeks planning",
      location: "Abuja, FCT",
      attendees: "500 guests",
      planner: {
        name: "Corporate Events Ltd",
        rating: 4.7,
        events: 32,
      },
      description:
        "Product launch event for innovative fintech app targeting young professionals",
      requirements: ["Event Design", "Marketing", "Tech Setup", "Networking"],
      urgent: true,
      featured: true,
    },
    {
      id: 3,
      title: "Traditional Yoruba Wedding Ceremony",
      type: "Weddings",
      budget: 750000,
      duration: "8 weeks planning",
      location: "Ibadan, Oyo",
      attendees: "300 guests",
      planner: {
        name: "Heritage Weddings",
        rating: 4.8,
        events: 67,
      },
      description:
        "Traditional Yoruba wedding with modern touches, including cultural activities and authentic cuisine",
      requirements: [
        "Cultural Knowledge",
        "Catering",
        "Traditional Decor",
        "Photography",
      ],
      urgent: false,
      featured: false,
    },
    {
      id: 4,
      title: "University Music Festival",
      type: "Entertainment Events",
      budget: 400000,
      duration: "10 weeks planning",
      location: "Port Harcourt, Rivers",
      attendees: "1,500 students",
      planner: {
        name: "Campus Events Hub",
        rating: 4.6,
        events: 28,
      },
      description:
        "Annual university music festival featuring local artists and student performers",
      requirements: [
        "Artist Coordination",
        "Sound Engineering",
        "Security",
        "Promotion",
      ],
      urgent: false,
      featured: true,
    },
  ];

  const topPlanners = [
    {
      name: "Kemi Adebayo",
      specialty: "Academic & Corporate Events",
      rating: 4.9,
      events: 67,
      experience: "4 years",
      university: "University of Lagos",
      avgBudget: "₦150k",
      successRate: "98%",
      clients: ["Universities", "Corporations", "Government"],
    },
    {
      name: "David Okafor",
      specialty: "Social & Entertainment Events",
      rating: 4.8,
      events: 89,
      experience: "3 years",
      university: "Covenant University",
      avgBudget: "₦85k",
      successRate: "96%",
      clients: ["Students", "Families", "Social Groups"],
    },
    {
      name: "Fatima Hassan",
      specialty: "Weddings & Cultural Events",
      rating: 4.7,
      events: 45,
      experience: "5 years",
      university: "University of Ibadan",
      avgBudget: "₦400k",
      successRate: "99%",
      clients: ["Couples", "Families", "Cultural Groups"],
    },
  ];

  const planningProcess = [
    {
      step: "1",
      title: "Event Concept & Planning",
      description: "Define objectives, theme, budget, and timeline",
      duration: "1-2 weeks",
      tasks: [
        "Concept Development",
        "Budget Planning",
        "Timeline Creation",
        "Vendor Research",
      ],
    },
    {
      step: "2",
      title: "Venue & Vendor Coordination",
      description: "Secure venue, book vendors, finalize contracts",
      duration: "2-3 weeks",
      tasks: [
        "Venue Booking",
        "Vendor Selection",
        "Contract Negotiation",
        "Payment Scheduling",
      ],
    },
    {
      step: "3",
      title: "Promotion & Guest Management",
      description: "Marketing, invitations, RSVP tracking",
      duration: "2-4 weeks",
      tasks: [
        "Marketing Strategy",
        "Invitation Design",
        "RSVP Management",
        "Guest Communication",
      ],
    },
    {
      step: "4",
      title: "Event Execution",
      description: "Day-of coordination and event management",
      duration: "Event day",
      tasks: [
        "Setup Coordination",
        "Vendor Management",
        "Guest Experience",
        "Problem Resolution",
      ],
    },
  ];

  const eventTips = [
    {
      title: "Start Planning Early",
      description:
        "Begin planning at least 2-3 months in advance for major events to secure the best venues and vendors.",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Set a Realistic Budget",
      description:
        "Allocate 10-15% of your budget for unexpected expenses and prioritize your must-haves.",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Have Backup Plans",
      description:
        "Always have contingency plans for weather, vendor issues, or other unexpected challenges.",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      title: "Focus on Guest Experience",
      description:
        "Consider every touchpoint from arrival to departure to create memorable experiences.",
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
                  Post Event Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full w-fit mx-auto mb-6">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Event Planning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From intimate gatherings to grand celebrations, find experienced
            student event planners who understand your vision and budget. Create
            unforgettable experiences with professional planning and flawless
            execution.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search event planners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedEventType}
              onValueChange={setSelectedEventType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {eventTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link to="/jobs">
              <Button className="w-full">Find Planners</Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">347</h3>
              <p className="text-gray-600">Events This Month</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">789</h3>
              <p className="text-gray-600">Event Planners</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
              <p className="text-gray-600">Avg. Rating</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">97%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Event Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Event Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((type) => (
              <Card
                key={type.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg text-white">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{type.name}</h3>
                      <p className="text-sm text-gray-500">
                        {type.planners} planners
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{type.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-gray-500">Avg. Budget:</span>
                      <p className="font-semibold text-green-600">
                        ₦{type.avgBudget.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Complexity:</span>
                      <p className="font-semibold">{type.complexity}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Common Events:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {type.examples.map((example) => (
                        <Badge
                          key={example}
                          variant="secondary"
                          className="text-xs"
                        >
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Event Projects
            </h2>
            <Link to="/jobs">
              <Button variant="outline">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        {event.urgent && (
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            Urgent
                          </Badge>
                        )}
                        {event.featured && (
                          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{event.type}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{event.attendees}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{event.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">
                        ₦{event.budget.toLocaleString()}
                      </p>
                      <div className="text-sm text-gray-500">
                        <Star className="h-3 w-3 inline mr-1 text-yellow-400 fill-current" />
                        {event.planner.rating} ({event.planner.events} events)
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.requirements.map((req) => (
                      <Badge key={req} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      by {event.planner.name}
                    </span>
                    <Link to={`/jobs/${event.id}`}>
                      <Button size="sm">Apply to Plan</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Top Planners */}
          <Card>
            <CardHeader>
              <CardTitle>Top Event Planners</CardTitle>
              <CardDescription>
                Most experienced and highly-rated student event planners
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topPlanners.map((planner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full text-white font-bold">
                      {planner.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-medium">{planner.name}</h4>
                      <p className="text-sm text-gray-600">
                        {planner.specialty}
                      </p>
                      <p className="text-sm text-gray-500">
                        {planner.university}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          <span>{planner.rating}</span>
                        </div>
                        <span>{planner.events} events</span>
                        <span>{planner.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">
                      {planner.avgBudget}
                    </p>
                    <p className="text-xs text-gray-500">avg. budget</p>
                    <Badge className="bg-green-100 text-green-800 text-xs mt-1">
                      {planner.successRate} success
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Planning Process */}
          <Card>
            <CardHeader>
              <CardTitle>Event Planning Process</CardTitle>
              <CardDescription>
                How professional event planning works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {planningProcess.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-full text-purple-600 font-bold text-sm w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {phase.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">
                          {phase.title}
                        </h4>
                        <span className="text-xs text-gray-500">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {phase.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {phase.tasks.map((task) => (
                          <Badge
                            key={task}
                            variant="secondary"
                            className="text-xs"
                          >
                            {task}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Planning Tips */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Event Planning Tips</CardTitle>
            <CardDescription>
              Essential advice for successful event planning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600 flex-shrink-0">
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

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Whether you're planning an intimate gathering or a grand
              celebration, our experienced student event planners will bring
              your vision to life within your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Find Event Planners
                </Button>
              </Link>
              <Link to="/jobs/post">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Post Your Event
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventPlanning;
