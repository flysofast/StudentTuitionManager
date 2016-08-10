function CreateAccount() {
    $.ajax({
        url: 'http://api.joind.in/v2.1/talks/10889',
        data: STR,
        dataType: 'jsonp',
        type: 'POST',
        error: function () {
            $('#info').html('<p>An error has occurred</p>');
        },
        success: function (data) {
            if (data == 1) {
                swal("Successfully!", "Created new account!", "success")
            } else {
                sweetAlert("Error...", "Cannot create new account!", "error");
            }
        }
    });
}