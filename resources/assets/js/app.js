import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


// loads the Icon plugin
UIkit.use(Icons);

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * Logon components
 */
Vue.component('admin-login-component', require('./components/epanel/auth/login.vue'));
Vue.component('login-component', require('./components/auth/login.vue'));
Vue.component('register-component', require('./components/auth/register.vue'));

/**
 * Courses components
 */
Vue.component('create-course', require('./components/epanel/courses/create.vue'));

const app = new Vue({
    el: '#app'
});