import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DFiNWF4SfRB4KHTcs8p7tCJ8x1dbJjGeHNZeUOFA6Ic",
  },
});
