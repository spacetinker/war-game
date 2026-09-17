var tutorialfront = 0;
var tutorialaerial = 0;
var tutorialcom = 0;
var tutorialtroops = 0;
var confidence = 15;
var gunnertroops = [5];
var rifletroops = [1,2,3,4];
var shocktroops = [];
var armored = [];
var unitlocations = [1,2,3,4,5]
var unitidsetup = 5
var unitnumbers = [1st_,2nd_,3rd_,4th_,5th_,6th_,7th_,8th_,9th_,10th_]
var unitnames = [1st_princes_rifles,2nd_kings_rifles,3rd_rifles,4th_rifles,1st_princes_armored, 1st_highlander_engineers]
var unitnamer1 = [princes_,kings_,highlander_,usonias_,potters_,rooks_,knights_,peoples_,borshas_]
var unitnamer2 = [rifles,armored,gunners,stormtroop,engineers]

function frontmenu() {
  document.getElementById("trooptypeinput").hidden = false;
  document.getElementById("troopfindbutton").hidden = false;
  document.getElementById("troopidinput").hidden = false;
  document.getElementById("troopinstr4").hidden = false;
  document.getElementById("troopinstr3").hidden = false;
  document.getElementById("troopinstr2").hidden = false;
  document.getElementById("troopinstr1").hidden = false;
  troopstutorial()
}
function closeFrontMenu() {
  document.getElementById("trooptypeinput").hidden = true;
  document.getElementById("troopfindbutton").hidden = true;
  document.getElementById("troopidinput").hidden = true;
  document.getElementById("troopinstr4").hidden = true;
  document.getElementById("troopinstr3").hidden = true;
  document.getElementById("troopinstr2").hidden = true;
  document.getElementById("troopinstr1").hidden = true;
}
function frontmenu() {
  document.getElementById("map").style.display = "grid";
}
function findtroops() {
  let var1troop = parseInt(document.getElementById("trooptypeinput").value);
  let var2troop = parseInt(document.getElementById("troopidinput").value);
  if (var1troop == "rifle"){
    if(var2troop > rifletroops.length){
      var2troop = rifletroops.indexOf(var2troop)
      trooplocation = unitlocations.indexOf(var2troop)
      document.getElementById("troopselectorerror").hidden = false;
      document.getElementById("troopinfo1").innerHtml = unitnames.indexOf(rifletroops.indexOf(var2troop))
    }else{
      document.getElementById("troopselectorerror").hidden = false;
    }
  }
}
function updateMap() {
  
}
function troopstutorial() {
  if (tutorialtroops == 0){
  document.getElementById("tutorial3").hidden = false;
  document.getElementById("tutorial2").hidden = true;
  document.getElementById("tutorial1").hidden = true;
  document.getElementById("tutorial4").hidden = true;
  tutorialtroops = 1;
  }
}
function introtutorial() {
  document.getElementById("intro").hidden = true;
  document.getElementById("frontbutton").hidden = false;
  document.getElementById("aerialbutton").hidden = false;
  document.getElementById("combutton").hidden = false;
  document.getElementById("troopsbutton").hidden = false;
}
function aerialtutorial() {
  if (tutorialaerial == 0){
    document.getElementById("tutorial2").hidden = false;
    document.getElementById("tutorial1").hidden = true;
    document.getElementById("tutorial3").hidden = true;
    document.getElementById("tutorial4").hidden = true;
    tutorialaerial = 1;
  }
}
function fronttutorial() {
  if (tutorialfront == 0){
  document.getElementById("tutorial1").hidden = false;
  document.getElementById("tutorial2").hidden = true;
  document.getElementById("tutorial3").hidden = true;
  document.getElementById("tutorial4").hidden = true;
  tutorialfront = 1;
  }
}
function comtutorial() {
  if (tutorialcom == 0){
  document.getElementById("tutorial1").hidden = false;
  document.getElementById("tutorial2").hidden = true;
  document.getElementById("tutorial3").hidden = true;
  document.getElementById("tutorial4").hidden = true;
  tutorialcom = 1;
  }
}
