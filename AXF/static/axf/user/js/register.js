$(function () {

    var $username = $("#username_input");

    $username.change(function () {
        var username = $username.val().trim();

        if (username.length) {

            //    将用户名发送给服务器进行预校验
            $.getJSON('/axf/checkuser/', {'username': username}, function (data) {

                console.log(data);

                var $username_info = $("#username_info");

                if (data['status'] === 200){
                    $username_info.html("用户名可用").css("color", 'green');
                }else  if(data['status'] ===901){
                    $username_info.html("用户已存在").css('color', 'red');
                }

            })

        }

    })


})


function check() {
    var $username = $("#username_input");

    var username = $username.val().trim();

    var $email =$("#email_input");

    var email =$email.val().trim();

    var $password = $("#password_input");

    var password = $password.val().trim();

    var $pwd_confirm = $("#password_confirm_input");

    var pwd_confirm = $pwd_confirm.val().trim();

    if (!username){
        return false;
    }
    if(!email){
        return false;
    }

    if(!password){
        return false;
    }

    if(password!=pwd_confirm){
        alert("两次密码不一致，请重新输入！");
        return false;
    }
    var info_color = $("#username_info").css('color');

    console.log(info_color);

    if (info_color == 'rgb(255, 0, 0)'){
        return false
    }

    $password.val(md5(password));

    return true
}
