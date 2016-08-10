function CreateAccount() {
    var obj = {
        Username: $("#username").val(),
        Password: $("#password").val(),
        Password: $("#role").val(),
        isActive: true,
    };

    $.ajax({
        url: 'Create_Api',
        data: JSON.stringify(obj),
        dataType: 'json',
        type: 'POST',
        error: function () {
            swal("Error...", "Cannot create new account! \n Cannot get to server API", "error");
        },
        success: function (data) { 
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Created new account!", "success")
            } else {
                swal("Error...", "Cannot create new account!", "error");
            }
        }
    });
}