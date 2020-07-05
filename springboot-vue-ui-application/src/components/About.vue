<template>
    <div>
        <h2>我是关于</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name: "About",
        methods: {
            btnClick() {
                console.log(this.$router);
                console.log(this.$route);
            }
        }
    }
</script>

<style scoped>

</style>
