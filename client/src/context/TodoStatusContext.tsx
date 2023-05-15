import { createContext, useState } from 'react';

type ContextType = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoStatusContext = createContext<ContextType>({} as ContextType);

export function TodoStatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<string>('All');

  return (
    <TodoStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </TodoStatusContext.Provider>
  );
}
