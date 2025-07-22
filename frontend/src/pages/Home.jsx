import '../index.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)] bg-cover bg-center h-screen pt-8 w-full flex justify-between flex-col bg-red-400">
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
    </div>
  )
}

export default Home