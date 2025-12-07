import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Sobre</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Esta é a página sobre do projeto MensConcept.
      </p>
      <Link 
        to="/" 
        className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90"
      >
        Voltar para Home
      </Link>
    </div>
  )
}

