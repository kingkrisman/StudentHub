import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Smartphone,
  Bell,
  User,
  LogOut,
  Settings,
  Wallet,
  Briefcase,
  Plus,
  Search,
  Menu,
  X,
  MessageSquare,
  BarChart3,
  Star,
  Heart,
  BookOpen,
  Camera,
  Calendar,
  Users,
  Shield,
  HelpCircle,
  Home,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../App";

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
    isLoggedIn: boolean;
  } | null;
}

const Header = ({ user: propUser }: HeaderProps) => {
  const { user: contextUser, logout } = useAuth();
  const user = propUser || contextUser;
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isAuthPage = location.pathname.startsWith("/auth");
  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/wallet") ||
    location.pathname.startsWith("/jobs") ||
    location.pathname.startsWith("/messages") ||
    location.pathname.startsWith("/notifications") ||
    location.pathname.startsWith("/analytics");

  const navigationItems = [
    {
      name: "Browse Jobs",
      href: "/jobs",
      icon: Briefcase,
      description: "Find opportunities to earn money",
    },
    {
      name: "Categories",
      href: "#",
      icon: Menu,
      hasDropdown: true,
      description: "Explore different services",
    },
    {
      name: "Community",
      href: "/community",
      icon: Users,
      description: "Connect with other students",
    },
    {
      name: "Help",
      href: "/help",
      icon: HelpCircle,
      description: "Get support and answers",
    },
  ];

  const categoryItems = [
    {
      title: "Freelancing",
      href: "/categories/freelancing",
      description: "Design, writing, development services",
      icon: <Smartphone className="h-4 w-4" />,
    },
    {
      title: "Student Market",
      href: "/categories/student-market",
      description: "Buy and sell student items",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Tutoring",
      href: "/categories/tutoring",
      description: "Academic support and teaching",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Content Creation",
      href: "/categories/content-creation",
      description: "Social media and digital content",
      icon: <Camera className="h-4 w-4" />,
    },
    {
      title: "Event Planning",
      href: "/categories/event-planning",
      description: "Organize and manage events",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      title: "Internships",
      href: "/categories/internships",
      description: "Professional work experience",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  const userMenuItems = user?.isLoggedIn
    ? [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: Home,
          description: "Overview of your activity",
        },
        {
          name: "My Jobs",
          href: "/jobs/my-jobs",
          icon: Briefcase,
          description: "Manage your projects",
        },
        {
          name: "Messages",
          href: "/messages",
          icon: MessageSquare,
          description: "Chat with clients",
          badge: 3,
        },
        {
          name: "Wallet",
          href: "/wallet",
          icon: Wallet,
          description: "Earnings and payments",
        },
        {
          name: "Analytics",
          href: "/analytics",
          icon: BarChart3,
          description: "Performance insights",
        },
        {
          name: "Profile",
          href: "/profile",
          icon: User,
          description: "Manage your profile",
        },
      ]
    : [];

  const quickActions = [
    {
      name: "Post a Job",
      href: "/jobs/post",
      icon: Plus,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Browse Jobs",
      href: "/jobs",
      icon: Search,
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
  };

  // Mock notification count
  const notificationCount = 5;

  if (isAuthPage) {
    return (
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student Hub
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Student Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <NavigationMenuTrigger className="flex items-center space-x-1">
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                            {categoryItems.map((category) => (
                              <NavigationMenuLink key={category.title} asChild>
                                <Link
                                  to={category.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center space-x-2">
                                    {category.icon}
                                    <div className="text-sm font-medium leading-none">
                                      {category.title}
                                    </div>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {category.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
                        >
                          <item.icon className="h-4 w-4 mr-2" />
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jobs, skills, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {user?.isLoggedIn ? (
              <>
                {/* Quick Actions (Desktop) */}
                <div className="hidden lg:flex items-center space-x-2">
                  {quickActions.map((action) => (
                    <Link key={action.name} to={action.href}>
                      <Button
                        size="sm"
                        className={`${action.color} text-white`}
                      >
                        <action.icon className="h-4 w-4 mr-1" />
                        {action.name}
                      </Button>
                    </Link>
                  ))}
                </div>

                {/* Notifications */}
                <Link to="/notifications">
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-5 w-5" />
                    {notificationCount > 0 && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                      >
                        {notificationCount}
                      </Badge>
                    )}
                  </Button>
                </Link>

                {/* Messages */}
                <Link to="/messages">
                  <Button variant="ghost" size="sm" className="relative">
                    <MessageSquare className="h-5 w-5" />
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      3
                    </Badge>
                  </Button>
                </Link>

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          Student at University
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {userMenuItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="flex items-center justify-between w-full"
                        >
                          <div className="flex items-center">
                            <item.icon className="h-4 w-4 mr-2" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </div>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-2">
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Shield className="h-4 w-4 mr-2" />
                      Safety Center
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/auth/signin">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/auth/signup">
                  <Button>Get Started</Button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Search (Mobile) */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              ))}

              {/* Categories (Mobile) */}
              <div className="px-3 py-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Categories
                </h3>
                <div className="space-y-1">
                  {categoryItems.map((category) => (
                    <Link
                      key={category.title}
                      to={category.href}
                      className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.icon}
                      <span className="ml-2">{category.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {user?.isLoggedIn && (
                <>
                  <div className="border-t pt-4">
                    <div className="px-3 py-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Quick Actions
                      </h3>
                      <div className="space-y-2">
                        {quickActions.map((action) => (
                          <Link
                            key={action.name}
                            to={action.href}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Button
                              className={`w-full justify-start ${action.color} text-white`}
                            >
                              <action.icon className="h-4 w-4 mr-2" />
                              {action.name}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="px-3 py-2">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Account
                      </h3>
                      <div className="space-y-1">
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="flex items-center">
                              <item.icon className="h-4 w-4 mr-3" />
                              {item.name}
                            </div>
                            {item.badge && (
                              <Badge variant="secondary">{item.badge}</Badge>
                            )}
                          </Link>
                        ))}
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Log out
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
