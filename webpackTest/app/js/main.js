import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config,productionTip=fasle;

new Vue({
    el:'#app',
    router,
    components:App,
    template:"<App />"
})