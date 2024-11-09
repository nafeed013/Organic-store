import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./Routes/App";
import organicStore from "./store";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Routes/Checkout";
import Products from "./Routes/Products";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Checkout />,
      },
    ],
  },
]);
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={organicStore}>
      <App />
    </Provider>
  </StrictMode>
);
