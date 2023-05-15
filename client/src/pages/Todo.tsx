import { CalendarProvider } from '../context/CalendarContext';
import { StarProvider } from '../context/StarContext';
import { TodoStatusProvider } from '../context/TodoStatusContext';
import Calendar from '../components/todo/Calendar';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import Quotation from '../components/todo/Quotation';
import Progress from '../components/todo/Progress';
import Radio from '../components/todo/Radio';

export default function Todo() {
  return (
    <main className='w-full p-3 m-3 h-1/2'>
      <h1 className='text-3xl font-semibold desktop:mb-8'> TODO</h1>

      <div className='flex flex-col desktop:flex-row desktop:justify-around'>
        <CalendarProvider>
          <Calendar />
        </CalendarProvider>

        {/* Progress bar */}
        <Progress />
      </div>

      {/* Quotation */}
      <Quotation />

      {/* Todo list */}
      <div className='mt-4 bg-[#fff] rounded-b-md'>
        <TodoInput />
        <TodoStatusProvider>
          <fieldset className='flex flex-row m-2 space-x-2 tablet:m-4'>
            <Radio value='All'>All</Radio>
            <Radio value='Active'>Active</Radio>
            <Radio value='Complete'>Complete</Radio>
          </fieldset>
        </TodoStatusProvider>
        <ul className='m-2 overflow-scroll h-1/3'>
          <StarProvider>
            <TodoList />
          </StarProvider>
        </ul>
      </div>
    </main>
  );
}
