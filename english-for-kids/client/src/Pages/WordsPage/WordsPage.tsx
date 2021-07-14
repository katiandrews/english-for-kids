import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WordControl from '../../components/WordControl/WordControl';
import useHttp from '../../hooks/http.hook';
import setWords from '../../redux/actions/setWords';
import { ICategory } from '../../shared/models/category-model';
import { IWord } from '../../shared/models/WordCard';
import WordCard from './WordCard';
import './WordsPage.scss';

interface IStateProperties {
  categories: { items: ICategory[] };
  activeCategory: number;
  words: IWord[]
}

export default function WordsPage() {
  const { category, wordsItems } = useSelector(({ categories, activeCategory, words }: IStateProperties) => ({
    category: categories.items[activeCategory],
    wordsItems: words,
  }
  ));
  const { request } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    request(`words/?category=${category.name}`, 'GET').then((wordList) => {
      dispatch(setWords(wordList));
    });
  }, [dispatch, category.name, request]);

  const deleteWord = async (id: string) => {
    await request(`words/${id}`, 'DELETE');
    const deleted = wordsItems.findIndex((element) => element._id === id);
    wordsItems.splice(deleted, 1);
    dispatch(setWords([...wordsItems]));
  };

  return (
    <div className="words-page">
      <WordControl />
      {
        wordsItems.map((card, index) => (
          <WordCard key={index} {...card} onDelete={() => deleteWord(card._id)}
          />))
      }
    </div>
  );
}
