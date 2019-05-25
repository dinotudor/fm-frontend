import axios from "axios";

class Profile {
  constructor() {
    this.profile = axios.create({
      baseURL: "http://localhost:5000/profile",
      withCredentials: true
    });
  }

  getAll() {
    return this.profile.get("/").then(response => response.data);
  }

  getOne(id) {
    return this.profile.get(`/${id}`).then(response => response.data);
  }

  editOne(id) {
    return this.profile.put('/edit').then(response => response.data);
  }
}


const profile = new Profile();

export default profile;

