$(document).ready(function () {
    getAllStudentByStatus("true", "StudentListActive");
    getAllStudentByStatus("false", "StudentListUnactive");
    initClassType();
    $("#StudentListActive").delegate("tr", "click", function () {

        var InvoiceID = $(this).children('td:eq(0)').text();
        $("#invoiceIDSelected").val(InvoiceID);
        var obj = {
            id: InvoiceID,
        }
        $.ajax({
            url: 'selectById',
            data: JSON.stringify(obj),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function () {
                swal("Error...", "Error Server! \n Cannot get to server API", "error");
            },
            success: function (data) {
                var obj = JSON.parse(data);
                console.log(obj);
                $("#StudentCode").val(obj[0]['StudentCode']);
                $("#StudentName").val(obj[0]['StudentName']);
                $("#DOB").val(obj[0]['Birthday']);
                $("#Gender").val(obj[0]['Gender']);
                $("#Email").val(obj[0]['Email']);
                $("#Phone").val(obj[0]['Phone']);
                $("#ActDate").val(obj[0]['ActivatedDate']);
                $("#Class").val(obj[0]['ClassName']);
                $("#Paytime").val(obj[0]['PaidTime']);
                $("#InGroup").val(obj[0]['RegisterInGroup']);
                $("#Note").val(obj[0]['Notes']);
            }
        });
        
        $("#tab tr").css('background-color', '');
        $("#tab td").css('background-color', '');
        $(this).css('background-color', '#CCE1E8');
    });

    $("#StudentListUnactive").delegate("tr", "click", function () {
        
        var InvoiceID = $(this).children('td:eq(0)').text();
        $("#invoiceIDSelected").val(InvoiceID);
        var obj = {
            id: InvoiceID,
        }
        $.ajax({
            url: 'selectById',
            data: JSON.stringify(obj),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function () {
                swal("Error...", "Error Server! \n Cannot get to server API", "error");
            },
            success: function (data) {
                var obj = JSON.parse(data);
                console.log("unactive");
                $("#StudentCode").val(obj[0]['StudentCode']);
                $("#StudentName").val(obj[0]['StudentName']);
                $("#DOB").val(obj[0]['Birthday']);
                $("#Gender").val(obj[0]['Gender']);
                $("#Email").val(obj[0]['Email']);
                $("#Phone").val(obj[0]['Phone']);
                $("#ActDate").val(obj[0]['ActivatedDate']);
                $("#Class").val(obj[0]['ClassName']);
                $("#Paytime").val(obj[0]['PaidTime']);
                $("#InGroup").val(obj[0]['RegisterInGroup']);
                $("#Note").val(obj[0]['Notes']);
            }
        });

        $("#tab tr").css('background-color', '');
        $("#tab td").css('background-color', '');
        $(this).css('background-color', '#CCE1E8');
    });
});

function initClassType() {
    
    $.ajax({
        url: 'SelectClassType',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function () {
            swal("Error...", "Error Server! \n Cannot get to server API", "error");
        },
        success: function (data) {
            //var obj = JSON.parse(data);
            //console.log(data);
            var html = "<option>All</option>";
            for (var i = 0; i <= data.length -1 ; i++) {
                console.log(data[i]['ObjectId']);
                html += "<option value=" + data[i]['ObjectId'] + ">" + data[i]['ObjectName'] + "</option>";
            }
            $('#opClassType').html(html);
            $('#Class').html(html);
        }
    });
    
}

function Active() {
    var obj = {
        id:  $("#invoiceIDSelected").val(),
    }
    $.ajax({
        url: 'ActiveStudent',
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(obj),
        error: function () {
            swal("Error...", "Error Server! \n Cannot get to server API", "error");
        },
        success: function (data) {
            if (data == 1) {
                swal("Successfully!", "Activated!", "success");
                getAllStudentByStatus("true", "StudentListActive");
                getAllStudentByStatus("false", "StudentListUnactive");
            } else {
                swal("Error...", "Cannot active!", "error");
            }
        }
    });
    
}

function getAllStudentByStatus(status,table) {
    var obj = {
        status: status,
    }
    $.ajax({
        url: 'selectAllByStatus',
        data: JSON.stringify(obj),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function () {
            swal("Error...", "Error Server! \n Cannot get to server API", "error");
        },
        success: function (data) {
            var obj = JSON.parse(data);
            console.log(obj);
            if (table == 'StudentListActive') {
                var $table = $('#StudentListActive');
            } else {
                var $table = $('#StudentListUnactive');
            }
            $table.bootstrapTable('removeAll');
            $.each(obj, function (index) {

                var d = new Date(obj[index].ActivatedDate);
                var strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
                $table.bootstrapTable('insertRow', {
                    index: 1,
                    row: {
                        InvoiceID: obj[index].InvoiceId,
                        studentID: obj[index].StudentCode,
                        name: obj[index].StudentName,
                        classType: obj[index].ObjectName,
                        activatedDate: strDate,
                    }
                });
            });
        }
    });
}

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

function Update() {
    var obj = {
        InvoiceId: $("#invoiceIDSelected").val(),
        Student: $("#StudentName").val(),
        StudentId: $("#StudentCode").val(),
        ClassID: $("#Class").val(),
        ClassTypeID: $("#ClassTypeID").val(),
        FeeLevelId: $("#FeeLevelId").val(),
        RegisterInGroup: $("#RegisterInGroup").val(),
        ActivatedDate: $("#ActivatedDate").val(),
        Notes: $("#Notes").val(),
    };
    $.ajax({
        url: 'Update_Api',
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
                getAllStudentByStatus("true", "StudentListActive");
                getAllStudentByStatus("false", "StudentListUnactive");
            } else {
                swal("Error...", "Cannot update Invoice!", "error");
            }
        }
    });
}

function Delete(id) {
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
            id: $("#invoiceIDSelected").val(),
        };
        $.ajax({
            url: 'DeleteInvoice',
            data: JSON.stringify(obj),
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            error: function (err) {
                console.log(err);
                swal("Error...", "Cannot Delete Invoice! \n Cannot get to server API", "error");
            },
            success: function (data) {
                console.log(data);
                if (data == 1) {
                    swal("Successfully!", "Delete Invoice!", "success");
                    getAllStudentByStatus("true", "StudentListActive");
                    getAllStudentByStatus("false", "StudentListUnactive");
                } else {
                    swal("Error...", "Cannot Delete Invoice!", "error");
                }
            }
        });
    });


}