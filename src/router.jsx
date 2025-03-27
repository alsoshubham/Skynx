import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Layout from "./Layout";
import Contact from "./pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "./pages/Blogs";
import NewsSection from "./pages/NewsSection";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news",
        element: <NewsSection />,
      }
    ],
  },
]);

