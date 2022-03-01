import { createContext, ReactNode } from 'react';

export const InputHandlerContext = createContext<any>(null);

interface ComponentsProps {
  children: ReactNode;
}

function InputHandler({ children }: ComponentsProps): JSX.Element {
  return (
    <InputHandlerContext.Provider value={null}>
      <div
        className="p-6 h-auto bg-white rounded-xl shadow-md grid grid-cols-1 md:grid md:grid-cols-1 md:col-span-3
        lg:grid lg:grid-cols-4 lg:col-span-3 items-center
      "
      >
        {children}
      </div>
    </InputHandlerContext.Provider>
  );
}

export default InputHandler;
