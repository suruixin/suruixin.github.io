import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/index'
import home from '@/components/home/index'
import helloworld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
	
	routes: [
	{
		path:'/',
		redirect:{
			name: 'home'
		}
	},
	{
		path: '/home',
		name: 'home',
		components: {
			home
		}
	},
	{
		path: '/login',
		name: 'login',
		components: {
			login
		}
	}, {
		path: '/helloworld',
		name: 'helloworld',
		components: {
			helloworld
		}
	}
	]
})