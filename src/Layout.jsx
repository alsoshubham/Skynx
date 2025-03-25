import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home"; // Import your route components
import About from "../src/pages/About"; // Import your route components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function Layout() {
  return (
    <RouterProvider router={router}>
      <Header />
      <Outlet />
      <Footer />
    </RouterProvider>
  );
}

export default Layout;