
<template>
    <div class="modal">
        <div class="module-block">
            <div class="modal-header">
                <p>Добавить запись</p>
                <img src="/Vector3.png" alt="" @click="buttonClick">
            </div>
            <div class="modal-input-block">
                <div class="modal-input">
                    <p><span>*</span> Фамилия</p>
                    <input type="text" v-model="f" v-bind="fAttrs">
                </div>
                <div class="modal-input">
                    <p><span>*</span> Имя</p>
                    <input type="text" v-model="i" v-bind="iAttrs">
                </div>
                <div class="modal-input">
                    <p><span>*</span> Отчество</p>
                    <input type="text" v-model="o" v-bind="oAttrs">
                </div>
                <div class="modal-input">
                    <p><span>*</span> Город</p>
                    <input type="text" v-model="city" v-bind="cityAttrs">
                </div>
                <div class="modal-input">
                    <p><span>*</span> Адрес</p>
                    <input type="text" v-model="address" v-bind="addressAttrs">
                </div>
                <div class="modal-input">
                    <p><span>*</span> Дата рождения</p>
                    <input type="date" v-model="birthday" v-bind="birthdayAttrs">
                </div>
                <div class="modal-input">
                    <p><span>*</span> Номер телефона</p>
                    <input type="tel" v-model="phone" v-bind="phoneAttrs">
                </div>
            </div>
            <p v-if="!meta.valid && meta.touched"> Заполните все поля </p>
          
            <button class="btn-modal" :disabled="!meta.valid" @click="addTel()">Добавить</button>
        </div>
    </div>
</template>


<script setup>
  import { useMyTelStore } from '~/store/tel';
  import { useForm } from 'vee-validate';
  const {viewIsModal,id,index} = defineProps(["viewIs","id","index"])
  const emit = defineEmits(["isModal"])
  import * as yup from 'yup';
    console.log(id)
    const telStore = useMyTelStore()

  const { defineField,meta ,values} = useForm({
    initialValues:{
        f: index >=0 ? telStore.tel[index].f : "",
        i: index >=0? telStore.tel[index].i : "",
        o: index >=0? telStore.tel[index].o : "",
        birthday: index >=0? telStore.tel[index].birthday : "",
        city: index>=0 ? telStore.tel[index].city : "",
        address: index >=0? telStore.tel[index].address : "",
        phone: index >=0 ? telStore.tel[index].phone : "+",
    },
    validationSchema: yup.object({
        f : yup.string().required(),
        i:  yup.string().required(),
        o : yup.string().required(),
        birthday: yup.string().required(),
        city: yup.string().required(),
        address:  yup.string().required(),
        phone: yup.string().required()
        }),
    });

  
    const [f,fAttrs] = defineField("f")    
    const [i,iAttrs] = defineField("i",)    
    const [o,oAttrs] = defineField("o")    
    const [birthday,birthdayAttrs] = defineField("birthday")    
    const [city,cityAttrs] = defineField("city")    
    const [address,addressAttrs] = defineField("address")    
    const [phone,phoneAttrs] = defineField("phone")    


    function buttonClick() {
        emit('isModal')
    }

   async function addTel(){
        if(id == undefined){
            await  telStore.postaddTel({f,i,birthday,city,o,address,phone})
        }else{
            console.log("wfwf")
            await  telStore.putEditTel({f,i,birthday,city,o,address,phone},id)
        }
        
        emit('isModal')
    }


</script>


<style scoped>
    .modal{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.375);
        width: 100vw;
        height: 100vh;
        z-index: 100;
    }

    
.module-block{
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #2C2E35;
    padding: 0px 10px;
    /* align-items: center; */
    border-radius: 10px;
    max-width: 600px;
}

.modal-header>img{
    padding: 17px;
    cursor: pointer;
}
.modal-header{
    align-items: center;
}
.modal-header,.modal-input-block{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.modal-input-block{
    flex-wrap: wrap;
    gap: 10px;
}
.modal-input{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 49%;
}
.modal-input > input{
    height: 40px;
    box-shadow: 0px 0px 4px #00000020;
    border-radius: 4px;
    outline: none;
    border: none;
    padding: 0px 5px;
}
.modal-input > p>span{
    color: red;
}

.btn-modal{
    color: #80CC05;
    border: 1px solid #80CC05;
    text-align: center;
    padding: 0px 24px;
    height: 40px;
    width: 160px;
    margin-bottom: 15px;
}
</style>