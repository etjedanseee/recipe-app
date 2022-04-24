import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MealInfo from '../pages/MealInfo'
import Selections from '../pages/Selections'

export const publicRoutes = [
  { path: '/', exact: true, element: <Home /> },
  { path: '/selections', exact: false, element: <Selections /> },
  { path: '/login', exact: false, element: <Login /> },
  { path: '/about', exact: false, element: <About /> },
  { path: '/meal-info/:id', exact: false, element: <MealInfo /> },
]

