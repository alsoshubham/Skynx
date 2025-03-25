// import React from 'react';
// import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Outlet } from 'react-router-dom';
import { router } from "./router";
// import Product from './pages/Product';

// function App() {

//   return (
//     <div className="min-h-screen bg-white">
//       <Header/>
//       <Home/>
//       <Product/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

function App() {

  return (
    <div className="min-h-screen bg-white">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;