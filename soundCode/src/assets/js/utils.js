import axios from 'axios'
var utils = {};
import store from '../../store/store.js'
utils.install = (vue,options)=>{
	vue.prototype.$post = (url,param)=>{
		return new Promise((success,err)=>{
			axios.post(url,param).then((res)=>{
				if(res.data.code === 1){
					success(res.data)
				}else{
					err(res.data)
				}
			}).catch((err)=>{

			})
		})
	};
	vue.prototype.$get = (url,param,config)=>{
		return new Promise((success,err)=>{
			axios.get(url,{params:param}).then((res)=>{
				if(res.data.code === 1){
					success(res.data)
				}else{
					err(res.data)
				}
			}).catch((err)=>{

			})
		})
	};
	vue.prototype.$msg = (msg,type)=>{
		store.commit('setmsg',{
			message:msg,
			type: type
		})
	}
}
export default utils