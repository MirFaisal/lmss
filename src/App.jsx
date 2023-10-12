// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import MainLayouts from "../layouts/MainLayouts";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayouts from "./layouts/MainLayouts";
import Login from "./pages/Login/Login";
import Admission from "./pages/Admission/Admission";

function App() {
  // const route = createBrowserRouter([
  //   {
  //     element: <MainLayouts />,
  //     path: "/",
  //     children: [
  //       {
  //         element: <Home />,
  //         path: "/",
  //       },
  //       {
  //         element: <Login />,
  //         path: "/login",
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/admission" element={<Admission />} />
        </Route>
        {/* <Route path="/registration" element={<Registration />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
    // <>
    //   {/* route provider */}
    //   <RouterProvider router={route} />
    // </>
  );
}

export default App;
