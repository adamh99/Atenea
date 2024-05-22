<template>
    
    <ul>
        <tr>
            <th>Estat</th> <th>Curs</th> <th>Nom</th> <th>Data</th>
        </tr>
  <tr v-for="student in students" :key="student.id">
    <td>{{student.estat}}</td>
    <td>{{student.curs}}</td>
    <td>{{student.nomComplet}}</td>
    <td>{{student.data}}</td>
    <v-btn>Accions</v-btn>
  </tr>
</ul>
  </template>
  
  <script>
  
  export default {
    name: 'EstatMatricules',
  
    data: () => ({
    students: [
    {
          "nomComplet": "Juan Pérez",
          "data": "2024-04-29",
          "estat": "en progrès",
          "curs": "ESO"
        },
        {
          "nomComplet": "María García",
          "data": "2024-04-28",
          "estat": "en progrès",
          "curs": "ESO"
        },
        {
          "nomComplet": "Andrés López",
          "data": "2024-04-27",
          "estat": "en progrès",
          "curs": "ESO"
        },
        {
          "nomComplet": "Sara Martínez",
          "data": "2024-04-26",
          "estat": "pendent",
          "curs": "ESO"
        },
        {
          "nomComplet": "Elena Rodríguez",
          "data": "2024-04-25",
          "estat": "pendent",
          "curs": "Batxillerat humanístic"
        },
        {
          "nomComplet": "Daniel Gómez",
          "data": "2024-04-24",
          "estat": "pendent",
          "curs": "Batxillerat humanístic"
        },
        {
          "nomComplet": "Javier Hernández",
          "data": "2024-04-23",
          "estat": "pendent",
          "curs": "DAM"
        }
      ]
    
  }),
}
  </script>

<style>




</style>