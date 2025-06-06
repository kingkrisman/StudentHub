import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../App";
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
import { Progress } from "@/components/ui/progress";
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
  CheckCircle,
  AlertTriangle,
  Eye,
  Save,
} from "lucide-react";

const PostJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: "",
    requirements: "",
    budget: "",
    budgetType: "Fixed Price",
    duration: "",
    location: "",
    isRemote: false,
    isUrgent: false,
    deadline: "",
    applicantLimit: "",
    skills: [] as string[],
    attachments: [] as File[],
    contactEmail: user?.email || "",
    contactPhone: "",
    experienceLevel: "",
    projectType: "",
    expectedDeliverables: "",
    additionalNotes: "",
  });

  const [currentSkill, setCurrentSkill] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const categories = {
    Freelancing: {
      subcategories: [
        "Design",
        "Writing",
        "Programming",
        "Translation",
        "Digital Marketing",
        "Video Editing",
      ],
      budgetTypes: ["Fixed Price", "Per Hour", "Per Project"],
      experienceLevels: ["Entry Level", "Intermediate", "Expert"],
    },
    Tutoring: {
      subcategories: [
        "Mathematics",
        "English",
        "Science",
        "Languages",
        "Test Preparation",
        "Programming",
      ],
      budgetTypes: ["Per Hour", "Per Session", "Per Week", "Per Month"],
      experienceLevels: ["High School", "University Level", "Professional"],
    },
    "Content Creation": {
      subcategories: [
        "Social Media",
        "Video Production",
        "Blog Writing",
        "Photography",
        "Graphic Design",
      ],
      budgetTypes: [
        "Per Post",
        "Per Video",
        "Per Article",
        "Fixed Price",
        "Monthly",
      ],
      experienceLevels: ["Beginner", "Intermediate", "Advanced"],
    },
    "Event Planning": {
      subcategories: [
        "Academic Events",
        "Social Events",
        "Corporate Events",
        "Wedding Planning",
        "Party Planning",
      ],
      budgetTypes: ["Fixed Price", "Per Event", "Per Day"],
      experienceLevels: ["Local Events", "Large Events", "Corporate Level"],
    },
    "Student Market": {
      subcategories: [
        "Academic Materials",
        "Electronics",
        "Fashion",
        "Furniture",
        "Books",
        "Services",
      ],
      budgetTypes: ["Fixed Price", "Negotiable"],
      experienceLevels: [
        "New Condition",
        "Used - Excellent",
        "Used - Good",
        "Used - Fair",
      ],
    },
    Internships: {
      subcategories: [
        "Technology",
        "Marketing",
        "Finance",
        "Design",
        "Operations",
        "Research",
      ],
      budgetTypes: ["Monthly Stipend", "Hourly Rate", "Fixed Duration"],
      experienceLevels: ["Entry Level", "Some Experience", "Advanced"],
    },
  };

  const durations = [
    "Less than 1 week",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "More than 3 months",
    "Ongoing",
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.title.trim()) newErrors.title = "Job title is required";
      if (!formData.category) newErrors.category = "Category is required";
      if (!formData.description.trim())
        newErrors.description = "Description is required";
      if (formData.description.length < 100)
        newErrors.description = "Description must be at least 100 characters";
    }

    if (step === 2) {
      if (!formData.budget) newErrors.budget = "Budget is required";
      if (parseFloat(formData.budget) < 500)
        newErrors.budget = "Minimum budget is ₦500";
      if (!formData.duration) newErrors.duration = "Duration is required";
    }

    if (step === 3) {
      if (!formData.isRemote && !formData.location.trim()) {
        newErrors.location = "Location is required for non-remote jobs";
      }
      if (!formData.contactEmail.trim())
        newErrors.contactEmail = "Contact email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleInputChange = (
    field: string,
    value: string | boolean | File[],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
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

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...fileArray].slice(0, 5), // Max 5 files
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In real app, this would save to backend
      const jobData = {
        ...formData,
        id: Date.now(),
        postedBy: user?.name,
        postedDate: new Date().toISOString(),
        status: "active",
        views: 0,
        applicants: 0,
      };

      console.log("Job posted successfully:", jobData);

      // Show success and redirect
      navigate("/jobs/my-jobs", {
        state: { message: "Job posted successfully! It will be live shortly." },
      });
    } catch (error) {
      console.error("Error posting job:", error);
      setErrors({ submit: "Failed to post job. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepProgress = () => (currentStep / 4) * 100;

  const selectedCategory =
    categories[formData.category as keyof typeof categories];

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
              {!previewMode && (
                <Button
                  variant="outline"
                  onClick={() => setPreviewMode(true)}
                  disabled={!formData.title || !formData.description}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
              )}
              <Link to="/jobs">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {previewMode ? "Job Preview" : "Post a New Opportunity"}
          </h1>
          {!previewMode && (
            <>
              <p className="text-gray-600 mb-4">
                Step {currentStep} of 4: Fill out the form to create your job
                posting
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${getStepProgress()}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Basic Info</span>
                <span>Budget & Timeline</span>
                <span>Location & Contact</span>
                <span>Review & Post</span>
              </div>
            </>
          )}
        </div>

        {previewMode ? (
          /* Job Preview */
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{formData.title}</CardTitle>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="secondary">{formData.category}</Badge>
                    {formData.subcategory && (
                      <Badge variant="outline">{formData.subcategory}</Badge>
                    )}
                    {formData.isUrgent && (
                      <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    ₦{parseInt(formData.budget || "0").toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formData.budgetType}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <div className="prose max-w-none">
                  {formData.description.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {formData.requirements && (
                <div>
                  <h4 className="font-semibold mb-2">Requirements</h4>
                  <p className="text-gray-700">{formData.requirements}</p>
                </div>
              )}

              {formData.skills.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="font-medium">{formData.duration}</p>
                </div>
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="font-medium">
                    {formData.isRemote ? "Remote" : formData.location}
                  </p>
                </div>
                {formData.deadline && (
                  <div>
                    <span className="text-gray-500">Deadline:</span>
                    <p className="font-medium">
                      {new Date(formData.deadline).toLocaleDateString()}
                    </p>
                  </div>
                )}
                {formData.applicantLimit && (
                  <div>
                    <span className="text-gray-500">Max Applicants:</span>
                    <p className="font-medium">{formData.applicantLimit}</p>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <Button onClick={() => setPreviewMode(false)} variant="outline">
                  Edit Job
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Posting..." : "Post Job"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Form Steps */
          <>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
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
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      placeholder="e.g., Design a logo for my startup"
                      className={errors.title ? "border-red-500" : ""}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                    <p className="text-xs text-gray-500">
                      Write a clear, descriptive title that explains what you
                      need
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
                        <SelectTrigger
                          className={errors.category ? "border-red-500" : ""}
                        >
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
                      {errors.category && (
                        <p className="text-red-500 text-sm">
                          {errors.category}
                        </p>
                      )}
                    </div>

                    {formData.category && selectedCategory && (
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
                            {selectedCategory.subcategories.map(
                              (subcategory) => (
                                <SelectItem
                                  key={subcategory}
                                  value={subcategory}
                                >
                                  {subcategory}
                                </SelectItem>
                              ),
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {formData.category && selectedCategory && (
                    <div className="space-y-2">
                      <Label htmlFor="experienceLevel">
                        Experience Level Required
                      </Label>
                      <Select
                        value={formData.experienceLevel}
                        onValueChange={(value) =>
                          handleInputChange("experienceLevel", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCategory.experienceLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

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
                      className={errors.description ? "border-red-500" : ""}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm">
                        {errors.description}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      {formData.description.length}/100 characters minimum. Be
                      specific about deliverables and expectations.
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

                  <div className="space-y-2">
                    <Label htmlFor="expectedDeliverables">
                      Expected Deliverables
                    </Label>
                    <Textarea
                      id="expectedDeliverables"
                      value={formData.expectedDeliverables}
                      onChange={(e) =>
                        handleInputChange(
                          "expectedDeliverables",
                          e.target.value,
                        )
                      }
                      placeholder="What specific outputs do you expect? (e.g., 3 logo concepts, source files, style guide)"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Budget & Timeline */}
            {currentStep === 2 && (
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
                        min="500"
                        className={errors.budget ? "border-red-500" : ""}
                      />
                      {errors.budget && (
                        <p className="text-red-500 text-sm">{errors.budget}</p>
                      )}
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
                          {selectedCategory?.budgetTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          )) ||
                            [
                              "Fixed Price",
                              "Per Hour",
                              "Per Session",
                              "Per Article",
                              "Per Week",
                              "Per Month",
                            ].map((type) => (
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
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="urgent"
                        checked={formData.isUrgent}
                        onCheckedChange={(checked) =>
                          handleInputChange("isUrgent", checked)
                        }
                      />
                      <Label htmlFor="urgent" className="text-sm">
                        This is an urgent project (will be highlighted to
                        attract faster responses)
                      </Label>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        Budget Guidelines:
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>
                          • Set a fair budget that reflects the work complexity
                        </li>
                        <li>
                          • Consider the time required and skill level needed
                        </li>
                        <li>
                          • Higher budgets typically attract more qualified
                          candidates
                        </li>
                        <li>
                          • You can negotiate the final price with selected
                          candidates
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Location & Contact */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Location & Contact Information
                  </CardTitle>
                  <CardDescription>
                    Specify location requirements and how applicants can reach
                    you
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
                      <Label htmlFor="remote">
                        This job can be done remotely
                      </Label>
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
                          className={errors.location ? "border-red-500" : ""}
                        />
                        {errors.location && (
                          <p className="text-red-500 text-sm">
                            {errors.location}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">
                      Contact Information
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactEmail">Contact Email*</Label>
                        <Input
                          id="contactEmail"
                          type="email"
                          value={formData.contactEmail}
                          onChange={(e) =>
                            handleInputChange("contactEmail", e.target.value)
                          }
                          placeholder="your.email@university.edu.ng"
                          className={
                            errors.contactEmail ? "border-red-500" : ""
                          }
                        />
                        {errors.contactEmail && (
                          <p className="text-red-500 text-sm">
                            {errors.contactEmail}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">
                          Contact Phone (Optional)
                        </Label>
                        <Input
                          id="contactPhone"
                          type="tel"
                          value={formData.contactPhone}
                          onChange={(e) =>
                            handleInputChange("contactPhone", e.target.value)
                          }
                          placeholder="+234 801 234 5678"
                        />
                      </div>
                    </div>
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
                        min="1"
                        max="100"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      Leave empty for unlimited applications. Recommended: 10-30
                      applicants
                    </p>
                  </div>

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
                      <Button
                        type="button"
                        onClick={addSkill}
                        variant="outline"
                      >
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
                    <Label>Project Files (Optional)</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        Upload project briefs, examples, or reference materials
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <span>Choose Files</span>
                        </Button>
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        PDF, DOC, JPG, PNG, ZIP. Max 10MB per file, 5 files
                        total
                      </p>
                    </div>

                    {formData.attachments.length > 0 && (
                      <div className="space-y-2">
                        {formData.attachments.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 border rounded"
                          >
                            <span className="text-sm">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Review & Additional Info */}
            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>Review & Additional Information</CardTitle>
                  <CardDescription>
                    Review your job posting and add any final details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        handleInputChange("additionalNotes", e.target.value)
                      }
                      placeholder="Any additional information, special requirements, or notes for applicants"
                      rows={4}
                    />
                  </div>

                  {/* Job Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Job Summary
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Title:</span>
                        <p className="font-medium">{formData.title}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Category:</span>
                        <p className="font-medium">{formData.category}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <p className="font-medium">
                          ₦{parseInt(formData.budget || "0").toLocaleString()} (
                          {formData.budgetType})
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <p className="font-medium">{formData.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Location:</span>
                        <p className="font-medium">
                          {formData.isRemote ? "Remote" : formData.location}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-500">Skills:</span>
                        <p className="font-medium">
                          {formData.skills.length} skills listed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-yellow-800">
                          Before you post:
                        </p>
                        <ul className="text-yellow-700 mt-1 space-y-1">
                          <li>• Review all details for accuracy</li>
                          <li>
                            • Ensure your budget is realistic for the market
                          </li>
                          <li>
                            • Be prepared to respond to applicant questions
                          </li>
                          <li>• Job posts are live for 30 days by default</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/safety"
                        className="text-blue-600 hover:underline"
                      >
                        Job Posting Guidelines
                      </Link>
                    </Label>
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      {errors.submit}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <div>
                {currentStep > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                )}
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    // Save as draft
                    console.log("Saved as draft");
                  }}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>

                {currentStep < 4 ? (
                  <Button onClick={nextStep}>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-top-transparent mr-2"></div>
                        Posting...
                      </>
                    ) : (
                      <>
                        Post Job
                        <CheckCircle className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostJob;
