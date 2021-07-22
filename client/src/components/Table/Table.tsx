import { ICategory } from '../../shared/models/category-model';
import { IWord } from '../../shared/models/WordCard';
import './Table.scss';

interface IProps {
  thead: string[];
  wordsData: ICategory[];
}

export function Table({ thead, wordsData }: IProps) {
  const calcPercOfCorrectClicks = (word: IWord) => {
    const correctClicks = Number(localStorage.getItem(`${word.word} correct`));
    const incorrectClicks = Number(localStorage.getItem(`${word.word} wrong`));
    const percOfCorrectClicks = (correctClicks / (correctClicks + incorrectClicks)) * 100;
    return Math.round(percOfCorrectClicks);
  };

  return (
    <div className="table-wrap">
      <table className="table" >
        <thead>
          <tr>{thead.map((el, index) => (<td key={index}>{el}</td>))}</tr>
        </thead>
        <tbody>
          {
            wordsData.map((category, id) => (
              category.cards.map((word, index) => (
                <tr key={id + index}>
                  <td>{category.name}</td>
                  <td>{word.word}</td>
                  <td>{word.translation}</td>
                  <td>{localStorage.getItem(`${word.word} clicks`) || 0}</td>
                  <td>{localStorage.getItem(`${word.word} correct`) || 0}</td>
                  <td>{localStorage.getItem(`${word.word} wrong`) || 0}</td>
                  <td>{calcPercOfCorrectClicks(word) || 0}</td>
                </tr>
              ))
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
