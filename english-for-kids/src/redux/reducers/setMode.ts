const mode = (trainMode = true, action: { type: string; payload: boolean; }) => {
  if (action.type === 'SET_MODE') {
    const newTrainMode = action.payload;
    return newTrainMode;
  }
  return trainMode;
};

export default mode;
