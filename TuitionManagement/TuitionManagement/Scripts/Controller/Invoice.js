function CreateInvoice() {
    var obj = {
        StudentId: $("#StudentId").val(),
        ClassID: $("#ClassID").val(),
        ClassTypeID: $("#ClassTypeID").val(),
        FeeLevelId: $("#FeeLevelId").val(),
        RegisterInGroup: $("#RegisterInGroup").val(),
        ActivatedDate: $("#ActivatedDate").val(),
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
            swal("Error...", "Cannot create new Invoice! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Created new Invoice!", "success")
            } else {
                swal("Error...", "Cannot create new Invoice!", "error");
            }
        }
    });
}

function UpdateInvoice() {
    var obj = {
        InvoiceId: $("#InvoiceId").val(),
        StudentId: $("#StudentId").val(),
        ClassID: $("#ClassID").val(),
        ClassTypeID: $("#ClassTypeID").val(),
        FeeLevelId: $("#FeeLevelId").val(),
        RegisterInGroup: $("#RegisterInGroup").val(),
        ActivatedDate: $("#ActivatedDate").val(),
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
            swal("Error...", "Cannot update Invoice! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Updated Invoice!", "success");
                location.replace(document.location.origin + "/Users/search");
            } else {
                swal("Error...", "Cannot update Invoice!", "error");
            }
        }
    });
}

function DeleteInvoice(id) {
    swal({
        title: "Are you sure?",
        text: "You want to deactivate this Invoice!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Deactivate it!",
        closeOnConfirm: false
    }, function () {
        var obj = {
            InvoiceId: id,
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
                swal("Error...", "Cannot Deactivate Invoice! \n Cannot get to server API", "error");
            },
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    swal("Successfully!", "Deactivated Invoice!", "success");
                    location.reload();
                } else {
                    swal("Error...", "Cannot Deactivate Invoice!", "error");
                }
            }
        });
    });


}