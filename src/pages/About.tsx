import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0C0A09] text-white">
      <Header />
      <div className="container mx-auto px-4 py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">About Us</h1>
        
        <div className="space-y-6 font-body text-lg text-muted-foreground mb-12">
          <p>
            Welcome to MensConcept, Luxembourg's premier destination for men's grooming and style. 
            Located in the heart of Luxembourg, we bring together the finest barbering traditions 
            with contemporary techniques to deliver an exceptional grooming experience.
          </p>
          <p>
            Our skilled barbers are passionate about their craft and dedicated to helping you look 
            and feel your best. Whether you're looking for a classic cut, a modern fade, or a 
            complete grooming service, we've got you covered.
          </p>
          <p>
            At MensConcept, we believe that great style starts with great service. That's why we 
            take the time to understand your preferences and work with you to achieve the perfect look.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-heading font-semibold mb-4">Our Location</h2>
          <p className="font-body text-lg text-muted-foreground">
            Luxembourg, Luxembourg
          </p>
        </div>

        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-[#DD9E32] text-white rounded-md hover:opacity-90 transition-opacity font-body font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

