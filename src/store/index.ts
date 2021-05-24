import { createStore } from 'vuex';
import { State } from '../interface/State';
import { Server } from '../interface/Server';

export default createStore<State>({
  state: {
    servers: [],
  },
  getters: {
    SERVERS: (state: State):Server[] => state.servers,
  },
  mutations: {
    ADD_SERVER: (state:State, payload: Server) => {
      state.servers.push(payload);
    },
  },
  actions: {
    ADD_NEW_SERVER: (context, payload: Server) => {
      context.commit('ADD_SERVER', payload);
    },
  },
  modules: {
  },
});
