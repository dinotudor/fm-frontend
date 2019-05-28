import axios from "axios";

class Profile {
  constructor() {
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    });
  }

  getAll() {
    return this.profile.get("/").then(response => response.data);
  }

  getOne(id) {
    return this.profile.get(`/${id}`).then(response => response.data);
  }

  editOne(username, description, instruments, genres, city, image) {
    return this.profile.put('/edit',{ username, description, instruments, city, genres, image}).then(response => response.data);
  }


  imageUpload(file) {
    return this.profile.post('/edit', file)
    .then(({data}) => data)
  }
}

const profile = new Profile();

export default profile;

