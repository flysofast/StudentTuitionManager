function CreateAccount() {
    var obj = {
        Username: $("#username").val(),
        Password: $("#password").val(),
        RoleId: $("#role").val(),
        isDelete: false,
    };
    console.log(obj);
    $.ajax({
        url: 'Create_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
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

function UpdateAccount() {
    var obj = {
        AccountId: $("#FeeAccountId").val(),
        Username: $("#username").val(),
        Password: $("#password").val(),
        RoleId: $("#role").val(),
        isDelete: false,
    };
    $.ajax({
        url: '/Users/Update_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (err) {
            console.log(err);
            swal("Error...", "Cannot update account! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Updated account!", "success");
                location.replace(document.location.origin + "/Users/search");
            } else {
                swal("Error...", "Cannot update account!", "error");
            }
        }
    });
}

function DeleteAccount(id) {
    swal({
        title: "Are you sure?",
        text: "You want to deactivate this acocunt!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Deactivate it!",
        closeOnConfirm: false
    }, function () {
        var obj = {
            AccountId: id,
        };
        console.log(obj);
        $.ajax({
            url: '/Users/Deactivate_Api',
            data: JSON.stringify(obj),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (err) {
                console.log(err);
                swal("Error...", "Cannot Deactivate account! \n Cannot get to server API", "error");
            },
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    swal("Successfully!", "Deactivated account!", "success");
                    location.reload();
                } else {
                    swal("Error...", "Cannot Deactivate account!", "error");
                }
            }
        });
    });

    
}