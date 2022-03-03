/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useReducer } from 'react';
import inputReducer from 'context/inputReducer';

interface ComponentsProps {
  children: ReactNode;
}

export const GlobalContext = createContext<any>({});

const initialState = {
  errorMessage: true,
};

export function GlobalProvider({ children }: ComponentsProps) {
  const [InputState, dispatch] = useReducer(inputReducer, initialState);

  return (
    <GlobalContext.Provider value={{ InputState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
