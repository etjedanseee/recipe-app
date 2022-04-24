import React from 'react'
import { useSelector } from 'react-redux'
import RecipeItems from '../components/RecipeItems';

const Favorite = () => {
  const favorite = useSelector(state => state.recipes.favorite)
  const isLoadingRecipes = useSelector(state => state.recipes.isLoading)

  return (
    <>
      {favorite?.length
        ? <RecipeItems isLoadingRecipes={isLoadingRecipes} recipes={favorite} />
        : <div style={{ fontSize: '3rem', margin: '1rem 3rem' }}>No favorite recipes</div>}
    </>
  )
}

export default Favorite