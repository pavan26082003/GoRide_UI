import React, { useState } from "react";
import {
  Search,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqs = [
    {
      id: "1",
      question: "How can I book a bus ticket?",
      answer:
        'You can book a bus ticket by selecting your origin, destination, travel date, and number of passengers on our homepage. Then click "Book Now" on your preferred bus.',
      category: "booking",
    },
    {
      id: "2",
      question: "Can I cancel my ticket?",
      answer:
        "Yes, tickets can be canceled up to 2 hours before departure. Refund policies apply depending on the time of cancellation.",
      category: "cancellation",
    },
    {
      id: "3",
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, UPI, PayPal, and digital wallets. All transactions are secured with 256-bit SSL encryption.",
      category: "payment",
    },
    {
      id: "4",
      question: "How do I track my bus?",
      answer:
        "Track your bus in real-time using the link sent to your email/SMS or from your account dashboard.",
      category: "tracking",
    },
    {
      id: "5",
      question: "What if my bus is delayed?",
      answer:
        "You’ll be notified via SMS/email. If the delay exceeds 2 hours, you may reschedule for free or request a full refund.",
      category: "travel",
    },
    {
      id: "6",
      question: "Can I modify my booking?",
      answer:
        "Yes, modifications (date, time, passenger details) are allowed up to 6 hours before departure. Charges may apply.",
      category: "booking",
    },
  ];

  const categories = [
    { value: "all", label: "All Topics" },
    { value: "booking", label: "Booking" },
    { value: "cancellation", label: "Cancellation" },
    { value: "payment", label: "Payment" },
    { value: "tracking", label: "Tracking" },
    { value: "travel", label: "Travel" },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-600">Help Center</h1>
        <p className="text-gray-600 mt-2">
          Find answers to frequently asked questions or contact our support team.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-800">Quick Help</h3>

          <div className="space-y-3">
            <button className="flex items-center gap-3 w-full border rounded-lg px-4 py-3 hover:bg-gray-100 transition">
              <Phone className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-medium">Call Us</p>
                <p className="text-sm text-gray-500">+91 78158 27400</p>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full border rounded-lg px-4 py-3 hover:bg-gray-100 transition">
              <Mail className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-medium">Email Support</p>
                <p className="text-sm text-gray-500">support@goride.com</p>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full border rounded-lg px-4 py-3 hover:bg-gray-100 transition">
              <MessageCircle className="w-5 h-5 text-indigo-600" />
              <div className="text-left">
                <p className="font-medium">Live Chat</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </button>
          </div>

          <div className="bg-white shadow p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Business Hours</h4>
            <p className="text-sm text-gray-600">Mon-Fri: 6:00 AM - 11:00 PM</p>
            <p className="text-sm text-gray-600">Sat-Sun: 7:00 AM - 10:00 PM</p>
            <p className="text-sm text-indigo-600 font-medium">Emergency: 24/7</p>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedCategory === category.value
                    ? "bg-indigo-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No FAQs found matching your search.
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center text-left p-4 hover:bg-gray-50"
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    {expandedFAQ === faq.id ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Contact Support CTA */}
          <div className="bg-indigo-50 p-6 rounded-lg text-center">
            <h4 className="font-semibold text-gray-800 mb-2">Still need help?</h4>
            <p className="text-gray-600 mb-4">
              Can’t find what you’re looking for? Our support team is here to help.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
