export const searchRecipes = (recipes, search) => {
  const searchedRecipes = recipes.filter(r => r.title.toLowerCase().includes(search.toLowerCase()))
  return searchedRecipes
}