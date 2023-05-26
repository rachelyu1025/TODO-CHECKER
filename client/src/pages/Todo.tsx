import { useEffect, useState } from 'react';
import { CalendarProvider } from '../context/CalendarContext';
import { TodoStatusProvider } from '../context/TodoStatusContext';
import Calendar from '../components/todo/Calendar';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import Quotation from '../components/todo/Quotation';
import Progress from '../components/todo/Progress';
import Radio from '../components/todo/Radio';
import { useGetTodos } from '../hooks/useTodos';
import { format } from 'date-fns';

export default function Todo() {
  const todayDate = format(new Date(), 'yyyyMMdd');

  const { data: todos, isSuccess } = useGetTodos(todayDate);
  const [list, setLists] = useState([]);

  useEffect(() => {
    if (isSuccess && todos) {
      setLists(todos.data.todoList);
    }
  }, [isSuccess, todos]);

  const renderTodos = () => {
    if (list) {
      return list.map((todo) => {
        const { todoId, content, status, importance, createdAt, label } = todo;

        return (
          <TodoList
            key={todoId}
            todoId={todoId}
            content={content}
            status={status}
            importance={importance}
            createdAt={createdAt}
            label={label}
          />
        );
      });
    }
  };

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
        <CalendarProvider>
          <TodoInput />
        </CalendarProvider>
        <TodoStatusProvider>
          <fieldset className='flex flex-row m-2 space-x-2 tablet:m-4'>
            <Radio value='All'>All</Radio>
            <Radio value='Active'>Active</Radio>
            <Radio value='Complete'>Complete</Radio>
          </fieldset>
        </TodoStatusProvider>
        <ul className='m-2 overflow-scroll h-1/3'>{renderTodos()}</ul>
      </div>
    </main>
  );
}
