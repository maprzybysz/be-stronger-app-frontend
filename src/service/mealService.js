export const mealsSummary = (meals) => {
  const totalGoodness = meals.reduce((sum, meals) => sum + meals.totalGoodness, 0);
  const totalProtein = meals.reduce((sum, meals) => sum + meals.totalProtein, 0);
  const totalCarbohydrates = meals.reduce((sum, meals) => sum + meals.totalCarbohydrates, 0);
  const totalFat = meals.reduce((sum, meals) => sum + meals.totalFat, 0);
  return {
    totalGoodness,
    totalProtein,
    totalCarbohydrates,
    totalFat,
  };
};
