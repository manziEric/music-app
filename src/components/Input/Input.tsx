import useClickHandeler from 'components/Input/useClickHandeler';

interface ComponentProps {
  id: number;
  name: string;
}

function Input({ id, name }: ComponentProps): JSX.Element {
  const [map] = useClickHandeler();
  return (
    <input type="checkbox" checked={map[id]} id={id.toString()} name={name} />
  );
}

export default Input;
