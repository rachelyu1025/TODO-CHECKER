import { useContext, useState } from 'react';
import { StarContext } from '../../context/StarContext';
import BinIcon from '../icons/BinIcon';
import PenIcon from '../icons/PenIcon';
import { EmptyStar, FilledStar } from '../icons/Star';

export default function TodoList() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { isClicked, setIsClicked } = useContext(StarContext);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className='flex flex-row items-center space-x-3 space-y-2 text-center desktop:space-x-10'>
      <input
        // id={}
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckbox}
        className='checkbox checkbox-info'
      />
      <label
        // htmlFor={}
        className='text-[#000] px-2 py-1 rounded-2xl'
      >
        label
      </label>
      <p
        className={`${
          isChecked ? 'line-through' : 'text-[#000] '
        } desktop:text-lg ${isClicked ? 'text-[#FF005C]' : null}`}
      >
        content
      </p>

      <div className='flex flex-row space-x-2 font-extrabold'>
        {isClicked ? <FilledStar /> : <EmptyStar />}
        <PenIcon />
        <BinIcon />
      </div>
    </li>
  );
}
