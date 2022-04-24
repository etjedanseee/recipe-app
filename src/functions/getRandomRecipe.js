export const getRandomRecipe = (allRecipes) => {
  const recipesCount = allRecipes.length
  if (!recipesCount) return null

  const randomCount = Math.floor(Math.random() * recipesCount);
  const randomRecipe = allRecipes[randomCount]
  return randomRecipe
}
