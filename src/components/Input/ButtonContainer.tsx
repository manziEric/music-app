import { ReactNode } from 'react';
import useClickHandeler from 'components/Input/useClickHandeler';

interface ComponentsProps {
  children: ReactNode;
  id: number;
}

function ButtonContainer({ id, children }: ComponentsProps): JSX.Element {
  const [handleButtonClick, handleKeyPress] = useClickHandeler();

  return (
    <div
      onChange={handleButtonClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
    >
      <label
        className="m-2 border h-36 border-stone-400 rounded-md grid place-items-center cursor-pointer"
        htmlFor={id.toString()}
      >
        {children}
      </label>
    </div>
  );
}

export default ButtonContainer;
