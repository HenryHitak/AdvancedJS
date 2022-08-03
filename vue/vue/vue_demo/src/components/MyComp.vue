<template>
    <div>
        <h1>My name is {{name}} {{family}}</h1>
    </div>
</template>
<script>
export default {
    name:"myCompo",
    props:['name','family']
}
</script>
<style> 
h1{
    background-color: black;
    color: white;
}
</style>