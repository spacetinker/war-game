var tutorial = 0;
var confidence = 15;
var gunnertroops = [5];
var rifletroops = [1,2,3,4];
var shocktroops = [];
var armored = [];
var unitlocations = [1,2,3,4,5]
var unitidsetup = 5
function troopsmenu() {
  document.GetElementById("tfbutton").hidden = false;
  document.GetElementById("trooptypeinput").hidden = false;
  document.GetElementById("troopidinput").hidden = false;
  document.GetElementById("troopinstr4").hidden = false;
  document.GetElementById("troopinstr3").hidden = false;
  document.GetElementById("troopinstr2").hidden = false;
  document.GetElementById("troopinstr1").hidden = false;
  tutorial(3)
}
function findtroops() {
  let var1troop = parseInt(document.GetElementById("trooptypeinput").value);
  let var2troop = parseInt(document.GetElementById("troopidinput").value);
  if (var1troop == rifle){
    if(var2troop > rifletroops.length){
      var2troop = rifletroops.indexOf(var2troop)
      trooplocation = unitlocations.indexOf(var2troop)
      document.GetElementById("troopselectorerror").hidden = false;
    }else{
      document.GetElementById("troopselectorerror").hidden = false;
    }
  }
}
function continue_intro(tutorial) {
  if (tutorialfront == 1 && tutorialaerial == 1 && tutorialtroops == 1 && tutorialcom == 1){
    tutorial = 5;
  }
  if (tutorial == 1 && tutorialfront != 1){
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
  if (tutorial == 0){
    document.GetElementById("intro1").hidden = true;
    document.GetElementById("intro2").hidden = true;
    document.GetElementById("intro3").hidden = true;
    document.GetElementById("intro4").hidden = true;
    document.GetElementById("frontbutton").hidden = false;
    document.GetElementById("aerialbutton").hidden = false;
    document.GetElementById("combutton").hidden = false;
    document.GetElementById("troopsbutton").hidden = false;
  }
}
