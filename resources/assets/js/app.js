/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import WebFontLoader from 'webfontloader';

// loads the Icon plugin
window.Vue = require('vue');
window.Vuetify = require('vuetify');
Vue.use(Vuetify);

import 'vuetify/dist/vuetify.min.css';

import store from './store';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    components: {
        /**
         * Logon components
         **/
        'admin-login': () => ({
            component: import ('./components/epanel/auth/login.vue' /*webpackChunkName: "epanel/auth/admin-login" */ )
        }),
        'login': () => ({
            component: import ('./components/auth/login.vue' /*webpackChunkName: "auth/login"*/ )
        }),
        'register': () => ({
            component: import ('./components/auth/register.vue' /*webpackChunkName: "auth/register"*/ )
        }),
        'bulk-register': () => ({
            component: import ('./components/auth/bulkRegister.vue' /*webpackChunkName: "auth/bulkRegister"*/ )
        }),
        'bulk-register-preview': () => ({
            component: import ('./components/auth/bulkRegisterPreview.vue' /*webpackChunkName: "auth/bulkRegisterPreview"*/ )
        }),

        /**
         * Admin Home Page
         */
        'epanel-home': () => ({
            component: import ('./components/epanel/home.vue' /*webpackChunkName: "epanel/home"*/ )
        }),
        /**
         * Courses components
         **/
        'create-course': () => ({
            component: import ('./components/epanel/courses/create.vue' /*webpackChunkName: "epanel/courses/create" */ )
        }),
        /**
         * Questions components
         **/
        'upload-questions': () => ({
            component: import ('./components/epanel/questions/upload.vue' /*webpackChunkName: "epanel/questions/upload" */ )
        }),
        'input-question': () => ({
            component: import ('./components/epanel/questions/input.vue' /*webpackChunkName: "epanel/questions/input" */ )
        }),
        /**
         * User Management Components
         */
        'user-controls': () => ({
            component: import ('./components/epanel/users/userControls.vue' /*webpackChunkName: "epanel/user/userUpload" */ )
        }),
        /**
         * User Components
         * */
        'home': () => ({
            component: import ('./components/user/home.vue' /*webpackChunkName: "epanel/user/home" */ )
        })
    },
    mounted() {
        WebFontLoader.load({
            google: {
                families: ['Roboto:500,900']
            },
            active: this.setFontLoaded
        })
    },
    data() {
        return {

        }
    },
    methods: {
        setFontLoaded() {
            this.$emit('font-loaded')
        }
    }
});