import { createContext } from 'react';
import { ComponentsProps } from 'utils/types';

export const InputHandlerContext = createContext<any | null>(null);

function InputHandler({ children }: ComponentsProps): JSX.Element {
  return (
    <InputHandlerContext.Provider value={null}>
      <div
        className="p-6 h-auto bg-white rounded-xl shadow-md grid grid-cols-1 md:grid md:grid-cols-1 md:col-span-3
        lg:grid lg:grid-cols-4 lg:col-span-3
      "
      >
        {children}
      </div>
    </InputHandlerContext.Provider>
  );
}

export default InputHandler;
