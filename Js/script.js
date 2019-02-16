$(".tab").click(function(){
    $(".tab").removeClass("is-active");
    $("#" + $(this).attr("id")).addClass("is-active");
    showTab($(this).attr("id"));
});

function showTab(x){
    $(".hero-body").removeClass("active");
    $("." + x).addClass("active");
}

function changeColor(x){
    $(".colors").addClass(x);
}
