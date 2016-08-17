function CreateFunction() {
    var obj = {
        FunctionName: $("#Name").val(),
        Description: $("#Description").val(),
    };
    console.log(obj);
    $.ajax({
        url: 'Create_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function () {
            swal("Error...", "Cannot create new function! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Created new function!", "success")
            } else {
                swal("Error...", "Cannot create new function!", "error");
            }
        }
    });
}

function UpdateFunction() {
    var obj = {
        FunctionId: $("#FunctionId").val(),
        FunctionName: $("#Name").val(),
        Description: $("#Description").val(),
    };
    $.ajax({
        url: '/Users/Update_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (err) {
            console.log(err);
            swal("Error...", "Cannot update function! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Updated function!", "success");
                location.replace(document.location.origin + "/Users/search");
            } else {
                swal("Error...", "Cannot update function!", "error");
            }
        }
    });
}

function DeleteFunction(id) {
    swal({
        title: "Are you sure?",
        text: "You want to deactivate this Function!",
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
            url: '/Function/Deactivate_Api',
            data: JSON.stringify(obj),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (err) {
                console.log(err);
                swal("Error...", "Cannot Deactivate function! \n Cannot get to server API", "error");
            },
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    swal("Successfully!", "Deactivated function!", "success");
                    location.reload();
                } else {
                    swal("Error...", "Cannot Deactivate function!", "error");
                }
            }
        });
    });


}