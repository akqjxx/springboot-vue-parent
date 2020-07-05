<template>
    <div>
        <h1>
            我是profile

        </h1>
        <p>
            {{$route.query}}
            ------
            {{$route.query.name}}
            -----
            {{$route.query.id}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>