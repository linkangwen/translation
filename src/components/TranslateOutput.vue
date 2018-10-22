<template>
  <div id="TranslateOutput">
    <h2>{{translatedText}}</h2> 
  </div>
</template>

<script>


export default {
  name: 'TranslateOutput',
  props:[
  "translatedText"]
 
}
</script>

<style>
#TranslateOutput{
	margin-top: 30px;
}
</style>
