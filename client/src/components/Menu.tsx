import { useContext } from 'react';
import { SidebarContext } from '../context/SidebarContext';

export default function Menu() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleClick = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setIsOpen(true);
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${
        isOpen ? 'hidden' : null
      } fixed w-8 h-8 mt-3 right-3 desktop:hidden cursor-pointer`}
      onClick={handleClick}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
}
