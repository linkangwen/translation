webpackJsonp([0],{0:function(t,e){},I8Ay:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"TranslateForm"}},[a("form",{staticClass:"row",attrs:{action:""},on:{submit:t.formSubmit}},[a("div",{staticClass:"col-xs-9 col-sm-9 col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control input-style",attrs:{type:"text",placeholder:"输入要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-xs-2 col-sm-2 col-md-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("korear")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Janpenese")])])]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-1 col-sm-1 col-md-1"},[e("input",{staticClass:"btn btn-default btn-style",attrs:{type:"submit",value:"翻译"}})])}]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"TranslateOutput"}},[e("h2",[this._v(this._s(this.translatedText))])])},staticRenderFns:[]};var l={name:"App",data:function(){return{translatedText:""}},components:{TranslateForm:a("VU/8")({name:"TranslateForm",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"},components:{}},s,!1,function(t){a("I8Ay")},"data-v-5427fb05",null).exports,TranslateOutput:a("VU/8")({name:"TranslateOutput",props:["translatedText"]},r,!1,function(t){a("jvKl")},null,null).exports},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180705T070502Z.db449bad75d49167.bc60495e9c40d52cb48237cdb9974d57e19319e1&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",{staticClass:"text-muted"},[t._v("简单 / 易用 / 便捷")]),t._v(" "),a("TranslateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("TranslateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},staticRenderFns:[]};var i=a("VU/8")(l,o,!1,function(t){a("uebl")},null,null).exports,u=a("8+8L");n.a.use(u.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:i},template:"<App/>"})},jvKl:function(t,e){},uebl:function(t,e){}},["NHnr"]);