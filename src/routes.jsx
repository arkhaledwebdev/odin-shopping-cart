import Home from "./components/home/home";
import Cart from "./components/cart/Cart";
import Shop from "./components/shop/Shop";
import Error from "./components/util/error/Error";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;
