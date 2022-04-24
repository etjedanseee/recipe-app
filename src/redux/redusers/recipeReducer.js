import { CALC_NEW_RATE, CHANGE_RANDOM_RECIPE, CLEAN_FAVORITES, SET_CURRENT_RECIPE, SET_LOADING_RECIPES, SET_NEW_RATE, SET_RECIPES, UPDATE_FAV_RECIPE } from "../actionsCounts"

const initialState = {
  recipes: [],
  currentRecipe: {},
  randomRecipe: {},
  favorite: [],
  isLoading: false
}

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES: {
      return { ...state, recipes: action.payload }
    }
    case SET_LOADING_RECIPES: {
      return { ...state, isLoading: action.payload }
    }
    case SET_CURRENT_RECIPE: {
      return { ...state, currentRecipe: action.payload }
    }
    case UPDATE_FAV_RECIPE: {
      const newRecipes = state.recipes.map(r => r.id !== action.payload.id ? r : { ...r, favorite: action.payload.fav })

      let newFavorite = [...state.favorite]
      if (state.favorite.find(meal => meal.id === action.payload.id)) {
        newFavorite = newFavorite.filter(meal => meal.id !== action.payload.id)
      }
      else newFavorite.push(newRecipes.find(meal => meal.id === action.payload.id))
      return {
        ...state,
        recipes: newRecipes,
        favorite: newFavorite
      }
    }

    case CLEAN_FAVORITES: {
      const newRecipes = [...state.recipes].map(r => ({ ...r, favorite: false }))
      return {
        ...state,
        recipes: newRecipes,
        favorite: []
      }
    }

    case SET_NEW_RATE: {
      const newRecipes = [...state.recipes].map(r => {
        if (r.id === action.payload.id) {
          return {
            ...r,
            spoonacularScore: action.payload.rate.toFixed(2),
            aggregateLikes: r.aggregateLikes + 1
          }
        }
        else return r
      })
      return {
        ...state,
        recipes: newRecipes,
      }
    }

    default: return state
  }
}