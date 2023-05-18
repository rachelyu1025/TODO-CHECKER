import { useContext, useState } from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import AddBtn from './AddBtn';

export default function TodoInput() {
  const { selectDate } = useContext(CalendarContext);
  const [label, setLabel] = useState('');
  const [content, setContent] = useState('');

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
        className='w-1/4 p-1 rounded outline-none'
        onChange={handleLabel}
        value={label}
        placeholder=' type label'
      />
      <input
        className='w-1/3 p-1 rounded outline-none'
        onChange={handleContent}
        value={content}
        placeholder='type todo'
      />
      <AddBtn
        labelColor={'#CCCDDE'}
        labelTitle={label}
        content={content}
        createdAt={selectDate}
        setLabel={setLabel}
        setContent={setContent}
      />
    </div>
  );
}
