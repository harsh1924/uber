const UserLogin = () => {
  return (
    <div className="p-7 font-serif">
      <form action="">
        <h3 className="text-xl mb-2">What's your email address?</h3>
        <input
          className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm mb-7"
          type="email"
          placeholder="Enter your email address..."
          required
          id="email"
        />

        <h3 className="text-xl mb-2">What's your password?</h3>
        <input
          className="bg-[#eeeeee] rounded px-4 py-2 w-full text-lg placeholder:text-sm mb-7"
          type="password"
          placeholder="Enter your password..."
          required
          id="password"
        />

        <button className="bg-[#111] text-[#fff] font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-sm mb-7">
          Login
        </button>
      </form>
    </div>
  )
}

export default UserLogin