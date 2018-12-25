function check() {
    var receiver = $('#receiver_input').val().trim();
    var tel = $("#tel_input").val().trim();
    var addresses = $("#addresses_input").val().trim();

    if(!receiver){
        return false;
    }
    if(!tel){
        return false;
    }
    if(!addresses){
        return false;
    }
    return true;
}