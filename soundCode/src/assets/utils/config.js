/* eslint-disable */
const config = {
	request: {
		intercept(){ // this.$get this.$post数据请求时 拦截器

		},
		duration: {
			tenMin() {
                return 60*1000*10
            }
		}
	}
}
export default config