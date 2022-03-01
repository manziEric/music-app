interface ComponentProps {
  title: string;
  text: string;
}

function Text({ title, text }: ComponentProps) {
  return (
    <div className="col-span-1">
      <h2 className="font-bold">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Text;
