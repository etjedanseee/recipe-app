import React, { useEffect, useRef, useState } from 'react'
import { Rate } from 'antd';
import './ui.scss'
import { calcRate } from '../functions/calcRate';
import { setNewRate } from '../redux/actions/recipes';

const RateUI = ({ spoonacularScore, aggregateLikes, dispatch, id }) => {
  const [score, setScore] = useState({ rate: spoonacularScore, likes: aggregateLikes, id })
  const scoreRef = useRef(null)

  const onRateClick = (count) => {
    const newScoreObj = { ...calcRate(spoonacularScore, count * 20, aggregateLikes), id }
    scoreRef.current = { rate: newScoreObj.rate, id: newScoreObj.id }
    setScore({ rate: newScoreObj.rate, likes: newScoreObj.likes, id: newScoreObj.id })
  }

  useEffect(() => {
    setScore({ rate: spoonacularScore, likes: aggregateLikes, id })
    return () => {
      if (scoreRef.current != null) {
        dispatch(setNewRate(scoreRef.current.rate, scoreRef.current.id))
      }
    }
  }, [id])

  return (
    <span className='rate__rate-cnt'>
      <Rate
        onChange={onRateClick}
        // defaultValue={Math.round(score.rate / 10 / 2)}
        value={Math.round(score.rate / 10 / 2)}
        allowClear={false}
        style={{ padding: '0 5px 0px 5px', borderRadius: '12px' }}
      />
      <span className='rate__rate'>{(score.rate / 10 / 2).toFixed(2)} </span>
      <span className='rate__rate-voites'>({score.likes})</span>
    </span>
  )
}

export default RateUI