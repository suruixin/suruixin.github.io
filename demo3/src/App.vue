<template>
	<div>
		<!--<router-view name="helloworld" />-->
		<!--<Table border :columns="columns7" :data="data6"></Table>-->
		<!--token-->
		<button @click="engine++">dianji</button>
		<ball :engine = "engine" :bottom="'500'" :left="'350'"></ball>
	</div>
    
</template>
<script>
	import ball from '@/components/HelloWorld'
    export default {
        data () {
            return {
            	engine: 0,
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        width: 150,
                        align: 'center',
                        type:'html',
                        key:'img'
                    }
                ],
                data6: []
            }
        },
        methods: {
            getData(){
            	this.$http.post('/').then(response=>{
            		this.data6 = response.data.response
            	})
            }
        },
        created(){
        	this.getData();
        },
        components:{
        	ball
        }
    }
</script>

<style>
</style>
