$(function () {
    $("button").click(function () {
       window.open('/axf/addaddress/', target='_self');
    });

    $("a").click(function () {
        var $a = $(this);

        var addressid = $a.attr('addressid');

       $.getJSON('/axf/addresslist/',{'addressid':addressid},function (data) {
           console.log(data);

       })
    });
});