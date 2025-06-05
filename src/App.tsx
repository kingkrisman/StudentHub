import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />

          {/* Job/Gig routes */}
          <Route path="/jobs" element={<BrowseJobs />} />
          <Route path="/jobs/post" element={<PostJob />} />
          <Route path="/jobs/my-jobs" element={<MyJobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />

          {/* Service category routes */}
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

          {/* Support routes */}
          <Route path="/help" element={<Help />} />
          <Route path="/community" element={<Community />} />
          <Route path="/safety" element={<Safety />} />

          {/* Catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
