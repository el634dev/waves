import Logo from "../assets/waves-logo.png";
import HomeHeader from "./Navbar";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="h-[100vh] flex flex-col bg-cyan-700 border-cyan-900 dark:text-blue-200">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-44">
                    {/* Company Logo */}
                    <h1 className="border-b border-gray-400 font-bold text-5xl mb-5 text-blue-900">WAVES</h1>
                    {/* Search Input Component */}
                    <SearchInput />
                    {/* Text below input */}
                    <h1 className="mt-4 text-xl">A cleaner ocean with every search</h1>
                    <h3 className="mt-3 text-md text-center font-bold"> 🌊 202,592,000 <br/> tons of debris removed by the Waves community</h3>
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 text-sm rounded-md border-none bg-gradient-to-r from-yellow-300 to-orange-400">
                            Add to Browser - it's free
                        </button> 
                    </div>
                </div>
            </main>
            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Home;
