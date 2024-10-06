import Request from "../pages/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Request/>
  }
]);

function App() {
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
