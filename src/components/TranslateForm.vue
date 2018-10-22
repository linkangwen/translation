<template>
  <div id="TranslateForm">
    <form class="row" action="" v-on:submit="formSubmit">
      <div class="col-xs-9 col-sm-9 col-md-9">
        <input class="form-control input-style" type="text" v-model="textToTranslate" placeholder="输入要翻译的内容">
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2">
        <select class="form-control" v-model="language">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="ko">korear</option>
            <option value="ja">Janpenese</option>
        </select>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1">
        <input class="btn btn-default btn-style" type="submit" value="翻译">
      </div>  
    </form>
  </div>
</template>

<script>


export default {
  name: 'TranslateForm',
  data:function(){
    return{
      textToTranslate:"",
      language:""
    }
  },
  methods:{
    formSubmit:function(e){
      this.$emit("formSubmit",this.textToTranslate,this.language);
      e.preventDefault();
    }
  },
  created:function(){
    this.language = "en";
  },
  components: {
    
  }
}
</script>

<style scoped>
.row div{
  padding: 0;

}
.btn-style{
  background: #12a7ff; 
}
</style>
