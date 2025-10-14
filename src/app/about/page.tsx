import dynamic from "next/dynamic"

// Lazy load the animated about component
const AnimatedAbout = dynamic(() => import('./page-animated'), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-12 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-300">Loading about page...</p>
      </div>
    </div>
  ),
  
})

export default function About() {
  return <AnimatedAbout />
}
