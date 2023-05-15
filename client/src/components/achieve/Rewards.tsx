import {
  startOfMonth,
  endOfMonth,
  getWeekOfMonth,
  format,
  addDays,
} from 'date-fns';
import stamp from '../../assets/stamp.png';
import emptyStamp from '../../assets/empty-stamp.png';

export default function Rewards() {
  const date = new Date(); // 오늘 날짜, 연도와 달을 받아서 Date 객체 생성
  const month = format(date, 'MMM');

  let monthStart = startOfMonth(date); // 해당 달의 시작요일, 일
  const monthEnd = endOfMonth(date); // 해당 달의 마지막일
  const day = Number(format(monthStart, 'e')); // 일요일 시작, 일요일 = 1, 월요일 = 2

  const rows = [];
  let days = [];

  while (monthStart <= monthEnd) {
    let weekOfMonth = getWeekOfMonth(monthStart); //해당 달의 몇번째 주인지
    for (let i = 1; i < 8; i++) {
      let stampDate = format(monthStart, 'MM.dd');

      if ((weekOfMonth === 1 && i < day) || monthStart > monthEnd) {
        days.push(<div className=''></div>);
      } else {
        days.push(
          <div className='flex flex-col items-center justify-center'>
            <img src={emptyStamp} alt='stamp' width='50px' />
            <span className='mt-2 text-xs font-bold text-textColor'>
              {stampDate}
            </span>
          </div>
        );

        monthStart = addDays(monthStart, 1);
      }

      rows.push(
        <div
          key={`week${weekOfMonth}`}
          className='grid grid-flow-col py-2 border border-textColor'
        >
          {days}
        </div>
      );

      days = [];
    }
  }
  return (
    <>
      <strong className='text-2xl'>{month}</strong>
      <div
        className={`grid w-full h-full grid-flow-row grid-cols-7 border border-textColor bg-[#fff] mt-8 desktop:w-4/5 desktop:mt-12`}
      >
        {rows}
      </div>
    </>
  );
}
