<template>
  <div class="hello">
      <childleft class="childleft"/>
      <childright class="childright"/>
  </div>
</template>

<script>
import childleft from '@/components/divide/page/childleft'
import childright from '@/components/divide/page/childright'
export default {
  components:{
      childleft,
      childright
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:100%;
  height: 500px;
  display: flex;
}
.childleft,.childright{
  flex:1;
}
.childleft{
  background:red;
}
</style>
