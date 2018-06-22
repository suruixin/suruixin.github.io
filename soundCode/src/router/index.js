import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import install from '@/components/utils/article/install'
import music from '@/components/music/index'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			components: {
				home
			}
		},
		{
			path: '/article/install',
			name: 'install',
			component: install
		},
		{
			path: '/music',
			name:'music',
			component: music
		}
	]
})