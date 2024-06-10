import { createRouter, createWebHistory } from 'vue-router';
import LoginMatricula from '../components/LoginMatricula.vue';
import Status from '../components/Status.vue';
import FormularioMatricula from '../components/FormularioMatricula.vue';

const routes = [

{
    path: '/',
    name: 'LoginMatricula',
    component: LoginMatricula


},

{
    path: '/status',
    name: 'EstatMatricules',
    component: Status
},

{
    path: '/formulario',
    name: 'FormularioMatricula',
    component: FormularioMatricula
}


];

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
});

router.beforeEach((to, from, next) => {

    const loggedIn = localStorage.getItem('user');
    
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn){

        next('/');
    
    }else{

        next();
    }
});

export default router;