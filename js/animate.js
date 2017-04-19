/**
 * Created by HUCC on 2017/2/3.
 */

    function animate(element, json, fn) {
        if (element.timer) {
            clearInterval(element.timer);
        }

        element.timer = setInterval(function () {

            //1. 假设都到达了终点
            var flag = true;

            for (var k in json) {
                var attr = k;
                var target = json[k];

                //如果发现是层级，那么不需要动画
                if (attr == "zIndex") {
                    element.style[attr] = target;
                } else if (attr == "opacity") {
                    var leader = getStyle(element, attr);
                    //1. 将parseInt改成parseFloat
                    leader = parseFloat(leader) || 0;
                    //2. target和leader同时扩大100倍
                    target *= 100;
                    leader *= 100;

                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;

                    //3. 在设置的时候，需要将leader/100,去掉px
                    element.style[attr] = leader / 100;

                    if (target != leader) {
                        flag = false;
                    }
                } else {

                    var leader = getStyle(element, attr);
                    leader = parseInt(leader) || 0;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;

                    element.style[attr] = leader + "px";

                    if (target != leader) {
                        flag = false;
                    }
                }

            }

            //3. 如果此时假设成立，才清理定时器
            if (flag) {
                clearInterval(element.timer);
                fn && fn();
            }

            //console.log("代码还在一直运行中");
        }, 15);
    }


    function getStyle(element, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(element, null)[attr];
        } else {
            return element.currentStyle[attr];
        }
    }

