import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const PostSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/readmore");
  };
  return (
    <div className='flex flex-col gap-3'>
      <div
        className='group relative rounded-lg overflow-hidden cursor-pointer'
        onClick={handleClick}>
        <img
          src='/img/img-1.jpg'
          alt='Candi Sukuh'
          className='w-full h-full object-center object-cover group-hover:scale-110 transition-all duration-500'
        />
        <div className='absolute bottom-0 w-full h-2/5 p-3 bg-black/40 flex flex-col justify-between'>
          <h3 className='text-white font-medium'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            ad?
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
