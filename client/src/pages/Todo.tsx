import { StarProvider } from '../context/StarContext';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import Quotation from '../components/todo/Quotation';
import Progress from '../components/todo/Progress';

export default function Todo() {
  return (
    <main className='relative w-full p-3 m-3 h-1/2'>
      <h1 className='absolute left-0 text-3xl font-semibold top-1'>TODO</h1>

      {/* Progress bar */}
      <Progress />

      {/* Quotation */}
      <Quotation />

      {/* Todo list */}
      <div className='mt-4 bg-[#fff] rounded-b-md'>
        <TodoInput />
        <ul className='m-2 overflow-scroll h-1/3'>
          <StarProvider>
            <TodoList />
          </StarProvider>
        </ul>
      </div>
    </main>
  );
}
