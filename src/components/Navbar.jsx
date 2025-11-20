import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Trang chủ' },
    { path: '/ve-chung-toi', label: 'Về chúng tôi' },
    { path: '/dich-vu', label: 'Dịch vụ' },
    { path: '/tien-ich', label: 'Tiện ích cho bạn' },
    { path: '/blog', label: 'Blog' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center relative">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-primary-lightest/50 via-primary-lightest/30 to-transparent -z-10">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(197,28,98,0.2) 0%, transparent 50%),
                                 radial-gradient(circle at 60% 30%, rgba(197,28,98,0.15) 0%, transparent 50%)`
              }}></div>
            </div>
            <Link to="/" className="flex items-center gap-2 z-10 relative pl-6">
              {/* House Icon */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-600"
              >
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-800 text-xl font-raleway-regular">Care Home</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm lg:text-base font-raleway-regular transition-colors duration-200 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button - Desktop Only */}
          <div className="hidden md:flex items-center">
            <Link
              to="/lien-he"
              className="px-6 py-2.5 bg-primary text-white rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-raleway-bold text-sm shadow-md hover:bg-primary-light transition-colors duration-200 whitespace-nowrap"
            >
              Liên lạc với chúng tôi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary focus:outline-none transition-colors duration-200"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`text-sm font-raleway-regular transition-colors duration-200 px-4 py-2 ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Contact Button - Mobile */}
              <Link
                to="/lien-he"
                onClick={closeMobileMenu}
                className="mx-4 px-6 py-2.5 bg-primary text-white rounded-tr-lg rounded-bl-lg rounded-tl-none rounded-br-none font-raleway-bold text-sm shadow-md hover:bg-primary-light transition-colors duration-200 text-center"
              >
                Liên lạc với chúng tôi
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

