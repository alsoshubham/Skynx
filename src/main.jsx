import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import App from "./App";
import { CartProvider } from "./components/CartContext";


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '/',
//         element: <Home/>,
//       },
//       {
//         path: '/about-us',
//         element: <About/>,
//       },
//       {
//         path: '/blogs',
//         element: <Blog/>,
//       },
//       {
//         path: '/Our-Products',
//         element: <Product/>,
//       },
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App/>
    </CartProvider>
  </StrictMode>
);
