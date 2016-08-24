$(function () {
    $(".form_datetime").datetimepicker({ format: 'yyyy-mm-dd hh:ii' });
});
function CreateRate() {
    var obj = {
        USDRate: $("#USD").val(),
        VNDRate: $("#VND").val(),
        RateDate: new Date(),
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