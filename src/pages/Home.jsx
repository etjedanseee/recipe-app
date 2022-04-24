import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchMeals from '../UI/SearchMeals'
import { fetchRecipes } from '../redux/actions/recipes'
import '../styles/scss/content.scss'
import { getTopRecipes } from '../functions/getTopRecipes'
import HomeContent from '../components/HomeContent'
import SearchedRecipes from '../components/SearchedRecipes'
import { BackTop } from 'antd'

const Home = () => {
  const dispatch = useDispatch()
  const recipes = useSelector(state => state.recipes.recipes)
  const randomRecipe = useSelector(state => state.recipes.randomRecipe)
  const isLoadingRecipes = useSelector(state => state.recipes.isLoading)

  const [searchedRecipes, setSearchedRecipes] = useState([])

  const [topRecipes, setTopRecipes] = useState([])
  const [topRecipesCount, setTopRecipesCount] = useState(12)
  //bool value for show searched recipes or random and top recipes
  const [isSearched, setIsSearched] = useState(false)

  const onSearch = (bool) => {
    setIsSearched(bool)
  }



  useEffect(() => {
    if (!recipes?.length) {
      //fetch and set all recipes
      dispatch(fetchRecipes())
    }
  }, [])

  useEffect(() => {
    if (recipes?.length) {
      setTopRecipes(getTopRecipes(recipes, topRecipesCount))
    }
  }, [recipes, topRecipesCount])

  return (
    <>
      <SearchMeals
        onSearch={onSearch}
        recipes={recipes}
        setSearchedRecipes={setSearchedRecipes}
      />
      {isSearched
        ? <SearchedRecipes
          searchedRecipes={searchedRecipes}
          isLoadingRecipes={isLoadingRecipes}
          onSearch={onSearch}
        />
        : <HomeContent
          isLoadingRecipes={isLoadingRecipes}
          topRecipes={topRecipes}
          randomRecipe={randomRecipe}
        />
      }
      <BackTop />
    </>
  )
}

export default Home