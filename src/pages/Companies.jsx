import { useEffect } from 'react'

const companies = [
  {
    name: 'Concentrix',
    industry: 'Technology',
    url: '../../Public/assets/Concentrix_logo.jpg',
  },
  {
    name: 'Amazon',
    industry: 'Healthcare',
    url: '../../Public/assets/Amazon_Logo.jpg',
  },
  {
    name: 'Tech Mahindra',
    industry: 'Education',
    url: '../../Public/assets/Tech_Logo.jpg',
  },
  {
    name: 'Wipro',
    industry: 'Finance',
    url: '../../Public/assets/Wipro_Logo.jpg',
  },
  {
    name: 'Sutherland',
    industry: 'Research & Development',
    url: '../../Public/assets/Sutherlands_Logo.jpg',
  },
  {
    name: 'Digital Dynamics',
    industry: 'IT Services',
    url: '../../Public/assets/GD_Logo.jpg',
  },
  {
    name: 'HGS',
    industry: 'Healthcare Technology',
    url: '../../Public/assets/HGS.png',
  },
  {
    name: 'WNS',
    industry: 'EdTech',
    url: '../../Public/assets/WNS_Logo.jpg',
  },
]


export default function Companies() {
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
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partner Companies</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We work with leading companies across various industries to connect them with exceptional
            talent.
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-32 w-full bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  {company.url ? (
                    <img
                      style={{alignContent:"center" ,textAlign:"center"}}
                      className="text-2xl font-bold text-gray-400 h-full w-full object-cover"
                      src={company.urll}
                      alt={`${company.name}`}
                    />
                  ) : (
                    <span className="text-2xl font-bold text-gray-400">{company.name[0]}</span>
                  )}
                </div>
                {/* <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400"><img src={company.urll} alt={`${company.name} logo`}/></span>
                </div> */}
                <h3 className="text-xl font-semibold mb-2">{company.name}</h3>
                <p className="text-gray-600">{company.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Information Technology',
              'Healthcare',
              'Banking & Finance',
              'Education Technology',
              'E-commerce',
              'Manufacturing',
            ].map((industry, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                <p className="text-gray-600">
                  Connecting top talent with leading companies in the {industry.toLowerCase()} sector.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}