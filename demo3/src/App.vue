<template>
    <Table border :columns="columns7" :data="data6"></Table>
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
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            getData(){
            	setTimeout(()=>{
            		for(var i = 0 ; i < 10; i++){
		        		this.data6.push({
		                    name: 'John Brown',
		                    age: i,
		                    address: `New York No. ${i} Lake Park`,
		                    img:'<img src="1516"/>'
		                })
		        	}
            	},200);
            }
        },
        created(){
        	this.getData();
        }
    }
</script>

<style>
</style>
