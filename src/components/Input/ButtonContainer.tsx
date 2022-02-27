import { ReactNode } from 'react';

interface ComponentsProps {
  children: ReactNode;
}

function ButtonContainer({ children }: ComponentsProps) {
  return (
    <div className="p-4 border border-stone-400 rounded-md flex flex-col basis-1/5 items-center justify-center cursor-pointer">
      {children}
    </div>
  );
}

export default ButtonContainer;
