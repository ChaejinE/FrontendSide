import { useNavigate } from "react-router-dom";
import convertFileToBaset64 from "./utils/utils";
import requestToChain from "../api/langchain";

function UploadPDF({ serverURL, setSummary, summaryPath }) {
  const navigate = useNavigate();
  const placholder = "Upload PDF";

  const fileUploadCallback = async (e) => {
    convertFileToBaset64(e.target.files?.[0])
      .then(async (base64Data) => {
        await requestToChain({serverURL: serverURL, file: base64Data})
          .then((result) => { setSummary(result); });
    });
    
    navigate(summaryPath);
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
