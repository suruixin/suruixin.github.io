import state from './state';
import Vue from 'vue';
const mutations = {
	setmsg:(state,msg)=>{
		var arr = ['error','warning','success']
		if(msg.type){
			msg.type = (typeof msg.type ==='number')? arr[msg.type+1]:msg.type
		}else{
			msg.type = undefined;
		}
		Vue.set(state,'msg',msg)
	}
}


export default mutations