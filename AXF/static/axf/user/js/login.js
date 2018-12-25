function parse_data() {
    var $username = $("#username_input");

    var username = $username.val().trim();

    var $password_input = $("#password_input");

    var password = $password_input.val().trim();

    if(!username){
        return false;
    }
    if(!password){
        return false;
    }

    $password_input.val(md5(password));

    return true
}