<template>
    <div>
        <h2>我是首页</h2>
        <!--        <footer></footer>-->
        <p style="color: #660000">首页内容</p>
        <router-link to="/home/news" style="margin: 15px">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <div style="margin-top: 20px;background-color: red;width: 1000px;height: 100px">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
    import Footer from './Footer'

    export default {
        name: "Home",

        data() {
            return {
                path: "/home/news"
            }
        },
        created() {

        },
        activated() {
            this.$router.push(this.path)
        },
        destroyed() {

        },
        beforeRouteLeave(to,from,next) {
            this.path = this.$route.path;
            next()
        },
        components: {
            Footer
        },
    }
</script>

<style scoped>

</style>
