$(function () {
   $('#back1').click(function () {
      console.log('返回购物车');

      window.open('/axf/cart/', target='_self');
   });

   $('#back2').click(function () {
      console.log('返回我的');

      window.open('/axf/mine/', target='_self');
   });
});