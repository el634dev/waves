// import Logo from "../assets/waves-logo.png";
import HomeHeader from "./Navbar";
import Footer from "./Footer";
import homeBg from "../assets/home-bg.png";
import Stats from "./Stats";
import MarineStats from './MarineStats';

export default function Home() {
    return (
        <div 
            className="h-[100vh] flex flex-col border-cyan-900 dark:text-blue-200"
            style={{ 
                backgroundImage: `url(${homeBg})`, 
                backgroundSize: 'cover', // Adjust background size as needed
                backgroundPosition: 'center', // Adjust background position as needed
                minHeight: '100px' // Ensure the background covers the entire viewport
            }}
        >
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 ml-4 flex flex-col items-start mt-44">
                    <h1 className="border-gray-400 font-semibold text-5xl mb-5 text-white max-w-[459px]">
                        One Green Way To Search
                    </h1>
                    <h2 className="text-2xl md:text-1xl text-white max-w-[452px] mb-4">
                        You find what you need,  <br /> we clean the ocean where it's <br /> most needed.
                    </h2>
                    {/* Search Input Component */}
                    {/* <SearchInput /> */}
                    <div className="flex flex-row gap-5 rounded-xl overflow-hidden">
                        <Stats />
                        <MarineStats />
                    </div>
                </div>
            </main>
            {/* Footer Component */}
            {/* <Footer /> */}
        </div>
    );
};
