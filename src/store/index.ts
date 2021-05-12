import { createStore } from 'vuex';
import { State } from '../interface/State';

export default createStore<State>({
  state: {
    name: 'Oliver',
    age: 23,
    firends: [],
  },
  getters: {
    NAME: (state: State):string => state.name,
  },
  mutations: {
    SET_NAME: (state:State, payload: string) => {
      state.name = payload;
    },
  },
  actions: {
    CHANGE_NAME: (context, payload: string) => {
      context.commit('SET_NAME', payload);
    },
  },
  modules: {
  },
});
