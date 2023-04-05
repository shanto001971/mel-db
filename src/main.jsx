import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Home from './Components/Home/Home';
import FoodsDetiles from './Components/FoodsDetiles/FoodsDetiles';
import MoreAboutFood from './Components/MoreAboutFood/MoreAboutFood';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"Home",
        element:<Home></Home>,
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path:"Foods-Detiles",
        element:<FoodsDetiles></FoodsDetiles>,
        loader:()=>fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      },
      {
        path:"More-About-Foods",
        element:<MoreAboutFood></MoreAboutFood>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
  router={router}
  >
    
  </RouterProvider>
)
