import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Login from './components/Login';

function App() {
  // 1. Check sessionStorage when the app first loads (survives a refresh)
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('isLoggedIn') === 'true'
  );

  // 2. When they log in, save a temporary ticket to sessionStorage
  const handleLogin = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  // 3. When they log out, rip up the ticket
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        
        {/* Pass our new handleLogout function to the Navbar */}
        <Navbar onLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;