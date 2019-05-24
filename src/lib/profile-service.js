import axios from "axios";

class Profile {
  constructor() {
    this.auth = axios.create({
      baseURL: "http://localhost:5000/profile",
      withCredentials: true
    });
  }

  getAll() {
    return this.auth.get("/").then(response => response.data);
  }

  getOne(id) {
    return this.auth.get(`/${id}`).then(response => response.data);
  }
}

const profile = new Profile();

export default profile;

