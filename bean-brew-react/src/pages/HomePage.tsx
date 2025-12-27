import profile from '../assets/profile.png'
import bell from '../assets/bell.svg'
import './App.css'


const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#fffcff]">

            {/* Navbar */}
            <nav className="w-full h-20 bg-white shadow-md p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-400 flex items-center justify-center overflow-hidden">
                    <img src={profile} alt="proflie" />
                </div>

                <div className="flex justify-between w-full">
                    <div>
                        <h4 className="text-xs">Cikarang</h4>
                        <h2 className="font-bold">Muhammad Haris Amin</h2>
                    </div>

                    <div className='h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center'>
                    <img src={bell} alt="bell" className='h-5 w-5 opacity-70' />
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default HomePage