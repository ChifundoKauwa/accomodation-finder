import LandingContent from './landing-content'
import { Suspense } from 'react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
    
      <Suspense fallback={<div>Loading...</div>}>
        <LandingContent />
      </Suspense>
    </div>
  )
}
