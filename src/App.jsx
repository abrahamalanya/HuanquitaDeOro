import './App.css';

import { Router } from "./Router";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Page404 from './pages/404.jsx';

const appRouter = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/sobre-nosotros",
    Component: About
  },
  {
    path: "/contacto",
    Component: Contact
  }
]

function App() {
  return (
    <>
      <Router routes={appRouter} defaultComponent={Page404} />
    </>
  )
}

export default App
