import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const PostSection = () => {
  let navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3'>
      <div
        className='group h-60 relative rounded-lg overflow-hidden cursor-pointer'
        onClick={() => navigate("/one")}>
        <img
          src='/img/img-1.jpeg'
          alt='Candi Sukuh'
          className='w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-500'
        />
        <div className='absolute bottom-0 w-full h-2/5 p-3 bg-black/40 flex flex-col justify-between'>
          <h3 className='text-white font-medium'>
            Runtuhnya Kekaisaran Romawi: Awal Zaman Baru bagi Eropa
          </h3>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <IoPersonSharp className='text-white text-xs' />
              <p className='text-white text-xs'>John Doe</p>
            </div>
            <p className='text-xs text-white'>01 / 07 / 2025</p>
          </div>
        </div>
        <div className='absolute inset-0 bg-black/10'></div>
      </div>
      <div
        className='group h-60 relative rounded-lg overflow-hidden cursor-pointer'
        onClick={() => navigate("/two")}>
        <img
          src='/img/img-2.jpeg'
          alt='Candi Sukuh'
          className='w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-500'
        />
        <div className='absolute bottom-0 w-full h-2/5 p-3 bg-black/40 flex flex-col justify-between'>
          <h3 className='text-white font-medium'>
            Apartheid di Afrika Selatan: Dari Rezim Rasial Menuju Demokrasi
            Multirasial
          </h3>
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <IoPersonSharp className='text-white text-xs' />
              <p className='text-white text-xs'>John Doe</p>
            </div>
            <p className='text-xs text-white'>01 / 07 / 2025</p>
          </div>
        </div>
        <div className='absolute inset-0 bg-black/10'></div>
      </div>
    </div>
  );
};

export default PostSection;
