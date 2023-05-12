import { createContext, useState } from 'react';

type ContextType = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CalendarContext = createContext<ContextType>({} as ContextType);

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <CalendarContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </CalendarContext.Provider>
  );
}
