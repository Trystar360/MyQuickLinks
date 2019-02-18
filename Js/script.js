
$(".tab").click(function(){
    $(".tab").removeClass("is-active");
    $("#" + $(this).attr("id")).addClass("is-active");
    showTab($(this).attr("id"));
});

function showTab(x){
    $(".hero-body").attr("id", "");
    $("." + x).attr("id", "htab");
}

function changeColor(x){
    $(".colors").addClass(x);
}

function loadUserData(){
    for(var i = 1; i < 5; i++){
        $("#tblk" + i).html("<a>"+userData["gsx$classname" + i]["$t"] + "</a>");
        console.log(userData["gsx$classname" + i]["$t"]);
    }


}

if(localStorage.getItem("email") == null || localStorage.getItem("email") == "null"){
    localStorage.setItem("email","default");
}
checkEmail(localStorage.getItem("email"));
function checkEmail(cur){
    console.log(cur);
    if(cur == "default"){
        $("#emailModal").addClass("is-active");
    }else{
        getSheetData();
        $("#navSignUp").addClass("is-hidden");
    $("#navLogIn").addClass("is-hidden");
    $("#navLogOut").removeClass("is-hidden");
    }
}

function closeEmail(){
    $("#emailModal").removeClass("is-active");
}

function login(){
    var input = $("#emailInput").val();
    console.log(input);
    localStorage.setItem("email" , input);
    $("#emailInput").val("");
    closeEmail();
    getSheetData();
    $("#navSignUp").addClass("is-hidden");
    $("#navLogIn").addClass("is-hidden");
    $("#navLogOut").removeClass("is-hidden");
}


function logOut(){
    localStorage.setItem('email','default');
     $('#emailModal').addClass('is-active');
     $("#navSignUp").removeClass("is-hidden");
    $("#navLogIn").removeClass("is-hidden");
    $("#navLogOut").addClass("is-hidden");
}

function loadTabs(){
    
}