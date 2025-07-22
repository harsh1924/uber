import '../index.css'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div
        className="bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] bg-cover bg-center h-screen pt-8 w-full flex justify-between flex-col md:hidden">
        <img
          className='w-16 ml-9'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <div className="bg-white pb-7 p-4">
          <h2 className='text-3xl font-bold'>
            Get Started with Uber
          </h2>
          <Link
            to="/login"
            className='w-full flex items-center justify-center bg-black text-white py-3 rounded-md mt-5'
          >
            Continue
          </Link>
        </div>
      </div>

      {/* Laptop Screen Change to Mobile view warning */}
      <div className="hidden md:flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a] text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 mb-6 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 13h2l1 2h12l1-2h2"></path>
          <path d="M5 13V7h14v6"></path>
          <circle cx="7.5" cy="17.5" r="1.5"></circle>
          <circle cx="16.5" cy="17.5" r="1.5"></circle>
        </svg>
        <h1 className="text-2xl font-bold mb-2">Please switch to mobile view</h1>
        <p className="text-gray-300 text-center max-w-xs">
          Our Uber clone is designed just for mobile devices. Resize your browser to see the experience!
        </p>
      </div>
    </div>
  )
}

export default Start