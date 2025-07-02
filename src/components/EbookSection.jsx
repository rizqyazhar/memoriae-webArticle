import { FaBookOpen } from "react-icons/fa";

const EbookSection = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-full h-24 p-3 bg-[#d6bc95] rounded-lg grid grid-cols-4 overflow-hidden'>
        <div className='col-start-1 col-end-2 rounded-sm overflow-hidden'>
          <img
            src='/img/img-7.jpeg'
            className='w-full h-full object-cover object-[30%_50%]'
          />
        </div>
        <div className='col-start-2 col-end-5 flex items-center justify-between px-4'>
          <div className='flex flex-col justify-center text-white'>
            <h5 className='font-medium'>Ensiklopedia Afrika Sejarah</h5>
            <p className='text-xs'>Kelompok 3</p>
          </div>
          <a
            href='https://online.flippingbook.com/view/252208037/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaBookOpen className='text-lg text-white' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EbookSection;
