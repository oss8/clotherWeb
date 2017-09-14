/* global window document XMLHttpRequest */
$(document).ready(function () {
  const baseUrl = 'https://style.man-kang.com:3600/api/'
  const orderId = getUrlParams('orderid')
  $.ajax({
    url: baseUrl + 'f-Users/requestOrdersFromOrderId',
    type:'POST',
    async: true,
    data: {id: orderId},
    dataType: 'json',
    success (data,textStatus,jqXHR) {
      if (data.status == 1) {
        render(data.result)
      } else {

      }
      
    },
    error () {

    }
  });
  
  function render (result){
      const images = result.allImage.split(',');
      $('#headerImage').attr('src',result.headerImage)
      $('#userName').text(result.UserName);
      $('#prosImage').attr('src',images[0]);
      $('#confImage').attr('src',images[1]);
      console.log($('#confImage').attr('src'))
      let mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:0,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要分页器
        pagination: '.swiper-pagination'
        
        // 如果需要滚动条
      }) 
      $('#title').text(result.UserName+'的原创定制');
      $('#productId').text(`商品ID：${result.Gender+result.baseId}`);
      $('#size').text(`尺寸：${result.height}`);
      $('#colorView').css('background',`#${result.color}`);
      $('#price').text(`￥${result.fee.toFixed(2)}`);
      
  } 
  
  function getUrlParams(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
});
