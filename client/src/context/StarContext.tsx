import { createContext, useState } from 'react';

type ContextType = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};
export const StarContext = createContext<ContextType>({} as ContextType);

export function StarProvider({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <StarContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </StarContext.Provider>
  );
}
