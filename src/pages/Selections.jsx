import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DishType from '../components/DishType'
import SearchedRecipes from '../components/SearchedRecipes'
import { getRecipesByDishTypes } from '../functions/getRecipesByDishType'
import styles from '../styles/scss/dishtype.module.scss'
import GoBackBtn from '../UI/GoBackBtn'

const Selections = () => {
  const recipes = useSelector(state => state.recipes.recipes)
  const isLoading = useSelector(state => state.recipes.isLoading)

  const [isDishTypeClicked, setIsDishTypeClicked] = useState(false)
  const [searchedRecipes, setSearchedRecipes] = useState([])

  const dishTypesArr = ['lunch', 'main course', 'main dish', 'dinner', 'side dish', 'salad', 'morning meal', 'brunch', 'breakfast', 'antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre", 'dessert', 'soup', 'condiment', 'dip', 'spread', 'bread']

  const handleDishTypeClick = (title) => {
    const searched = getRecipesByDishTypes(recipes, title)
    setSearchedRecipes(searched)
    setIsDishTypeClicked(true)
  }
  const onGoBack = () => {
    setIsDishTypeClicked(false)
    setSearchedRecipes([])
  }

  return (
    <>
      <div className={styles.container}>
        {!isDishTypeClicked
          ? dishTypesArr.map(dish => (
            <DishType
              title={dish}
              handleDishTypeClick={handleDishTypeClick}
              key={dish}
            />
          ))
          : <div className={styles.searched}>
            <div onClick={onGoBack}><GoBackBtn to='/selections' /></div>
            <SearchedRecipes searchedRecipes={searchedRecipes} isLoadingRecipes={isLoading} />
          </div>
        }

      </div>
    </>
  )
}

export default Selections