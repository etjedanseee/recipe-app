import Profile from "../pages/Profile";
import Favorite from "../pages/Favorite";

export const privateRoutes = [
  { path: '/profile', exact: false, element: <Profile /> },
  { path: '/favorite', exact: false, element: <Favorite /> },
]