import axios from "axios";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
        .then((res) => {
            if (res.data.token) {
                localStorage.setItem('token', res.data.token); 
                navigate('/home');
                alert('Login Success');
            } else {
                alert('Login Failed');
            }
        })
        .catch(err => console.log(err));
};
  return (
    <div className='flex justify-center items-center h-screen'  style={{ 
      background: "url('https://source.unsplash.com/1600x900/?nature,water')"
    }}>
    <div className="bg-white p-6 rounded-[15px] shadow-md w-96 backdrop-filter backdrop-blur-md bg-opacity-20">
        <h2>LogIn</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
            <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="email" placeholder='Email' autoComplete='off' name='email' className='w-full' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password" placeholder='Password' name='password' className='w-full' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg w-full'>Login</button>
        </form>
        <p className="mt-4 text-sm text-white">Don't have an account?</p>
                <Link to="/register" className="bg-blue-500 text-white p-2 rounded-lg w-full block text-center mt-2">
                    Register
                </Link>
    </div>
</div> );
}
