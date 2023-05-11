import { StarProvider } from '../../context/StarContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function TodoContainer() {
  return (
    <main className='w-full p-3 m-3 bg-[#fff] h-1/2'>
      <TodoInput />
      <ul className='m-2 overflow-scroll h-1/3'>
        <StarProvider>
          <TodoList />
        </StarProvider>
      </ul>
    </main>
  );
}
