import { createStore } from 'vuex';
import axios from 'axios';
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
    SET_SERVERS: (state:State, payload: Server[]) => {
      state.servers = payload;
    }
  },
  actions: {
    ADD_NEW_SERVER: async (context, payload: Server):Promise<string> => {
      try {
        const addServerResponse  = await axios.post('http://localhost:8082/add-server', payload);
        if(addServerResponse.status === 200){
          context.commit('ADD_SERVER', payload);
          return 'Success'
        }
        return 'error'; 
      } catch (error) {
        return 'error'; 
      }
    },
    GET_SERVERS: async (context) => {
      const serversResponse = await axios.get('http://localhost:8082/get-servers');
      context.commit('SET_SERVERS', serversResponse.data);
    }
  },
  modules: {
  },
});
