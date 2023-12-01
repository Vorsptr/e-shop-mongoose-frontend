import axios from "../axios";

class UserService {
  async registerUser(query) {
    const response = await axios.post("/register", query);
    return response;
  }
  async loginUser(query) {
    const response = await axios.post("/login", query);
    return response;
  }
}

const userService = new UserService();
export default userService;
