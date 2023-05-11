import { useState } from 'react';
import AddBtn from './AddBtn';

export default function TodoInput() {
  const [label, setLabel] = useState('');
  const [content, setContent] = useState('');

  // const body = {
  //   content,
  //   createdAt: '2023-04-30',
  //   labelTitle: label,
  //   labelColor: '#CCCDDE',
  // };

  const handleLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className='flex flex-row justify-between w-full p-2 outline-none h-fit bg-inputBg'>
      <div>color</div>
      <input
        className='w-1/4 outline-none '
        onChange={handleLabel}
        value={label}
        placeholder=' write your label'
      />
      <input
        className='w-1/3 outline-none'
        onChange={handleContent}
        value={content}
        placeholder=' write your todo!'
      />
      <AddBtn />
    </div>
  );
}
