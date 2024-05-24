<template>

<div>

<form>

<label>

    Email

    <input type="text" v-model="email" />

</label>

<label>

    Password

    <input type="text" v-model="password" />

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

        email: "",
        password: ""

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

                email: this.email,
                password: this.password
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