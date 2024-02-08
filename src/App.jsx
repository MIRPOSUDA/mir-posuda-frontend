import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Order from "./pages/Order";
import Branches from "./pages/Branches";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/likes",
          element: <Likes />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/branches",
          element: <Branches />,
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
