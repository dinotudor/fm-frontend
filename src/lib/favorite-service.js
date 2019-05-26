import axios from "axios";

class Favorite {
  constructor() {
    this.favorite = axios.create({
      baseURL: "http://localhost:5000/favorite",
      withCredentials: true
    });
  }

  getFavorites(id) {
    return this.profile.get(`/${id}`).then(response => response.data);
  }

  addFavorite(type, url, title, description, year, month, id) {
    return this.favorite.post("/", {type, url, title, description, year, month, id}).then(response => response.data);
  }

}

const favorite = new Favorite();

export default favorite;
