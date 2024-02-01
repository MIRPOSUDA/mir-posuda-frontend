import {RouterProvider, createBrowserRouter} from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./components/Home"
import Likes from "./pages/Likes"
import Cart from "./pages/Cart"

function App() {
  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/likes",
      element: <Likes />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ])

  return <RouterProvider router={routest} />
}

export default App
