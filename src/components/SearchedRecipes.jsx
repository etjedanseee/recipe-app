import { BackTop, Typography } from 'antd'
import React, { useEffect } from 'react'
import RecipeItems from './RecipeItems'

const SearchedRecipes = ({ searchedRecipes, isLoadingRecipes }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Typography.Title>Finded {searchedRecipes.length} meals</Typography.Title>
      {
        searchedRecipes && (
          <RecipeItems
            isLoadingRecipes={isLoadingRecipes}
            recipes={searchedRecipes}
          />
        )
      }
      <BackTop />
    </>
  )
}

export default SearchedRecipes