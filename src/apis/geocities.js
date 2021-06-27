import axios from "axios";

const options = {
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
  params: { limit: "3", sort: "-population", types: "CITY" },
  headers: {
    "x-rapidapi-key": "d423a531a9msh98e283bb8eab89ap19004fjsn03b90021fa06",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

export default axios.create(options);
