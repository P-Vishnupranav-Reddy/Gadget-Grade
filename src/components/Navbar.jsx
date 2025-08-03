import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-white py-2 px-5 ring-1 ring-slate-900/5 relative">
      <div className="flex  items-center flex-shrink-0">
        <img src={logo} alt="Logo" className="h-20 w-22" />
      </div>
      <div className="uppercase text-center text-3xl font-bold text-white bg-slate-500 px-5 py-3 rounded-md tracking-widest max-xs:text-lg max-xs:py-2 max-xs:px-3 max-xs:w-full">
      ADMIN PANEL
      </div>
      <div className="flex items-center max-xs:w-full">
        <img src={profile} alt="Profile" className="h-18 w-18 rounded-full max-xs:h-8 max-xs:w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
