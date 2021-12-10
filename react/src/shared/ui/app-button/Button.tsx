interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      data-testid="button"
      className="py-2 px-4 bg-blue-500 text-white font-bold rounded shadow-md shadow-blue-500/80 hover:bg-blue-600 hover:shadow-blue-600/80"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
