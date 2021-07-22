import { useSelector } from 'react-redux';
import Star from '../../assets/img/star.svg';
import EmptyStar from '../../assets/img/empty-star.svg';
import './PointsScale.scss';

export function PointsScale() {
  const currentPoints = useSelector(
    ({ pointsScale }: { pointsScale: boolean[] }) => pointsScale,
  );

  const renderStars = () => {
    const result: JSX.Element[] = [];
    currentPoints.forEach((point, index) => {
      if (point) result.push(<Star key={index} />);
      else result.push(<EmptyStar key={index} />);
    });
    return result;
  };

  return (
    <div className='points'>
      {renderStars()}
    </div>
  );
}
