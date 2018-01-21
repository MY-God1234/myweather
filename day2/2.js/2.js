/*
* @Author: 贾姗姗
* @Date:   2018-01-19 15:50:42
* @Last Modified by:   贾姗姗
* @Last Modified time: 2018-01-19 17:42:57
*/
var aa="123";
//输出
console.log(aa);
var button=document.getElementsByName("button");
console.log(button);
//当页面加载完成时
window.onload=function(){
	//当点击按钮消失
    var button=document.getElementsByClassName("button");
    console.log(button);
	button[0].onclick=function(){
	    //alert("这是一个按钮");
	    var city=document.getElementsByClassName("city");
	    console.log(city);
	    city[0].style.display="none";
	}
	var pos=document.getElementsByClassName("pos");
	console.log(pos);
	//点击事件
	pos[0].onclick=function(){
		var city=document.getElementsByClassName("city");
	    console.log(city);
	    city[0].style.display="block";
	}
}
// 引入远程数据
// 关于城市的数据
 $.ajax({
 	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
 	dataType:"jsonp",
 	method:"get",
 	success:function(obj){
 		console.log(city);
 		var city=obj.data;
 	}
 })
 $.ajax({
 	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
 	dataType:"jsonp",
 	method:"get",
 	success:function(obj){
 		var tianqi=obj.data;
 		console.log(tianqi)
 		console.log(tianqi.weather.current_temperature);
 		console.log(tianqi.weather.tomorrow_low_temperature);
 		// var tianqi=tianqi.weather
 	}
 })





// js
//1：当整个页面加载完成时才可以对元素进行操作；
//2：获取元素：document.getElementsByClassName(""[0]);
//3: 添加事件函数；
//4：进行样式的操作；