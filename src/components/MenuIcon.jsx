import { RxHamburgerMenu } from "react-icons/rx";

const MenuIcon = () => {
    return (
        <div className="flex gap-2 bg-gray-500 rounded">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                <RxHamburgerMenu size={20} color="#AAAAAA" />
            </span>
        </div>
    );
};

export default MenuIcon;
