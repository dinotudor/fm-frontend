import axios from "axios";

class Media {
  constructor() {
    this.media = axios.create({
      baseURL: process.env.REACT_APP_API_URL+"/media",
      withCredentials: true
    });
  }

  getMedia() {
    return this.media.get("/").then(response => response.data);
  }

  addMedia(type, url, title, description, year, month, id) {
    return this.media.post("/", {type, url, title, description, year, month, id}).then(response => response.data);
  }

}

const media = new Media();

export default media;
