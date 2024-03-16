import { useState } from "react";
import { useLocation } from "react-router-dom";

function Response() {
    const location = useLocation();
    const summary = location.state.summary;

    return (
        <div>
            <p>{summary}</p>
        </div>
    )
}

export default Response;
