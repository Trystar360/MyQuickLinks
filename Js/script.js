
$(".tab").click(function(){
    $(".tab").removeClass("is-active");
    $("#" + $(this).attr("id")).addClass("is-active");
    showTab($(this).attr("id"));
});

function showTab(x){
    $(".hero-body").addClass("is-hidden");
    $("." + x).removeClass("is-hidden");
}

function changeColor(x){
    $(".colors").addClass(x);
}

function loadUserData(){
    for(var i = 1; i < 5; i++){
        $("#tblk" + i).html("<a>"+userData["gsx$classname" + i]["$t"] + "</a>");
        $("#blk" + i + "Title").html(userData["gsx$classname" + i]["$t"]);
    }
    loadTabs();

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
    getSheetData();
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
    for(i = 1; i < 5; i++){
        var className = userData["gsx$classname"+ i]["$t"];
        $("#" + i + "-1").attr("href",userData["gsx$schoologylink"+ i]["$t"])
        console.log(userData["gsx$schoologylink"+ i]["$t"]);
        $("#" + i + "-2").attr("href",userData["gsx$powerschoollink"+ i]["$t"])
        $("#" + i + "-3").attr("href",userData["gsx$googledrivelink"+ i]["$t"])
    }
}

function openNot() {
    var elem = document.getElementById("wrongEmail");   
    var height = 1;
    var id = setInterval(frame, 5);
    elem.style.display = "block";

    function frame() {
      if (height >= 100) {
        clearInterval(id);
        $("#wrongEmail").css("padding", "1.25rem 2.5rem 1.25rem 1.5rem");
        $("#wrongEmailBody").attr("style", "display: block");
        
      } else {
        height = height + 6 - (height* .05) ; 
        elem.style.height = height + "px"; 
      }
    }
  }

  function closeNot() {
    var elem = document.getElementById("wrongEmail");   
    var height = 100;
    var id = setInterval(frame, 5);
    $("#wrongEmailBody").attr("style", "display: none");
        $("#wrongEmail").css("padding", "0px");

    function frame() {
      if (height <= 1) {
        clearInterval(id);
        
        elem.style.display = "none";
        
      } else {
        height = height - 6 + (height* .05) ;
        elem.style.height = height + "px"; 
      }
    }
  }