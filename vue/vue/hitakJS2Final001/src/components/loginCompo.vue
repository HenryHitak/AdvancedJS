<template>
    <div>
        <div id="logDiv">
            <div><h2>Login page</h2><input type='text' placeholder='username'/><input type="password" placeholder='write password'/><button type="button"  @click="logn()">Login</button></div>
            
        </div>
        <div v-for="(k,v) in userList" :key="v">
            <h3 hidden>
                {{k.username}}
            </h3>
            <h3 hidden>    
                {{k.password}}
            </h3>
        </div>
    </div>
</template>

<script>
import jsonLoader from '../services/jsonloader'
export default {
    name: "loginCompo",
    data(){
        
        return{
            userList:[],
        }
    },
    methods:{
        loadData(){
            jsonLoader.get('username.json')
            .then((response)=>{
                // console.log(response.data)
                this.userList = response.data;
            })
        },
        logn:function(event){
            this.username = document.getElementsByTagName('h3')[0],
            this.password = document.getElementsByTagName('h3')[1]
            if(event.target.innerText != this.username){
                alert('User & Password Invalid!');
            }else{
                
            }
        }
    },
    mounted(){
        this.loadData();
    }
}
</script>
