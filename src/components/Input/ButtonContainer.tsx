import { ReactNode } from 'react';

interface ComponentsProps {
  children: ReactNode;
  id: string;
}

type HandleButtonClick = (e: any) => void;

function ButtonContainer({ id, children }: ComponentsProps): JSX.Element {
  const handleButtonClick: HandleButtonClick = (e) => {
    console.log(e.target.checked);
  };

  const handleKeyPress: HandleButtonClick = () => {
    // console.log(e);
  };
  return (
    <div
      className="p-4 m-2 border min-w-40 h-40 border-stone-400 rounded-md grid place-items-center cursor-pointer"
      onClick={handleButtonClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

export default ButtonContainer;
