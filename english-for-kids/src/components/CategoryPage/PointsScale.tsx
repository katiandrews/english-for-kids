import { } from 'react-redux';
import star from '../../assets/img/star.svg';
import emptyStar from '../../assets/img/empty-star.svg';

export default function PointsScale() {
  // const currentPoints = useSelector(
  //   ({ pointsScale }: { pointsScale: boolean[] }) => pointsScale,
  // );

  return (
    <div className="points">
      {star}
      {emptyStar}
    </div>
  );
}
