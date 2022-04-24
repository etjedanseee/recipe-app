import { BackTop, Image } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateFavRecipe } from '../redux/actions/recipes';
import Fav from '../UI/Fav';
import GoBackBtn from '../UI/GoBackBtn';
import CircleNumber from '../UI/CircleNumber';
import styles from '../styles/scss/meal-info.module.scss'
import DividerUI from '../UI/DividerUI';
import noImage from '../assets/images/no-image.jpg'
import clockIcon from '../assets/icons/clock.png'
import servingIcon from '../assets/icons/serving.png'
import vegeterianIcon from '../assets/icons/vegeterian.png'
import veganIcon from '../assets/icons/vegan.png'
import healthyIcon from '../assets/icons/healthy.png'
import dollarIcon from '../assets/icons/dollar.png'
import hashtagIcon from '../assets/icons/hashtag.png'
import heartIcon from '../assets/icons/heart.png'
import RateUI from '../UI/RateUI';



const MealInfo = () => {
  const meal = useSelector(state => state.recipes.currentRecipe)
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()
  const { title, image, readyInMinutes, servings, pricePerServing, spoonacularScore, aggregateLikes, id, vegetarian, vegan, veryHealthy, veryPopular, extendedIngredients, summary, dishTypes, winePairing, analyzedInstructions, favorite } = meal

  const [isInFav, setIsInFav] = useState(favorite)

  const changeIsInFav = (bool) => {
    dispatch(updateFavRecipe(bool, id))
    setIsInFav(bool)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.meal}>
      <div className={styles.image}>
        <GoBackBtn to='/' />
        <Image src={image ? image : noImage} preview={false} />
      </div>
      <Fav isAuth={isAuth} isInFav={isInFav} changeIsInFav={changeIsInFav} />

      <div className={styles.body}>
        <div className={styles.title}>{title}</div>

        <div className={styles.tags}>
          <div className={styles.tag}>
            <Image src={clockIcon} preview={false} width='30px' />
            <span>{readyInMinutes} min</span>
          </div>
          <div className={styles.tag}>
            <Image src={dollarIcon} preview={false} width='30px' />
            <span style={{ marginLeft: '-0.3rem' }}>{(pricePerServing / 100).toFixed(2)} per serving</span>
          </div>
          {veryPopular
            ? <div className={styles.tag}>
              <Image src={heartIcon} preview={false} width='30px' style={{ marginBottom: '-0.2rem' }} />
              <span >popular</span>
            </div>
            : null
          }
          {veryHealthy
            ? <div className={styles.tag}>
              <Image src={healthyIcon} preview={false} width='30px' />
              <span>healthy</span>
            </div>
            : null
          }
          {vegetarian
            ? <div className={styles.tag}>
              <Image src={vegeterianIcon} preview={false} width='30px' />
              <span>vegetarian</span>
            </div>
            : null
          }
          {vegan
            ? <div className={styles.tag}>
              <Image src={veganIcon} preview={false} width='30px' />
              <span>vegan</span>
            </div>
            : null
          }
        </div>

        <div className={[styles.tags, styles.dish].join(' ')} >
          {dishTypes && dishTypes.length
            ? dishTypes.map(item => (
              <div className={styles.tag} key={item}>
                <Image src={hashtagIcon} preview={false} width='30px' />
                <span>{item}</span>
              </div>
            ))
            : null
          }
        </div>

        <div className={styles.summary}>{summary}</div>
        {winePairing?.pairingText
          ? <div className={styles.summary} style={{ marginTop: '1rem' }}>{winePairing.pairingText}</div>
          : null
        }
        <DividerUI margin={'1.5rem'} />

        <div className={styles.ingredients}>
          <div className={styles.subtitle}>Ingredients</div>

          <div className={styles.servings}>
            <Image src={servingIcon} preview={false} width='30px' />
            <span>{servings} servings</span>
          </div>

          {extendedIngredients && extendedIngredients.length && (
            extendedIngredients.map(ingr => (
              <div className={styles.ingredient} key={`${ingr.id} ${ingr.amount}`}>
                {ingr.measures.us.amount.toFixed(1) == parseInt(ingr.measures.us.amount)
                  ? <span>{ingr.measures.us.amount.toFixed()} {ingr.measures.us.unitShort}</span>
                  : <span>{ingr.measures.us.amount.toFixed(1)} {ingr.measures.us.unitShort}</span>
                }

                {ingr.measures.us.amount.toFixed() === ingr.measures.metric.amount.toFixed()
                  ? <></>
                  : <span> / {ingr.measures.metric.amount.toFixed()} {ingr.measures.metric.unitShort} </span>
                }
                <span> {ingr.name}</span>
                {ingr != extendedIngredients[extendedIngredients.length - 1] && <DividerUI dashed />}
              </div>
            ))
          )}
        </div>

        <DividerUI margin={'1.5rem'} />

        <div className={styles.instructions}>
          {analyzedInstructions[0] && analyzedInstructions[0].steps?.length && (
            <>
              <div className={styles.subtitle}>Instructions</div>
              {analyzedInstructions[0].steps.map(instr => (
                <div
                  className={styles.instruction}
                  key={instr.step}
                >
                  <CircleNumber number={instr.number} />
                  <span>{instr.step}</span>
                </div>
              ))}
            </>
          )}
        </div>

        <RateUI
          spoonacularScore={spoonacularScore}
          aggregateLikes={aggregateLikes}
          dispatch={dispatch}
          id={id}
        />
      </div>
      <BackTop />
    </div>
  )
}

export default MealInfo