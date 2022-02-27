interface ComponentProps {
  name: string;
}

function Input({ name }: ComponentProps): JSX.Element {
  return <input type="checkbox" name={name} className="m-1" />;
}

export default Input;
