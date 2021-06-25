const initialState = {
  index: 0
}

const activeCategory = (category = 0, action: { type: string; payload: number; }) => {
  if (action.type === 'SET_CATEGORY') {
    category = action.payload
    return category;
  }
  return category;
}

export default activeCategory;