'use strict';

/* global window document XMLHttpRequest */
$(document).ready(function () {
  var baseUrl = 'https://style.man-kang.com:3600/api/';
  var orderId = getUrlParams('orderid');
  $.ajax({
    url: baseUrl + 'f-Users/requestOrdersFromOrderId',
    type: 'POST',
    async: true,
    data: { id: orderId },
    dataType: 'json',
    success: function success(data, textStatus, jqXHR) {
      if (data.status == 1) {
        render(data.result);
      } else {}
    },
    error: function error() {}
  });

  function render(result) {
    var images = result.allImage.split(',');
    $('#headerImage').attr('src', result.headerImage);
    $('#userName').text(result.UserName);
    $('#prosImage').attr('src', images[0]);
    $('#confImage').attr('src', images[1]);
    console.log($('#confImage').attr('src'));
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 0,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要分页器
      pagination: '.swiper-pagination'

      // 如果需要滚动条
    });
    $('#title').text(result.UserName + '的原创定制');
    $('#productId').text('\u5546\u54C1ID\uFF1A' + (result.Gender + result.baseId));
    $('#size').text('\u5C3A\u5BF8\uFF1A' + result.height);
    $('#colorView').css('background', '#' + result.color);
    $('#price').text('\uFFE5' + result.fee.toFixed(2));
  }

  function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);return null;
  }
});