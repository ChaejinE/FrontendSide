import { useNavigate } from "react-router-dom";

function Response({ uploadPath, summary }) {
    const navigate = useNavigate();

    const backButtonCallback = async () => {
        navigate(uploadPath, { state : { sumamry: summary } });
    }

    return (
        <div>
            <p>{summary}</p>
            <div>
                <button onClick={backButtonCallback}>Back</button>
            </div>
        </div>
    )
}

export default Response;
