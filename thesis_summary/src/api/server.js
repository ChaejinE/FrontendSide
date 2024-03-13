import axios from "axios";

export async function post(serverURL, data) {
  console.log("Post to server : ", serverURL);
  axios.get(serverURL, data, { headers: {'Content-Type': 'multipart/form-data', charset: 'utf-8'} })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
}
