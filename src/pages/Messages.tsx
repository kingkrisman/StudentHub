import { useState, useRef, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "../App";
import {
  Search,
  Send,
  Paperclip,
  Image,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Info,
  Star,
  Clock,
  Check,
  CheckCheck,
  Filter,
  Archive,
  Trash2,
  Flag,
  Pin,
  Download,
  File,
  MapPin,
  Calendar,
  DollarSign,
  Briefcase,
} from "lucide-react";

const Messages = () => {
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const messagesEndRef = useRef(null);

  const conversations = [
    {
      id: 1,
      name: "Fashion Brand Lagos",
      avatar: "",
      lastMessage:
        "The design looks perfect! Can you make the logo a bit larger?",
      timestamp: "2 min ago",
      unread: 2,
      online: true,
      type: "client",
      project: "Instagram Story Templates",
      status: "active",
      priority: "high",
      tags: ["Design", "Active Project"],
    },
    {
      id: 2,
      name: "TechStart Nigeria",
      avatar: "",
      lastMessage: "When can you start working on the logo concepts?",
      timestamp: "1 hour ago",
      unread: 0,
      online: false,
      lastSeen: "3 hours ago",
      type: "client",
      project: "Logo Design",
      status: "negotiating",
      priority: "medium",
      tags: ["Logo", "Negotiation"],
    },
    {
      id: 3,
      name: "Study Group UNILAG",
      avatar: "",
      lastMessage: "Thanks for the math session! Really helpful.",
      timestamp: "2 hours ago",
      unread: 0,
      online: true,
      type: "student",
      project: "Mathematics Tutoring",
      status: "completed",
      priority: "low",
      tags: ["Tutoring", "Completed"],
    },
    {
      id: 4,
      name: "InnovateNG",
      avatar: "",
      lastMessage:
        "Your writing samples are impressive. Let's discuss the project details.",
      timestamp: "1 day ago",
      unread: 1,
      online: false,
      lastSeen: "5 hours ago",
      type: "client",
      project: "Website Content",
      status: "interview",
      priority: "high",
      tags: ["Writing", "Interview"],
    },
    {
      id: 5,
      name: "Beauty Hub Lagos",
      avatar: "",
      lastMessage:
        "The content calendar you created is exactly what we needed!",
      timestamp: "2 days ago",
      unread: 0,
      online: false,
      lastSeen: "1 day ago",
      type: "client",
      project: "Social Media Content",
      status: "completed",
      priority: "medium",
      tags: ["Content", "Review"],
    },
  ];

  const messages = {
    1: [
      {
        id: 1,
        sender: "Fashion Brand Lagos",
        senderType: "client",
        content:
          "Hi! I saw your portfolio and I'm interested in hiring you for our Instagram story templates project.",
        timestamp: "10:30 AM",
        type: "text",
        status: "read",
      },
      {
        id: 2,
        sender: "me",
        senderType: "freelancer",
        content:
          "Thank you for reaching out! I'd be happy to help with your Instagram story templates. Can you tell me more about your brand and what style you're looking for?",
        timestamp: "10:32 AM",
        type: "text",
        status: "read",
      },
      {
        id: 3,
        sender: "Fashion Brand Lagos",
        senderType: "client",
        content:
          "We're a young fashion brand targeting Gen Z. We want trendy, colorful designs that really pop on social media.",
        timestamp: "10:35 AM",
        type: "text",
        status: "read",
      },
      {
        id: 4,
        sender: "me",
        senderType: "freelancer",
        content:
          "Perfect! I specialize in that exact style. Here are some examples of my recent work:",
        timestamp: "10:37 AM",
        type: "text",
        status: "read",
      },
      {
        id: 5,
        sender: "me",
        senderType: "freelancer",
        content: "portfolio-samples.zip",
        timestamp: "10:37 AM",
        type: "file",
        fileName: "portfolio-samples.zip",
        fileSize: "2.4 MB",
        status: "read",
      },
      {
        id: 6,
        sender: "Fashion Brand Lagos",
        senderType: "client",
        content:
          "These are exactly what we're looking for! What's your timeline and pricing?",
        timestamp: "11:15 AM",
        type: "text",
        status: "read",
      },
      {
        id: 7,
        sender: "me",
        senderType: "freelancer",
        content:
          "I can deliver 10 story templates within 5 days for ₦25,000. This includes 2 rounds of revisions and source files.",
        timestamp: "11:18 AM",
        type: "text",
        status: "read",
      },
      {
        id: 8,
        sender: "Fashion Brand Lagos",
        senderType: "client",
        content:
          "That works perfectly! I'm sending you the project details and brand guidelines.",
        timestamp: "11:20 AM",
        type: "text",
        status: "read",
      },
      {
        id: 9,
        sender: "Fashion Brand Lagos",
        senderType: "client",
        content: "brand-guidelines.pdf",
        timestamp: "11:21 AM",
        type: "file",
        fileName: "brand-guidelines.pdf",
        fileSize: "1.8 MB",
        status: "read",
      },
      {
        id: 10,
        sender: "Fashion Brand Lagos",
        senderType: "client",
        content:
          "The design looks perfect! Can you make the logo a bit larger?",
        timestamp: "Just now",
        type: "text",
        status: "delivered",
      },
    ],
  };

  const currentConversation = conversations.find(
    (conv) => conv.id === selectedChat,
  );
  const currentMessages = messages[selectedChat] || [];

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.project.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterType === "all" ||
      (filterType === "unread" && conv.unread > 0) ||
      (filterType === "clients" && conv.type === "client") ||
      (filterType === "students" && conv.type === "student") ||
      (filterType === "active" && conv.status === "active");

    return matchesSearch && matchesFilter;
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentMessages]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send to backend
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-green-600";
      case "negotiating":
        return "text-yellow-600";
      case "interview":
        return "text-blue-600";
      case "completed":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-300";
    }
  };

  const formatTime = (timestamp) => {
    return timestamp;
  };

  const MessageBubble = ({ message }) => {
    const isMe = message.sender === "me";

    return (
      <div className={`flex ${isMe ? "justify-end" : "justify-start"} mb-4`}>
        {!isMe && (
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={currentConversation?.avatar} />
            <AvatarFallback>
              {currentConversation?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        )}

        <div
          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
            isMe ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          {message.type === "file" ? (
            <div className="flex items-center space-x-2">
              <File className="h-4 w-4" />
              <div>
                <p className="font-medium">{message.fileName}</p>
                <p className="text-xs opacity-75">{message.fileSize}</p>
              </div>
              <Button size="sm" variant="ghost">
                <Download className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <p>{message.content}</p>
          )}

          <div
            className={`flex items-center justify-between mt-1 text-xs ${
              isMe ? "text-blue-100" : "text-gray-500"
            }`}
          >
            <span>{message.timestamp}</span>
            {isMe && (
              <div className="flex items-center ml-2">
                {message.status === "delivered" && (
                  <Check className="h-3 w-3" />
                )}
                {message.status === "read" && (
                  <CheckCheck className="h-3 w-3" />
                )}
              </div>
            )}
          </div>
        </div>

        {isMe && (
          <Avatar className="h-8 w-8 ml-2">
            <AvatarImage src={user?.avatar} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Communicate with clients and students</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border min-h-[600px] flex">
          {/* Conversations Sidebar */}
          <div className="w-1/3 border-r">
            {/* Search and Filter */}
            <div className="p-4 border-b">
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              <div className="flex space-x-1">
                {[
                  { key: "all", label: "All" },
                  { key: "unread", label: "Unread" },
                  { key: "clients", label: "Clients" },
                  { key: "students", label: "Students" },
                  { key: "active", label: "Active" },
                ].map((filter) => (
                  <Button
                    key={filter.key}
                    variant={filterType === filter.key ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setFilterType(filter.key)}
                    className="text-xs"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Conversations List */}
            <div className="overflow-y-auto max-h-[500px]">
              {filteredConversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={`p-4 border-b cursor-pointer hover:bg-gray-50 border-l-4 ${
                    selectedChat === conv.id
                      ? "bg-blue-50 border-l-blue-500"
                      : getPriorityColor(conv.priority)
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback>{conv.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm truncate">
                          {conv.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                          {conv.unread > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {conv.unread}
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500">
                            {conv.timestamp}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 truncate mt-1">
                        {conv.lastMessage}
                      </p>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          <Badge variant="outline" className="text-xs">
                            {conv.project}
                          </Badge>
                          <Badge
                            className={`text-xs ${getStatusColor(conv.status)}`}
                            variant="outline"
                          >
                            {conv.status}
                          </Badge>
                        </div>

                        {!conv.online && conv.lastSeen && (
                          <span className="text-xs text-gray-400">
                            {conv.lastSeen}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1 mt-1">
                        {conv.tags.slice(0, 2).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {currentConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={currentConversation.avatar} />
                          <AvatarFallback>
                            {currentConversation.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {currentConversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {currentConversation.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span
                            className={
                              currentConversation.online
                                ? "text-green-600"
                                : "text-gray-500"
                            }
                          >
                            {currentConversation.online
                              ? "Online"
                              : `Last seen ${currentConversation.lastSeen}`}
                          </span>
                          <span>•</span>
                          <span>{currentConversation.project}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Info className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Info Bar */}
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {currentConversation.project}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          ₦25,000
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />5 days
                        </span>
                      </div>
                      <Badge
                        className={getStatusColor(currentConversation.status)}
                        variant="outline"
                      >
                        {currentConversation.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {currentMessages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="p-4 border-t bg-white">
                  <div className="flex items-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Image className="h-4 w-4" />
                    </Button>

                    <div className="flex-1">
                      <Textarea
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="resize-none min-h-[40px] max-h-[120px]"
                        rows={1}
                      />
                    </div>

                    <Button variant="ghost" size="sm">
                      <Smile className="h-4 w-4" />
                    </Button>

                    <Button
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                      className="px-4"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Press Enter to send, Shift+Enter for new line</span>
                    <span>{newMessage.length}/1000</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Select a conversation
                  </h3>
                  <p className="text-gray-600">
                    Choose a conversation from the sidebar to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Messages;
