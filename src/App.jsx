import { router } from "./router";
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className="min-h-screen bg-white">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;