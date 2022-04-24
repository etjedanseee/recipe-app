import { Col, Row } from 'antd'
import React from 'react'
import Loader from '../UI/Loader'
import RecipeItem from './RecipeItem'

const RecipeItems = ({ isLoadingRecipes, recipes }) => {
  return (
    <>
      {isLoadingRecipes && <Loader />}
      <Row>
        {recipes && recipes.map((r, index) => (
          <Col xs={24} sm={12} md={12} lg={8} xl={6} key={`${r.id} ${index}`} style={{ backgroundColor: 'rgb(176, 245, 245)' }}>
            <RecipeItem recipe={r} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default RecipeItems