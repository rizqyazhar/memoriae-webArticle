import { MdOutlineArticle } from "react-icons/md";
import PostSection from "../components/PostSection.jsx";
import EbookSection from "../components/EbookSection.jsx";

const HomePage = () => {
  return (
    <div className='min-h-dvh px-3 pt-10 pb-20 bg-slate-100 font-inter grid gap-10'>
      <section className=' flex flex-col gap-7'>
        <div className='bg-gray-900 px-2 py-1 rounded-lg w-fit flex items-center gap-2'>
          <h1 className='text-sm text-white select-none'>All Post</h1>
          <MdOutlineArticle className='text-white' />
        </div>
        <PostSection />
      </section>
      <section className='flex flex-col gap-7'>
        <div className='bg-gray-900 px-2 py-1 rounded-lg w-fit flex items-center gap-2'>
          <h1 className='text-sm text-white select-none'>Ebook</h1>
          <MdOutlineArticle className='text-white' />
        </div>
        <EbookSection />
      </section>
    </div>
  );
};

export default HomePage;
