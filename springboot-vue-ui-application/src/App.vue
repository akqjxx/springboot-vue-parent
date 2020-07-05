<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">


        <button @click="homeClick">主页</button>
        <button @click="aboutClick">关于</button>
        <button @click="profileClick">档案button</button>
        <router-link tag="button" :to="{path:'/profile',query:{id:1,name:'zhangsna'}}">档案</router-link>
        <br/>

       <keep-alive>
           <router-view></router-view>
       </keep-alive>
        <!--        <HelloWorld msg="Welcome to Your Vue.js  32424 ..... "/>-->
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        methods: {
            homeClick() {
                this.$router.push("/home")
            },
            aboutClick() {
                this.$router.push("/about")
            },
            profileClick() {
                this.$router.push({
                    path: "/profile",
                    query: {
                        id: 2,
                        name: 'kobe',
                        height:2.12
                    }
                })
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .active {
        margin: 15px;
    }
</style>
