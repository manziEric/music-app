interface ComponentProps {
  name: string;
}

function Input({ name }: ComponentProps): JSX.Element {
  return <input type="checkbox" name={name} id="" />;
}

export default Input;
