import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import CloseBtn from './icons/CloseBtn';
import UserIcon from './icons/UserIcon';

export default function Sidebar() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const location = useLocation();

  return (
    <div
      className={`${
        isOpen ? 'flex' : 'hidden'
      } flex-col w-[40%] h-screen p-2 bg-[#fff] fixed right-0 desktop:w-72 desktop:relative desktop:flex`}
    >
      <CloseBtn />
      {/* user profile */}
      <div className='flex flex-col items-center justify-center mt-20'>
        <UserIcon />
        <strong className='mt-2 text-lg desktop:text-xl'>User Name</strong>
      </div>

      <div className='flex flex-col items-center justify-center mt-12 space-y-3 desktop:text-2xl desktop:space-y-6 desktop:mt-16'>
        <Link
          to='/'
          className={`w-3/4 p-2 font-semibold text-center border-b-2 ${
            location.pathname === '/' ? 'text-textBlue' : null
          }`}
        >
          TODO
        </Link>
        <Link
          to='/achieve'
          className={`w-3/4 p-2 font-semibold text-center border-b-2 ${
            location.pathname === '/achieve' ? 'text-textBlue' : null
          }`}
        >
          ACHIEVE
        </Link>
      </div>
    </div>
  );
}
