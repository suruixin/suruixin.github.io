<template>
	<docTemp :tab="tab" :content="content"></docTemp>
</template>
<script>
import docTemp from '@/components/templates'
export default({
	components: {
		docTemp
	},
	data(){
		return {
			tab: [],
			content: []
		}
	},
	mounted(){
		this.$get('/static/json/axios.json').then(res => {
			if (res.code === "1") {
				this.tab = res.data.tab
				this.content = res.data.content
			}
		})
	}
})
</script>
<style>
	
</style>