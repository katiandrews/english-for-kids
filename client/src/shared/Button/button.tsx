import './Button.scss';

interface IProps {
  classNames: string;
  text: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export function Button({ classNames, text, onClick }: IProps) {
  return (
    <button className={`button ${classNames}`} onClick={onClick}>
      {text}
    </button>
  );
}
