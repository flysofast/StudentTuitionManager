$(document).ready(function () {
    $("#ClassOfObject").change(function () {
        initTable($("#ClassOfObject").val());
    });
    $("#tab").delegate("tr", "click", function() {

        var objectID = $(this).children('td:eq(0)').text();
        var name = $(this).children('td:eq(1)').text();
        var class_val = $(this).children('td:eq(2)').text();
        var notes = $(this).children('td:eq(3)').text();
        $("#Name").val(name);
        $("#Class").val(class_val);
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
            if (result == 1) {
                swal("Successfully!", "New rate was created!", "success")
            } else {
                sweetAlert("Oops...", "Something went wrong!", "error");
            }
        }
    });
}

function delete_function() {
    var obj = {
        ObjectId: $("#ObjectID").val(),
        ObjectName: $("#Name").val(),
        Class: $("#Class").val(),
        Notes: $("#Note").val(),
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
                swal("Successfully!", "New rate was created!", "success")
            } else {
                sweetAlert("Oops...", "Something went wrong!", "error");
            }
        }
    });
}