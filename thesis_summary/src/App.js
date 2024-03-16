import { Routes, Route } from "react-router-dom";
import Request from "./pages/Request";
import Response from "./pages/Response";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Request />} />
      <Route path='/summary' element={<Response />} />
    </Routes>
  );
}

export default App;
