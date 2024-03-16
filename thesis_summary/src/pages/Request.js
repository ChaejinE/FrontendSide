import UploadPDF from "../components/UloadPDF";
import UploadURL from "../components/UploadURL";

function Request() {
    const serverURL = "http://localhost:8000/summary";

    return (
        <div>
            <UploadPDF serverURL={serverURL} />
            <UploadURL serverURL={serverURL}/>
        </div>
    )
}

export default Request;
