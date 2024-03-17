import { useLocation } from "react-router-dom";
import UploadPDF from "../components/UloadPDF";
import UploadURL from "../components/UploadURL";

function Request({ summaryPath, defaultSummary, setSummary }) {
    const location = useLocation();
    if (location.state && location.state.sumamry !== defaultSummary) { 
        setSummary(defaultSummary); 
    }
    const serverURL = "http://localhost:8000/summary";

    return (
        <div>
            <p>STAGE: {process.env.REACT_APP_STAGE}</p>
            <UploadPDF serverURL={serverURL} setSummary={setSummary} summaryPath={summaryPath}/>
            <UploadURL serverURL={serverURL} setSummary={setSummary} summaryPath={summaryPath}/>
        </div>
    )
}

export default Request;
