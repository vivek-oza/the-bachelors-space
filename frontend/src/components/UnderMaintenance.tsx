import { LucideLaugh, LucideSettings } from "lucide-react";

export function UnderMaintenance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center text-white max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-4xl"><LucideLaugh size={68} color="#36328d"></LucideLaugh></span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-xl text-gray-300 mb-6">
            We're currently updating our website to serve you better.
          </p>
          <p className="text-gray-400 mb-8">
            Please check back soon!
          </p>
          
          <div className="mt-8 pt-6 border-t-2 border-gray-500">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-600/30 rounded-lg p-4 max-w-xs mx-auto">
              <p className="text-sm text-gray-300 mb-2 font-medium">
                Website Owner?
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Contact development team for assistance
              </p>
              <a 
                href="https://digilynk.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded text-sm hover:bg-yellow-400/30 transition-colors border border-yellow-400/30"
              >
                digilynk.in →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}