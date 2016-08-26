

function loadClassTypeDropDown() {
    var dropdownID = '';
    if (!_classified) {
        dropdownID = "#opClassType";
    }
    else {
        dropdownID = "#opClassType2";
    }

    $.ajax({
        url: 'GetClassesInfoAPI',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        error: function () {
            swal("Action failed", "Couldn't load data", "error");
        },
        success: function (result) {
            $(_selectorPrefix + ' ' + dropdownID).html('<option  value= -1 >[---All---]</option>');

            $.each(result, function (index, item) {
                $(_selectorPrefix + ' ' + dropdownID).append('<option  value=' + item.ClassTypeID + '>' + item.ClassType + '</option>');
            });

            $(_selectorPrefix + ' ' + dropdownID).change(function () {
                console.log('----------------------');
                _selectedClassTypeID = $('option:selected', this).val();
                console.log("ClassTypeID: " + _selectedClassTypeID);
                populateRegistrationInfo();
            });

            $(_selectorPrefix + ' ' + dropdownID).trigger('change');
        }
    });
}

function populateRegistrationInfo() {
    var studentTableID = '';
    if (!_classified) {
        studentTableID = "#StudentList";
    }
    else {
        studentTableID = "#StudentList2";
    }
    var obj = {
        isClassified: _classified,
        classTypeID: _selectedClassTypeID
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

            var rows = [];
            $.each(result, function (index, value) {
                console.log(value.StudentName);

                var classColumn = '';
                var selectedClassID = '';
                if (!_classified) {
                    classColumn = '<select id=classoption-' + value.StudentId + ' class="form-control"><option value=-1 disabled selected>Select class...</option>';

                    $.each(value.ClassOptions, function (i, v) {
                        classColumn += '<option value=' + v.ClassId + '>' + v.ClassName + '</option>';
                    });
                    classColumn += '</select>';

                }
                else {
                    selectedClassID = value.AssignedClass.ClassId;
                    classColumn = '<span id=' + value.AssignedClass.ClassId + '>' + value.AssignedClass.ClassName + '</span>';
                }

                rows.push({
                    studentID: value.StudentId,
                    activatedDate: formatDate(value.ActivatedDate),
                    name: value.StudentName,
                    birthday: formatDate(value.Birthday),
                    classType: value.ClassType,
                    classOptions: classColumn,
                    classID: selectedClassID
                });
            });

            var $table = $(_selectorPrefix + ' ' + studentTableID);
            $table.bootstrapTable('load', rows);

        }
    });
}


function Classify() {

    var jsonData = JSON.stringify($(_selectorPrefix + ' #StudentList').bootstrapTable('getData'));
    //alert(jsonData);
    var obj = [];
    var data = $.parseJSON(jsonData);

    $.each(data, function (i, v) {
        var item = {
            StudentID: v.studentID,
            ClassID: $(_selectorPrefix + ' #classoption-' + v.studentID).val()
        };

        obj.push(item);
    });

    $.ajax({
        url: 'AssignStudentAPI',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        type: 'POST',
        data: JSON.stringify(obj),
        error: function (data) {
            swal("Error", data.responseText, "error");
        },
        success: function (result) {
            swal('Success', 'Successfully assigned these student(s):\n' + result, 'success');
            populateRegistrationInfo();
        }
    });
}

function RemoveStudentFromClass() {
    if (_selectedRow == null) {
        swal("No student selected", "You must select a student first!", "info");
        console.log('null');

        return;
    }

    console.log('Delete studentID:' + _selectedRow.studentID);
    console.log('Delete classID:' + _selectedRow.classID);


    swal({
        title: "Are you sure?",
        text: "Do you really want to remove this student from the class?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Remove",
        closeOnConfirm: false
    }, function () {
        var obj = {
            StudentID: _selectedRow.studentID,
            ClassID: _selectedRow.classID
        };
        $.ajax({
            url: 'RemoveStudentFromClassAPI',
            data: JSON.stringify(obj),
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            type: 'POST',
            error: function (data) {
                swal("Error", data.responseText, "error");
            },
            success: function (data) {
                if (data != 1) {
                    swal("Warning", data, "warning");
                }
                else {
                    swal("Removed!", "Student removed successfully!", "success");
                    populateRegistrationInfo();
                }

            }
        });
    });
}

//-------------------------------UTILITIES---------------------------------
var _selectedRow = null;
var _classified = false;
var _selectorPrefix = '#Unclassified';
var _selectedStudentID = -1;
$(function () {
    //$('#StudentList').on('click', 'tbody tr', function (event) {
    //    $(this).addClass('highlight').siblings().removeClass('highlight');
    //});

    // Detect which tab is showing

    //populateRegistrationInfo(false);

    init();

    $('#StudentSpecificationTab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        _selectorPrefix = $(e.target).attr("href") // activated tab
        if (_selectorPrefix == "#Unclassified") {
            _classified = false;
        }
        else {
            _classified = true;
        }
        init();
    });

});

function init() {
    var studentTableID = '';
    if (!_classified) {
        studentTableID = "#StudentList";
    }
    else {
        studentTableID = "#StudentList2";
    }

    loadClassTypeDropDown();
    var $table = $(_selectorPrefix + ' ' + studentTableID);
    $table.bootstrapTable('hideColumn', 'studentID');

    if (_classified) {
        $table.on('click-row.bs.table', function (e, row, $element) {
            $element.addClass('highlight').siblings().removeClass('highlight');
            _selectedRow = row;

        });
        //$('#btRemove').prop('disabled', row == null);
    }
}

Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [dd, '/', mm, '/', this.getFullYear(), ].join(''); // padding
};

function formatDate(date) {
    return new Date(parseInt(date.replace('/Date(', ''))).ddmmyyyy();
}
