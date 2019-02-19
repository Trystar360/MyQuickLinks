//api key: AIzaSyBxgtQ3hRFtKQye7o9CpUGP129Bserbuck
//sheet id: 1yxqI0gBuIuj6xLKcWyvBEPScAKjt45lp9RywOwqqLsY

var pre = "https://spreadsheets.google.com/feeds/list/";
var sheetId = "1yxqI0gBuIuj6xLKcWyvBEPScAKjt45lp9RywOwqqLsY";
var post = "/o6u3goa/public/values?alt=json";

var userEmail = "default";
var sheetUrl = pre+sheetId+post;

function getSheetData(){
  userEmail = localStorage.getItem("email");
  $.getJSON(sheetUrl, function(data){
    gotData(data);
  })
}

var sheet;
var userData;
function gotData(data){
  sheet = data;
  userData = sheet["feed"]["entry"][findUser(userEmail)];
  loadUserData();
}

function findUser(email){
  var entries = sheet["feed"]["entry"];
  for(var i = 0; i < entries.length; i++){
    if(entries[i]["gsx$emailaddress"]["$t"] == email){
      return i;
    }
  }
  console.log("NotAnEmail");
  openNot();
  return 0;
}