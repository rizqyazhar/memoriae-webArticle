import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router";
import { RxCross1 } from "react-icons/rx";
import { TbTriangleFilled } from "react-icons/tb";

const Header = () => {
  let navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  const handleNav = (a) => {
    setOpenNav(false);
    navigate(`/${a}`);
  };

  return (
    <header className='sticky top-0 z-50 w-full h-16  border-b border-black bg-white'>
      {openNav && (
        <nav className='z-50 absolute w-1/2 left-3 -bottom-32 rounded-sm bg-gray-900 overflow-hidden shadow-xl/20'>
          <ul className='w-full h-full flex flex-col text-white'>
            <li
              onClick={() => handleNav("home")}
              className='hover:bg-gray-100 active:bg-gray-100 hover:text-black text-xl py-1.5 pl-2 cursor-pointer'>
              Home
            </li>
            <li
              onClick={() => handleNav("about")}
              className='hover:bg-gray-100 active:bg-gray-100 hover:text-black text-xl py-1.5 pl-2 cursor-pointer'>
              About
            </li>
            <li
              onClick={() => handleNav("contact")}
              className='hover:bg-gray-100 active:bg-gray-100 hover:text-black text-xl py-1.5 pl-2 cursor-pointer'>
              Contact
            </li>
          </ul>
        </nav>
      )}
      <div className='w-full h-full px-3 flex items-center justify-between overflow-hidden'>
        <div className='w-3/4 flex items-center gap-3'>
          <div onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <RxCross1 className='translate-y-0.5 cursor-pointer' />
            ) : (
              <RxHamburgerMenu className='translate-y-0.5 cursor-pointer' />
            )}
          </div>
          <img
            src='/logo.png'
            alt='logo'
            className='w-2/5 object-cover object-center translate-y-1.5 cursor-pointer'
            onClick={() => navigate("/home")}
          />
        </div>
        <div className='relative w-1/4 h-fit flex items-center focus-within:outline-2 focus-within:outline-slate-500 rounded-xl'>
          <input
            type='text'
            className='w-full h-5 px-2 py-1 outline-none bg-slate-100 rounded-xl text-xs text-slate-500'
          />
          <CiSearch className='absolute right-2 text-xs' />
        </div>
      </div>
    </header>
  );
};

export default Header;
