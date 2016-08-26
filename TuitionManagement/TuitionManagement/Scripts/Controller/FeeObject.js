$(document).ready(function () {
    $("#AddFeeLevel").click(function () {
        var obj = {
            PaidTime: $("#PaidTime").val(),
            TotalMoney: $("#TotalMoney").val(),
            Period: $("#Period").val(),
            ObjectID: $("#ObjectID").val(),
        }
        $.ajax({
            url: '../FeeLevel/Create_Api',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(obj),
            error: function () {
                swal("Action failed", "Server fail", "error");
            },
            success: function (result) {
                if (result == 1) {
                    swal("Successfully!", "New Feelevel was created!", "success");
                    initFeeLevelModal();
                } else {
                    sweetAlert("Oops...", "Something went wrong!", "error");
                }
            }
        });
    });

    $("#EditFeeLevel").click(function () {
        var obj = {
            FeeLevelId: $("#FeeLevelId").val(),
            PaidTime: $("#PaidTime").val(),
            TotalMoney: $("#TotalMoney").val(),
            Period: $("#Period").val(),
            ObjectID: $("#ObjectID").val(),
        }
        $.ajax({
            url: '../FeeLevel/Update_Api',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(obj),
            error: function () {
                swal("Action failed", "Server fail", "error");
            },
            success: function (result) {
                if (result == 1) {
                    swal("Successfully!", "New Feelevel was created!", "success");
                    initFeeLevelModal();
                } else {
                    sweetAlert("Oops...", "Something went wrong!", "error");
                }
            }
        });
    });

    $("#RemoveFeeLevel").click(function () {
        var obj = {
            id: $("#FeeLevelId").val(),
            PaidTime: $("#PaidTime").val(),
            TotalMoney: $("#TotalMoney").val(),
            Period: $("#Period").val(),
            ObjectID: $("#ObjectID").val(),
        }
        $.ajax({
            url: '../FeeLevel/Deactivate_Api',
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            type: 'POST',
            data: JSON.stringify(obj),
            error: function () {
                swal("Action failed", "Server fail", "error");
            },
            success: function (result) {
                if (result == 1) {
                    swal("Successfully!", "New Feelevel was created!", "success");
                    initFeeLevelModal();
                } else {
                    sweetAlert("Oops...", "Something went wrong!", "error");
                }
            }
        });
    });

    $("#ClassOfObject").change(function () {
        initTable($("#ClassOfObject").val());
    });
    $("#FeeLevelTab").delegate("tr", "click", function () {

        var FeeLevelId = $(this).children('td:eq(0)').text();
        var PaidTime = $(this).children('td:eq(1)').text();
        var TotalMoney = $(this).children('td:eq(2)').text();
        var Period = $(this).children('td:eq(3)').text();
        $("#FeeLevelId").val(FeeLevelId);
        $("#PaidTime").val(PaidTime);
        $("#TotalMoney").val(TotalMoney);
        $("#Period").val(Period);

        $("#tab tr").css('background-color', '');
        $("#tab td").css('background-color', '');
        $(this).css('background-color', '#CCE1E8');
    });

    $("#tab").delegate("tr", "click", function () {

        var objectID = $(this).children('td:eq(0)').text();
        var name = $(this).children('td:eq(1)').text();
        //var class_val = $(this).children('td:eq(2)').text();
        var notes = $(this).children('td:eq(2)').text();
        $("#Name").val(name);
        $("#Class").val($("#ClassOfObject").val());
        $("#ObjectID").val(objectID);
        $("#Note").val(notes);
        $("#tab tr").css('background-color', '');
        $("#tab td").css('background-color', '');
        $(this).css('background-color', '#CCE1E8');
    });

    initTable("Class");
});

function initTable(ClassGet) {
    var obj = {
        Class: ClassGet
    }
    $.ajax({
        url: 'Select_By_Class_Api',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function () {
            swal("Action failed", "Server fail", "error");
        },
        success: function (result) {
            var $table = $('#tab');
            $table.bootstrapTable('removeAll');
            for (var i = 0 ; i < result.length; i++) {
                $table.bootstrapTable('insertRow', {
                    index: 1,
                    row: {
                        id: result[i]['ObjectId'],
                        name: result[i]['ObjectName'],
                        note: result[i]['Notes'],
                    }
                });
            }
        }
    });
}


function FeeLevelModal() {
    if ($("#ObjectID").val() == '') {
        swal("Oops...", "Please select Object first!", "error");
        return false;
    }
    
    initFeeLevelModal();
    $('#myModal').modal('show');
}

function initFeeLevelModal() {
    var obj = {
        objID: $("#ObjectID").val(),
    }
    $.ajax({
        url: '../FeeLevel/Select_Api_By_ObjID',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function () {
            swal("Action failed", "Server fail", "error");
        },
        success: function (result) {
            var $table = $('#FeeLevelTab');
            $table.bootstrapTable('removeAll');
            for (var i = 0 ; i < result.length; i++) {
                $table.bootstrapTable('insertRow', {
                    index: 1,
                    row: {
                        id: result[i]['FeeLevelId'],
                        PaidTime: result[i]['PaidTime'],
                        TotalMoney: result[i]['TotalMoney'],
                        Period: result[i]['Period'],
                    }
                });
            }
        }
    });
}

function create() {
    var obj = {
        ObjectName: $("#Name").val(),
        Class: $("#Class").val(),
        Notes: $("#Note").val(),
    }
    $.ajax({
        url: 'Create_Api',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function () {
            swal("Action failed", "Server fail", "error");
        },
        success: function (result) {
            if (result == 1) {
                swal("Successfully!", "New rate was created!", "success")
            } else {
                sweetAlert("Oops...", "Something went wrong!", "error");
            }
        }
    });
}

function update() {
    var obj = {
        ObjectId: $("#ObjectID").val(),
        ObjectName: $("#Name").val(),
        Class: $("#Class").val(),
        Notes: $("#Note").val(),
    }
    $.ajax({
        url: 'Update_Api',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function () {
            swal("Action failed", "Server fail", "error");
        },
        success: function (result) {
            console.log(result);
            if (result == 1) {
                swal("Successfully!", "Updated!", "success")
            } else {
                sweetAlert("Oops...", "Something went wrong!", "error");
            }
        }
    });
}

function delete_function() {
    var obj = {
        id: $("#ObjectID").val(),
    }
    $.ajax({
        url: 'Deactivate_Api',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function () {
            swal("Action failed", "Server fail", "error");
        },
        success: function (result) {
            if (result == 1) {
                swal("Successfully!", "Deleted!", "success")
            } else {
                sweetAlert("Oops...", "Something went wrong!", "error");
            }
        }
    });
}