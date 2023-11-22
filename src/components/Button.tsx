interface Props {
  text: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ text, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
