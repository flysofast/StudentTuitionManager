var SelectedClassTypeID = '';
var classified = false;
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
            $('#opClassType').html('<option  value= -1 >[---All---]</option>');

            $.each(result, function (index, item) {
                $('#opClassType').append('<option  value=' + item.ClassTypeID + '>' + item.ClassType + '</option>');
            });

            $('#opClassType').change(function () {
                console.log('----------------------');
                SelectedClassTypeID = $('option:selected', this).val();
                console.log("ClassTypeID: " + SelectedClassTypeID);
                populateRegistrationInfo(false);
            });

            $('#opClassType').trigger('change');
        }
    });
}

function populateRegistrationInfo(classified) {
    console.log('adssadads');
    var obj = {
        isClassified: classified,
        classTypeID: SelectedClassTypeID
    };
    $.ajax({
        url: 'GetRegistrationRecordsAPI',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function (data) {
            swal("Error", data.responseText, "error");
        },
        success: function (result) {
            console.log(result);
            var rows = [];
            $.each(result, function (index, value) {
                var classOptions = '';

                if (!classified) {
                    classOptions = '<select class="form-control" ><option value=-1 disabled selected>Select class...</option>';

                    $.each(value.ClassOptions, function (i, v) {
                        classOptions += '<option value=' + v.ClassId + '>' + v.ClassName + '</option>';
                    });
                    classOptions += '</select>';

                }

                rows.push({
                    studentID: value.StudentId,
                    activatedDate: formatDate(value.ActivatedDate),
                    name: value.StudentName,
                    birthday: formatDate(value.Birthday),
                    classType: value.ClassType,
                    classOptions: classOptions
                });
            });

            var $table = $('#StudentList');
            $table.bootstrapTable('load', rows);
            $table.bootstrapTable('hideColumn', 'studentID');
        }
    });
}

//-------------------------------UTILITIES---------------------------------
$(function () {
    //$('#StudentList').on('click', 'tbody tr', function (event) {
    //    $(this).addClass('highlight').siblings().removeClass('highlight');
    //});

    populateClassInfo();
    //populateRegistrationInfo(false);


});

Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [dd, '/', mm, '/', this.getFullYear(), ].join(''); // padding
};

function formatDate(date) {
    return new Date(parseInt(date.replace('/Date(', ''))).ddmmyyyy();
}
