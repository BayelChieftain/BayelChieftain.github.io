import axios, * as others from 'axios';
let anon = others;
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
    },
    getProfile(userId) {
        console.warn("Please profileAPI object");
       return profileAPI.getProfile(userId);
     }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
      },
      getStatus(userId) {
        return instance.get(`profile/status/` + userId);
      },
      updateStatus(status) {
        return instance.put(`profile/status`, { status: status});
      }
}

export const authAPI = {
    me() { return instance.get(`auth/me`) },
    login( email, password, rememberMe) {
        return instance.post(`auth/login`, { email, password, rememberMe}) 
    },
    logout() {
        return instance.delete(`auth/login`) 
    }
};