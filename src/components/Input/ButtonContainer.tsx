import { ReactNode } from 'react';

interface ComponentsProps {
  children: ReactNode;
}

function ButtonContainer({ children }: ComponentsProps) {
  return <div className="border border-stone-400">{children}</div>;
}

export default ButtonContainer;
