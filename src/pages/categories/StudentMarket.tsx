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
  ShoppingBag,
  BookOpen,
  Laptop,
  Shirt,
  Home,
  Car,
  Heart,
  Search,
  MapPin,
  Star,
  Clock,
  Shield,
  TrendingUp,
  Users,
  Package,
  ArrowRight,
} from "lucide-react";

const StudentMarket = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: "academic",
      name: "Academic Materials",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Textbooks, notes, calculators, study materials",
      itemCount: 342,
      avgPrice: 8500,
      popular: [
        "Engineering Textbooks",
        "Medical Books",
        "Law Materials",
        "Study Guides",
      ],
    },
    {
      id: "electronics",
      name: "Electronics & Gadgets",
      icon: <Laptop className="h-6 w-6" />,
      description: "Laptops, phones, tablets, accessories",
      itemCount: 189,
      avgPrice: 45000,
      popular: ["Laptops", "Smartphones", "Headphones", "Chargers"],
    },
    {
      id: "fashion",
      name: "Fashion & Accessories",
      icon: <Shirt className="h-6 w-6" />,
      description: "Clothes, shoes, bags, jewelry, watches",
      itemCount: 267,
      avgPrice: 12000,
      popular: ["Sneakers", "Bags", "Clothes", "Accessories"],
    },
    {
      id: "furniture",
      name: "Furniture & Appliances",
      icon: <Home className="h-6 w-6" />,
      description: "Room furniture, appliances, decorations",
      itemCount: 98,
      avgPrice: 25000,
      popular: ["Study Desk", "Mini Fridge", "Mattress", "Chair"],
    },
    {
      id: "transport",
      name: "Transportation",
      icon: <Car className="h-6 w-6" />,
      description: "Bicycles, scooters, car accessories",
      itemCount: 45,
      avgPrice: 35000,
      popular: ["Bicycles", "Helmets", "Car Parts", "Motorcycle"],
    },
    {
      id: "services",
      name: "Student Services",
      icon: <Users className="h-6 w-6" />,
      description: "Tutoring, assignments, typing, delivery",
      itemCount: 156,
      avgPrice: 5000,
      popular: ["Assignment Help", "Typing Services", "Delivery", "Cleaning"],
    },
  ];

  const featuredItems = [
    {
      id: 1,
      title: "MacBook Pro 13-inch (2020) - Excellent Condition",
      category: "Electronics & Gadgets",
      price: 350000,
      originalPrice: 450000,
      condition: "Used - Excellent",
      location: "University of Lagos",
      seller: {
        name: "Adebayo K.",
        rating: 4.9,
        sales: 23,
      },
      image: "",
      featured: true,
      verified: true,
      timePosted: "2 hours ago",
      description:
        "MacBook Pro in excellent condition. Used for 1 year, no scratches, battery health 95%",
    },
    {
      id: 2,
      title: "Engineering Mathematics Textbook Collection",
      category: "Academic Materials",
      price: 25000,
      originalPrice: 40000,
      condition: "Used - Good",
      location: "University of Ibadan",
      seller: {
        name: "Fatima H.",
        rating: 4.8,
        sales: 15,
      },
      image: "",
      featured: false,
      verified: true,
      timePosted: "5 hours ago",
      description:
        "Complete set of engineering mathematics books for 200-400 level students",
    },
    {
      id: 3,
      title: "Nike Air Force 1 - Size 42 (Brand New)",
      category: "Fashion & Accessories",
      price: 35000,
      originalPrice: 45000,
      condition: "New",
      location: "Covenant University",
      seller: {
        name: "David O.",
        rating: 4.7,
        sales: 8,
      },
      image: "",
      featured: true,
      verified: false,
      timePosted: "1 day ago",
      description:
        "Brand new Nike Air Force 1 in white, never worn, original box and receipt",
    },
    {
      id: 4,
      title: "Study Desk with Drawers - Perfect for Students",
      category: "Furniture & Appliances",
      price: 15000,
      originalPrice: 25000,
      condition: "Used - Good",
      location: "Lagos State University",
      seller: {
        name: "Kemi A.",
        rating: 4.6,
        sales: 12,
      },
      image: "",
      featured: false,
      verified: true,
      timePosted: "3 days ago",
      description:
        "Spacious study desk with multiple drawers, perfect for students",
    },
  ];

  const topSellers = [
    {
      name: "Adebayo K.",
      university: "University of Lagos",
      rating: 4.9,
      sales: 23,
      joinDate: "Jan 2023",
      specialties: ["Electronics", "Academic Materials"],
    },
    {
      name: "Fatima H.",
      university: "University of Ibadan",
      rating: 4.8,
      sales: 19,
      joinDate: "Mar 2023",
      specialties: ["Academic Materials", "Fashion"],
    },
    {
      name: "David O.",
      university: "Covenant University",
      rating: 4.7,
      sales: 15,
      joinDate: "Feb 2023",
      specialties: ["Fashion", "Electronics"],
    },
  ];

  const marketStats = [
    {
      label: "Active Listings",
      value: "1,097",
      icon: <Package className="h-6 w-6" />,
    },
    {
      label: "Students Trading",
      value: "2,341",
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: "Avg. Savings",
      value: "35%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      label: "Universities",
      value: "127",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  const safetyTips = [
    {
      title: "Meet in Safe Locations",
      description:
        "Always meet in public places on campus or well-lit areas with good foot traffic.",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Verify Student Identity",
      description:
        "Check the seller's student ID and university email for verification.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Inspect Before Buying",
      description:
        "Always examine items carefully before making payment, especially electronics.",
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Use Secure Payment",
      description:
        "Prefer digital payments with transaction records over cash when possible.",
      icon: <Shield className="h-5 w-5" />,
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
                  Sell Something
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-full w-fit mx-auto mb-6">
            <ShoppingBag className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Marketplace
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Buy and sell with fellow students. From textbooks and electronics to
            fashion and furniture, find great deals and earn money from items
            you no longer need.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for items..."
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
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link to="/jobs">
              <Button className="w-full">Search</Button>
            </Link>
          </div>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {marketStats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {category.itemCount} items
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Avg. Price</span>
                    <span className="font-semibold text-green-600">
                      ₦{category.avgPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">
                      Popular Items:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {category.popular.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="text-xs"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Items</h2>
            <Link to="/jobs">
              <Button variant="outline">
                View All Items
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative">
                  {item.featured && (
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      Featured
                    </Badge>
                  )}
                  {item.verified && (
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <div className="flex items-center justify-center h-full">
                    <Package className="h-12 w-12 text-gray-400" />
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.category}</p>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xl font-bold text-green-600">
                      ₦{item.price.toLocaleString()}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₦{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{item.condition}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">
                        {item.seller.name}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-xs text-gray-500">
                          {item.seller.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm">Contact</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Top Sellers */}
          <Card>
            <CardHeader>
              <CardTitle>Top Sellers This Month</CardTitle>
              <CardDescription>
                Most trusted student sellers in the community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topSellers.map((seller, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-full text-white font-bold">
                      {seller.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-medium">{seller.name}</h4>
                      <p className="text-sm text-gray-500">
                        {seller.university}
                      </p>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{seller.rating}</span>
                        <span>•</span>
                        <span>{seller.sales} sales</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      Joined {seller.joinDate}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {seller.specialties.map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="secondary"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Safety Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Safety Tips for Student Trading</CardTitle>
              <CardDescription>
                Stay safe while buying and selling with fellow students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600 flex-shrink-0">
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
        <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Trading?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who are buying and selling with
              confidence. List your items for free and start earning today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs/post">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Start Selling
                </Button>
              </Link>
              <Link to="/jobs">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  Browse Items
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentMarket;
