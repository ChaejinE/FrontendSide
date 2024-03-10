import { useRef } from "react";

function Ready() {
  let file = useRef(null);

  return (
    <div>
      <button>
        <label htmlFor="file">
          <div>File Upload</div>
        </label>
      </button>

      <input type="file" ref={file} onChange={handleChange}
       name="file" id="file" accept=".pdf" style={{display: "none"}}/>
    </div>
  );
}

export default Ready;
