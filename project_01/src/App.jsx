import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Starter from "./pages/Starter.page";
import LineGraph from "./pages/LineGraph.page";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Starter />,
    },
    {
      path: "/line",
      element: <LineGraph />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
