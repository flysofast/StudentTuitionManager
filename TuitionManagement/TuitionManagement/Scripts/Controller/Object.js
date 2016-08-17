function CreateObject() {
    var obj = {
        ObjectName: $("#ObjectName").val(),
        Class: $("#Class").val(),
        Notes: $("#Notes").val(),
    };
    console.log(obj);
    $.ajax({
        url: 'Create_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function () {
            swal("Error...", "Cannot create new object! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Created new object!", "success")
            } else {
                swal("Error...", "Cannot create new object!", "error");
            }
        }
    });
}

function UpdateObject() {
    var obj = {
        ObjectId: $("#ObjectId").val(),
        ObjectName: $("#ObjectName").val(),
        Class: $("#Class").val(),
        Notes: $("#Notes").val(),
    };
    $.ajax({
        url: '/Users/Update_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (err) {
            console.log(err);
            swal("Error...", "Cannot update object! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Updated object!", "success");
                location.replace(document.location.origin + "/Users/search");
            } else {
                swal("Error...", "Cannot update object!", "error");
            }
        }
    });
}

function DeleteObject(id) {
    swal({
        title: "Are you sure?",
        text: "You want to deactivate this Object!",
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
            url: '/Object/Deactivate_Api',
            data: JSON.stringify(obj),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (err) {
                console.log(err);
                swal("Error...", "Cannot Deactivate object! \n Cannot get to server API", "error");
            },
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    swal("Successfully!", "Deactivated object!", "success");
                    location.reload();
                } else {
                    swal("Error...", "Cannot Deactivate object!", "error");
                }
            }
        });
    });


}