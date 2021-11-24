import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID PaPNMWEhJIm9lytAGPsOIx8Xb6fX6nGS0E9kI8fY1LI",
  },
});
