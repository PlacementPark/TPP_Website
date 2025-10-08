import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '/TPP.jpeg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="The Placement Park"
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                The Placement Park
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-black font-semibold' : 'text-gray-600'
              } hover:text-black transition-colors font-inter`}
            >
              Home
            </Link>
            <Link
              to="/companies"
              className={`${
                isActive('/companies') ? 'text-black font-semibold' : 'text-gray-600'
              } hover:text-black transition-colors font-inter`}
            >
              Companies
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-black font-semibold' : 'text-gray-600'
              } hover:text-black transition-colors font-inter`}
            >
              About
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/') ? 'text-black font-semibold' : 'text-gray-600'
                } hover:text-black transition-colors font-inter`}
              >
                Home
              </Link>
              <Link
                to="/companies"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/companies') ? 'text-black font-semibold' : 'text-gray-600'
                } hover:text-black transition-colors font-inter`}
              >
                Companies
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/about') ? 'text-black font-semibold' : 'text-gray-600'
                } hover:text-black transition-colors font-inter`}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}