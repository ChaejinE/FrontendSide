import requestToChain from "../api/langchain";
import { useNavigate } from "react-router-dom";

function UploadURL({ serverURL , setSummary, summaryPath}) {
    const navigate = useNavigate();
    const placeholder = "PDF Content URL";
    let url = placeholder;
    
    const requestButtonCallback = async () => {
        requestToChain({serverURL: serverURL, url: url})
            .then((result) => setSummary(result));

        navigate(summaryPath);
    }

    const urlTextChangeCallback = async (e) => url = e.target.value;

    return (
        <div>
            <input type="text" placeholder={placeholder} onChange={urlTextChangeCallback}/>
            <button onClick={requestButtonCallback}>Request</button>
        </div>
    )
}

export default UploadURL
