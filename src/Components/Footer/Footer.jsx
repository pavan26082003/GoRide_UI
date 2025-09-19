import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Find Buses', href: '#buses' },
    { name: 'Offers', href: '#offers' },
    { name: 'Help Center', href: '#help' },
    { name: 'Contact', href: '#contact' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cancellation Policy', href: '#cancellation' },
    { name: 'Refund Policy', href: '#refund' },
    { name: 'Safety Guidelines', href: '#safety' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-white/70">Get the latest offers and travel updates delivered to your inbox</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white outline-none"
            />
            <button className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl">
                G
              </div>
              <span className="text-2xl font-bold">GoRide</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner for comfortable and reliable bus travel across the country. 
              Safe, affordable, and convenient transportation solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-500" />
                <span className="text-sm">+1-800-GORIDE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-500" />
                <span className="text-sm">support@goride.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span className="text-sm">123 Travel Street, Transit City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-indigo-400 text-sm flex items-center gap-2 transition-colors"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Policies</h4>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-white/70 hover:text-indigo-400 text-sm flex items-center gap-2 transition-colors"
                  >
                    {policy.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Apps */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-sm">Download Our App</h5>
              <button className="w-full py-2 rounded-md bg-white/10 border border-white/20 text-white text-left hover:bg-white/20 transition">
                📱 App Store
              </button>
              <button className="w-full py-2 rounded-md bg-white/10 border border-white/20 text-white text-left hover:bg-white/20 transition">
                🤖 Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <div>
            © 2024 GoRide. All rights reserved. | Made with ❤️ for better travel
          </div>
          <div className="flex items-center gap-6">
            <span>Trusted by 1M+ travelers</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
