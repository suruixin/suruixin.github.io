<template>
	<div id="app">
		<router-view name="login"></router-view>
		<router-view name="home"></router-view>
		<!--token-->
	</div>
    
</template>
<script>
    export default {
        data () {
            return {
            	
            }
        },
        methods: {
        },
        created(){
        	
        },
        components:{
        	
        },
        beforeCreate(){
        	this.$http.post('/login').then((response)=>{
        		if(response.data.state != 0){
        			this.$router.push('/login')
        		}else{
        			
        		}
        	}).catch((err)=>{
        		this.$Message.error(`'errey:'${err}`);
        	})
        }
    }
</script>

<style lang="less">
body,html,#app{
    width:100%;
    height:100%;
}
</style>
