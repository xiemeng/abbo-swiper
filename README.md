插件测试   

如何使用    npm istall --save abbo-swiper

import abbo from 'vue-abbo';
Vue.use(abbo)


 <abbo-swiper :options="swiperOption">
	<abbo-slide><img src="./assets/imgs/license_01.png"></abbo-slide>
	<abbo-slide><img src="./assets/imgs/license_02.png"></abbo-slide>
	<abbo-slide><img src="./assets/imgs/license_03.png"></abbo-slide>
</abbo-swiper>

swiperOption:{
	times:3000, //轮播时间  默认3000
	subscript:true,//轮播指示点,默认开启
	touch:true,//是否开启手势滑动事件 默认开启
	manner:'around',//轮播方式，透明度或者左右滑 透明度lucency 左右滑around  默认左右滑动
}


