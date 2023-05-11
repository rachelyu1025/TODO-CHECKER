import { StarProvider } from '../context/StarContext';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';

export default function Todo() {
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
