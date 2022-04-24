import { Image } from 'antd';
import {
  FieldTimeOutlined,
} from '@ant-design/icons';
import React, { useState } from 'react'
import '../styles/scss/content.scss'
import RateUI from '../UI/RateUI';
import { NavLink } from 'react-router-dom';
import noImage from '../assets/images/no-image.png'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentRecipe, updateFavRecipe } from '../redux/actions/recipes';
import Fav from '../UI/Fav';

const RecipeItem = ({ recipe }) => {
  const { title, image, readyInMinutes, servings, pricePerServing, spoonacularScore, aggregateLikes, id, favorite } = recipe
  const isAuth = useSelector(state => state.auth.isAuth)
  const [isInFav, setIsInFav] = useState(favorite)
  const dispatch = useDispatch()

  const onRecipeTitleClick = () => {
    dispatch(setCurrentRecipe(recipe))
  }

  const changeIsInFav = (bool) => {
    dispatch(updateFavRecipe(bool, id))
    setIsInFav(bool)
  }

  return (
    <div className='toprecipes__item item-toprecipes'>
      <NavLink
        onClick={onRecipeTitleClick}
        to={'/meal-info/' + id}
      >
        <Image src={image ? image : noImage} className='item-toprecipes__image' width={'100%'} preview={false} />
      </NavLink>

      <div className="item-toprecipes__container">
        <NavLink
          onClick={onRecipeTitleClick}
          to={'/meal-info/' + id}
        >
          <span className='item-toprecipes__title'>{title}</span>
        </NavLink>
        <div className="item-toprecipes__content">
          <div className='item-toprecipes__info'>
            <span className='item-toprecipes__ready'><FieldTimeOutlined /> {readyInMinutes} min</span>
            <span className='item-toprecipes__servings'> / {servings} servings</span>
            <div className='item-toprecipes__price'>{(pricePerServing / 100).toFixed(2)}$ per serving</div>
          </div>
          <RateUI
            spoonacularScore={spoonacularScore}
            aggregateLikes={aggregateLikes}
            dispatch={dispatch}
            id={id}
          />
          <Fav isInFav={isInFav} changeIsInFav={changeIsInFav} isAuth={isAuth} />
        </div>
      </div>
    </div>
  )
}

export default RecipeItem