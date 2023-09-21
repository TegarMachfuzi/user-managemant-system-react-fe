import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/user";

class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    createNewUser(users){
        return axios.post(USER_API_BASE_URL, users);
    }
    getUsersById(id){
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

}

export default new UserService()