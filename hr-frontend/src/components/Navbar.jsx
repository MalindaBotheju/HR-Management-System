import { Link } from 'react-router-dom';

// 1. Accept the onLogout function as a prop
export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">
        
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex gap-6 items-center">
          <div className="font-bold text-xl mr-4 tracking-wide text-blue-400">
            ⚙️ HR System
          </div>
          <Link 
            to="/" 
            className="hover:text-blue-300 transition-colors font-semibold text-lg flex items-center gap-2"
          >
            Employees
          </Link>
          <Link 
            to="/departments" 
            className="hover:text-blue-300 transition-colors font-semibold text-lg flex items-center gap-2"
          >
            Departments
          </Link>
        </div>

        {/* Right Side: Logout Button */}
        <button 
          onClick={onLogout}
          className="ml-auto bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm cursor-pointer"
        >
          Log Out
        </button>

      </div>
    </nav>
  );
}