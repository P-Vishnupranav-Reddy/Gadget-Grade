import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { useContext } from "react";

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);

    return (
        <header className="fixed top-0 left-0 m-auto w-full bg-white ring-1 ring-slate-900/5 z-10">
            <div className="px-4 flexBetween py-3 max-xs:px-2">
                
                {/* Logo */}
                <div>
                    <Link to="/"> {/* Added the 'to' attribute */}
                        <img src={logo} alt="Logo" height={60} width={60} />
                        <span className="logo-text font-serif"> GADGET GRADE </span>  
                    </Link>
                </div>
                
                {/* Navbar for larger screens */}
                <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-18"} />

                {/* Navbar for mobile screens */}
                <div className={`${menuOpened ? "flex" : "hidden"} item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-xl shadow-md w-64 medium-18 ring-1 ring-slate-900/5 transition-all duration-300`}>
                    <Navbar containerStyles={"flex flex-col gap-y-5"} />
                </div>

                {/* Menu Icon for mobile toggle */}
                <div className="flexBetween sm:gap-x-6 bold-16">
                    {!menuOpened ? (
                        <MdMenu className="cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
                    ) : (
                        <MdClose className="cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu} />
                    )}
                    <div className="flexBetween sm:gap-x-6">
                        {/*<Link to={'user-page'} className={flex}>
                        <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 top-2">{allrevievs}</span>
                        </Link>*/}

                        {localStorage.getItem('auth-token') ? <Link onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}to={'logout'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> Logout </Link> :
                        <Link to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> Login </Link> }
                    
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
