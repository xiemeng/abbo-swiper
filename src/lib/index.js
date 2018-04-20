import swiper from './swiper.vue';
import slide from './slide.vue';
let aSwiper = {
	slide: slide,
  swiper: swiper,
  install: function(Vue) {
  	Vue.component(swiper.name, swiper)
  	Vue.component(slide.name, slide)
  }
}
// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(aSwiper) 
}
export default aSwiper
//module.exports = aSwiper