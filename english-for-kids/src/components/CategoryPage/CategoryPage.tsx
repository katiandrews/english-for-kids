import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../shared/Card/Card';
import { ICategory } from '../../shared/models/category-model';
import Button from '../../shared/Button/button';
import './CategoryPage.scss';
import correct from '../../assets/audio/correct.mp3';
import wrong from '../../assets/audio/wrong.mp3';
import PointsScale from './PointsScale';
import setPoints from '../../redux/actions/pointsScale';
import successImg from '../../assets/img/game-success.png';
import failureImg from '../../assets/img/failure.png';
import successSound from '../../assets/audio/game-success.mp3';
import failureSound from '../../assets/audio/game-failure.mp3';

interface IStateProperties {
  categories: { items: ICategory[] };
  activeCategory: number;
  trainMode: boolean;
  pointsScale: boolean[];
}

export default function CategoryPage() {
  const { category, isTrainMode, points } = useSelector(({
    categories, activeCategory, trainMode, pointsScale,
  }: IStateProperties) => ({
    category: categories.items[activeCategory],
    isTrainMode: trainMode,
    points: pointsScale,
  }));

  const dispatch = useDispatch();
  const history = useHistory();

  const categoryAudios = useRef<string[]>([]);
  const word = useRef('');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    dispatch(setPoints([]));
    setGameStarted(false);
  }, [dispatch, category.cards]);

  function getRandomAudio() {
    const randomIndex = Math.floor(Math.random() * categoryAudios.current.length);
    const wordSound = categoryAudios.current[randomIndex];
    categoryAudios.current.splice(randomIndex, 1);
    return wordSound;
  }

  const playAudio = (url: string) => {
    const audio = new Audio();
    audio.src = url;
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    if (gameStarted) {
      const arr: string[] = [];
      category.cards.map((card) => arr.push(card.audio));
      categoryAudios.current = arr;
      word.current = getRandomAudio();
      playAudio(word.current);
    }
  }, [gameStarted, category.cards]);

  const endGame = () => {
    setGameEnded(true);
    setGameStarted(false);
    if (points.includes(false)) playAudio(failureSound);
    else playAudio(successSound);
    setTimeout(() => {
      history.push('/');
    }, 4400);
  };

  const answerHandler = (answer: string) => {
    if (gameStarted) {
      if (word.current === answer) {
        playAudio(correct);
        dispatch(setPoints([...points, true]));
        if (categoryAudios.current.length > 0) {
          word.current = getRandomAudio();
          setTimeout(() => { playAudio(word.current); }, 1500);
        } else {
          endGame();
        }
        return false;
      }
      dispatch(setPoints([...points, false]));
      playAudio(wrong);
    }
    return true;
  };

  return (
    <>
      <div className={gameEnded ? 'visually-hidden' : 'page-header'}>
        <h1 className={'page-title'}>{category.name}</h1>
        <PointsScale />
        <Button classNames={isTrainMode || gameStarted ? 'visually-hidden' : ''}
          text='Start game' onClick={() => setGameStarted(true)} />
        <Button classNames={gameStarted ? 'icon-button' : 'visually-hidden'}
          text='Repeat' onClick={() => playAudio(word.current)} />
      </div>
      <div className={gameEnded ? 'visually-hidden' : 'category'}>
        {
          category.cards.map((card, index) => (
            <Card key={index} {...category} {...card}
              onClick={isTrainMode ? () => playAudio(card.audio) : () => answerHandler(card.audio)}
            />))
        }
      </div>
      <div className={gameEnded ? 'end-game' : 'visually-hidden end-game'}>
        {<img src={points.includes(false) ? failureImg : successImg} alt="Game ended" className="game-ended" />}
      </div>
    </>
  );
}
