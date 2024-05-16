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
}

}

</script>