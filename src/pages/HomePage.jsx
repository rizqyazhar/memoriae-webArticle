import { MdOutlineArticle } from "react-icons/md";
import Main from "../components/Main";

const HomePage = () => {
  return (
    <div className='min-h-dvh px-3 pt-10 pb-20 bg-slate-100 font-inter flex flex-col gap-5'>
      <section className='bg-black px-2 py-1 rounded-lg w-fit flex items-center gap-2'>
        <h1 className='text-sm text-white select-none'>All Post</h1>
        <MdOutlineArticle className='text-white' />
      </section>
      <Main />
    </div>
  );
};

export default HomePage;
