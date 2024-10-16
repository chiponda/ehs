
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'
import Risks from './pages/Risks'
import Incidents from './pages/Incidents'
import { Nav} from './components/Nav'
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from './pages/Home'
import { Test } from './pages/Test'
import IncidentForm from './pages/IncidentForm'
import RiskForm from './pages/RiskForm'

import { Another } from './pages/Another'







function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


export default function App() {
  return (
    <Router>

<div className="flex h-screen bg-gray-100">
        
        <div className="flex flex-col flex-1 overflow-hidden">
       <Nav/>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
          <Routes>
         <Route
          path="/risks"
          element={
            <ProtectedRoute>
              <Risks/>
             
            </ProtectedRoute>
          }
        />
          <Route
          path="/AddIncidents"
          element={
            <ProtectedRoute>
              <IncidentForm/>
             
            </ProtectedRoute>
          }
        />


<Route
          path="/AddRisks"
          element={
            <ProtectedRoute>
              <RiskForm/>
             
            </ProtectedRoute>
          }
        />

<Route
          path="/incidents"
          name="incidents"
          element={
            <ProtectedRoute>
              <Incidents/>
             
            </ProtectedRoute>
          }
        />

              
              <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/hi" element={<Another />} />
              <Route path="/test" element={<Test/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
            </Routes>
           
          </main>
          
        </div>
      </div>
    </Router>
      
    
  )
}