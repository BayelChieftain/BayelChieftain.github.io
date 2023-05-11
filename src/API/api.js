import axios, * as others from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7b38740e-6682-4bef-94dc-8cb25179ee14"
    }
});


export const userAPI = {
    getUsers(currentPages = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPages}&count=${pageSize }`)
             .then(response => response.data)
     },
     followDelete (userId) {
        return instance.delete(`follow/${userId}`)
         .then(response => response.data)
     },
     followPost (userId) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    }
};