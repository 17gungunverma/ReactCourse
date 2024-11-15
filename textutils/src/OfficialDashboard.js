import React from 'react'
import { Link } from 'react-router-dom'

export default function OfficialDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Government Official Dashboard</h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">Welcome to the Government Official Dashboard. Here you can manage various aspects of citizen engagement and community initiatives.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Create and manage polls</li>
            <li>Review citizen feedback</li>
            <li>Publish community updates</li>
            <li>Manage resources and services</li>
          </ul>
          <Link
            to="/"
            className="inline-block mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}