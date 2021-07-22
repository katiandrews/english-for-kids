import { IWord } from '../../shared/models/WordCard';

const setWords = (words: IWord[]) => ({
  type: 'SET_WORDS',
  payload: words,
});

export default setWords;
