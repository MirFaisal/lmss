import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";

function App() {
  const route = createBrowserRouter([
    {
      element: <MainLayouts />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {},
      ],
    },
  ]);
  return (
    <>
      {/* route provider */}
      <RouterProvider router={route} />
    </>
  );
}

export default App;
