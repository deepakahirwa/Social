import axios from 'axios';
import conf from '../Conf/Conf';

class AuthApi {
    constructor() {
        this.config = {
            baseURL: conf.baseURL,
            withCredentials: true,
        };
        this.userData = null;
        this.userPost = null;
    }

    async getUserPost() {
        try {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${conf.baseURL}/api/v1/post/user`,
                withCredentials: true,
            };

            const response = await axios.request(config);
            console.log(response.data.data);
            this.userPost = response.data.data;
            return this.userPost;
        } catch (error) {
            console.error('Error fetching user posts:', error);
            return null;
        }
    }

    async login(credential) {
        try {
            console.log(credential);
            const data = JSON.stringify({
                email: credential.email,
                password: credential.password,
            });

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${conf.baseURL}/api/v1/users/login`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: data,
                withCredentials: true,
            };

            console.log(config.url);
            const response = await axios.request(config);
            this.userData = response.data.data.user;
            this.userPost = await this.getUserPost();
            console.log(this.userData, this.userPost);
            return [this.userData, this.userPost];
        } catch (error) {
            console.error('Error logging in:', error);
            return null;
        }
    }

    logout() {
        // Implement logout functionality
        localStorage.removeItem('token');
    }

    async getUser() {
        try {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${conf.baseURL}/api/v1/users/get-current-user`,
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            };

            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
            this.userData = response.data.data;
            this.userPost = await this.getUserPost();
            return [this.userData, this.userPost];
        } catch (error) {
            console.error('Error fetching current user:', error);
            return null;
        }
    }

    async editUser(userData) {
        try {
            const response = await axios.put(`${this.config.baseURL}/api/user/edit`, userData, this.config);
            return response.data; // Assuming API returns updated user data
        } catch (error) {
            console.error('Error editing user:', error);
            throw error; // Propagate the error for handling in components
        }
    }
}

const authService = new AuthApi();
export default authService;
