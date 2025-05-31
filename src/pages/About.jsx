import { Award, Clock, Users } from 'lucide-react'
import { useEffect } from 'react'
import Photo from '../../Public/assets/Team.png'

export default function About() {
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
        className="relative h-[60vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Placement Park</h1>
          <p className="text-xl max-w-2xl">
            Your trusted partner in connecting exceptional talent with outstanding opportunities.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                The Placement Park is a leading recruitment consultancy dedicated to bridging the gap
                between talented professionals and forward-thinking organizations.
              </p>
              <p className="text-gray-600">
                Founded with a vision to revolutionize the recruitment industry, we combine our deep
                understanding of various sectors with innovative recruitment solutions to create perfect
                matches.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0">
              <img
                src={Photo}
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0 text-center">
              <div className="flex justify-center mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-300">
                Building meaningful connections between talented professionals and industry-leading
                companies.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 text-center">
              <div className="flex justify-center mb-4">
                <Award size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excel</h3>
              <p className="text-gray-300">
                Striving for excellence in every placement we make, ensuring the perfect fit for both
                parties.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 text-center">
              <div className="flex justify-center mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Grow</h3>
              <p className="text-gray-300">
                Fostering long-term growth and success for both candidates and companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description:
                  'Deep understanding of various sectors and their unique recruitment needs.',
              },
              {
                title: 'Personalized Approach',
                description:
                  'Tailored solutions that match your specific requirements and organizational culture.',
              },
              {
                title: 'Quality Assurance',
                description:
                  'Rigorous screening process to ensure only the best candidates are presented.',
              },
              {
                title: 'Long-term Partnership',
                description:
                  'Building lasting relationships with both clients and candidates.',
              },
              {
                title: 'Innovation',
                description:
                  'Utilizing cutting-edge recruitment technologies and methodologies.',
              },
              {
                title: 'Global Network',
                description:
                  'Access to a vast network of talented professionals across industries.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}