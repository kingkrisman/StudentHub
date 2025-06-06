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
  Video,
  Camera,
  PenTool,
  Megaphone,
  Edit,
  Mic,
  Play,
  TrendingUp,
  Eye,
  Heart,
  Share2,
  Users,
  DollarSign,
  Star,
  ArrowRight,
  Search,
  Calendar,
} from "lucide-react";

const ContentCreation = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const contentTypes = [
    {
      id: "video",
      name: "Video Content",
      icon: <Video className="h-6 w-6" />,
      description: "YouTube videos, TikToks, Instagram Reels, documentaries",
      creators: 189,
      avgRate: 8000,
      platforms: ["YouTube", "TikTok", "Instagram", "Facebook"],
      skills: ["Video Editing", "Storytelling", "Camera Work", "Animation"],
    },
    {
      id: "social_media",
      name: "Social Media Management",
      icon: <Megaphone className="h-6 w-6" />,
      description: "Account management, content planning, community building",
      creators: 234,
      avgRate: 12000,
      platforms: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
      skills: [
        "Content Strategy",
        "Community Management",
        "Analytics",
        "Copywriting",
      ],
    },
    {
      id: "writing",
      name: "Content Writing",
      icon: <PenTool className="h-6 w-6" />,
      description: "Blog posts, articles, captions, scripts, newsletters",
      creators: 156,
      avgRate: 6000,
      platforms: ["Blogs", "Websites", "Medium", "LinkedIn"],
      skills: ["SEO Writing", "Copywriting", "Research", "Editing"],
    },
    {
      id: "photography",
      name: "Photography",
      icon: <Camera className="h-6 w-6" />,
      description: "Product shots, lifestyle, events, portraits, fashion",
      creators: 123,
      avgRate: 15000,
      platforms: ["Instagram", "Portfolio", "Stock Photos", "Events"],
      skills: ["Photography", "Photo Editing", "Composition", "Lighting"],
    },
    {
      id: "audio",
      name: "Audio Content",
      icon: <Mic className="h-6 w-6" />,
      description: "Podcasts, voice-overs, music, audio editing",
      creators: 67,
      avgRate: 10000,
      platforms: ["Spotify", "Apple Podcasts", "YouTube", "Radio"],
      skills: [
        "Audio Editing",
        "Voice Acting",
        "Music Production",
        "Podcasting",
      ],
    },
    {
      id: "design",
      name: "Graphic Design",
      icon: <Edit className="h-6 w-6" />,
      description: "Social media graphics, infographics, thumbnails, logos",
      creators: 198,
      avgRate: 7500,
      platforms: ["All Platforms", "Print", "Web", "Social Media"],
      skills: ["Graphic Design", "Adobe Suite", "Canva", "Typography"],
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Viral TikTok Content Series for Fashion Brand",
      type: "Video Content",
      creator: "Kemi Adebayo",
      platform: "TikTok",
      budget: 25000,
      duration: "2 weeks",
      views: "2.3M",
      engagement: "15.2%",
      description:
        "Create 10 engaging TikTok videos showcasing fashion trends for young Nigerians",
      skills: [
        "TikTok Creation",
        "Fashion Content",
        "Trend Analysis",
        "Video Editing",
      ],
      urgent: true,
    },
    {
      id: 2,
      title: "Instagram Growth Strategy & Content Calendar",
      type: "Social Media Management",
      creator: "David Okafor",
      platform: "Instagram",
      budget: 35000,
      duration: "1 month",
      followers: "+5,000",
      engagement: "12.8%",
      description:
        "Develop and execute growth strategy with daily content for lifestyle brand",
      skills: [
        "Instagram Growth",
        "Content Strategy",
        "Analytics",
        "Influencer Outreach",
      ],
      urgent: false,
    },
    {
      id: 3,
      title: "Tech Blog Article Series",
      type: "Content Writing",
      creator: "Fatima Hassan",
      platform: "Website",
      budget: 18000,
      duration: "3 weeks",
      articles: "8 articles",
      words: "12,000 words",
      description:
        "Write comprehensive articles about AI and technology trends in Nigeria",
      skills: ["Tech Writing", "SEO", "Research", "AI Knowledge"],
      urgent: false,
    },
    {
      id: 4,
      title: "Product Photography for E-commerce Store",
      type: "Photography",
      creator: "Grace Okoro",
      platform: "E-commerce",
      budget: 30000,
      duration: "3 days",
      photos: "100+ photos",
      products: "50 items",
      description:
        "Professional product photography for beauty and skincare products",
      skills: [
        "Product Photography",
        "Photo Editing",
        "E-commerce",
        "Lighting",
      ],
      urgent: true,
    },
  ];

  const platformTrends = [
    {
      platform: "TikTok",
      trending: [
        "Dance Challenges",
        "Nigerian Comedy",
        "Study Tips",
        "Fashion Hauls",
      ],
      growth: "+45%",
      avgViews: "250K",
      bestTime: "7-9 PM",
    },
    {
      platform: "Instagram",
      trending: ["Reels", "Stories", "IGTV", "Live Sessions"],
      growth: "+32%",
      avgViews: "15K",
      bestTime: "8-10 AM, 7-9 PM",
    },
    {
      platform: "YouTube",
      trending: [
        "Educational Content",
        "Vlogs",
        "Tech Reviews",
        "Comedy Skits",
      ],
      growth: "+28%",
      avgViews: "50K",
      bestTime: "6-8 PM",
    },
    {
      platform: "Twitter",
      trending: ["Thread Content", "News Commentary", "Memes", "Live Tweeting"],
      growth: "+15%",
      avgViews: "5K",
      bestTime: "9-11 AM, 7-9 PM",
    },
  ];

  const creatorSpotlight = [
    {
      name: "Kemi Adebayo",
      specialty: "TikTok & Instagram Reels",
      followers: "125K",
      engagement: "18.5%",
      earnings: "₦450k this month",
      university: "University of Lagos",
      bio: "Content creator specializing in fashion and lifestyle content for Gen Z audience",
    },
    {
      name: "David Okafor",
      specialty: "YouTube Tech Content",
      followers: "78K",
      engagement: "12.3%",
      earnings: "₦320k this month",
      university: "Covenant University",
      bio: "Tech educator creating programming and gadget review content",
    },
    {
      name: "Fatima Hassan",
      specialty: "LinkedIn Thought Leadership",
      followers: "45K",
      engagement: "25.1%",
      earnings: "₦280k this month",
      university: "University of Ibadan",
      bio: "Professional content creator focused on career development and business topics",
    },
  ];

  const contentTips = [
    {
      title: "Know Your Audience",
      description:
        "Research your target demographic and create content that resonates with their interests and challenges.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Stay Consistent",
      description:
        "Post regularly and maintain a consistent brand voice across all your content.",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Follow Trends",
      description:
        "Keep up with platform trends and viral content, but add your unique perspective.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "Engage with Community",
      description:
        "Respond to comments, collaborate with other creators, and build genuine relationships.",
      icon: <Heart className="h-5 w-5" />,
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
                  Post Content Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-3 rounded-full w-fit mx-auto mb-6">
            <Video className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Content Creation Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Create viral content, build your personal brand, and earn money
            doing what you love. From TikTok videos to blog articles, find
            content creation opportunities that match your skills.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search content projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Content Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {contentTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link to="/jobs">
              <Button className="w-full">Find Projects</Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Play className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">967</h3>
              <p className="text-gray-600">Active Projects</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1,234</h3>
              <p className="text-gray-600">Content Creators</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">10M+</h3>
              <p className="text-gray-600">Total Views</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">₦12,500</h3>
              <p className="text-gray-600">Avg. Project Value</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Content Creation Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((type) => (
              <Card
                key={type.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-3 rounded-lg text-white">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{type.name}</h3>
                      <p className="text-sm text-gray-500">
                        {type.creators} creators
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{type.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Avg. Rate</span>
                    <span className="font-semibold text-green-600">
                      ₦{type.avgRate.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Top Skills:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {type.skills.map((skill) => (
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

        {/* Featured Projects */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Content Projects
            </h2>
            <Link to="/jobs">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {project.title}
                        </h3>
                        {project.urgent && (
                          <Badge className="bg-red-100 text-red-800 text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {project.type} • {project.platform}
                      </p>
                      <p className="text-sm text-gray-600">
                        by {project.creator}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-green-600">
                        ₦{project.budget.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
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
                      {project.views && (
                        <div className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          <span>{project.views} views</span>
                        </div>
                      )}
                      {project.followers && (
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          <span>{project.followers} followers</span>
                        </div>
                      )}
                      {project.articles && <span>{project.articles}</span>}
                      {project.photos && <span>{project.photos}</span>}
                    </div>
                    <Link to={`/jobs/${project.id}`}>
                      <Button size="sm">Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Platform Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Trends & Insights</CardTitle>
              <CardDescription>
                Current trends across popular social media platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {platformTrends.map((platform, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">
                      {platform.platform}
                    </h4>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {platform.growth}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Avg. Views:</span>
                      <span className="font-medium ml-2">
                        {platform.avgViews}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Best Time:</span>
                      <span className="font-medium ml-2">
                        {platform.bestTime}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Trending Content:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {platform.trending.map((trend) => (
                        <Badge
                          key={trend}
                          variant="secondary"
                          className="text-xs"
                        >
                          #{trend}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Creator Spotlight */}
          <Card>
            <CardHeader>
              <CardTitle>Top Student Creators</CardTitle>
              <CardDescription>
                Featured creators earning money through content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {creatorSpotlight.map((creator, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 border rounded-lg"
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full text-white font-bold">
                    {creator.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {creator.name}
                    </h4>
                    <p className="text-sm text-gray-600">{creator.specialty}</p>
                    <p className="text-sm text-gray-500">
                      {creator.university}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                      <span>{creator.followers} followers</span>
                      <span>{creator.engagement} engagement</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">
                      {creator.earnings}
                    </p>
                    <p className="text-xs text-gray-500">this month</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Content Creation Tips */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Content Creation Tips</CardTitle>
            <CardDescription>
              Essential strategies for successful content creation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contentTips.map((tip, index) => (
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
        <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Go Viral?</h2>
            <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
              Turn your creativity into income. Join thousands of student
              creators who are building their personal brands and earning money
              through engaging content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button
                  size="lg"
                  className="bg-white text-pink-600 hover:bg-gray-100"
                >
                  Find Content Projects
                </Button>
              </Link>
              <Link to="/jobs/post">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-pink-600"
                >
                  Post Your Project
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentCreation;
