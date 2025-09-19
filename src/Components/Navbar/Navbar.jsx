import React, { useState } from "react";
import { Menu, X, User, Phone, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className="text-2xl font-bold text-indigo-600">GoRide</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#buses"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Find Buses
            </a>
            <a
              href="#offers"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Offers
            </a>
          
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            

            <Link
  to="/help"
  className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors font-medium"
>
  <HelpCircle className="w-4 h-4 mr-2" />
  Help
</Link>


            <a
              href="tel:+1800467433"
              className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 78158 27400
            </a>

            {/* ✅ Login Link */}
            <Link
              to="/login"
              className="flex items-center border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition text-sm"
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Link>

            {/* ✅ Sign Up Link */}
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-indigo-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
              >
                Home
              </a>
              <a
                href="#buses"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
              >
                Find Buses
              </a>
              <a
                href="#offers"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
              >
                Offers
              </a>
             

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                {/* Help */}
               

                <Link
  to="/help"
  className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium"
>
  <HelpCircle className="w-4 h-4 mr-2" />
  Help
</Link>

                {/* Login */}
                <Link
                  to="/login"
                  className="flex items-center justify-center border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition text-sm"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>

                {/* Sign Up */}
                <Link
                  to="/register"
                  className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
