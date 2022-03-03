/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, Dispatch, useReducer } from 'react';
import inputReducer from 'context/inputReducer';
import { ComponentsProps } from 'utils/types';

type InitialStateType = {
  errorMessage: boolean;
};

const initialState = {
  errorMessage: true,
};

export const GlobalContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export function GlobalProvider({ children }: ComponentsProps) {
  const [state, dispatch] = useReducer(inputReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
