import { Building2, GraduationCap, LineChart, Users } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sharukh from '../assets/Sharukh.png'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bridging Talent with Opportunity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            We connect exceptional talent with leading organizations, creating lasting professional
            relationships that drive success.
          </p>
          <a
            href="#services"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors animate-fade-in"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll opacity-0 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-black mb-4">
                <Building2 size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate</h3>
              <p className="text-gray-600">
                Connecting top talent with leading corporations across various sectors.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-black mb-4">
                <LineChart size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">IT & Technology</h3>
              <p className="text-gray-600">
                Placing skilled professionals in cutting-edge tech positions.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-black mb-4">
                <GraduationCap size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Supporting educational institutions with expert staffing solutions.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-black mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Voice Process</h3>
              <p className="text-gray-600">
                Providing qualified professionals for the Non-IT and Voice Process sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Why Choose The Placement Park?</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in the recruitment industry, we understand the unique challenges
                faced by both employers and job seekers. Our dedicated team works tirelessly to create
                perfect matches that benefit both parties.
              </p>
              <Link
                to="/about"
                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="animate-on-scroll opacity-0">
              <img
                src={Sharukh}
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}