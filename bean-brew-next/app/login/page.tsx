// app/page.tsx
import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden bg-repeat bg-[length:900px_900px]"
      style={{ backgroundImage: "url(/hand-drawn-coffee-bean-drawing-pattern.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 z-0"></div>

      {/* Navbar */}
      <nav className="relative z-10 w-full h-20 bg-white shadow-md p-4 flex items-center justify-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center">
          <img src="/mug.svg" alt="Bean Brew Logo" className="h-6 w-6" />
        </div>
        <h1 className="font-bold text-lg">Bean Brew Coffee</h1>
      </nav>

      {/* Coffee Image */}
      <div className="relative z-10 p-5 max-w-lg mx-auto">
        <div className="aspect-video overflow-hidden rounded-2xl flex items-center justify-center">
          <img src="/coffee.jpg" alt="Coffee" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Greetings */}
      <div className="relative z-10 px-5 text-center">
        <h1 className="text-2xl font-bold">Good Morning!</h1>
        <p className="text-md font-light opacity-50">Please, Sign in first to order</p>
      </div>

      {/* Form ID & Pass */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="w-full max-w-lg p-5 space-y-4">
            <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">
            Customer ID or Email
          </label>
          <input
            type="email"
            placeholder="e.g customer@gmail.com"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C47BE4]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="*********"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C47BE4]"
          />
        </div>
        </div>
        
      </div>

      {/* Login button */}
      <div className="relative z-10 px-5 max-w-lg mx-auto">
        <Link
          href="/home"
          className="block w-full bg-[#7132CA] text-white py-2 rounded-xl text-lg font-semibold text-center hover:bg-[#C47BE4] transition"
        >
            Login
        </Link>
      </div>

      {/* Footer */}
      <div className="relative z-10 p-5 text-center">
        <p className="text-md font-normal opacity-50">Forgot Password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
