import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Countries from "./features/Countries/Countries";
import { loader as CountriesLoader } from "./features/Countries/CountriesList";
import { loader as CountryLoader } from "./features/Countries/Country";
import Country from "./features/Countries/Country";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/countries" replace />,
      },
      { path: "/countries", element: <Countries />, loader: CountriesLoader },
      {
        path: "/countries/:country",
        element: <Country />,
        loader: CountryLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
