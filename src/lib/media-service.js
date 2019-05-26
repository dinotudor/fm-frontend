import axios from "axios";

class Media {
  constructor() {
    this.profile = axios.create({
      baseURL: "http://localhost:5000/profile",
      withCredentials: true
    });
  }

  getMedia() {
    return this.media.get("/").then(response => response.data);
  }

}

const media = new Media();

export default media;
