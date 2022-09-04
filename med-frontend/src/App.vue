<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NotFound from "@/views/HelperPages/NotFound.vue"
export default {
  name: 'App',
  data(){
    return{
      fallBack : NotFound
    }
  }
}
</script>

<style>
body{
  background-color: #FAFBFC !important;
}
#app {
  font-family: 'Open Sans',Arial,sans-serif;
  
}
</style>
