import {
  format,
  startOfMonth,
  endOfMonth,
  getWeekOfMonth,
  addDays,
} from 'date-fns';
import { useContext, useState } from 'react';
import { useQueryClient } from 'react-query';
import { CalendarContext } from '../../context/CalendarContext';
import { useGetTodos } from '../../hooks/useTodos';

export default function Calendar() {
  const {
    date,
    isClicked,
    setIsClicked,
    currMonth,
    setCurrMonth,
    currYear,
    selectDate,
    setSelectDate,
  } = useContext(CalendarContext);
  const [currDate, setCurrDate] = useState<string | null>(format(date, 'd'));

  const queryClient = useQueryClient();

  const today = format(date, 'MMM dd, eee');
  let monthStart = startOfMonth(date); // 해당 달의 시작요일, 일
  const monthEnd = endOfMonth(date); // 해당 달의 마지막일
  let startDate = format(monthStart, 'd'); // 시작일
  const day = Number(format(monthStart, 'e')); // 일요일 시작, 일요일 = 1, 월요일 = 2
  const month = format(date, 'MMM');

  const { refetch, isSuccess } = useGetTodos(selectDate);

  const handleDateFormat = (date: string | null) => {
    let format = `${currYear}${currMonth}${date}`;

    setCurrDate(date);
    setSelectDate(format);
    refetch();

    if (isSuccess) {
      queryClient.invalidateQueries({ queryKey: ['get/todos'] });
    }
  };

  const rows = [];
  let days = [];

  while (monthStart <= monthEnd) {
    let weekOfMonth = getWeekOfMonth(monthStart); //해당 달의 몇번째 주인지

    for (let i = 1; i < 8; i++) {
      if ((weekOfMonth === 1 && i < day) || monthStart > monthEnd) {
        days.push(<div key={`non${i}`} className='w-10 h-10'></div>); // 시작일보다 앞에 위치한 요일 빈칸화
      } else {
        days.push(
          <div
            key={`day${startDate}`}
            className={`relative w-10 h-10 pl-1 text-center `}
            // eslint-disable-next-line no-loop-func
            onClick={(e) => {
              handleDateFormat(e.currentTarget.textContent);
            }}
          >
            <div
              className={`${
                startDate === currDate
                  ? 'absolute border-textBlue border-4 rounded-full w-full h-full bottom-[0.4rem] right-0 left-0.5'
                  : null
              }`}
            ></div>
            {startDate}
          </div>
        );

        monthStart = addDays(monthStart, 1);
        startDate = format(monthStart, 'd');
      }
    }
    rows.push(
      <div
        onClick={() => {
          setIsClicked(false);
        }}
        key={`week${weekOfMonth}`}
        className='flex flex-row justify-between'
      >
        {days}
      </div>
    );

    days = [];
  }

  return (
    <>
      <div
        onClick={() => {
          setIsClicked(true);
        }}
        className={`${
          isClicked ? 'hidden' : 'flex'
        } desktop:hidden flex-row justify-center mt-10`}
      >
        <strong className='text-2xl italic font-bold cursor-pointer'>
          {today}
        </strong>
      </div>
      <div
        className={`${
          isClicked ? 'flex' : 'hidden'
        } flex-col space-y-2 bg-[#fff] rounded-md drop-shadow-2xl w-72 h-54 desktop:flex desktop:w-96 desktop:h-72 cursor-pointer `}
      >
        <strong className='py-2 text-xl text-center desktop:mb-2 '>
          {month}
        </strong>
        <div>{rows}</div>
      </div>
    </>
  );
}
