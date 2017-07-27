/*
* @Author: Administrator
* @Date:   2017-07-25 15:53:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-07-26 00:05:59
*/
$(function(){

var num = 1;//当前图片编号 (1,2,3,4)
var width = $(".banner_box .imgs img").width();//每张图的宽度  数值1200
var count = $(".banner_box .imgs img").length//图片的个数
var timer = null;//计时器

// console.log(width)

// document.title = num
points(0);
	// 1.原点切换状态 经常用到的状态改成函数 方便调用
function points(index){
		$(".banner_box .points span").eq(index).addClass("current").siblings('span').removeClass('current');
		}
	// 2.点击右按钮，图片的盒子整体左移1000px（一张图的宽度）
	$(".right_btn").click(function(){
		// 没有动画效果的时候才允许执行以下过程
		if(!$(".banner_box .imgs").is(":animated")){
		if(num == count){
			// 最后一张，回到第一张
			$(".banner_box .imgs").animate({"margin-left":0});
			num=1;
		}else{
			$(".banner_box .imgs").animate({"margin-left":"-="+width});
		num++;
		}



		

		// document.title=num;
		points(num-1);
	}

	})
	
	// 3.点击左按钮
	$(".left_btn").click(function(){
		// 1  0
		// 2 -1000
		// 3 -2000 
		// 4 -3000
		// 5 -4000 
		// 6 count-1

		// 没有动画效果的时候才允许执行以下过程
		if(!$(".banner_box .imgs").is(":animated")){
		if(num == 1){
			// 最后一张，回到第一张
			$(".banner_box .imgs").animate({"margin-left":"-"+width*(count-1)});
			num=count;
		}else{
			$(".banner_box .imgs").animate({"margin-left":"+="+width});
		num--;
		}



		

		// document.title=num;
		points(num-1);
	}

	})
	
	// 4.自动轮播
	
	timer=setInterval("$('.right_btn').click()",3000);
	// 5.鼠标进入，停止轮播：鼠标移出，继续轮播
	// mouseover mouseout
	
	$(".banner_box").mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		timer=setInterval("$('.right_btn').click()",3000);
	})
	// 6.放到圆点上，显示对应的图 mouseover
	
	$(".banner_box .points span").mouseover(function(){
		
		// 没有动画效果的时候才允许执行以下过程
		if(!$(".banner_box .imgs").is(":animated")){
		//滑动显示对应的图 往左滑动 类似于右按钮的效果  负值
		// margin—left：-1000*图片的下标	
		var index = $(this).index();
		console.log(index);
		
		$(".banner_box .imgs").animate({"margin-left":"-"+width*index});
		// 圆点效果切换
		points(index);
		// num
		num=index+1;
		
		}
	});

})

// -----------------------------------------------
$(function(){
	$(".center div").hide();
		$(".center div:first").show();
		
		$(".center a").click(function(){
			
			$(".center div").hide();
			
			$(".center div").eq($(this).index()).show();
		})
})
 $(function(){
$(".center .a1").click(function(){
        		$(".center .a1").css({"color":"blue"});
        		$(this).css({"color":"red"});
        	})        
});

