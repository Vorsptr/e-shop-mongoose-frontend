import axios from "axios";

const type = "local";
let DEFAULT_URL = "";
const BASE_URL = "http://localhost:5000";

if (type == "local") {
  DEFAULT_URL = `${BASE_URL}/api/v1`;
}

export default axios.create({
  url: DEFAULT_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
