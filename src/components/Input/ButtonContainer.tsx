import { ReactNode } from 'react';
import useClickHandeler from 'components/Input/useClickHandeler';

interface ComponentsProps {
  children: ReactNode;
  id: string;
}

function ButtonContainer({ id, children }: ComponentsProps): JSX.Element {
  const [handleButtonClick, handleKeyPress] = useClickHandeler();

  return (
    <div
      onClick={handleButtonClick}
      onKeyPress={handleKeyPress}
      onLoad={(e) => handleButtonClick(e)}
      role="button"
      tabIndex={0}
    >
      <label
        className="m-2 border h-36 border-stone-400 rounded-md grid place-items-center cursor-pointer"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}

export default ButtonContainer;
