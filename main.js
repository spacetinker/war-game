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
var unitnames = [princes_rifles,kings_rifles,first_rifles,seconed_rifles,princes_armored]
var unitnamer1 = [princes_,kings_,first_,seconed_,third_,highlanders_,usonias_,potters_,rooks_,knights_,peoples_,borshas_]
var unitnamer2 = [rifles,armored,gunners,shocktroops]

function troopsmenu() {
  document.GetElementById("tfbutton").hidden = false;
  document.GetElementById("trooptypeinput").hidden = false;
  document.GetElementById("troopidinput").hidden = false;
  document.GetElementById("troopinstr4").hidden = false;
  document.GetElementById("troopinstr3").hidden = false;
  document.GetElementById("troopinstr2").hidden = false;
  document.GetElementById("troopinstr1").hidden = false;
  troopstutorial()
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
  if (tutorial == 2 && tutorialaerial != 1){
    document.GetElementById("tutorial21").hidden = false;
    document.GetElementById("tutorial22").hidden = false;
    document.GetElementById("tutorial23").hidden = false;
    document.GetElementById("tutorial24").hidden = false;
    document.GetElementById("tutorial11").hidden = true;
    document.GetElementById("tutorial12").hidden = true;
    document.GetElementById("tutorial13").hidden = true;
    document.GetElementById("tutorial14").hidden = true;
    document.GetElementById("tutorial31").hidden = true;
    document.GetElementById("tutorial32").hidden = true;
    document.GetElementById("tutorial33").hidden = true;
    document.GetElementById("tutorial34").hidden = true;
    document.GetElementById("tutorial41").hidden = true;
    document.GetElementById("tutorial42").hidden = true;
    document.GetElementById("tutorial43").hidden = true;
    document.GetElementById("tutorial44").hidden = true;
    tutorialaerial = 1;
  }
  if (tutorial == 3 && tutorialtroops != 1){
    document.GetElementById("tutorial31").hidden = false;
    document.GetElementById("tutorial32").hidden = false;
    document.GetElementById("tutorial33").hidden = false;
    document.GetElementById("tutorial34").hidden = false;
    document.GetElementById("tutorial21").hidden = true;
    document.GetElementById("tutorial22").hidden = true;
    document.GetElementById("tutorial23").hidden = true;
    document.GetElementById("tutorial24").hidden = true;
    document.GetElementById("tutorial11").hidden = true;
    document.GetElementById("tutorial12").hidden = true;
    document.GetElementById("tutorial13").hidden = true;
    document.GetElementById("tutorial14").hidden = true;
    document.GetElementById("tutorial41").hidden = true;
    document.GetElementById("tutorial42").hidden = true;
    document.GetElementById("tutorial43").hidden = true;
    document.GetElementById("tutorial44").hidden = true;
    tutorialtroops = 1;
  }
  if (tutorial == 4 && tutorialcom != 1){
    document.GetElementById("tutorial41").hidden = false;
    document.GetElementById("tutorial42").hidden = false;
    document.GetElementById("tutorial43").hidden = false;
    document.GetElementById("tutorial44").hidden = false;
    document.GetElementById("tutorial11").hidden = true;
    document.GetElementById("tutorial12").hidden = true;
    document.GetElementById("tutorial13").hidden = true;
    document.GetElementById("tutorial14").hidden = true;
    document.GetElementById("tutorial31").hidden = true;
    document.GetElementById("tutorial32").hidden = true;
    document.GetElementById("tutorial33").hidden = true;
    document.GetElementById("tutorial34").hidden = true;
    document.GetElementById("tutorial21").hidden = true;
    document.GetElementById("tutorial22").hidden = true;
    document.GetElementById("tutorial23").hidden = true;
    document.GetElementById("tutorial24").hidden = true;
    tutorialcom = 1;
  }
}
function troopstutorial() {
  if (tutorialtroops == 0){
  document.GetElementById("tutorial31").hidden = false;
  document.GetElementById("tutorial32").hidden = false;
  document.GetElementById("tutorial33").hidden = false;
  document.GetElementById("tutorial34").hidden = false;
  document.GetElementById("tutorial21").hidden = true;
  document.GetElementById("tutorial22").hidden = true;
  document.GetElementById("tutorial23").hidden = true;
  document.GetElementById("tutorial24").hidden = true;
  document.GetElementById("tutorial11").hidden = true;
  document.GetElementById("tutorial12").hidden = true;
  document.GetElementById("tutorial13").hidden = true;
  document.GetElementById("tutorial14").hidden = true;
  document.GetElementById("tutorial41").hidden = true;
  document.GetElementById("tutorial42").hidden = true;
  document.GetElementById("tutorial43").hidden = true;
  document.GetElementById("tutorial44").hidden = true;
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
    document.GetElementById("tutorial21").hidden = false;
    document.GetElementById("tutorial22").hidden = false;
    document.GetElementById("tutorial23").hidden = false;
    document.GetElementById("tutorial24").hidden = false;
    document.GetElementById("tutorial11").hidden = true;
    document.GetElementById("tutorial12").hidden = true;
    document.GetElementById("tutorial13").hidden = true;
    document.GetElementById("tutorial14").hidden = true;
    document.GetElementById("tutorial31").hidden = true;
    document.GetElementById("tutorial32").hidden = true;
    document.GetElementById("tutorial33").hidden = true;
    document.GetElementById("tutorial34").hidden = true;
    document.GetElementById("tutorial41").hidden = true;
    document.GetElementById("tutorial42").hidden = true;
    document.GetElementById("tutorial43").hidden = true;
    document.GetElementById("tutorial44").hidden = true;
    tutorialaerial = 1;
  }
}
function fronttutorial() {
  if (tutorialfront == 0){
  document.GetElementById("tutorial11").hidden = false;
  document.GetElementById("tutorial12").hidden = false;
  document.GetElementById("tutorial13").hidden = false;
  document.GetElementById("tutorial14").hidden = false;
  document.GetElementById("tutorial21").hidden = true;
  document.GetElementById("tutorial22").hidden = true;
  document.GetElementById("tutorial23").hidden = true;
  document.GetElementById("tutorial24").hidden = true;
  document.GetElementById("tutorial31").hidden = true;
  document.GetElementById("tutorial32").hidden = true;
  document.GetElementById("tutorial33").hidden = true;
  document.GetElementById("tutorial34").hidden = true;
  document.GetElementById("tutorial41").hidden = true;
  document.GetElementById("tutorial42").hidden = true;
  document.GetElementById("tutorial43").hidden = true;
  document.GetElementById("tutorial44").hidden = true;
  tutorialfront = 1;
  }
}
function comtutorial() {
  tutorial = 4;
  continue_intro()
}
