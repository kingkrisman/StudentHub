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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Smartphone,
  Users,
  MessageSquare,
  TrendingUp,
  Star,
  Heart,
  Share2,
  Calendar,
  MapPin,
  Search,
  Filter,
  Plus,
  Eye,
  ThumbsUp,
  Clock,
} from "lucide-react";

const Community = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const forumCategories = [
    {
      id: "general",
      name: "General Discussion",
      description: "Chat about anything student-related",
      posts: 1247,
      members: 3456,
      icon: <MessageSquare className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "jobs",
      name: "Job Opportunities",
      description: "Share and discuss job openings",
      posts: 892,
      members: 2134,
      icon: <TrendingUp className="h-5 w-5" />,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "freelancing",
      name: "Freelancing Tips",
      description: "Share freelancing experiences and advice",
      posts: 567,
      members: 1876,
      icon: <Star className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "academic",
      name: "Academic Support",
      description: "Help with studies and academic questions",
      posts: 734,
      members: 2987,
      icon: <Users className="h-5 w-5" />,
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "How I made ₦150,000 in my first month on Student Hub",
      category: "Success Stories",
      author: {
        name: "Kemi Adebayo",
        avatar: "",
        university: "University of Lagos",
        verified: true,
      },
      content:
        "Just wanted to share my experience for other students who might be hesitant to start. I joined Student Hub 2 months ago...",
      likes: 45,
      replies: 12,
      views: 234,
      timePosted: "2 hours ago",
      trending: true,
    },
    {
      id: 2,
      title: "Looking for graphic design collaboration partners",
      category: "Collaboration",
      author: {
        name: "David Okafor",
        avatar: "",
        university: "Covenant University",
        verified: true,
      },
      content:
        "I'm working on a big project and need fellow designers to collaborate with. The project involves creating brand identities for 5 startups...",
      likes: 23,
      replies: 8,
      views: 156,
      timePosted: "4 hours ago",
      trending: false,
    },
    {
      id: 3,
      title: "Tips for acing virtual job interviews",
      category: "Career Advice",
      author: {
        name: "Fatima Hassan",
        avatar: "",
        university: "University of Ibadan",
        verified: true,
      },
      content:
        "After 15+ virtual interviews, here are my top tips for students looking to land remote internships and jobs...",
      likes: 67,
      replies: 19,
      views: 423,
      timePosted: "1 day ago",
      trending: true,
    },
    {
      id: 4,
      title: "Mathematics tutoring group - join us!",
      category: "Study Groups",
      author: {
        name: "Ahmed Musa",
        avatar: "",
        university: "Ahmadu Bello University",
        verified: false,
      },
      content:
        "Starting a weekly mathematics study group for students preparing for JAMB and university exams. We meet every Saturday...",
      likes: 34,
      replies: 15,
      views: 189,
      timePosted: "2 days ago",
      trending: false,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Student Freelancers Networking Event",
      date: "March 15, 2024",
      time: "6:00 PM WAT",
      location: "Virtual Event",
      attendees: 234,
      organizer: "Student Hub Team",
      description:
        "Connect with fellow student freelancers and learn from successful entrepreneurs.",
    },
    {
      id: 2,
      title: "CV Writing Workshop",
      date: "March 20, 2024",
      time: "4:00 PM WAT",
      location: "Lagos Hub",
      attendees: 89,
      organizer: "Career Development Team",
      description: "Learn how to write compelling CVs that get you hired.",
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      date: "March 25, 2024",
      time: "10:00 AM WAT",
      location: "Abuja Convention Center",
      attendees: 156,
      organizer: "Student Innovation Hub",
      description: "Present your startup ideas to investors and win funding.",
    },
  ];

  const topContributors = [
    {
      name: "Kemi Adebayo",
      university: "University of Lagos",
      posts: 45,
      likes: 567,
      badge: "Top Contributor",
      avatar: "",
    },
    {
      name: "David Okafor",
      university: "Covenant University",
      posts: 38,
      likes: 423,
      badge: "Helpful Member",
      avatar: "",
    },
    {
      name: "Fatima Hassan",
      university: "University of Ibadan",
      posts: 52,
      likes: 678,
      badge: "Expert Advisor",
      avatar: "",
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
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with fellow students, share experiences, ask questions, and
            build meaningful relationships with peers from universities across
            Nigeria.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">12,547</h3>
              <p className="text-gray-600">Active Members</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3,440</h3>
              <p className="text-gray-600">Discussions</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">28,903</h3>
              <p className="text-gray-600">Likes Given</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">127</h3>
              <p className="text-gray-600">Universities</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="recent" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recent">Recent Posts</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>

              {/* Recent Posts */}
              <TabsContent value="recent" className="space-y-6">
                {recentPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">
                              {post.title}
                            </h3>
                            {post.trending && (
                              <Badge className="bg-red-100 text-red-800 text-xs">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                            <span className="font-medium">
                              {post.author.name}
                            </span>
                            {post.author.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                Verified
                              </Badge>
                            )}
                            <span>•</span>
                            <span>{post.author.university}</span>
                            <span>•</span>
                            <span>{post.timePosted}</span>
                          </div>

                          <Badge variant="secondary" className="mb-3 text-xs">
                            {post.category}
                          </Badge>

                          <p className="text-gray-700 mb-4">{post.content}</p>

                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Trending Posts */}
              <TabsContent value="trending" className="space-y-6">
                {recentPosts
                  .filter((post) => post.trending)
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="hover:shadow-lg transition-shadow border-l-4 border-red-500"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-gray-900">
                                {post.title}
                              </h3>
                              <Badge className="bg-red-100 text-red-800 text-xs">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                Trending
                              </Badge>
                            </div>

                            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                              <span className="font-medium">
                                {post.author.name}
                              </span>
                              <span>•</span>
                              <span>{post.author.university}</span>
                            </div>

                            <p className="text-gray-700 mb-4">{post.content}</p>

                            <div className="flex items-center space-x-6 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-4 w-4" />
                                <span>{post.replies}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>{post.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>

              {/* Categories */}
              <TabsContent value="categories" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {forumCategories.map((category) => (
                    <Card
                      key={category.id}
                      className="hover:shadow-lg transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`p-3 rounded-lg ${category.color}`}>
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">
                              {category.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-4">
                            <span className="text-gray-500">
                              {category.posts} posts
                            </span>
                            <span className="text-gray-500">
                              {category.members} members
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            Join Discussion
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>
                  Most active community members this month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={contributor.avatar} />
                      <AvatarFallback>
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-medium">{contributor.name}</h4>
                      <p className="text-sm text-gray-500">
                        {contributor.university}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{contributor.posts} posts</span>
                        <span>•</span>
                        <span>{contributor.likes} likes</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Community events and meetups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 border rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {event.title}
                    </h4>
                    <div className="space-y-1 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        <span>
                          {event.date} at {event.time}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-2" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      Join Event
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Be respectful and supportive of fellow students</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Share knowledge and help others learn</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>No spam or promotional content</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Report inappropriate content</p>
                  </div>
                </div>
                <Link to="/safety">
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Read Full Guidelines
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
