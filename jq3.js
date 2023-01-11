$(document).ready(function(){
    let usernameError = true;

    $('#fname').keyup(function () {
        $("#user").hide();
    });

    function formval() {
        let fname = $("#fname").val();

        if (fname.length == "" || fname == null) {
            $("#user").removeClass("d-none").show();
            usernameError = false;
        }

    }
    $('#cancel').on('click',function(){
        $('#Failed').dialog({
            title:"",
            open: function(){
                setTimeout(function(){
                    $("#Failed").dialog("");
                },0);
            }

        });
    });
    $("#myform").submit(function(){
        formval();
        if (usernameError == true){
            $('#alert').dialog({
                title:"",
                open: function(){
                    setTimeout(function(){
                        $("#alert").dialog("close");
                    },5000);
                }

            });
            return false;
        }
        else{
        return false;
        }
    });
    });
