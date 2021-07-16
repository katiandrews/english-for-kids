import './Button.scss';

interface IProps {
  classNames: string;
  text: string;
  onClick: () => void;
}

export default function Button({ classNames, text, onClick }: IProps) {
  return (
    <button className={`button ${classNames}`} onClick={onClick}>
      {text}
    </button>
  );
}
