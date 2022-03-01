interface ComponentProps {
  id: string;
  name: string;
}

function Input({ id, name }: ComponentProps): JSX.Element {
  return <input type="checkbox" id={id} name={name} className="m-1" />;
}

export default Input;
