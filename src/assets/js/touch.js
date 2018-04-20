export const touch =  function (obj,startFun,moveFun,endFun) {
    var coord={},
        start={},
        el;
        obj.addEventListener('touchstart', touchStart);
        obj.addEventListener('touchmove',touchMove);
        obj.addEventListener('touchend',touchEnd);
        obj.addEventListener('touchcanel',touchCancel);

    function newEvent(type){
        return new Event(type,{ bubbles: true,cancelable: true});
    }

    function touchCancel () {
        coord = {}
    }

    function touchStart(e){
        var c = e.touches[0];
        start = {
            x: c.clientX,
            y: c.clientY,
            time: Date.now()
        };
        el= e.target;
        el='tagName' in el ? el : el.parentNode;
        if(startFun){
            startFun();
        }
    }

    function touchMove(e){
        var t = e.touches[0];
        coord = {
            x: t.clientX - start.x,
            y: t.clientY - start.y
        };
        if(moveFun){
            moveFun();
        }
    }

    function touchEnd(){
        var touchTimes = Date.now() - start.time,
                c = 250 > touchTimes && Math.abs(coord.x) > 20 || Math.abs(coord.x) > 80,
                s = 250 > touchTimes && Math.abs(coord.y) > 20 || Math.abs(coord.y) > 80,
                left = coord.x < 0,
                top = coord.y < 0;
        if (250 > touchTimes && (isNaN(coord.y) || Math.abs(coord.y)) < 12 && (isNaN(coord.x) || Math.abs(coord.x) < 12)) {
            el.dispatchEvent(newEvent('tap'));
        }else if(750<touchTimes && (isNaN(coord.y) || Math.abs(coord.y)) < 12 && (isNaN(coord.x) || Math.abs(coord.x) < 12)){
            el.dispatchEvent(newEvent('longTap'));
        }
        c ? el.dispatchEvent(left ? newEvent('swipeLeft') : newEvent('swipeRight')) : s && el.dispatchEvent(top ? newEvent('swipeUp') : newEvent('swipeDown'));
        if(endFun){
            endFun(coord);
        }
        coord={};
    }
};