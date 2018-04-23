<template>
	<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
    </FormItem>
    <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
    </Input>
</FormItem>
<FormItem>
    <Button type="primary" @click="handleSubmit('formInline')">singe</Button>
</FormItem>
</Form>
</template>
<script>
export default {
    data () {
        return {
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$http.post('/login',{
                        user:this.formInline.user,
                        password:this.formInline.password
                    }).then(data=>{
                        if(data.data.state == 0){
                            this.$router.push('/');
                        }else{
                            alert(data.data.msg);
                        }
                    }).catch(err=>console.log(err))
                    this.$Message.success('成功!');

                } else {
                    this.$Message.error('失败!');
                }
            });
        }
    }
}
</script>

<style>

</style>