import { useState } from 'react';
import BinIcon from '../icons/BinIcon';
import PenIcon from '../icons/PenIcon';
import { EmptyStar, FilledStar } from '../icons/Star';
import { TodoType } from '../../utils/todoType';
import CheckIcon from '../icons/CheckIcon';

export default function TodoList({
  todoId,
  content,
  status,
  importance,
  createdAt,
  label,
}: TodoType) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  const listId = todoId?.toString();

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className='flex flex-row items-center space-x-3 space-y-2 text-center desktop:space-x-10'>
      {/* check section */}
      <input
        id={listId}
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckbox}
        className='checkbox checkbox-info'
      />

      {/* label section */}
      <label htmlFor={listId} className='text-[#000] px-2 py-1 rounded-2xl'>
        {label?.labelTitle}
      </label>

      {/* content section  */}
      {isModify ? (
        <input
          className='w-16 px-1 border-2 rounded outline-none tablet:w-48 desktop:w-64 desktop:max-w-80 border-inputBg'
          type='text'
          value={text}
          placeholder={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
      ) : (
        <p
          className={`${
            isChecked ? 'line-through' : 'text-[#000] '
          } desktop:text-lg ${importance ? 'text-[#FF005C]' : null}`}
        >
          {content}
        </p>
      )}

      {/* Icon section */}
      <div className='flex flex-row space-x-2 font-extrabold'>
        {importance ? (
          <FilledStar todoId={todoId} />
        ) : (
          <EmptyStar todoId={todoId} />
        )}
        {isModify ? (
          <CheckIcon
            todoId={todoId}
            content={text}
            handleModify={setIsModify}
          />
        ) : (
          <PenIcon todoId={todoId} onClick={setIsModify} />
        )}
        <BinIcon todoId={todoId} />
      </div>
    </li>
  );
}
