
const trainMode = (trainMode = true, action: { type: string; payload: boolean; }) => {
  if (action.type === 'SET_MODE') {
    trainMode = action.payload
    return trainMode;
  }
  return trainMode;
}

export default trainMode;