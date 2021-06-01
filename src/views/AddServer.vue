<template>
  <div class="add-server">
    <Navbar />
    <div class="add-server-form-contaner">
      <h2>Add new server</h2>
      <input type="text" placeholder="Server Name" v-model="newServer.name">
      <select v-model="newServer.status">
        <option value="1">Up</option>
        <option value="2">Mantainance</option>
        <option value="3">Down</option>
      </select>
      <button type="button" @click="addNewServer()">Add server</button>
    </div>
  </div>
</template>

<script lang="ts">
/*
    name: string,
    status: number,
    upTime: number,
    isActive: boolean
*/
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'AddServer',
  components: {
    Navbar,
  },
  setup(){
    const store = useStore();
    const router = useRouter();
    const newServer = ref({
      name: '',
      status: 1,
      uptime: new Date(),
      isActive: true
    });
    const addNewServer = async():void => {
      if(newServer.value.name.length > 0){
        if(newServer.value.status === 1) {
          newServer.value.isActive = true;
        }else{
          newServer.value.isActive = false;
        }
        const addServerResponse = await store.dispatch('ADD_NEW_SERVER', newServer.value);
        if(addServerResponse === 'Success'){
          newServer.value = {
            name: '',
            status: 1,
            uptime: new Date(),
            isActive: true
          }
          router.push({
            path: '/',
          })
        }
      }
    } 
    return{
      newServer,
      addNewServer
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../style/AddServer.scss'
</style>
