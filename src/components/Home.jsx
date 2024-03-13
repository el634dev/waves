import Logo from "../assets/google-logo.png";
import HomeHeader from "./Navbar";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="h-[100vh] flex flex-col dark:bg-cyan-900 border-cyan-900 dark:text-blue-200">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-44">
                    {/* Company Logo */}
                    <img
                        className="w-[172px] md:w-[272px] mb-8"
                        src={Logo}
                        alt="Logo"
                    />
                    {/* Search Input Component */}
                    <SearchInput />
                    <h1 className="mt-4 text-xl">A cleaner ocean with every search</h1>
                    <h3 className="mt-3 text-md"> 🌊 202,592,000 tons of debris removed by the Waves community</h3>
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Add to Browser
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
