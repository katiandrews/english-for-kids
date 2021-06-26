const activeCategory = (category = 0, action: { type: string; payload: number; }) => {
  if (action.type === 'SET_CATEGORY') {
    const newCategory = action.payload;
    return newCategory;
  }
  return category;
};

export default activeCategory;
