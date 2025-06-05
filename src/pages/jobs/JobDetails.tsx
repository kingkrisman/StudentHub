import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Users,
  Heart,
  Share2,
  Flag,
  Upload,
  Send,
  CheckCircle,
  Smartphone,
  Download,
} from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [proposalData, setProposalData] = useState({
    coverLetter: "",
    proposedRate: "",
    timeline: "",
    portfolio: [] as File[],
  });

  // Mock job data - in real app, fetch based on ID
  const job = {
    id: 1,
    title: "Design a modern logo for fintech startup",
    description: `We are looking for a talented graphic designer to create a professional and modern logo for our new fintech startup. The logo should convey trust, innovation, and financial security.

**What we need:**
- A main logo design
- Logo variations (horizontal, vertical, icon-only)
- Color and black/white versions
- Source files (AI, PSD, SVG, PNG)
- Brand guidelines document

**Our company:**
FintechPro is a new financial technology company focused on making personal finance management easier for young Nigerians. We target university students and young professionals who want to build wealth and achieve financial freedom.

**Style preferences:**
- Modern and clean design
- Professional yet approachable
- Colors: Blue, green, or combinations
- Should work well on digital platforms
- Avoid overly complex designs

**Requirements:**
- Minimum 2 years experience in logo design
- Strong portfolio of previous work
- Understanding of brand identity
- Ability to provide multiple concepts
- Quick turnaround time`,
    category: "Freelancing",
    subcategory: "Design",
    budget: 25000,
    budgetType: "Fixed Price",
    duration: "1 week",
    location: "Remote",
    isRemote: true,
    isUrgent: true,
    deadline: "2024-01-30",
    postedDate: "2024-01-20",
    client: {
      id: 1,
      name: "TechCorp Solutions",
      avatar: "",
      rating: 4.8,
      reviewsCount: 47,
      jobsPosted: 12,
      hireRate: 85,
      totalSpent: 450000,
      memberSince: "2023-03-15",
      verified: true,
      description:
        "Leading technology solutions company specializing in fintech and mobile applications.",
      location: "Lagos, Nigeria",
    },
    skills: [
      "Logo Design",
      "Graphic Design",
      "Adobe Illustrator",
      "Brand Identity",
      "Creative Design",
    ],
    applicants: 15,
    views: 234,
    saves: 28,
    attachments: [
      { name: "Brand_Brief.pdf", size: "2.3 MB" },
      { name: "Reference_Images.zip", size: "5.7 MB" },
    ],
    similarJobs: [
      { id: 2, title: "Brand identity for e-commerce startup", budget: 35000 },
      { id: 3, title: "Logo design for restaurant chain", budget: 20000 },
      { id: 4, title: "Corporate branding package", budget: 50000 },
    ],
  };

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Proposal submitted:", proposalData);
    setShowProposalForm(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProposalData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/jobs" className="flex items-center space-x-2">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Jobs
              </Button>
            </Link>

            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student Hub
              </span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h1>
                      {job.isUrgent && (
                        <Badge className="bg-red-100 text-red-800">
                          Urgent
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span>
                        {job.category} • {job.subcategory}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {job.isRemote ? "Remote" : job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-600 mr-1" />
                        <span className="text-2xl font-bold text-green-600">
                          ₦{job.budget.toLocaleString()}
                        </span>
                        <span className="text-gray-500 ml-2">
                          ({job.budgetType})
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{job.applicants} applicants</span>
                      </div>

                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          Due: {new Date(job.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  {job.description.split("\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-4 text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Required */}
            <Card>
              <CardHeader>
                <CardTitle>Skills Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attachments */}
            {job.attachments.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Project Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {job.attachments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <Download className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">
                              {file.name}
                            </p>
                            <p className="text-sm text-gray-500">{file.size}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Proposal Form */}
            {showProposalForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Proposal</CardTitle>
                  <CardDescription>
                    Tell the client why you're the perfect fit for this job
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProposalSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        value={proposalData.coverLetter}
                        onChange={(e) =>
                          handleInputChange("coverLetter", e.target.value)
                        }
                        placeholder="Explain why you're the right person for this job. Highlight relevant experience and how you'll approach this project."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="proposedRate">Your Rate (₦)</Label>
                        <Input
                          id="proposedRate"
                          type="number"
                          value={proposalData.proposedRate}
                          onChange={(e) =>
                            handleInputChange("proposedRate", e.target.value)
                          }
                          placeholder="25000"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Delivery Timeline</Label>
                        <Input
                          id="timeline"
                          value={proposalData.timeline}
                          onChange={(e) =>
                            handleInputChange("timeline", e.target.value)
                          }
                          placeholder="e.g., 5 days"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Portfolio Samples (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">
                          Upload your best work samples
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                        >
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button type="submit" className="flex-1">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Proposal
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowProposalForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Section */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {!showProposalForm ? (
                    <Button
                      onClick={() => setShowProposalForm(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg py-3"
                    >
                      Apply for This Job
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setShowProposalForm(false)}
                      variant="outline"
                      className="w-full"
                    >
                      Cancel Application
                    </Button>
                  )}

                  <Button variant="outline" className="w-full">
                    <Heart className="mr-2 h-4 w-4" />
                    Save Job
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Client Information */}
            <Card>
              <CardHeader>
                <CardTitle>About the Client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={job.client.avatar} />
                    <AvatarFallback>
                      {job.client.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {job.client.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm text-gray-600">
                        {job.client.rating} ({job.client.reviewsCount} reviews)
                      </span>
                    </div>
                  </div>
                  {job.client.verified && (
                    <Badge className="bg-green-100 text-green-800 text-xs ml-auto">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-gray-600">
                  {job.client.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Jobs Posted</p>
                    <p className="font-semibold">{job.client.jobsPosted}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Hire Rate</p>
                    <p className="font-semibold">{job.client.hireRate}%</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Spent</p>
                    <p className="font-semibold">
                      ₦{job.client.totalSpent.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Member Since</p>
                    <p className="font-semibold">
                      {new Date(job.client.memberSince).getFullYear()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.client.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Job Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Job Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Applicants</span>
                  <span className="font-semibold">{job.applicants}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Views</span>
                  <span className="font-semibold">{job.views}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Saves</span>
                  <span className="font-semibold">{job.saves}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{job.duration}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {job.similarJobs.map((similarJob) => (
                  <Link
                    key={similarJob.id}
                    to={`/jobs/${similarJob.id}`}
                    className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      {similarJob.title}
                    </h4>
                    <p className="text-green-600 font-semibold text-sm">
                      ₦{similarJob.budget.toLocaleString()}
                    </p>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
