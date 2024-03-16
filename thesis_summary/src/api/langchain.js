import axios from "axios";

async function requestToChain({serverURL="", file="", url="", mode="invoke"}) {
  const urlForInvoke = serverURL + "/" + mode;
  const data = {input: {file: file, url: url}};
  console.log("Payload\n : ", data);
  
  let result = "Fail";
  axios.post(urlForInvoke, data)
    .then((resp) => {
      console.log("[POST] Response\n", resp);
      result = resp.data.output;
    })
    .catch((err) => {
      console.log("[POST] Error\n", err);
    })
}

export default requestToChain
