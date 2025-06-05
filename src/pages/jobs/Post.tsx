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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  ArrowLeft,
  Plus,
  X,
  Upload,
  Calendar,
  DollarSign,
  MapPin,
  Users,
  Clock,
} from "lucide-react";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: "",
    requirements: "",
    budget: "",
    budgetType: "",
    duration: "",
    location: "",
    isRemote: false,
    isUrgent: false,
    deadline: "",
    applicantLimit: "",
    skills: [] as string[],
    attachments: [] as File[],
  });

  const [currentSkill, setCurrentSkill] = useState("");

  const categories = {
    Freelancing: [
      "Design",
      "Writing",
      "Programming",
      "Translation",
      "Digital Marketing",
      "Video Editing",
    ],
    Tutoring: [
      "Mathematics",
      "English",
      "Science",
      "Languages",
      "Test Preparation",
      "Programming",
    ],
    "Content Creation": [
      "Social Media",
      "Video Production",
      "Blog Writing",
      "Photography",
      "Graphic Design",
    ],
    "Event Planning": [
      "Academic Events",
      "Social Events",
      "Corporate Events",
      "Wedding Planning",
      "Party Planning",
    ],
    "Student Market": [
      "Academic Materials",
      "Electronics",
      "Fashion",
      "Furniture",
      "Books",
      "Services",
    ],
    Internships: [
      "Technology",
      "Marketing",
      "Finance",
      "Design",
      "Operations",
      "Research",
    ],
  };

  const budgetTypes = [
    "Fixed Price",
    "Per Hour",
    "Per Session",
    "Per Article",
    "Per Week",
    "Per Month",
  ];

  const durations = [
    "Less than 1 week",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "More than 3 months",
    "Ongoing",
  ];

  const handleInputChange = (
    field: string,
    value: string | boolean | File[],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (currentSkill.trim() && !formData.skills.includes(currentSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job posting data:", formData);
    // Handle job posting logic here
  };

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

            <Link to="/jobs">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Jobs
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Post a New Opportunity
          </h1>
          <p className="text-gray-600">
            Create a job posting to find talented students for your project
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Tell us about your project or opportunity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title*</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g., Design a logo for my startup"
                  required
                />
                <p className="text-xs text-gray-500">
                  Write a clear, descriptive title that explains what you need
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category*</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      handleInputChange("category", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(categories).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.category && (
                  <div className="space-y-2">
                    <Label htmlFor="subcategory">Subcategory</Label>
                    <Select
                      value={formData.subcategory}
                      onValueChange={(value) =>
                        handleInputChange("subcategory", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subcategory" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories[
                          formData.category as keyof typeof categories
                        ]?.map((subcategory) => (
                          <SelectItem key={subcategory} value={subcategory}>
                            {subcategory}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description*</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  placeholder="Describe your project in detail. What exactly do you need? What are your expectations?"
                  rows={6}
                  required
                />
                <p className="text-xs text-gray-500">
                  Minimum 50 words. Be specific about deliverables and
                  expectations.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">
                  Requirements & Qualifications
                </Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) =>
                    handleInputChange("requirements", e.target.value)
                  }
                  placeholder="What skills, experience, or qualifications do you require? Any specific tools or software?"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Budget & Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Budget & Timeline
              </CardTitle>
              <CardDescription>
                Set your budget and project timeline
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget (₦)*</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
                    }
                    placeholder="5000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetType">Payment Type*</Label>
                  <Select
                    value={formData.budgetType}
                    onValueChange={(value) =>
                      handleInputChange("budgetType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment type" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Project Duration*</Label>
                  <Select
                    value={formData.duration}
                    onValueChange={(value) =>
                      handleInputChange("duration", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((duration) => (
                        <SelectItem key={duration} value={duration}>
                          {duration}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) =>
                        handleInputChange("deadline", e.target.value)
                      }
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="urgent"
                  checked={formData.isUrgent}
                  onCheckedChange={(checked) =>
                    handleInputChange("isUrgent", checked)
                  }
                />
                <Label htmlFor="urgent" className="text-sm">
                  This is an urgent project (will be highlighted to attract
                  faster responses)
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Location & Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location & Preferences
              </CardTitle>
              <CardDescription>
                Specify location requirements and application preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remote"
                    checked={formData.isRemote}
                    onCheckedChange={(checked) =>
                      handleInputChange("isRemote", checked)
                    }
                  />
                  <Label htmlFor="remote">This job can be done remotely</Label>
                </div>

                {!formData.isRemote && (
                  <div className="space-y-2">
                    <Label htmlFor="location">Location*</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                      placeholder="e.g., Lagos, Nigeria or University of Lagos"
                      required={!formData.isRemote}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicantLimit">
                  Maximum Number of Applicants
                </Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="applicantLimit"
                    type="number"
                    value={formData.applicantLimit}
                    onChange={(e) =>
                      handleInputChange("applicantLimit", e.target.value)
                    }
                    placeholder="20"
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Leave empty for unlimited applications
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Attachments */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Attachments</CardTitle>
              <CardDescription>
                Specify required skills and attach any relevant files
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Required Skills</Label>
                <div className="flex space-x-2">
                  <Input
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    placeholder="e.g., Graphic Design"
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addSkill())
                    }
                  />
                  <Button type="button" onClick={addSkill} variant="outline">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {formData.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <Label>Attachments (Optional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload project briefs, examples, or reference materials
                  </p>
                  <Button type="button" variant="outline" size="sm">
                    Choose Files
                  </Button>
                  <p className="text-xs text-gray-500 mt-2">
                    PDF, DOC, JPG, PNG. Max 10MB per file
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Before you post:
                  </h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Review all details for accuracy</li>
                    <li>• Ensure your budget is realistic for the market</li>
                    <li>• Be prepared to respond to applicant questions</li>
                    <li>• Job posts are live for 30 days by default</li>
                  </ul>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <Link to="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/posting-guidelines"
                      className="text-blue-600 hover:underline"
                    >
                      Job Posting Guidelines
                    </Link>
                  </Label>
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-lg py-3"
                  >
                    Post Opportunity
                  </Button>
                  <Button type="button" variant="outline" className="px-8">
                    Save as Draft
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
