webpackJsonp([5],{Gy7i:function(t,e){},H6Vf:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"home",data:function(){return{timeout:""}},mounted:function(){var t=this;this.timeout=setTimeout(function(e){t.$router.push("/document/axios")},3e3)},methods:{clear:function(){clearTimeout(this.timeout),this.$router.push("/document/axios")}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[this._v("\n\t首页正在努力搭建中\n\t"),e("a",{staticClass:"link",attrs:{href:"javascript:void(0)"},on:{click:this.clear}},[this._v("三秒后自动跳转至axios文档页面，点击跳转")])])},staticRenderFns:[]};var s=i("C7Lr")(n,o,!1,function(t){i("Gy7i")},"data-v-4563fda0",null);e.default=s.exports}});