export const getTopRecipes = (meals, count = 10) => {
  const sortedMeals = [...meals].sort((a, b) => b.spoonacularScore - a.spoonacularScore)

  const topRecipes = sortedMeals.slice(0, count)

  return topRecipes
}