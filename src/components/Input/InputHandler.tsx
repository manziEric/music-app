import { createContext, ReactNode } from 'react';

export const InputHandlerContext = createContext<any>(null);

interface ComponentsProps {
  children: ReactNode;
}

function InputHandler({ children }: ComponentsProps): JSX.Element {
  return (
    <InputHandlerContext.Provider value={null}>
      <div className="p-6 basis-3/4  h-40  mx-auto bg-white rounded-xl shadow-md flex flex-row items-center justify-center space-x-4">
        {children}
      </div>
    </InputHandlerContext.Provider>
  );
}

export default InputHandler;
