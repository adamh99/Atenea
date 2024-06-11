<template>

<div>

<h1>Inciar session</h1>

<form @submit.prevent="login">

<label>

    dni, pasaporte, nie o tsi

    <input type="text" v-model="identificador" />

</label>

<br>

<button type="submit">LOGIN</button>

</form>

</div>

</template>

<script>

import axios from 'axios';

export default{

name: 'LoginMatricula',

data () {

    return{

        identificador: ""

    };
},

methods: {

    async login(){

        try{

            const response = await axios.post('/api/login', {indentificador: this.identificador});
            
            if(response.data.usuario){

                localStorage.setItem('user', JSON.stringify(response.data.usuario));
                this.$router.push('/Status');

            }

        }catch(error){
            console.error(error);
        }
    }
}

};

</script>