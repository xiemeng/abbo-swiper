<template>
		<div id="Ocarousel">
			<ul id="pictures" class="lucency">
				<slot></slot>	
			</ul>
		</div>
</template>
<script>
	import {autoPlay} from '../assets/js/autoplay.js';
export default {
	
  name: 'abbo-swiper',
  props: {
  	options: {
        type: Object,
        default() {
          return {
            autoplay: 3500
          }
        }
      }
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
	  	console.log(this.options)
//	  	var data = {
//	  		times:3000,
//	  		subscript:true,
//				touch:true,
//				manner:'around',
//	  	}
	 		autoPlay('pictures','li',this.options);
	  },
}
</script>
<style lang="scss">
	@import url("/src/assets/css/common.css");
		#Ocarousel{
			width: 100%;position:relative;overflow:hidden;
			#p_round{
				position: absolute;left: 50%;bottom: 10%;
				border-radius: 30px;background-color:rgba(255, 255, 255, 0.2);
				-webkit-transform: translate(-50%, 0);
    		transform: translate(-50%, 0);
				span{
					width: 10px;height: 10px;background-color: #bfbfbf;border-radius: 50%;z-index: 2;
					margin-left: .5em;margin-right: .5em;display: inline-block;
				}
				span.active{
					background-color: #fff;
				}
			}
		}
		.lucency{
			li{
				width: 100%;
				position:absolute;
				opacity: 0;
				transition: opacity 800ms;
				img{
					width:100%;
				}
			}
			li.active{
			  opacity: 1;
			}
		}
		.around{
			
			li{
				width: 100%;
				float:left;
				img{
					width:100%;
				}
			}
		}
		#pictures{
			width: 100%;
			position: relative;left:0;
			
		}
</style>