<template>
    <div>
        <h1>About</h1>
        <input type="text" placeholder="Search by name">
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(k,v) in empList" :key="v">
                    <td>{{k.first_name}}</td>
                    <td>{{k.last_name}}</td>
                    <button type="button">Details</button>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import loadjson from "../services/loadjson"
export default {
    name: "aboutComp",
    data(){
        return{
            empList:[],
            userMap:new Map()
        }
    },
    methods:{
        jsLoad(){
            loadjson.get('data.json')
            .then((response)=>{
                // console.log(response.data)
                this.empList = response.data;
                this.empList.array.forEach(element => {
                    this.userMap.set(element.id, element);
                });
            })
        }
        
    },
    mounted(){
        this.jsLoad();
    },
    btnclick(){
        
    }
}
</script>