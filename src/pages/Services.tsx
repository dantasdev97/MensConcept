import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Services() {
  const services = [
    {
      title: "Classic Haircut",
      description: "Traditional barbering techniques for a timeless look",
      price: "€35"
    },
    {
      title: "Modern Fade",
      description: "Contemporary fade styles tailored to your preference",
      price: "€40"
    },
    {
      title: "Beard Trim",
      description: "Professional beard shaping and trimming",
      price: "€25"
    },
    {
      title: "Hot Towel Shave",
      description: "Luxurious traditional straight razor shave",
      price: "€30"
    },
    {
      title: "Complete Grooming",
      description: "Haircut, beard trim, and hot towel shave",
      price: "€65"
    },
    {
      title: "Hair Styling",
      description: "Professional styling and product application",
      price: "€20"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0C0A09] text-white">
      <Header />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">Our Services</h1>
        <p className="text-lg font-body text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Discover our range of premium grooming services designed to help you look and feel your best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="border border-white/10 bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
              <p className="font-body text-muted-foreground mb-4">{service.description}</p>
              <p className="text-2xl font-heading font-bold" style={{ color: '#DD9E32' }}>
                {service.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-[#DD9E32] text-white rounded-md hover:opacity-90 transition-opacity font-body font-medium"
          >
            Back to Home
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

