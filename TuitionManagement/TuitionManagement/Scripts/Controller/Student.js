//------------------------DATA PROCESS FUNCTIONS--------------------------------

function FindStudentByID(studentID,callback) {
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
            var html = '';
            $.each(result, function (index) {
                var myDate = new Date(parseInt(result[index]['Birthday'].replace('/Date(', '')));

                html += '<tr studentid='+result[index]['StudentId']+'>';
                html += '<td class="StudentCodeCell">' + result[index]['StudentCode'] + '</td>';
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
        }
    });
}


//------------------------------UTILITIES--------------------------------

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

        $('#opClassType').html('');
        $.each(data['Classes'], function (index,item) {
            $('#opClassType').append('<option classID='+item['ClassId']+' value=' + item['ClassName'] + '>' + item['ClassName'] + '</option>')
        });

    }
}

$(function () {
    $("#dpBirthday").datepicker({ dateFormat: "dd/mm/yy" });
    LoadTableData();

});

Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [dd, '/', mm, '/', this.getFullYear(), ].join(''); // padding
};