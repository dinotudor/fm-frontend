import axios from "axios";

class Favorite {
  constructor() {
    this.favorite = axios.create({
      baseURL: "http://localhost:5000/favorites",
      withCredentials: true
    });
  }

  getFavorites(id) {
    return this.favorite.get(`/${id}`).then(response => response.data);
  }

  addFavorite(userId, favoriteId) {
    return this.favorite.post("/", userId, favoriteId ).then(response => response.data);
  }

}

const favorite = new Favorite();

export default favorite;
