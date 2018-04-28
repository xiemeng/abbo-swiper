# xiemeng
vue 轮播图插件

如何使用    npm istall --save abbo-swiper

import abbo from 'abbo-swiper';
Vue.use(abbo)


 <abbo-swiper :options="swiperOption">
	<abbo-slide><slot></slot></abbo-slide>
	<abbo-slide><slot></slot></abbo-slide>
	<abbo-slide><slot></slot></abbo-slide>
</abbo-swiper>

swiperOption:{
	times:3000, //轮播时间  默认3000
	subscript:true,//轮播指示点,默认开启
	touch:true,//是否开启手势滑动事件 默认开启
	manner:'around',//轮播方式，透明度或者左右滑 透明度lucency 左右滑around  默认左右滑动
}


