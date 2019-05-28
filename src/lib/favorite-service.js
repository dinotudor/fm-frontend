import axios from "axios";

class Favorite {
  constructor() {

    this.favorite = axios.create({
      baseURL: process.env.REACT_APP_API_URL+"/favorites",
      withCredentials: true
    });
  }

  getFavorites(id) {
    return this.favorite.get(`/${id}`).then(response => response.data);
  }

  addFavorite(userId, favoriteId) {
    console.log('SERVICE ', {userId, favoriteId})
    return this.favorite.post("/", {userId, favoriteId }).then(response => response.data);
  }
  deleteFavorite(id) {
    return this.favorite.delete(`/${id}`).then(response => response.data);
  }

}

const favorite = new Favorite();

export default favorite;
