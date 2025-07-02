import { useState } from "react";
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
        <nav className='z-50 absolute w-1/2 right-3 -bottom-32 rounded-sm bg-gray-900 overflow-hidden shadow-xl/20'>
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
      <div className='w-full h-full px-3 flex items-center justify-between gap-3 overflow-hidden'>
        <img
          src='/logo.png'
          alt='logo'
          className='w-1/3 object-cover object-center translate-y-1.5 cursor-pointer'
          onClick={() => navigate("/home")}
        />
        <div onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <RxCross1 className='text-2xl translate-y-0.5 cursor-pointer' />
          ) : (
            <RxHamburgerMenu className='text-2xl translate-y-0.5 cursor-pointer' />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
