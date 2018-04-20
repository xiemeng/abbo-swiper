<template>
  <div id="app">
    <abbo-swiper :options="swiperOption">
    	<abbo-slide><img src="./assets/imgs/license_01.png"></abbo-slide>
    	<abbo-slide><img src="./assets/imgs/license_02.png"></abbo-slide>
    	<abbo-slide><img src="./assets/imgs/license_03.png"></abbo-slide>
    </abbo-swiper>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      messages: [],
      swiperOption:{
      	times:3000,
	  		subscript:true,
				touch:true,
				manner:'around',
      }
    }
  },
  methods: {
    handleMessage: function (payload) {
      this.messages.push(payload.message)
    },
    doTheThing:function(){
	   	
	   }
  },
  mounted(){
	 			
	},
}
</script>

<style lang="scss">
#app{
	width: 100%;
	height: 100%;
}
</style>
