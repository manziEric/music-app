interface ComponentProps {
  title: string;
  text: string;
}

function Text({ title, text }: ComponentProps): JSX.Element {
  return (
    <div className="col-span-1 p-1" data-testid="text">
      <h2 className="font-bold">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Text;
