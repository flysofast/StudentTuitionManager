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
            console.log(result);
            $('#opClassType').html('<option  value= all >[---All---]</option>');

            $.each(result, function (index, item) {
                $('#opClassType').append('<option  value=' + item.ClassTypeID + '>' + item.ClassType + '</option>');
            });

            $('#opClassType').change(function () {
                console.log('----------------------');
                var ID = $('option:selected', this).val();
                console.log("ClassTypeID: " + ID);
            });

            $('#opClassType').trigger('change');
        }
    });
}

//-------------------------------UTILITIES---------------------------------
$(function () {
    //$('#StudentList').on('click', 'tbody tr', function (event) {
    //    $(this).addClass('highlight').siblings().removeClass('highlight');
    //});

    populateClassInfo();

});

Date.prototype.ddmmyyyy = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [dd, '/', mm, '/', this.getFullYear(), ].join(''); // padding
};