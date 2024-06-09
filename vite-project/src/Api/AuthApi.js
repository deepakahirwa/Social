import { url } from "inspector";
import conf from "../Conf/Conf";

export class AuthApi {

    config = {
        method: "",
        maxBodyLength: Infinity,
        url: url,
        withCredentials: true
    }

    login = async (credential) => {
        this.config.method = 'post'
        this.config.url = `${this.config.url}/api/auth/login`


    }
    logout = async () => {
        // remove token from local storage
    }

    GetUserPost = async () => {
        // get user post
    }

    EditUser = async () => {
         // edit user details and coverImage and avatar
         
    }


}

const authService = new AuthApi();

export default authService;