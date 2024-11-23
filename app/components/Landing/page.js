import LandingContent from './landing-content'
import { Suspense } from 'react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Accommodation Finder</h1>
          <nav className="space-x-4">
            <a href="#hotels" className="text-gray-700 hover:text-blue-600">Hotels</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingContent />
      </Suspense>
    </div>
  )
}
