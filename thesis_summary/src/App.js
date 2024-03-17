import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Request from "./pages/Request";
import Response from "./pages/Response";

function App() {
  const defaultSummary = "Summary..."
  const summaryPath = "/summary"
  const uploadPath = "/";

  const [ summary, setSummary ] = useState(() => { return defaultSummary });

  return (
    <Routes>
      <Route path='/' element={<Request summaryPath={summaryPath} defaultSummary={defaultSummary} setSummary={setSummary}/>} />
      <Route path='/summary' element={<Response uploadPath={uploadPath} summary={summary} />} />
    </Routes>
  );
}

export default App;
