import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
} from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
    isLoggedIn: boolean;
  } | null;
}

const Header = ({ user }: HeaderProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAuthPage = location.pathname.startsWith("/auth");
  const isDashboard =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/profile") ||
    location.pathname.startsWith("/wallet") ||
    location.pathname.startsWith("/jobs");

  const navigationItems = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Freelancing", href: "/categories/freelancing" },
    { name: "Tutoring", href: "/categories/tutoring" },
    { name: "Student Market", href: "/categories/student-market" },
    { name: "Community", href: "/community" },
    { name: "Help", href: "/help" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to={user?.isLoggedIn ? "/dashboard" : "/"}
            className="flex items-center space-x-2"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Student Hub</span>
          </Link>

          {/* Desktop Navigation */}
          {!isAuthPage && (
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            {!isAuthPage && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}

            {user?.isLoggedIn ? (
              // Logged in user actions
              <div className="flex items-center space-x-4">
                {isDashboard && (
                  <>
                    <Link to="/jobs/post">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Post Job
                      </Button>
                    </Link>

                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                        3
                      </span>
                    </Button>
                  </>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          Verified Student
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard" className="flex items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/wallet" className="flex items-center">
                        <Wallet className="mr-2 h-4 w-4" />
                        <span>Wallet</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              // Not logged in
              <div className="flex items-center space-x-4">
                {isAuthPage ? (
                  // Auth page navigation
                  <div className="flex items-center space-x-4">
                    {location.pathname === "/auth/signin" ? (
                      <>
                        <span className="text-sm text-gray-600">
                          New to Student Hub?
                        </span>
                        <Link to="/auth/signup">
                          <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                            Sign Up
                          </Button>
                        </Link>
                      </>
                    ) : location.pathname === "/auth/signup" ? (
                      <>
                        <span className="text-sm text-gray-600">
                          Already have an account?
                        </span>
                        <Link to="/auth/signin">
                          <Button variant="outline">Sign In</Button>
                        </Link>
                      </>
                    ) : (
                      <Link to="/auth/signin">
                        <Button variant="outline">Back to Sign In</Button>
                      </Link>
                    )}
                  </div>
                ) : (
                  // Public pages
                  <>
                    <Link to="/auth/signin">
                      <Button variant="ghost">Sign In</Button>
                    </Link>
                    <Link to="/auth/signup">
                      <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && !isAuthPage && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
