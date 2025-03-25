import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Blog from "../src/pages/Blogs.jsx";
import Product from "../src/pages/Product.jsx";
import './index.css';
import "./App.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/about-us',
        element: <About/>,
      },
      {
        path: '/blogs',
        element: <Blog/>,
      },
      {
        path: '/Our-Products',
        element: <Product/>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
