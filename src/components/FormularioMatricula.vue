<template>

<div>

<h2>FITXA MATRICULA</h2>

<form class = "form-center" style="text-align: center;" @submit.prevent="fitxaMatricula">

<table>

<thead>

<td>NOMBRE</td>
<td>APELLIDOS</td>
<td>IDALU</td>
<td>DIRECCION</td>
<td>TELEFONO</td>
<td>DNI</td>
<td>PASAPORTE</td>
<td>TSI</td>
<td>NIE</td>

</thead>

<tr>

    <td><input v-model="nombre"></td>
    <td><input v-model="apellidos"></td>
    <td><input v-model="idalu"></td>
    <td><input v-model="direccion"></td>
    <td><input v-model="telefono"></td>
    <td><input v-model="dni"></td>
    <td><input v-model="pasaporte"></td>
    <td><input v-model="tsi"></td>
    <td><input v-model="nie"></td>

</tr>

<tr>
    <td>

        <button>ALTA</button>

    </td>
</tr>

</table>


</form>

</div>

</template>

<script>

import axios from 'axios';

export default{

name: 'FormularioMatricula',

data (){

    return{

            nombre: '',
            apellidos: '',
            idalu: '',
            direccion: '',
            telefono: '',
            dni: '',
            tsi: '',
            nie: '',
            mensaje: ''
    };

},

methods: {

async fitxaMatricula(){

    try{

    const response = await axios.post('/api/fitxa-matricula', {
        nombre: this.nombre,
        apellidos: this.apellidos,
        idalu: this.idalu,
        direccion: this.direccion,
        telefono: this.telefono,
        dni: this.dni,
        tsi: this.tsi,
        nie: this.nie

    });

    if(response.status === 201){

        this.mensaje = 'Exito añadiendo los datos';
        this.limpiarFormulario();
    
    }else{

        this.mensaje = 'Error añadiendo los datos';
    }

    }catch (error){

        console.error(error);
        this.mensaje = 'Error añadiendo los datos'
    }

},

limpiarFormulario(){

    this.nombre = '';
    this.apellidos = '';
    this.idalu = '';
    this.direccion = '';
    this.telefono = '';
    this.dni = '';
    this.tsi = '';
    this.nie = '';

}

}

};

</script>