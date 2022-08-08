<template>
    <div>
        <h1>Info Page</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,idx) in userList" :key="idx">
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <button type="button" @click="btnShow(user.id)">Details</button>
                </tr>
            </tbody>
        </table>
        <!-- <div class="modal" v-show="btnShow(user.id)">
        <table>
            <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,idx) in userList" :key="idx">
                    <td>{{user.id}}</td>
                    <td>{{user.first_name}}</td>
                    <td>{{user.last_name}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.address}}</td>
                </tr>
            </tbody>
        </table>
        </div> -->
        <div class="modal" id="myModal">
        <div class="modal-content">
            <span class="close" @click="btnClose()">$times;</span>
            <ul v-for="(user,idx) in userList" :key="idx">
                <li>
                    {{user.id}}
                </li>
                <li>
                    {{user.first_name}}
                </li>
                <li>
                    {{user.last_name}}
                </li>
                <li>
                    {{user.email}}
                </li>
                <li>
                    {{user.phone}}
                </li>
                <li>
                    {{user.address}}
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
import jsonLoader from '../services/jsonloader'
export default {
    name:'infoComp',
    data(){
        return{
            userList:[],
        }
    },
    methods:{
        loadData(){
            jsonLoader.get('contactlist.json')
            .then((response)=>{
                // console.log(response.data)
                this.userList = response.data;
                response.data.forEach((user) => {
                    this.userMap.set(user.id,user);
                });
            })
        },
        btnShow(id){
            document.getElementById('myModal').style.display = "block";
            this.first_name = this.userMap.get(id).first_name;
            this.last_name = this.userMap.get(id).last_name;
            this.email = this.userMap.get(id).email;
            this.phone = this.userMap.get(id).phone;
            this.address = this.userMap.get(id).address;
        },
        btnClose(){
            document.getElementById("myModal").style.display = "none";
        },
        exitModal(){
            if(event.target === document.getElementById("myModal")){
                document.getElementById("myModal").style.display = "none";
            }
        }
    },
    mounted(){
        this.loadData();
    }
}
</script>