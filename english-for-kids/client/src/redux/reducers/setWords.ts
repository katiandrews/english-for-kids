import { IWord } from '../../shared/models/WordCard';

const wordsItems = (words = [], action: { type: string; payload: IWord[]; }) => {
  if (action.type === 'SET_WORDS') {
    const newWords = action.payload;
    return newWords;
  }
  return words;
};

export default wordsItems;
