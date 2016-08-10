$(document).ready(function(){
    $("#USDValue").keyup(function () {
        var result = parseFloat($("#USDValue").val()) * parseFloat(22222);
        console.log($("#USDValue").val());
        $("#VNDValue").val(result);
    });
});