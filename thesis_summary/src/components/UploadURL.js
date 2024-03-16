import requestToChain from "../api/langchain";
import { useNavigate } from "react-router-dom";

function UploadURL({ serverURL }) {
    const navigate = useNavigate();
    const default_place_holder = "PDF Content URL"
    let url = default_place_holder;
    
    const requestButtonCallback = async () => {
        requestToChain({serverURL: serverURL, url: url});
    }
    const urlTextChangeCallback = async (e) => url = e.target.value

    return (
        <div>
            <input type="text" placeholder={default_place_holder} onChange={urlTextChangeCallback}/>
            <button onClick={requestButtonCallback}>Request</button>
        </div>
    )
}

export default UploadURL
