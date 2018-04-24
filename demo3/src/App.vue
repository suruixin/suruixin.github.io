<template>
	<div>
		<Table border :columns="columns7" :data="data6"></Table>
		token
		signed  签名
	</div>
    
</template>
<script>
    export default {
        data () {
            return {
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
        }
    }
</script>

<style>
</style>
