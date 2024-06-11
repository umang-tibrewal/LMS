function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 bg-slate-200 p-8">
          <h1 className="font-bold text-2xl text-black text-center font-sans">Login</h1>
          <p className="text-sm mt-7 text-black text-opacity-70 text-center">If you already a member, easily log in</p>
          <form className="flex-1 mb-8">
            <input className="p-2 mt-8 rounded-xl border w-full" type="text" name="email" placeholder="Your email" />
            <div className="relative mt-4">
              <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Your password" />
              <svg className="bi bi-eye-fill absolute top-1/4 right-4 translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
            </div>
            <button className="Login-button rounded-xl text-white py-2 mt-4 w-full">Login</button>
          </form>
          <div className="mt-3 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button className="bg-black border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
            <img className="w-6 mr-3" src="./img/google_logo_icon.png" alt="" />                
            Login with Google
          </button>
          <button className="bg-black border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
            <img className="w-6 mr-3" src="./img/google_logo_icon.png" alt="" />                
            Login with FaceBook
          </button>
          <p className="mt-5 text-xs border-b border-gray-400 py-4">
            <a href="" style={{color:"black"}}>Forgot Your password?</a>
          </p>
          <div className="mt-3 text-xs flex justify-between items-center">
            <p>
              <a href="#" style={{color:"black"}}>If you don't have an account?</a>
            </p>
            <button className="py-2 px-5 bg-black border rounded-xl">Register</button>
          </div>
        </div>
        <div className="w-1/2 bg-green-500 flex items-center p-8">
  <div className="pl-8">
    <h2 className="text-2xl font-bold mb-4 text-white">LMS - Learning and Management Software</h2>
    <p className="text-white">
      "In today's world, the only sustainable competitive advantage is your ability to learn faster than your competitors." 
    </p>
  </div>
</div>
      </div>
    </div>
  );
}

export default Login;