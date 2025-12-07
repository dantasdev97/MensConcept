import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
          MensConcept
        </h1>
        <p className="text-xl md:text-2xl font-body text-muted-foreground mb-4">
          Premium Barbershop in Luxembourg
        </p>
        <p className="text-lg font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience the finest grooming services in the heart of Luxembourg. 
          Our expert barbers combine traditional techniques with modern style to give you the perfect look.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            to="/about" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-body font-medium"
            style={{ backgroundColor: '#DD9E32' }}
          >
            Learn More
          </Link>
          <Link 
            to="/services" 
            className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors font-body font-medium"
            style={{ borderColor: '#DD9E32', color: '#DD9E32' }}
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}

