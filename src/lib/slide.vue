<template>
			<li>
				<slot></slot>
			</li>
</template>
<script>
export default {
	
  name: 'abbo-slide',
  props: {
  	data1:{
  		type:[String,Number],
  		default:100
  	},
  },
	  directives: {
	    // 自定义指令
	    comment: {
	      bind: function (el, binding) {
	        
	      }
	    }
	  },
	  data () {
	    return {
	      message: 'test message'
	    }
	  },
  	methods:{
	  	
	  },
   		created(){
	  		
		
	  },
	  activated(){
	  	
	  },
	  mounted(){
	  	
	  },
}
</script>
<style lang="scss">
	
</style>