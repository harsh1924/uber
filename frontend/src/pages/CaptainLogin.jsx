import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

  };
  return (
    <div className="p-7 font-serif flex flex-col justify-between h-screen">
      <div>
        <img
          className='w-20 mb-2'
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Logo"
        />

        <form
          action=""
          onSubmit={handleSubmit}
        >
          <h3 className="text-lg font-medium mb-2">What's your email address?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-gray-400 placeholder:text-sm placeholder:font-sans mb-7"
            type="email"
            placeholder="Enter your email address..."
            required
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <h3 className="text-lg font-medium mb-2">What's your password?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-gray-400 placeholder:text-sm placeholder:font-sans mb-7"
            type="password"
            placeholder="Enter your password..."
            required
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            className="bg-[#111] text-[#fff] font-semibold rounded px-4 py-2 w-full text-lg mb-3"
          >
            Login
          </button>

          <p className="text-center text-sm font-sans">
            Join a fleet. <Link
              to="/captain-signup"
              className="text-blue-600 font-semibold"
            >
              Register as a captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-[#d56] flex items-center justify-center text-[#fff] font-semibold rounded px-4 py-2 w-full text-lg mb-3"
        >
          Sign In as User 
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin