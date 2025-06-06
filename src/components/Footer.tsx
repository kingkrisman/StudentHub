import { Link } from "react-router-dom";
import {
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "How It Works", href: "/help" },
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Post a Job", href: "/jobs/post" },
    { name: "Success Stories", href: "/community" },
  ];

  const categories = [
    { name: "Freelancing", href: "/categories/freelancing" },
    { name: "Tutoring", href: "/categories/tutoring" },
    { name: "Student Market", href: "/categories/student-market" },
    { name: "Event Planning", href: "/categories/event-planning" },
    { name: "Content Creation", href: "/categories/content-creation" },
    { name: "Internships", href: "/categories/internships" },
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Safety Guidelines", href: "/safety" },
    { name: "Community", href: "/community" },
    { name: "Contact Us", href: "/help" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Student Hub</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering Nigerian students to earn money, learn skills, and
              build their future through verified opportunities and community
              support.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a
                  href="mailto:support@studenthub.ng"
                  className="hover:text-white"
                >
                  support@studenthub.ng
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+2348001234567" className="hover:text-white">
                  +234 800 STUDENT
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 4).map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-4 mt-8">Legal</h4>
            <ul className="space-y-2 text-sm">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Student Hub. All rights reserved. Built for
              Nigerian students, by students.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link
                to="/sitemap"
                className="text-sm text-gray-400 hover:text-white"
              >
                Site Map
              </Link>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">
                Made with ❤️ in Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
