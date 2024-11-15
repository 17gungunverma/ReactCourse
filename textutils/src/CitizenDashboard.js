import React from 'react'
import { Link } from 'react-router-dom'

export default function CitizenDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Citizen Dashboard</h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">Welcome to the Citizen Dashboard. Here you can access various services and participate in community initiatives.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>View and participate in local polls</li>
            <li>Submit feedback to local government</li>
            <li>Access community resources</li>
            <li>Stay updated on local news and events</li>
          </ul>
          <Link
            to="/"
            className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Back to Login
          </Link>
          
        </div>
      </div>
    </div>
  )
}