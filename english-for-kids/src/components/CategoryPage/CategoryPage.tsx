import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import Button from '../../shared/Button/button';
import './CategoryPage.scss';
import correct from '../../assets/audio/correct.mp3';
import wrong from '../../assets/audio/wrong.mp3';
import PointsScale from './PointsScale';

interface IStateProperties {
  categories: { items: ICategory[] };
  activeCategory: number;
  trainMode: boolean;
  pointsScale: boolean[];
}

export default function CategoryPage() {
  const { category, isTrainMode } = useSelector(({
    categories, activeCategory, trainMode,
  }: IStateProperties) => ({
    category: categories.items[activeCategory],
    isTrainMode: trainMode,
    // points: pointsScale,
  }));
  const categoryAudios: string[] = [];
  category.cards.map((card) => categoryAudios.push(card.audio));
  let currentWord = '';

  const [gameStarted, setGameState] = useState(false);

  function getRandomAudio() {
    const randomIndex = Math.floor(Math.random() * categoryAudios.length);
    const word = categoryAudios[randomIndex];
    categoryAudios.splice(randomIndex, 1);
    return word;
  }

  const playAudio = (url: string) => {
    console.log(categoryAudios);
    const audio = new Audio();
    audio.src = url;
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    if (gameStarted) {
      currentWord = getRandomAudio();
      playAudio(currentWord);
    }
  }, [gameStarted]);

  const answerHandler = (answer: string) => {
    if (gameStarted) {
      if (currentWord === answer) {
        playAudio(correct);
        // dispatch(setPoints([...points, true]));
        if (categoryAudios.length > 0) {
          currentWord = getRandomAudio();
          setTimeout(() => { playAudio(currentWord); }, 1500);
        }
        return false;
      }

      // dispatch(setPoints([...points, false]));
      playAudio(wrong);
    }
    return true;
  };

  return (
    <>
      <div className="page-header">
        <h1 className={'page-title'}>{category.name}</h1>
        <PointsScale />
        <Button classNames={isTrainMode || gameStarted ? 'visually-hidden' : ''}
          text='Start game' onClick={() => setGameState(true)} />
        <Button classNames={gameStarted ? 'icon-button' : 'visually-hidden'}
          text='Repeat' onClick={() => playAudio(currentWord)} />
      </div>
      <div className='category'>
        {
          category.cards.map((card, index) => (
            <Card key={index} {...category} {...card}
              onClick={isTrainMode ? () => playAudio(card.audio) : () => answerHandler(card.audio)}
            />
          ))
        }
      </div>
    </>
  );
}
