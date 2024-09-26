import { Link } from "react-router-dom"
function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border-2 border-yellow-500">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hey you have been successfully Login....!</h2>
       
      <p className="text-center mt-4 text-sm text-gray-600">
        Return to login? <Link className="text-blue-500 hover:underline" to="/">Login here</Link>
      </p>
    </div>
  </div>
  
  )
}

export default Home