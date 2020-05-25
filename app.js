$(document).ready(function(){

    $(".play").click(function(){
        $(this).parents(".audio").children("audio").get(0).play();

        $(this).css("display", "none");

        $(this).parents(".player").children(".pause").css("display", "block");


    });

    $(".pause").click(function(){

        $(this).parents(".audio").children("audio").get(0).pause();

        $(this).css("display", "none");
        $(this).parents(".player").children(".play").css("display", "block")

    });

    $("audio").each(function() {
        $(this).get(0).ontimeupdate = function() {
            var duree = $(this).get(0).duration;
            var largeur_barre = $(".bar").width();
            var point_lecture = $(this).get(0).currentTime;

            var largeur_progress = point_lecture * largeur_barre / duree;

                $(this).parents(".audio").find(".progress_bar").css("width", largeur_progress+"px");


        };

    });

    $(".bar").click(function(e){

        var duree = $(this).parents(".audio").children("audio").get(0).duration;
        var largeur_barre = $(".bar").width();
        var position_click = e.pageX - $(this).offset().left;
        var position_lecture = position_click * duree / largeur_barre;

        $(this).parents(".audio").children("audio").get(0).currentTime = position_lecture;


    });

    $(".volume_bar_conteneur").click(function(e){
        var position_click = e.pageX - $(this).offset().left;
        var largeur_barre_volume = $(".volume_bar_conteneur").width();
        var position_volume = position_click / largeur_barre_volume;

        $(this).parents(".audio").children("audio").get(0).volume=position_volume
        $(this).children(".volume_bar").css("width", position_volume * largeur_barre_volume + "px");

    });


    
});

