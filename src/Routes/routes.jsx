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
import PrivateRoute from "./PrivateRoute";
import AddProperty from "../Pages/AddProperty";
import ManageProperty from "../Pages/ManageRentals";
import UpdateProperty from "../Pages/updateProperty";
import AllProperties from "../Pages/AllProperties";

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
        path: "/all-properties",
        element: <AllProperties />,
      },
      {
        path: "/search-result/:query",
        element: <SearchResult />,
      },
      {
        path: "/add-property",
        element: (
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/property-details/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/sell-property",
        element: (
          <PrivateRoute>
            <AddProperty />
          </PrivateRoute>
        ),
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
      {
        path: "/manage-rentals",
        element: (
          <PrivateRoute>
            <ManageProperty />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-property/:id",
        element: (
          <PrivateRoute>
            <UpdateProperty />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
