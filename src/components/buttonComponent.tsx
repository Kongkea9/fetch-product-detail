type ButtonStyle = {
  name?: string;
  background: string;
};

export default function ButtonComponent({ name = "Click Me", background }: ButtonStyle) {
  return <button style={{backgroundColor: background}} className="px-8 py-4">{name}</button>;
}
