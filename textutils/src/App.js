// import './App.css';

// function App() {
//   return (
//    <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">textutils</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">About</a>
//         </li>
        
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-3xl font-bold mb-6 text-gray-800">Citizen Dashboard</h1>
//         <div className="space-y-4">
//           <p className="text-lg text-gray-600">Welcome to the Citizen Dashboard. Here you can access various services and participate in community initiatives.</p>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>View and participate in local polls</li>
//             <li>Submit feedback to local government</li>
//             <li>Access community resources</li>
//             <li>Stay updated on local news and events</li>
//           </ul>
//           <Link
//             to="/"
//             className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out"
//           >
//             Back to Login
//           </Link>
//         </div>
//       </div>
//     </div>

//    </>
//   );
// }

// export default App;
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import CitizenDashboard from './CitizenDashboard'
import OfficialDashboard from './OfficialDashboard'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/citizen" element={<CitizenDashboard />} />
          <Route path="/official" element={<OfficialDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}