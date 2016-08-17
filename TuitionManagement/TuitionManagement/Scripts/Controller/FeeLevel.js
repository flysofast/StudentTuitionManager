function CreateFeeLevel() {
    var obj = {
        PaidTime: $("#PaidTime").val(),
        TotalMoney: $("#TotalMoney").val(),
        Period: $("#Period").val(),
        ObjectID: $("#ObjectID").val(),
    };
    console.log(obj);
    $.ajax({
        url: 'Create_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function () {
            swal("Error...", "Cannot create new FeeLevel! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Created new FeeLevel!", "success")
            } else {
                swal("Error...", "Cannot create new FeeLevel!", "error");
            }
        }
    });
}

function UpdateFeeLevel() {
    var obj = {
        FeeLevelId: $("#FeeLevelId").val(),
        PaidTime: $("#PaidTime").val(),
        TotalMoney: $("#TotalMoney").val(),
        Period: $("#Period").val(),
        ObjectID: $("#ObjectID").val(),
    };
    $.ajax({
        url: '/Users/Update_Api',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function (err) {
            console.log(err);
            swal("Error...", "Cannot update FeeLevel! \n Cannot get to server API", "error");
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                swal("Successfully!", "Updated FeeLevel!", "success");
                location.replace(document.location.origin + "/Users/search");
            } else {
                swal("Error...", "Cannot update FeeLevel!", "error");
            }
        }
    });
}

function DeleteFeeLevel(id) {
    swal({
        title: "Are you sure?",
        text: "You want to deactivate this FeeLevel!",
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
                swal("Error...", "Cannot Deactivate FeeLevel! \n Cannot get to server API", "error");
            },
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    swal("Successfully!", "Deactivated FeeLevel!", "success");
                    location.reload();
                } else {
                    swal("Error...", "Cannot Deactivate FeeLevel!", "error");
                }
            }
        });
    });


}