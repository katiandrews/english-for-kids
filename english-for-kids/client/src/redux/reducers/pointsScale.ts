const pointsScale = (points = [], action: { type: string; payload: boolean[]; }) => {
  if (action.type === 'SET_POINTS') {
    const newPoints = action.payload;
    return newPoints;
  }
  return points;
};

export default pointsScale;
