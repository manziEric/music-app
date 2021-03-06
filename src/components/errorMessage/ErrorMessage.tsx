import { ComponentsProps } from 'utils/types';

function ErrorMessage({ children }: ComponentsProps): JSX.Element {
  return (
    <div
      className="col-span-4 m-2 pl-4 p-2 bg-red-100 rounded flex"
      data-testid="errorMessage"
    >
      {children}
    </div>
  );
}

export default ErrorMessage;
