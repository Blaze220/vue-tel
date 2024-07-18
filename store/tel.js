

import { defineStore } from "pinia";
import axios from "axios"
const URL = ""

export const useMyTelStore = defineStore("telStore",{
    state:()=>{
        return{
            tel: [
                {id:1,f : "Петров1",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"},
                {id:2,f : "Петров2",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:3,f : "Петров2",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:4,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:5,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:6,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:7,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:8,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:9,f : "Петров",i: "Петр",o: "Петрович",city: "КАРА", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:10,f : "Петров10",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:11,f : "Петров11",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:12,f : "Петров12",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:13,f : "Петров13",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:14,f : "Петров14",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:15,f : "Петров15",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:16,f : "Петров16",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:17,f : "Петров17",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:18,f : "Мл",i: "Петр",o: "Петрович",city: "КАРА", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:19,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
            ],
            errorAction : "",
            totalCount : 19,
            pageCount: 2,
            pageSize: 10, 
            currentPage: 1,
            page: [
                {id:1,f : "Петров1",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"},
                {id:2,f : "Петров2",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:3,f : "Петров2",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:4,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:5,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:6,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:7,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:8,f : "Петров",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:9,f : "Петров",i: "Петр",o: "Петрович",city: "КАРА", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} ,
                {id:10,f : "Петров10",i: "Петр",o: "Петрович",city: "Астана", address: "пр. Мира, д. 20", birthday: "1985-02-02",phone : "+77772223344"} 
            ]
        }
    },
    actions: {
        filterTel(prop,value){
            this.page = []
            let copy  = [...this.tel]
           
                for(const item of copy){
                    if (item[prop].includes(value) == true) {
                      
                          this.page.push(item)
                       
                    }
                }
           
            
            
        },
        addTel(newTel){
            this.tel.push(newTel)
        },
        editPage(page,n){
            if( n =="-" && page >= 1){
                this.currentPage = page
            }else if(n =="+" && page <= this.pageCount){
                this.currentPage = page
            }else if(n=="="){
                this.currentPage = page
            }
            let copy  = [...this.tel]
            this.page = copy.slice(this.pageSize * (this.currentPage-1),this.pageSize *  this.currentPage)
           
        },
        async getTel(){
            try{
                const newTelRes = await axios.get(`${URL}/records`,{headers: {"Authorization" : localStorage.getItem('token')}})
                if (newTelRes && newTelRes.data && newTelRes.status == 200) {
                 this.tel = newTelRes.data.items
                
                 this.totalCount = newTelRes.data._meta.totalCount
                 this.pageCount = newTelRes.data._meta.pageCount
                 this.pageCount = newTelRes.data._meta.pageCount
                 this.pageSize = newTelRes.data._meta.pageSize
                 this.page = newTelRes.data.items.slice(0,10)
                
                }else{
                    this.errorAction = newTelRes.data.message
                }

            }catch{
               
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
        },
        async putEditTel(newTel,id){
            try{
                const newTelRes = await axios.put(`${URL}/records/${id}`,
                {newTel},
                {
                    headers: {"Authorization" : localStorage.getItem('token')}
                })
                if (newTelRes && newTelRes.data && newTelRes.status == 200) {
                 const index = this.tel.findIndex(i=>i.id = id)
                 this.tel[index] = newTelRes.data
                }else{
                    this.errorAction = newTelRes.data.message
                }

            }catch{
               
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
         
        },
        async postaddTel(newTel){
            try{
                const newTelRes = await axios.post(`${URL}/records`,
                {newTel},
                {
                    headers: {"Authorization" : localStorage.getItem('token')}
                })
                if (newTelRes && newTelRes.data && newTelRes.status == 200) {
                    this.tel.push(newTelRes.data)
                    this.totalCount +=1
                    if(this.totalCount % this.pageSize !==0){
                        this.pageCount+=1
                    }
                }else{
                    this.errorAction = newTelRes.data.message
                }

            }catch{
               
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
         
        },
        async deleteTel(id){
            console.log(id)
            try{

                const newTelRes = await axios.delete(`${URL}/records/${id}`,
                {
                    headers: {"Authorization" : localStorage.getItem('token')}
                })
                if (newTelRes && newTelRes.data && newTelRes.status == 200) {
                    this.tel = this.tel.filter(i=>i.id !== id)
                }else{
                    this.errorAction = newTelRes.data.message
                }

            }catch{
               
                this.errorAction = "'Ошибка получения данных пользователя.'"
            }
         
        }
    }
})