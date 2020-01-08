import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';


Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.use(Vuetify);


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
