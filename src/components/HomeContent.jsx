import { Typography } from 'antd'
import React from 'react'
import RandomRecipe from './RandomRecipe'
import RecipeItems from './RecipeItems'

const HomeContent = ({ isLoadingRecipes, topRecipes, randomRecipe }) => {
  return (
    <>
      <RandomRecipe />
      <Typography.Title level={1} style={{ marginLeft: '10px' }}>Top {topRecipes.length} meals</Typography.Title>
      <RecipeItems
        isLoadingRecipes={isLoadingRecipes}
        recipes={topRecipes}
        randomRecipe={randomRecipe}
      />
    </>
  )
}

export default HomeContent