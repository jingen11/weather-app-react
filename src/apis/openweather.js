import axios from "axios";

const options = {
  baseURL: "http://api.openweathermap.org/data/2.5",
  params: {
    appid: "22a21cbe5a47afc1447f24012841816e",
    units: "metric",
  },
};

export default axios.create(options);
