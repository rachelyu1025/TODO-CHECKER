import { useContext } from 'react';
import { TodoStatusContext } from '../../context/TodoStatusContext';

type Radio = {
  value: string;
  children: React.ReactNode;
};

export default function Radio({ children, value }: Radio) {
  const { status, setStatus } = useContext(TodoStatusContext);

  return (
    <label
      className={`flex items-center ${
        value === status ? 'text-[#f87272]' : 'text-textColor'
      }`}
    >
      <input
        className={`mr-1 radio-error radio-sm radio`}
        type='checkbox'
        name='todo status'
        value={value}
        checked={value === status ? true : false}
        onChange={(e) => setStatus(e.target.value)}
      />
      {children}
    </label>
  );
}
