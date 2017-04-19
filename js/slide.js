(function(window,document){

	 var div = document.getElementById("slide")
    var ul = div.children[0];
    // alert(ul);
    //得到所有的图片li
    var lis = ul.children;
       //得到每一张图片的宽度
    var imgWidth = ul.children[0].offsetWidth;
   //定义一个变量,控制图片的播放张数
    var pic = 0;
    //要做无缝滚动  需要克隆一张图片到最后
    ul.appendChild(ul.children[0].cloneNode(true));
 // alert(lis.length);
  var ol = document.getElementsByTagName("ol")[0];
    //动态生成小圆点
    var  len = lis.length;
    for(var i = 0;i<len -1;i++){
    	//最后一张假图片,所以要减1
    var li = document.createElement("li");	
      //添加到ol里
      ol.appendChild(li);
    }

 var timer = null;
   
    // 实现自动轮播功能
    function autoplay(){
       timer = setInterval(function(){
      // alert(lis.length);
    
      if(pic == lis.length-1){
        pic =0;
        ul.style.left = 0;
      }
        pic++;
         animate(ul,{left:pic*imgWidth*-1})
      
    },1500)
    }


    //鼠标移到大盒子上清除定时器
    var box = document.getElementsByClassName("box")[0];
    box.onmouseover = boxMouseOverHanler;
    function boxMouseOverHanler(){
    	clearInterval(timer);
    }
  box.onmouseout = function(){
         autoplay();
  }
  //在左边全是负的
  
   //左边按钮的点击事件  点击左侧的按钮是要看到左边的图像
   var left = document.getElementsByClassName("left")[0];
   // console.log(left);
   left.onclick = leftClickHandler;
   function leftClickHandler(){
               // alert(1);
               // 
             
            if(pic==0){
                  pic=lis.length-1;
                  ul.style.left=pic*imgWidth*-1 +"px";
               }
            pic--;     
      animate(ul,{left:imgWidth*pic*-1});
       
      
  
   }
   // 右边按钮
   var right = document.getElementsByClassName("right")[0];
  // console.log(left,right);
  right.onclick = rightClickHandler;
  function rightClickHandler(){
  
  
  	if(pic ==lis.length-1){
  		pic = 0;
       ul.style.left = 0;
  	}
     pic++;
      animate(ul,{left:imgWidth*pic*-1});
  }
  
    //得到每一张图片的宽度
    var imgWidth = ul.children[0].offsetWidth;
    // alert(imgWidth);
   
   

})(window,document)
   


