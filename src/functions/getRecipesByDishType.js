export const getRecipesByDishTypes = (recipes, dishtype) => {
  return recipes.filter(r => r.dishTypes?.length && r.dishTypes.includes(dishtype))
}