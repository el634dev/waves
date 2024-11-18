import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuIcon() {
    return (
        <div className="flex gap-2 hover:bg-blue-700 bg-blue-800 rounded-full sm:ml-2">
            <span className="h-10 w-10 flex items-center justify-center rounded cursor-pointer hover:bg-black/[0.05]">
                <RxHamburgerMenu size={20} color="#fff" />
            </span>
        </div>
    );
};
