import { useEffect, useState } from "react";
import { EVENTS } from "./consts.js";

import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import './App.css';

const routes = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/sobre-nosotros",
    Component: About
  }
]

function Router({ routes=[], defaultComponent: DefaultComponent = () => null }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}

function App() {
  return (
    <>
      <Router routes={[
        {
          path: "/",
          Component: Home
        },
        {
          path: "/sobre-nosotros",
          Component: About
        }
      ]} />
    </>
  )
}

export default App
