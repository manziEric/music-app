import { createContext, ReactNode } from 'react';

export const InputHandlerContext = createContext<any>(null);

interface ComponentsProps {
  children: ReactNode;
}

function InputHandler({ children }: ComponentsProps): JSX.Element {
  return (
    <InputHandlerContext.Provider value={null}>
      <div className="p-6  mx-auto bg-white rounded-xl shadow-md grid grid-cols-4 gap-4 col-span-3 items-center space-x-4">
        {children}
      </div>
    </InputHandlerContext.Provider>
  );
}

export default InputHandler;
