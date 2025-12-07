import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao MensConcept</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Seu projeto React está configurado e pronto para uso!
      </p>
      <Link 
        to="/about" 
        className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
      >
        Sobre
      </Link>
    </div>
  )
}

