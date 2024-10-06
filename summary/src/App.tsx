import Home from "../pages/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import styled from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
]);

const Wrapper = styled.div``;

function App() {
  return (
  <>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </>
  )
}

export default App
