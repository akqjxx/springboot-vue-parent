<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">


        <button @click="homeClick">主页</button>
        <button @click="aboutClick">关于</button>

        <br/>

        <router-view></router-view>
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
</style>
