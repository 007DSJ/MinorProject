import axios from 'axios';
const url = `${process.env.REACT_APP_API}/`;

class authService {
    async login(username, password) {
        console.log(url + "login");
        return await axios
            .post(url + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem("user");
    }
    async register(username, password, email) {
        console.log(url + "signup");
        return await axios.post(url + "signup", {
            username,
            password,
            email
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new authService();