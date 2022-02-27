interface ComponentProps {
  title: string;
  text: string;
}

function Text({ title, text }: ComponentProps) {
  return (
    <div className="basis-2/5">
      <h2 className="font-bold">{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Text;
