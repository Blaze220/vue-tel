


import { defineStore } from "pinia";
import axios from "axios"
const URL = ""
export const useMyUserStore = defineStore("userStore",{
    state:()=>{
        return{
            errorAction : "",
            user:{},
        }
    },
    actions: {
        async postAuth(email,password){
            try{
                const user = await axios.post(`${URL}/auth/signin`,{password,email})
                if (user && user.data && user.status == 200) {
                    localStorage.setItem('token', JSON.stringify(user.data.access_token));
                }else{
                    this.errorAction = user.data.message
                }
            }catch{
               
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
         
        },
        async postRefresh(){
            try{
                const user = await axios.post(`${URL}/auth/refresh`,{
                    headers: {"Authorization" : localStorage.getItem('token')}
                })
                if (user && user.data && user.status == 200) {
                    localStorage.setItem('token', JSON.stringify(user.data.access_token));
                }else{
                    this.errorAction = user.data.message
                }
            }catch{
               
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
        },
        async getUser(){
            try{
                const user = await axios.get(`${URL}/auth/@me`,{
                    headers: {"Authorization" : localStorage.getItem('token')}
                })
                if (user && user.data && user.status == 200) {
                   this.user = user.data
                }else{
                    this.errorAction = user.data.message
                }
            }catch{
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
        }
    }
})