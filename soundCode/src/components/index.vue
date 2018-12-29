<template>
  <div class="home">
    <router-link :to="'/axios'" v-for="(item,index) in axios" :key="index"></router-link>
  </div>
</template>

<script>
    export default {
      name: "home",
      data(){
        return {
          tab: ['axios']
        }
      }
    }
</script>

<style scoped>

</style>
