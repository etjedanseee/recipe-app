import axios from "axios";
import { CHANGE_RANDOM_RECIPE, CLEAN_FAVORITES, SET_CURRENT_RECIPE, SET_LOADING_RECIPES, SET_NEW_RATE, SET_RECIPES, UPDATE_FAV_RECIPE } from "../actionsCounts";


export const fetchRecipes = () => async (dispatch) => {
  dispatch(setLoadingRecipes(true))
  setTimeout(async () => {
    const resp = await axios.get(`http://localhost:3001/db`)
    const data = resp.data.data
    dispatch(setRecipes(data))
    dispatch(setLoadingRecipes(false))
  }, 500);

  // const resp = await axios.get(`http://localhost:3001/db`)
  // const data = resp.data.data
  // console.log('data', data);
  // dispatch(setRecipes(data))
}

export const setRecipes = (data) => ({
  type: SET_RECIPES,
  payload: data
})

export const setLoadingRecipes = (bool) => ({
  type: SET_LOADING_RECIPES,
  payload: bool
})

export const setCurrentRecipe = (recipe) => ({
  type: SET_CURRENT_RECIPE,
  payload: recipe
})

export const updateFavRecipe = (isFav, id) => ({
  type: UPDATE_FAV_RECIPE,
  payload: {
    fav: isFav,
    id
  }
})

export const cleanFavorites = () => ({
  type: CLEAN_FAVORITES,
})

export const setNewRate = (rate, id) => ({
  type: SET_NEW_RATE,
  payload: { rate, id }
})

