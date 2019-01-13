import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
const createStore = () => {
    return new Vuex.Store({
        state: {
            drawer: false
        },
        mutations: {
            toggleDrawer(state) {
                state.drawer = !state.drawer
            }
        }
    })
}
export default createStore