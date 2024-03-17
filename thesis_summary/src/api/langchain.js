import axios from "axios";

const MODE = { INVOKE: "invoke", STREAM: "stream", STREAMLOG: "stream_log" };
const STAGE = { DEBUG: "debug", PROD: "production" }

const invoke = async (urlForInvoke, data, stage="DEBUG") => {
  try {
    let response;
    if (stage?.toLowerCase() !== STAGE.DEBUG) {
      response = await axios.post(urlForInvoke, data);
    } else {
      response = { data: { output: "This is DEBUG MODE"} };
    }

    console.log("[Axios POST] Response\n", response);
    return response?.data?.output;
  } catch(e) {
    console.log("[Axios POST] Error\n", e);
  }
}

async function requestToChain({serverURL="", file="", url="", mode="invoke"}) {
  let data;
  try {
    const urlForInvoke = serverURL + "/" + MODE[mode?.toUpperCase()];
    data = {input: {file: file, url: url}};
    console.log(`[requestToChain] Start to ${mode}\n`, data);

    if (mode?.toLowerCase() === MODE.INVOKE) {
      const result = await invoke(urlForInvoke, data, process.env.REACT_APP_STAGE)
        .then(() => console.log(`[requestToChain] Success to ${mode}`));
      return result;
    } else {
      console.log(`[requestToChain] Invalid mode : ${mode}`);
    }
  } catch(err) {
    console.log(`[requestToChain] Fail to ${mode}\n`, err);
  }
}

export default requestToChain
