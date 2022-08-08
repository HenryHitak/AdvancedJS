<template>
    <div>
        <h1>About page</h1>
        <h2>First Name:{{fname}}</h2>
        <h2>Last Name:{{lname}}</h2>
        <img v-bind:src='imgSrc'/>
        
    </div>
</template>
<script>
export default {
    name:'aboutCompo',
    data(){
        return{
        fname:"Hitak",
        lname:"Lee",
        imgSrc:'flag.png'}
    }
}
</script>