import { ReactNode } from 'react';

interface ComponentsProps {
  children: ReactNode;
}

function ButtonContainer({ children }: ComponentsProps) {
  return (
    <div className="p-4 m-2 border min-w-40 h-40 border-stone-400 rounded-md grid place-items-center  cursor-pointer">
      {children}
    </div>
  );
}

export default ButtonContainer;
