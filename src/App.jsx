import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./components/Home";
import Likes from "./pages/Likes";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Branches from "./pages/Branches";
import Product from "./pages/Product";

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
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/branches",
      element: <Branches />,
    },
    {
      path: "/product",
      element: <Product />,
    },
  ]);

  return <RouterProvider router={routest} />;
}

export default App;
