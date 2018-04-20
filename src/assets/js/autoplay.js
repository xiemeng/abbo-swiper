import {touch} from './touch';
export const autoPlay=function(parentID,childTag,data) {
    //data配置项对象
    if(data.manner && data.manner == 'lucency'){
        data.manner = 'lucency';
    }else{
        data.manner = 'around';
    }
   
	let options = {
        times:data.times || 3000,//轮播时间  默认3000
        manner:data.manner || 'around',//轮播方式，透明度或者左右滑 透明度lucency 左右滑around  默认左右滑动
        subscript:data.subscript == false?data.subscript:true,//轮播指示点,默认开启
        touch:data.touch == false?data.touch:true,//touch事件，默认开启
    }
    //全局变量
    let index = 0; //初始下标
    const pictures = document.getElementById(parentID);
    const items = pictures.getElementsByTagName(childTag);
    const len=items.length;
    let iWidth;
    //是否打开轮播指示点
    if(options.subscript){
        var p_round = document.createElement("div");
        p_round.id = "p_round";
        for(let i = 0;i<len;i++){
            var span = document.createElement("span");
            p_round.appendChild(span)
        }
        document.getElementById('Ocarousel').appendChild(p_round)
        var p_round = document.getElementById('p_round');
        var r_span = p_round.getElementsByTagName('span');
        r_span[index].setAttribute("class",'active');
    }
    //项目初始化
    init()
     //开启定时器，自动轮播
    let isTime = true;
    let timer = setInterval(()=>{
        if(isTime){
            index++;
            showItem()
        }
    },options.times);
    // 项目初始化函数
    function init(){
        // 显示一张图片
        
        //  给外圈设置高度，注意可能会丢失
        setTimeout(function(){
            pictures.style.height = items[0].getElementsByTagName('img')[0].height+'px';
         
        })
        // 如果是左友滑，复制第一个节点，接到最后一个位置
        if(options.manner == 'around'){
            let newLi = items[0].cloneNode(true);
            let farstnewLi = items[len-1].cloneNode(true);
            pictures.appendChild(newLi);
            pictures.insertBefore(farstnewLi,items[0])
            pictures.setAttribute("class",'around clear');
            setTimeout(function(){
                for(let i = 0;i<len+2;i++){
                    items[i].style.width = pictures.offsetWidth+'px';
                }
                iWidth = items[0].offsetWidth;
                pictures.style.width = items[0].getElementsByTagName('img')[0].width*(len+2)+'px';
                pictures.style.left = -iWidth*(index+1)+'px';
            })
        }else{
            pictures.setAttribute("class",'lucency');
        }
        items[index].setAttribute("class",'active');
        
        //  
        //调用手势滑动事件函数。默认开启
        if(options.touch){
            touchF()
        }
    }
    //touch事件
    function touchF(){
        touch(pictures,startFun,touchMove,touchEnd)
        function startFun(){
            isTime = false;
        };
        function touchMove(){

        };
        function touchEnd(coord){
            if(coord.x>100){ //右滑减少
                index--;
                showItem()
            }else if(coord.x<-100){  //左滑增加
                index++;
                showItem()
            };
        }
    }
     // 移动函数
     function showItem() {
    //    渲染程序
        if(options.manner == 'lucency'){
            // 下标的处理
            if(index>= len){
                index = 0;
                
            }
            if(index<0){
                index = len-1;
            }
            lucencyF()
        }else{
            aroundF()
        }
    }
    // 透明度处理程序
    function lucencyF(){
        for(let i = 0;i<len;i++){
            if(i == index){
                items[index].setAttribute("class",'active');
                if(options.subscript){
                    r_span[index].setAttribute("class",'active');
                }
            }else{
                items[i].setAttribute("class",'');
                if(options.subscript){
                    r_span[i].setAttribute("class",'')
                }
                
            }
        }
    }
    // 左右滑处理程序
    function aroundF(){
        // 下标的处理
            if(index> len){
            	 index = 1;	 
            }
            if(index<-1){
            	pictures.style.left = -iWidth*(index+1)+'px';
                index = len-2;
            };
            if(index == len){
            	r_span[0].setAttribute("class",'active');
            	r_span[len-1].setAttribute("class",'');
                pictures.style.left = -iWidth*(index+1)+'px';
                setFun(function(){
                    pictures.style.left = -iWidth*1+'px';
                })
	        }else{
                pictures.style.left = -iWidth*(index+1)+'px';
                setFun()
	        	for(let i = 0;i<len;i++){
		            if(i == index){
		                if(options.subscript){
		                    r_span[index].setAttribute("class",'active');
		                }
		            }else{
		                if(options.subscript){
		                    r_span[i].setAttribute("class",'')
		                } 
		            }
		        }
            }
            if(index == -1){
                r_span[len-1].setAttribute("class",'active');
                r_span[0].setAttribute("class",'');
                setFun(function(){
                    pictures.style.left = -iWidth*len+'px';
                })
            }
            function setFun(retFun){
                document.getElementsByClassName('around')[0].style.transition = 'left 300ms';
                setTimeout(function(){
                    if(retFun){
                        retFun()
                    }
                    document.getElementsByClassName('around')[0].style.transition = 'left 0s';
            	},300)
            }
    }
 };