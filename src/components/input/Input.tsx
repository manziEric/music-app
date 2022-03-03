interface ComponentProps {
  id: number;
  name: string;
}

function Input({ id, name }: ComponentProps): JSX.Element {
  return (
    <input type="checkbox" id={id.toString()} name={name} data-testid="input" />
  );
}

export default Input;
