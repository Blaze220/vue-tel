<template>
      <ModalAdd v-if="isModal" :viewIsModal = "isModal" @isModal="setIsModal" :id="id" :index="idIndex" ></ModalAdd>
    <div class="name">
        <Header></Header>
        <div class="contents">
            <button class="bluebtn" @click="setIsModal()">Добавить запись</button>
            <table>
                <thead>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Город</th>
                    <th>Адрес</th>
                    <th>Дата рождения</th>
                    <th>Номер телефона</th>
                </thead>
                <tbody>
                    <tr>
                        <td class="intd"><input type="text" v-model="i" @input="telArray.filterTel('i',i)" ></td>
                        <td class="intd"><input type="text"  v-model="f" @input="telArray.filterTel('f',f)"></td>
                        <td class="intd"><input type="text" v-model="o" @input="telArray.filterTel('o',o)"></td>
                        <td class="intd"><input type="text" v-model="city" @input="telArray.filterTel('city',city)"></td>
                        <td class="intd"><input type="text" v-model="address" @input="telArray.filterTel('address',address)"></td>
                        <td class="intd"><input type="date" v-model="birthday" @input="telArray.filterTel('birthday',birthday)"></td>
                        <td class="intd"><input type="text" v-model="phone" @input="telArray.filterTel('phone',phone)"></td>
                    </tr>
                    <tr v-for="(tel,index) in telArray.page" class="tr-tel">
                        <td>{{ tel.f }}</td>
                        <td>{{ tel.i }}</td>
                        <td>{{ tel.o }}</td>
                        <td>{{ tel.city}}</td>
                        <td>{{ tel.address }}</td>
                        <td>{{ tel.birthday }}</td>
                        <td>{{ tel.phone }}</td>
                        <td class="icon-td"><img src="/Vector1.png" alt="" @click="setIsModal(tel.id,index)" ><img src="/Vector2.png" alt="" @click="telArray.deleteTel(tel.id)"></td>
                    </tr>
                </tbody>
            </table>
            <div class="end-block">
                <div class="pages-block" 
                    v-if="telArray.totalCount > telArray.pageSize"
                >
                    <div class="page" @click="telArray.editPage(telArray.currentPage-1,'-')">
                        ←
                    </div>
                    <div :class="{active: page == telArray.currentPage}" class="page" v-for="page in  telArray.pageCount" @click="editPage(page)" >
                        {{ page }}
                    </div>
                    <div class="page" @click="telArray.editPage(telArray.currentPage+1,'+')">
                        →
                    </div>
                </div>
                <p>Показаны записи {{(telArray.pageSize * (telArray.currentPage-1))+1}} -
                    {{ telArray.pageSize *  telArray.currentPage > telArray.totalCount ?
                    telArray.pageSize *  telArray.currentPage + telArray.totalCount - telArray.pageSize *  telArray.currentPage
                     : 
                        telArray.pageSize *  telArray.currentPage}} 
                    из {{  telArray.totalCount }}</p>
            </div>
        </div>

       
    </div>
  
</template>




<script setup>
import { useMyTelStore } from '~/store/tel';
const router = useRouter()
const isModal = ref(false)
const id = ref(0)
const idIndex = ref(0)
const telArray = useMyTelStore()
const userStore = useMyUserStore()
const setIsModal=(idT,index)=>{
    isModal.value = !isModal.value
    id.value = idT
    idIndex.value = index
}

onMounted(()=>{
    if(!localStorage.getItem("token")){
        router.push("/login")
    }else{
        userStore.postRefresh()
    }
    telArray.getTel()
})
  
const editPage=(page)=>{
    telArray.editPage(page,'=')
}




</script>


<style lang="css" scoped>
    .contents{
        position: relative;
        margin: 0px auto;
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        border-radius: 8px;
        padding: 24px 15px;
        color: #2C2E35;
        box-shadow: 0px 12px 24pc rgba(0, 0, 0, 0.098);
    }
    .bluebtn{
        border: 1px solid #0098DA;
        padding: 11px 24px;
        border-radius: 4px;
        color: #0098DA;
        font-size: 14px;
        background-color: white;
        
    }

    .row{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
 
    table{
        width: 100%;
        table-layout: fixed
    }
    thead{
        margin-bottom: 10px;
    }
    th{
        text-align: start;
        width: 12%;
        padding: 10px 0px;
    }
    td > input{
        border-radius: 4px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.184);
        height: 40px;
        border: none;
        width: 98%;
        margin-bottom: 10px;
       
    }
    .intd{
        padding-right: 10px;
    }
    .intd>input{
        padding-left:  7px;
        padding-right: 3px;
    }
    .tr-tel{
       height: 30px;
    }

    .pages-block{
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
    .page,.active-page{
        border:  1px solid #2c2e3555;
        border-radius: 4px;
        padding: 11px 7px;
        width: 32px;
        height: 32px;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;
    }
    .active{
        background-color: #0098DA;
        border: none;
        color: #FFFFFF;
    }



    .name{
        position: relative;
    }

    .icon-td > img{
        margin-left: 7px;
    }
    .end-block{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        align-items: center;
    }
</style>