<template>
    <div id="preview">
        <h1>{{profile.name}}</h1>
        <p>{{profile.city}} | {{profile.birth}}</p>
    </div>
</template>





<script>
    export default {
        props:['profile','careers','educationHistory','projects','awards','contacts']
    }


</script>

<style scoped>
    #preview{
        /* border: 1px solid yellow; */
        /* min-height: 100px; */
    }  
</style>