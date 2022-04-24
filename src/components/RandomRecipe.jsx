import { Button, Image, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getRandomRecipe } from '../functions/getRandomRecipe'
import { setCurrentRecipe, updateFavRecipe } from '../redux/actions/recipes'
import Fav from '../UI/Fav'
import RateUI from '../UI/RateUI'
import noImage from '../assets/images/no-image.png'

const RandomRecipe = () => {
  const allRecipes = useSelector(state => state.recipes.recipes)
  const isAuth = useSelector(state => state.auth.isAuth)
  const [randomMeal, setRandomMeal] = useState(null)
  const [isInFav, setIsInFav] = useState(randomMeal ? randomMeal.favorite : false)
  const dispatch = useDispatch()

  const onChangeRandom = () => {
    const randomRecipe = getRandomRecipe(allRecipes)
    setRandomMeal(randomRecipe)

    setIsInFav(randomRecipe.favorite)
  }

  const onRecipeTitleClick = () => {
    dispatch(setCurrentRecipe(randomMeal))
  }

  const changeIsInFav = (bool) => {
    dispatch(updateFavRecipe(bool, randomMeal.id))
    setIsInFav(bool)
  }

  useEffect(() => {
    if (!randomMeal) {
      const randomRecipe = getRandomRecipe(allRecipes)
      setRandomMeal(randomRecipe)
    }
  }, [allRecipes])

  return (
    <>{
      allRecipes?.length === 0 || !randomMeal ? null : (
        <>
          <Typography.Title level={2} style={{ marginLeft: '10px' }}>Random Recipe</Typography.Title>
          <div className='random'>
            <div className="random__cnt">
              <NavLink
                onClick={onRecipeTitleClick}
                to={'/meal-info/' + randomMeal.id}
              >
                <Image height={'15rem'} src={randomMeal.image ? randomMeal.image : noImage} className="random__image" preview={false} />
              </NavLink>
              <div className="random__content">

                <span className='random__title'>
                  {randomMeal.title.length > 50 ? randomMeal.title.slice(0, 50) + '...' : randomMeal.title}
                  <Fav
                    isInFav={isInFav}
                    changeIsInFav={changeIsInFav}
                    isAuth={isAuth}
                    top='3px'
                    right='0px'
                    alertTop='3px'
                    alertRight='40px'
                  />
                </span>
                <RateUI
                  spoonacularScore={randomMeal.spoonacularScore}
                  aggregateLikes={randomMeal.aggregateLikes}
                  dispatch={dispatch}
                  id={randomMeal.id}
                />
                <div className="random__btn">
                  <Button
                    onClick={onChangeRandom}
                    type='primary'
                    size={'large'}
                  >
                    New random meal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
    </>
  )
}

export default RandomRecipe