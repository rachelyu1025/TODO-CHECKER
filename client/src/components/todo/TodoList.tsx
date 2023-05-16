import { useContext, useState } from 'react';
import { StarContext } from '../../context/StarContext';
import BinIcon from '../icons/BinIcon';
import PenIcon from '../icons/PenIcon';
import { EmptyStar, FilledStar } from '../icons/Star';
import { TodoType } from '../../utils/todoType';

export default function TodoList({
  todoId,
  content,
  status,
  importance,
  createdAt,
  label,
}: TodoType) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const listId = todoId?.toString();

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className='flex flex-row items-center space-x-3 space-y-2 text-center desktop:space-x-10'>
      <input
        id={listId}
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckbox}
        className='checkbox checkbox-info'
      />
      <label htmlFor={listId} className='text-[#000] px-2 py-1 rounded-2xl'>
        {label?.labelTitle}
      </label>
      <p
        className={`${
          isChecked ? 'line-through' : 'text-[#000] '
        } desktop:text-lg ${status ? 'text-[#FF005C]' : null}`}
      >
        {content}
      </p>

      <div className='flex flex-row space-x-2 font-extrabold'>
        {status ? <FilledStar /> : <EmptyStar />}
        <PenIcon />
        <BinIcon />
      </div>
    </li>
  );
}
