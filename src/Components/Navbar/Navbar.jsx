
// import React, { useState, useEffect } from "react";
// import { Menu, X, User, Phone, HelpCircle, LogOut } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // login state
//   const navigate = useNavigate();

//   // Check if user is logged in on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // store token on login
//     if (token) setIsLoggedIn(true);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // clear token
//     setIsLoggedIn(false);
//     navigate("/login"); // redirect to login
//   };

//   return (
//     <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//               G
//             </div>
//             <span className="text-2xl font-bold text-indigo-600">GoRide</span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
//               Home
//             </a>
//             <a href="#buses" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
//               Find Buses
//             </a>
//             <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
//               Offers
//             </a>
//             {isLoggedIn && (
//               <Link to="/my-buses" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
//                 My Buses
//               </Link>
//             )}
//           </nav>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/help" className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors font-medium">
//               <HelpCircle className="w-4 h-4 mr-2" />
//               Help
//             </Link>

//             <a href="tel:+1800467433" className="flex items-center text-gray-500 hover:text-indigo-600 transition text-sm font-medium">
//               <Phone className="w-4 h-4 mr-2" />
//               +91 78158 27400
//             </a>

//             {/* Conditional Buttons */}
//             {!isLoggedIn ? (
//               <>
//                 <Link to="/login" className="flex items-center border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition text-sm">
//                   <User className="w-4 h-4 mr-2" />
//                   Login
//                 </Link>

//                 <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
//                   Sign Up
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <button
//                   onClick={handleLogout}
//                   className="flex items-center border border-red-500 text-red-500 px-3 py-1.5 rounded-md hover:bg-red-50 transition text-sm"
//                 >
//                   <LogOut className="w-4 h-4 mr-2" />
//                   Logout
//                 </button>

//               <Link to="/my-bookings" className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
//                       My Bookings
//                     </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2 hover:bg-indigo-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
//             <nav className="flex flex-col space-y-4">
//               <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
//                 Home
//               </a>
//               <a href="#buses" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
//                 Find Buses
//               </a>
//               <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
//                 Offers
//               </a>

//               <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
//                 <Link to="/help" className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium">
//                   <HelpCircle className="w-4 h-4 mr-2" />
//                   Help
//                 </Link>

//                 {!isLoggedIn ? (
//                   <>
//                     <Link to="/login" className="flex items-center justify-center border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition text-sm">
//                       <User className="w-4 h-4 mr-2" />
//                       Login
//                     </Link>

//                     <Link to="/register" className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
//                       Sign Up
//                     </Link>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={handleLogout}
//                       className="flex items-center justify-center border border-red-500 text-red-500 px-3 py-1.5 rounded-md hover:bg-red-50 transition text-sm"
//                     >
//                       <LogOut className="w-4 h-4 mr-2" />
//                       Logout
//                     </button>

//                     <Link to="/my-bookings" className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
//                       My Bookings
//                     </Link>

                     
//                   </>
//                 )}
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Menu, X, User, Phone, HelpCircle, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state
  const [showLogoutPopup, setShowLogoutPopup] = useState(false); // logout popup
  const navigate = useNavigate();

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem("token"); // store token on login
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear token
    setIsLoggedIn(false);
    setShowLogoutPopup(false);
    navigate("/"); // redirect to home
  };

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
            <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Home
            </a>
            <a href="#buses" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Find Buses
            </a>
            <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Offers
            </a>
            {isLoggedIn && (
              <Link to="/my-buses" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                My Buses
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/help" className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors font-medium">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help
            </Link>

            <a href="tel:+1800467433" className="flex items-center text-gray-500 hover:text-indigo-600 transition text-sm font-medium">
              <Phone className="w-4 h-4 mr-2" />
              +91 78158 27400
            </a>

            {/* Conditional Buttons */}
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="flex items-center border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition text-sm">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>

                <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowLogoutPopup(true)}
                  className="flex items-center border border-red-500 text-red-500 px-3 py-1.5 rounded-md hover:bg-red-50 transition text-sm"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>

                <Link to="/my-bookings" className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
                  My Bookings
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-indigo-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Home
              </a>
              <a href="#buses" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Find Buses
              </a>
              <a href="#offers" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">
                Offers
              </a>

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link to="/help" className="flex items-center text-gray-500 hover:text-indigo-600 transition-colors text-sm font-medium">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help
                </Link>

                {!isLoggedIn ? (
                  <>
                    <Link to="/login" className="flex items-center justify-center border border-indigo-600 text-indigo-600 px-3 py-1.5 rounded-md hover:bg-indigo-50 transition text-sm">
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Link>

                    <Link to="/register" className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => setShowLogoutPopup(true)}
                      className="flex items-center justify-center border border-red-500 text-red-500 px-3 py-1.5 rounded-md hover:bg-red-50 transition text-sm"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>

                    <Link to="/my-bookings" className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm">
                      My Bookings
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-65">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h3 className="text-xl font-bold text-red-500 mb-4 mt-24">Confirm Logout</h3>
            <p className="text-gray-700 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowLogoutPopup(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

