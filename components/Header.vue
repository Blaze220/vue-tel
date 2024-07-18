<template>
    <header>
        <div class="content">
            <div class="header-logo">
                <img src="/logo2.png" alt="">
                <p>Телефонный справочник</p>
            </div>
            <button @click="exitUser()">Выход</button>
        </div>
        
    </header>
</template>

<script setup>
const router = useRouter()

const exitUser=()=>{
    localStorage.removeItem("token")
    router.push("/login")
}
</script>

<style lang="css">
    header{
        width: 100vw;
        height: 52px;
        box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.122);
       margin-bottom: 15px;
    }
    button{
        width: 100px;
        border: 1px solid #2c2e3574;
        padding: 11px 24px;
        border-radius: 4px;
        color: #2c2e3574;
        font-size: 14px;
        background-color: white;
        
    }
    .header-logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
    .content{
        height: 100%;
        margin: 0px auto;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>