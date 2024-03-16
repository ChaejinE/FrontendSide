import requestToChain from "../api/langchain";
import convertFileToBaset64 from "./utils/utils";

function UploadPDF({ serverURL }) {
  const placholder = "Upload PDF"
  // let result = "";

  const fileUploadCallback = async (e) => {
    convertFileToBaset64({ 
      file: e.target.files?.[0],
      callbackFunc: requestToChain,
      callbackArgObject: {serverURL: serverURL} 
    });
  }

  return (
    <div>
      <button>
        <label htmlFor="file">
          <div>{placholder}</div>
        </label>
      </button>

      <input type="file" onChange={fileUploadCallback}
       id="file" accept=".pdf" style={{ display: "none" }}/>
    </div>
  );
}

export default UploadPDF;
