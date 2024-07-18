<template>
    <div class="content">
        <div class="login-form">
            <img src="/logo.png" alt="">
            <div class="block-input">
                <label for="">E-mail</label>
                <input v-model="email" v-bind="emailAttrs">
                <p v-if=" errors.email">errors: {{ errors.email }}</p>
            </div>
           <div class="block-input">
            <label for="pas">Пароль</label>
            <input type="password" name="pas" id="pas" v-model="password" v-bind="passAttrs">
            <p v-if="errors.password">errors: {{ errors.password}}</p>
           </div>
            <button @click="authfetch()" :disabled="!meta.valid">Войти</button>
           
        </div>
    </div>
</template>




<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
const router = useRouter()

const { values, errors, defineField,meta } = useForm({
  validationSchema: yup.object({
    email: yup.string().required("Введите значение").email("Введите верный email").required(),
    password: yup.string().min(8).required("Пароль меньше 8 символов"),
  }),
});

const [email, emailAttrs] = defineField('email',{validateOnModelUpdate: false});
const [password,passAttrs] = defineField("password")

const user = useMyUserStore()

 const  authfetch=async ()=>{
     await user.postAuth(values.email,values.password)

    if(localStorage.getItem("token")){
        router.push("/")
    }
}

</script>


<style lang="css" scoped>
    img{
        margin-bottom: 20px;
    }
    .content{
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw !important;
        height: 100vh;
        color: #2C2E35;
        background-color: #F9F9F9;
    }
    .login-form{
        width: 280px;
        padding: 15px;
        display: flex;
        padding: 20px;
        background-color: white;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 12px 24px #00000021;
    }
    .block-input{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    }
    .block-input>label{
        font-size: 12px;
    }
    .block-input>input{
       border: none;
        outline: none;
        padding: 10px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.152);
        border-radius: 4px;
        margin-bottom: 24px;
    }
    button{
        border: 1px solid #0098DA;
        padding: 11px 24px;
        border-radius: 4px;
        color: #0098DA;
        font-size: 14px;
        background-color: white;
        width: 100%;
    }
    button:disabled{
        border: 1px solid #2c2e3574;
        color: #2c2e3574;
    }
</style>