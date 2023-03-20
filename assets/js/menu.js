$( document ).ready(function() {

    $(".imgbtn").on("click", function() {

        if ($("#menumobile").hasClass("aberto")){
            $("#menumobile").removeClass("aberto")
        }
        else {
            $("#menumobile").addClass("aberto")
        }
    })
});