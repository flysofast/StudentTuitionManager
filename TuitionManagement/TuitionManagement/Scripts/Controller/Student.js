//------------------------DATA PROCESS FUNCTIONS--------------------------------

function FindStudentByID(studentID, callback) {
    console.log("FIND ID" + studentID);

    $.ajax({
        url: 'FindStudentByIDAPI',
        data: JSON.stringify({ ID: studentID }),
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: function () {
            swal("Action failed", "Couldn't find this student ", "error");
        },
        success: callback
    });
}


function Create() {
    var obj = {
        Student:
            {
                StudentCode: $('#tbStudentCode').val(),
                StudentName: $('#tbStudentName').val(),
                Birthday: $("#dpBirthday").datepicker('getDate'),
                Gender: $('#rdbMale').prop("checked"),
                Address: $('#tbAddress').val(),
                Phone: $('#tbPhone').val(),
                Email: $('#tbEmail').val(),

            },

        ClassTypeID: $('option:selected', $('#opClassType')).val(),
        FeeLevelID: $('option:selected', $('#opPaidTimes')).val(),
        GroupRegister: $('option:selected', $('#opRegGroup')).val()
    };

    $.ajax({
        url: 'CreateAPI',
        data: JSON.stringify(obj),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        type: 'POST',
        error: function (data) {
            swal("Error", data.responseText, "error");
        },
        success: function (data) {
            swal("Successfully!", "Registration successful! InvoiceID: " + data.invoiceID, "success");
            LoadTableData();
            //console.log(data);
            //if (data == 1) {
            //    swal("Successfully!", "Created new account!", "success");
            //} else {
            //    swal("Error...", "Cannot create new account!", "error");
            //}
        }
    });
}

function Update(StudentID) {
    console.log("Update ID: " + StudentID);
    var obj =
        {
            StudentId: StudentID,
            StudentCode: $('#tbStudentCode').val(),
            StudentName: $('#tbStudentName').val(),
            Birthday: $("#dpBirthday").datepicker('getDate'),
            Gender: $('#rdbMale').prop("checked"),
            Address: $('#tbAddress').val(),
            Phone: $('#tbPhone').val(),
            Email: $('#tbEmail').val(),
        };

    $.ajax({
        url: 'UpdateAPI',
        data: JSON.stringify(obj),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        type: 'POST',
        error: function (data) {
            swal("Error", data.responseText, "error");
        },
        success: function (data) {
            swal("Successfully!", "Updated student information successfully!", "success");
            LoadTableData();
            //console.log(data);
            //if (data == 1) {
            //    swal("Successfully!", "Created new account!", "success");
            //} else {
            //    swal("Error...", "Cannot create new account!", "error");
            //}
        }
    });
}


function LoadTableData() {
    $.ajax({
        url: 'LoadTableDataAPI',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        error: function () {
            swal("Action failed", "Couldn't load data", "error");
        },
        success: function (result) {
            console.log(result);
            var html = '';
            $.each(result, function (index) {
                var myDate = new Date(parseInt(result[index]['Birthday'].replace('/Date(', '')));
                var code = result[index]['StudentCode'];
                html += '<tr studentid=' + result[index]['StudentId'] + '>';

                var safeCode = (code == null) ? '' : code;
                html += '<td class="StudentCodeCell">' + safeCode + '</td>';

                html += '<td>' + result[index]['StudentName'] + '</td>';
                html += '<td>' + myDate.ddmmyyyy() + '</td>';
                html += '</tr>';
            });

            $('#StudentList tbody').html(html);

            //Row selecting
            $('#StudentList tbody tr').click(function () {
                var ID = $(this).attr('studentid');
                console.log("FINDID: " + ID);
                FindStudentByID(ID, populateInfoForm);

            });
            populateClassInfo();

        }
    });
}

//------------------------------UTILITIES--------------------------------

function populateClassInfo() {
    $.ajax({
        url: 'GetClassesInfoAPI',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        error: function () {
            swal("Action failed", "Couldn't load data", "error");
        },
        success: function (result) {
            //console.log(result);
            $('#opClassType').html('');

            $.each(result, function (index, item) {
                $('#opClassType').append('<option  value=' + item.ClassTypeID + '>' + item.ClassType + '</option>');
            });

            $('#opClassType').change(function () {
                console.log('----------------------');
                var ID = $('option:selected', this).val();
                console.log("ClassTypeID: " + ID);

                $.each(result, function (i, item) {
                    if (item.ClassTypeID == ID) {
                        $('#opPaidTimes').html('');
                        $.each(item.PaidTimes, function (index, item) {
                            $('#opPaidTimes').append('<option value=' + item.FeeLevelId + '>' + item.PaidTime + '</option>');
                        });
                    }
                });
            });

            $('#opClassType').trigger('change');
        }
    });
}

var populateInfoForm = function (data) {

    if (data) {
        //console.log(result);

        var gender = data['Gender'];
        $('#tbStudentCode').val(data['StudentCode']);
        $("#dpBirthday").datepicker("setDate", new Date(parseInt(data['Birthday'].replace('/Date(', ''))));
        $('#tbStudentName').val(data['StudentName']);
        $('#rdbMale').prop("checked", gender);
        $('#rdbFemale').prop("checked", !gender);
        $('#tbAddress').val(data['Address']);
        $('#tbPhone').val(data['Phone']);
        $('#tbEmail').val(data['Email']);
    }
}

$(function () {
    $('#StudentList').on('click', 'tbody tr', function (event) {
        $(this).addClass('highlight').siblings().removeClass('highlight');
    });
    $("#dpBirthday").datepicker({ dateFormat: "dd/mm/yy" });
    //$("#opRegGroup").multiselect().multiselectfilter();
    LoadTableData();

});

Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [dd, '/', mm, '/', this.getFullYear(), ].join(''); // padding
};