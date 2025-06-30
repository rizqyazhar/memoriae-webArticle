const Footer = () => {
  return (
    <footer className='w-full h-20 flex justify-center items-center border-t border-black bg-slate-100 font-inter'>
      <p>&copy; {new Date().getFullYear()} Memoriae. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
