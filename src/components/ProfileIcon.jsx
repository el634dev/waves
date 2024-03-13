import { RxHamburgerMenu } from "react-icons/rx";

import Profile from "../assets/profile-200x200.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="flex gap-2 bg-gray-500 rounded">
            {/* <button 
                    type="button" 
                    onClick={() => setDarkTheme(!darkTheme)}
                    className='text-xl dark:border-cyan-900 border-cyan-900 dark:text-blue-200 rounded-full px-2 py-1'>
                    { darkTheme ? '☼' : '☽'}
            </button> */}
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <RxHamburgerMenu size={20} color="#AAAAAA" />
            </span>
        </div>
        
    );
};

export default ProfileIcon;
