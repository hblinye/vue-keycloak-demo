import Vue from 'vue';
import Vuex from 'vuex';
import { RestApi } from '../resources/api';
import { urls } from '../resources/urls';
import { keycloak } from '../main';

Vue.use(Vuex);
const state = {
    info: ""
}

const getters = {
    getInfo(state) {
        return state.info;
    }
}

const mutations = {
    setInfo(state, info) {
        state.info = info
    }
}

const actions = {
    fetchInfo (context) {
        keycloak.updateToken(30).success(() => {
            new RestApi(urls.fetchInfoApi).list().then(()=>{
                context.commit('setInfo', 0);
            })
        })
    }
}

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});