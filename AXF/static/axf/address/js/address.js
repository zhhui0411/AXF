$(function () {
   $('span').click(function () {
      console.log('返回购物车');

      window.open('/axf/cart/', target='_self');
   });
});