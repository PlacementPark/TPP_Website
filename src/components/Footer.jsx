import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Placement Park</h3>
            <p className="text-gray-400">
              50-75-27//2, Ganesh Nagar, Seetamma Peta, Satyam Junction, Visakhapatnam, Andhra Pradesh 530016.
            </p>
            <br></br>
            <h3 className="text-s font-semibold mb-4">Contact:</h3>
            <p className="text-gray-400">
              +91 98855 63355
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-400 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="https://tpp-frontend-2-0.onrender.com/login" className="text-gray-400 hover:text-white transition-colors">
                  Employee Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/the-placement-park/posts/?feedView=all"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/theplacementpark/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/theplacementpark/?hl=en"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
                aria-disabled
              >
                <Twitter size={24} />
              </a> */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 The Placement Park. All rights reserved. Developed by <a href='https://ghostlanzers.onrender.com/'>GHOSTLANZERS</a>.</p>
        </div>
      </div>
    </footer>
  )
}