"use strict";$(document).ready(function(){function e(e){var t=e.allImage.split(",");$("#headerImage").attr("src",e.headerImage),$("#userName").text(e.UserName),$("#prosImage").attr("src",t[0]),$("#confImage").attr("src",t[1]),console.log($("#confImage").attr("src"));new Swiper(".swiper-container",{direction:"horizontal",loop:!0,autoplay:0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",pagination:".swiper-pagination"});$("#title").text(e.UserName+"的原创定制"),$("#productId").text("商品ID："+(e.Gender+e.baseId)),$("#size").text("尺寸："+e.height),$("#colorView").css("background","#"+e.color)}var t=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=window.location.search.substr(1).match(t);return null!=r?unescape(r[2]):null}("orderid");$.ajax({url:"https://style.man-kang.com:3600/api/f-Users/requestOrdersFromOrderId",type:"POST",async:!0,data:{id:t},dataType:"json",success:function(t,r,a){1==t.status&&e(t.result)},error:function(){}})});