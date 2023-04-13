import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Stroke from './components/Stroke';
import Diabetes from './components/Diabetes';
import Heartattack from './components/Heartattack';
import SearchDoctors from './components/SearchDoctors';
import DoctorHome from './components/DoctorHome';
import SymptomSuggestion from './components/SymptomSuggestion';
import BreastCancerPredicition from './components/BreastCancerPredicition';
import NewHome from './components/NewHome';
import DiseasePrediction from './components/DiseasePrediction';
import NewLogin from './components/NewLogin';
import NewSignup from './components/NewSignup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/stroke",
    element: <Stroke />,
  },
  {
    path: "/diabetes",
    element: <Diabetes />,
  },
  {
    path: "/heart-attack",
    element: <Heartattack />,
  },
  {
    path: "/search-doctors",
    element: <SearchDoctors />,
  },
  {
    path: "/doctor-home",
    element: <DoctorHome />,
  },
  {
    path: "/symptoms-suggestion",
    element: <SymptomSuggestion />,
  },
  {
    path: "/breast-cancer-prediction",
    element: <BreastCancerPredicition />,
  },
  {
    path: "/new-home",
    element: <NewHome />,
  },
  {
    path: "/disease-prediction",
    element: <DiseasePrediction />,
  },
  {
    path: "/new-login",
    element: <NewLogin />,
  },
  {
    path: "/new-signup",
    element: <NewSignup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
