import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import BuyerScreen from "../Pages/BuyerScreen";
import PropertyDetails from "../Pages/PropertyDetails";
import About from "../Pages/About";
import SearchResult from "../Pages/SearchResult";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/buyer-page",
        element: <BuyerScreen />,
      },
      {
        path: "/search-result",
        element: <SearchResult />,
      },
      {
        path: "/property-details",
        element: <PropertyDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
