<template>

<div>

<h1>Inciar session</h1>

<form>

<label>

    dni, pasaporte, nie o tsi

    <input type="text" v-model="identificador" />

</label>

<button type="submit">LOGIN</button>

</form>

</div>

</template>

<script>

export default{

name: 'Login',

data () {

    return{

        identificador: ""

    };
},

methods: {

    async handleLogin(){

        const response = await fetch('http://localhost:3306/login', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify({

                identificador: this.identificador,
                
            })
        });

        if(response.ok){

            const data = await response.json();
            console.log(data);
        
        }else{

            console.error('Iniciar session fallido');
        }
    }
}

};

</script>