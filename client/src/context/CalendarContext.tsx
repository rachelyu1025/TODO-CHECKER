import { createContext, useState } from 'react';
import { format } from 'date-fns';

type ContextType = {
  date: Date;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  currYear: string;
  setCurrYear: React.Dispatch<React.SetStateAction<string>>;
  currMonth: string;
  setCurrMonth: React.Dispatch<React.SetStateAction<string>>;
  selectDate: string;
  setSelectDate: React.Dispatch<React.SetStateAction<string>>;
};

export const CalendarContext = createContext<ContextType>({} as ContextType);

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const date = new Date();
  const year = format(date, 'yyyy');
  const month = format(date, 'MM');

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [currYear, setCurrYear] = useState<string>(year);
  const [currMonth, setCurrMonth] = useState<string>(month);
  const [selectDate, setSelectDate] = useState<string>(
    format(date, 'yyyyMMdd')
  );

  return (
    <CalendarContext.Provider
      value={{
        date,
        isClicked,
        setIsClicked,
        currMonth,
        setCurrMonth,
        currYear,
        setCurrYear,
        selectDate,
        setSelectDate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
