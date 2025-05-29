import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import B2B from "./pages/B2B";
import Layout from "./Layout";
import Contact from "./components/Contact";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./policies/PrivacyPolicy";
import RefundPolicy from "./policies/RefundPolicy";
import ShippingPolicy from "./policies/ShippingPolicy";
import TermsOfServices from "./policies/TermsOfServices";
import CategoryBlogs from "./pages/CategoryBlogs";
import CategorySection from "./pages/CategorySection";
import CartPage from "./components/CartPage";
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
        path: "/products",
        element: <Product />,
      },
      {
        parth: "CategorySection",
        element: <CategorySection />,
      },
      {
        path: "/b2b",
        element: <B2B/>,
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
        path: "/blog/:category",
        element: <CategoryBlogs />,
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
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/policies",
        children: [
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "refund-policy",
            element: <RefundPolicy />,
          },
          {
            path: "shipping-policy",
            element: <ShippingPolicy />,
          },
          {
            path: "terms-of-services",
            element: <TermsOfServices />,
          },
        ],
      },
    ],
  },
]);
