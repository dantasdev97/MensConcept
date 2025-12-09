import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Appointment() {
  return (
    <div className="min-h-screen bg-[#0C0A09] text-white">
      <Header />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Book Your Appointment
          </h1>
          <p className="text-lg font-body text-gray-300 mb-12">
            Schedule your visit to MensConcept Barbershop in Luxembourg City.
          </p>
          <div className="bg-white/5 rounded-lg p-8 mb-8">
            <p className="font-body text-gray-400 mb-4">
              Booking system coming soon. Please contact us directly to schedule your appointment.
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
    </div>
  )
}



