import { useState } from "react"
import { Link } from "react-router-dom"

const CaptainSignup = () => {
  const [user, setUser] = useState({
    fullname: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: ""
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here

  };

  return (
    <div className="p-5 font-serif flex flex-col justify-between h-screen">
      <div>
        <img
          className='w-20 mb-2'
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Logo"
        />

        <form
          onSubmit={handleSubmit}
        >
          <h3 className="text-base font-medium mb-2">What's your name</h3>
          <div className="flex gap-1 mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 placeholder:text-gray-400 placeholder:text-sm placeholder:font-sans"
              type="text"
              placeholder="First Name..."
              required
              value={user.fullname.firstName}
              onChange={(e) => setUser({ ...user, fullname: { ...user.fullname, firstName: e.target.value } })}
              id="firstname"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 placeholder:text-gray-400 placeholder:text-sm placeholder:font-sans"
              type="text"
              placeholder="Last Name..."
              required
              value={user.fullname.lastName}
              onChange={(e) => setUser({ ...user, fullname: { ...user.fullname, lastName: e.target.value } })}
              id="lastname"
            />
          </div>

          <h3 className="text-base font-medium mb-2">What's your email address?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-sans mb-5"
            type="email"
            placeholder="Enter your email address..."
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            id="email"
          />

          <h3 className="text-base font-medium mb-2">What's your password?</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-sans mb-5"
            type="password"
            placeholder="Enter your password..."
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            id="password"
          />

          <button
            className="bg-[#111] text-[#fff] font-semibold rounded px-4 py-2 w-full text-lg mb-3"
          >
            Create Account
          </button>

          <p className="text-center text-sm font-sans">
            Already have an account? <Link
              to="/captain-login"
              className="text-blue-600 font-semibold"
            >
              Login Here
            </Link>
          </p>
        </form>
      </div>

      <div className="text-xs text-gray-500 font-sans leading-tight">
        <p>
          This site is protected by reCAPTCHA and the <span className="underline cursor-pointer text-blue-600">Google Privacy Policy</span> and Terms of Service apply.
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup