import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID 08TBr_TgKu_w3TIebNoGoLNnEuNMd06WQQCqgQobVtk",
  },
});
