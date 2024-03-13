import { useState } from "react";
import { post } from "../api/server";

function Reuqest() {
  const [filename, setFileName]  = useState("File Upload");
  const serverURL = "http://localhost:8000/summary";
  const fileData = new FormData()

  return (
    <div>
      <button>
        <label htmlFor="file">
          <div>{filename}</div>
        </label>
      </button>

      <input type="file" onChange={(e) => { 
        const file = e.target.files?.[0]
        if (file) {
          console.log("file name : ", file.name);
          setFileName(file.name);
          fileData.append("file", file);
          post(serverURL, fileData);
        }
      }} id="file" accept=".pdf" style={{ display: "none" }}/>

      <input type="text"/>
    </div>
  );
}

export default Reuqest;
