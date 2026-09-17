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
  document.GetElementById("trooptypeinput").hidden = false;
  document.GetElementById("troopfindbutton").hidden = false;
  document.GetElementById("troopidinput").hidden = false;
  document.GetElementById("troopinstr4").hidden = false;
  document.GetElementById("troopinstr3").hidden = false;
  document.GetElementById("troopinstr2").hidden = false;
  document.GetElementById("troopinstr1").hidden = false;
  troopstutorial()
}
function closeFrontMenu() {
  document.GetElementById("trooptypeinput").hidden = true;
  document.GetElementById("troopfindbutton").hidden = true;
  document.GetElementById("troopidinput").hidden = true;
  document.GetElementById("troopinstr4").hidden = true;
  document.GetElementById("troopinstr3").hidden = true;
  document.GetElementById("troopinstr2").hidden = true;
  document.GetElementById("troopinstr1").hidden = true;
}
function frontmenu() {
  document.GetElementById("map").style.display = "grid";
}
function findtroops() {
  let var1troop = parseInt(document.GetElementById("trooptypeinput").value);
  let var2troop = parseInt(document.GetElementById("troopidinput").value);
  if (var1troop == "rifle"){
    if(var2troop > rifletroops.length){
      var2troop = rifletroops.indexOf(var2troop)
      trooplocation = unitlocations.indexOf(var2troop)
      document.GetElementById("troopselectorerror").hidden = false;
      document.GetElementById("troopinfo1").innerHtml = unitnames.indexOf(rifletroops.indexOf(var2troop))
    }else{
      document.GetElementById("troopselectorerror").hidden = false;
    }
  }
}
function updateMap() {
  
}
function troopstutorial() {
  if (tutorialtroops == 0){
  document.GetElementById("tutorial3").hidden = false;
  document.GetElementById("tutorial2").hidden = true;
  document.GetElementById("tutorial1").hidden = true;
  document.GetElementById("tutorial4").hidden = true;
  tutorialtroops = 1;
  }
}
function introtutorial() {
  document.GetElementById("intro").hidden = true;
  document.GetElementById("frontbutton").hidden = false;
  document.GetElementById("aerialbutton").hidden = false;
  document.GetElementById("combutton").hidden = false;
  document.GetElementById("troopsbutton").hidden = false;
}
function aerialtutorial() {
  if (tutorialaerial == 0){
    document.GetElementById("tutorial2").hidden = false;
    document.GetElementById("tutorial1").hidden = true;
    document.GetElementById("tutorial3").hidden = true;
    document.GetElementById("tutorial4").hidden = true;
    tutorialaerial = 1;
  }
}
function fronttutorial() {
  if (tutorialfront == 0){
  document.GetElementById("tutorial1").hidden = false;
  document.GetElementById("tutorial2").hidden = true;
  document.GetElementById("tutorial3").hidden = true;
  document.GetElementById("tutorial4").hidden = true;
  tutorialfront = 1;
  }
}
function comtutorial() {
  if (tutorialcom == 0){
  document.GetElementById("tutorial1").hidden = false;
  document.GetElementById("tutorial2").hidden = true;
  document.GetElementById("tutorial3").hidden = true;
  document.GetElementById("tutorial4").hidden = true;
  tutorialcom = 1;
  }
}
