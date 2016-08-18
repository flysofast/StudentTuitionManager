//------------------------DATA PROCESS FUNCTIONS--------------------------------

function FindStudentByID(studentID) {
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
        success: function (result) {
            if (result) {
                //console.log(result);

                var birthday = new Date(parseInt(result['Birthday'].replace('/Date(', ''))).ddmmyyyy();
                $('#tbStudentCode').val(result['StudentId']);
                $('#dpBirthday').val(birthday);

                return  JSON.stringify({data: result }) ;
            }
        }
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

                html += '<tr>';
                html += '<td class="StudentIDCell">' + result[index]['StudentId'] + '</td>';
                html += '<td>' + result[index]['StudentName'] + '</td>';
                html += '<td>' + myDate.ddmmyyyy() + '</td>';
                html += '</tr>';
            });

            $('#StudentList tbody').html(html);

            //Row selecting
            $('#StudentList tbody tr').click(function () {
                var ID = $('.StudentIDCell', $(this)).text();
                console.log("FIND");
                PopulateDataToFormControls(FindStudentByID(ID));
            });
        }
    });
}


//------------------------------UTILITIES--------------------------------
function PopulateDataToFormControls(data) {
    try {
        //json = $.parseJSON(data);
        console.log(data);
    } catch (e) {
        swal("ERROR", e.message, "error");
        // not json
    }



}
$(function () {
    $("#datepicker").datepicker();
    LoadTableData();

});

Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [dd, '/', mm, '/', this.getFullYear(), ].join(''); // padding
};