import {
  format,
  // getDaysInMonth,
  startOfMonth,
  endOfMonth,
  getWeekOfMonth,
  addDays,
} from 'date-fns';
import { useContext } from 'react';
import { CalendarContext } from '../../context/CalendarContext';

export default function Calendar() {
  const { isClicked, setIsClicked } = useContext(CalendarContext);

  const date = new Date(); // 오늘 날짜, 연도와 달을 받아서 Date 객체 생성
  const today = format(date, 'MMM dd, eee');
  // const monthDays = getDaysInMonth(date); // 해당 달의 총 일수
  let monthStart = startOfMonth(date); // 해당 달의 시작요일, 일
  const monthEnd = endOfMonth(date); // 해당 달의 마지막일
  let startDate = format(monthStart, 'd'); // 시작일
  const day = Number(format(monthStart, 'e')); // 일요일 시작, 일요일 = 1, 월요일 = 2
  const month = format(date, 'MMM');

  const rows = [];
  let days = [];

  while (monthStart <= monthEnd) {
    let weekOfMonth = getWeekOfMonth(monthStart); //해당 달의 몇번째 주인지

    for (let i = 0; i < 7; i++) {
      if ((weekOfMonth === 1 && i < day - 1) || monthStart > monthEnd) {
        // 일요일이 1로 설정되어있기에 day -1 해주어야함
        days.push(<div className='w-10 h-10'></div>);
      } else {
        days.push(<div className='w-10 h-10 pl-1 '>{startDate}</div>);

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
