import React,{useState}from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleLogout = () => {
        // Clear the token from local storage or any other client-side storage
        localStorage.removeItem('token');
        setIsLoggedIn(false); // Update isLoggedIn state
    };

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-between items-center">
                <li><Link to="/home" className="text-white">Home</Link></li>
                <li><Link to="/about" className="text-white">About</Link></li>
                <li>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                    ) : (
                        <div>
                            <Link to="/login" className="text-white">Login</Link>
                            <Link to="/register" className="text-white ml-4">Register</Link>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
