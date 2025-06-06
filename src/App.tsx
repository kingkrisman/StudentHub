import { useState, createContext, useContext } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Authentication pages
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Main app pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";

// Job/Gig pages
import BrowseJobs from "./pages/jobs/Browse";
import PostJob from "./pages/jobs/Post";
import MyJobs from "./pages/jobs/MyJobs";
import JobDetails from "./pages/jobs/JobDetails";

// Service category pages
import Freelancing from "./pages/categories/Freelancing";
import StudentMarket from "./pages/categories/StudentMarket";
import EventPlanning from "./pages/categories/EventPlanning";
import ContentCreation from "./pages/categories/ContentCreation";
import Internships from "./pages/categories/Internships";
import Tutoring from "./pages/categories/Tutoring";

// Support pages
import Help from "./pages/Help";
import Community from "./pages/Community";
import Safety from "./pages/Safety";
import Sitemap from "./pages/Sitemap";

// Auth Context
interface User {
  name: string;
  email: string;
  avatar?: string;
  isLoggedIn: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (userData: Omit<User, "isLoggedIn">) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user?.isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/signin" replace />
  );
};

const queryClient = new QueryClient();

const App = () => {
  // Mock user state - in a real app this would come from authentication service
  const [user, setUser] = useState<User | null>({
    name: "Adebayo Johnson",
    email: "adebayo.johnson@unilag.edu.ng",
    avatar: "",
    isLoggedIn: true, // Set to false to test authentication flow
  });

  const login = (userData: Omit<User, "isLoggedIn">) => {
    setUser({ ...userData, isLoggedIn: true });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthContext.Provider value={{ user, login, logout }}>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPassword />}
              />

              {/* Public browse routes */}
              <Route path="/jobs" element={<BrowseJobs />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/categories/freelancing" element={<Freelancing />} />
              <Route
                path="/categories/student-market"
                element={<StudentMarket />}
              />
              <Route
                path="/categories/event-planning"
                element={<EventPlanning />}
              />
              <Route
                path="/categories/content-creation"
                element={<ContentCreation />}
              />
              <Route path="/categories/internships" element={<Internships />} />
              <Route path="/categories/tutoring" element={<Tutoring />} />
              <Route path="/help" element={<Help />} />
              <Route path="/community" element={<Community />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/sitemap" element={<Sitemap />} />

              {/* Protected routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/wallet"
                element={
                  <ProtectedRoute>
                    <Wallet />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs/post"
                element={
                  <ProtectedRoute>
                    <PostJob />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs/my-jobs"
                element={
                  <ProtectedRoute>
                    <MyJobs />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all route - must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
