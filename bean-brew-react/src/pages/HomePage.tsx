import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
import bell from "../assets/bell.png";
import bgPattern from "../assets/hand-drawn-coffee-bean-drawing-pattern.png";
import orderBg from "../assets/coffee-6362598_1920.jpg";
import orderBg2 from "../assets/2151899225.jpg";
import orderBg3 from "../assets/29204.jpg";
import mug from "../assets/mug.svg";
import french from "../assets/french-fries.svg";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#fffcff]">
      {/* Navbar */}
      <nav className="w-full h-20 bg-white shadow-md p-4 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-orange-400 flex items-center justify-center overflow-hidden">
          <img src={profile} alt="proflie" />
        </div>

        <div className="text-start flex justify-between w-full">
          <div>
            <h4 className="text-xs">Cikarang</h4>
            <h2 className="font-bold">Muhammad Haris Amin</h2>
          </div>

          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <img src={bell} alt="bell" className="h-5 w-5 opacity-70" />
          </div>
        </div>
      </nav>
      {/* Background */}
      <main
        className="relative min-h-screen bg-repeat"
        style={{ backgroundImage: `url(${bgPattern})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/90 z-0"></div>

        <div className="relative z-10">
          {/* Greetings! */}
          <div className="p-5">
            <h1 className="text-start text-3xl font-bold">
              Good Morning, Haris
            </h1>
            <h3 className="text-start text-md font-light opacity-50">
              Ready to brew some magic?
            </h3>
          </div>

          {/* New Order (1st Menu) */}
          <div className="px-5">
            <Link
              to="/menu"
              className="p-6 h-64 rounded-xl shadow-lg flex justify-between items-center bg-cover bg-center relative overflow-hidden hover:scale-[1.02] transition"
              style={{ backgroundImage: `url(${orderBg})` }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

              <div className="relative z-10">
                <h1 className="text-start text-xl text-white font-bold">
                  New Order
                </h1>
                <h3 className="text-start text-white opacity-75 pt-2">
                  Start a new transaction
                </h3>
              </div>
            </Link>
          </div>

          {/* Addition Menu */}
          <div className="px-5 pt-5 grid grid-cols-2 gap-4">
            {/* 2nd Menu */}
            <Link
              to="/history"
              className="p-6 h-64 rounded-xl shadow-lg flex justify-between items-center bg-cover bg-center relative overflow-hidden hover:scale-[1.02] transition"
              style={{ backgroundImage: `url(${orderBg2})` }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

              <div className="relative z-10">
                <h1 className="text-start text-xl text-white font-bold">
                  History
                </h1>
                <h3 className="text-start text-white opacity-75 pt-2">
                  View Past Order
                </h3>
              </div>
            </Link>

            {/* 3rd Menu */}
            <Link
              to="/history"
              className="p-6 h-64 rounded-xl shadow-lg flex justify-between items-center bg-cover bg-center relative overflow-hidden hover:scale-[1.02] transition"
              style={{ backgroundImage: `url(${orderBg3})` }}
            >
              <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

              <div className="relative z-10">
                <h1 className="text-start text-xl text-white font-bold">
                  Menu
                </h1>
                <h3 className="text-start text-white opacity-75 pt-2">
                  Choose Your Favorite Blend
                </h3>
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="flex justify-between px-5 pt-6">
            <h2 className="text-lg font-extrabold">Recent Activity</h2>
            <span className="text-[#7132CA] font-extrabold">View All</span>
          </div>

          {/* Recent Activity */}
          <div className="flex flex-col gap-4 px-5 py-3">
            
            <div className="flex item-center">
              <div className="h-14 w-14 rounded-full bg-gray-300/50 flex items-center justify-center">
                <img src={mug} className="h-7 opacity-40" />
              </div>

              <div className="flex justify-between w-full px-5">
                <div>
                  <h2 className="text-start font-semibold">#5402 Order</h2>
                  <p className="text-gray-400 text-sm">2 item - Takeaway</p>
                </div>

                <div className="text-right">
                  <h2 className="font-semibold">Rp 20</h2>
                  <p className="text-gray-400 text-sm">3m ago</p>
                </div>
              </div>
            </div>

            <div className="flex item-center">
              <div className="h-14 w-14 rounded-full bg-gray-300/50 flex items-center justify-center">
                <img src={french} className="h-7 opacity-40" />
              </div>

              <div className="flex justify-between w-full px-5">
                <div>
                  <h2 className="text-start font-semibold">#5401 Order</h2>
                  <p className="text-gray-400 text-sm">1 item - Takeaway</p>
                </div>

                <div className="text-right">
                  <h2 className="font-semibold">Rp 12</h2>
                  <p className="text-gray-400 text-sm">2d ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
