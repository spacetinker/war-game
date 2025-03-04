var tutorial = 0;
var gunnertroops = [1,2];
var rifletroops = [1,2,3];
var shocktroops = [];
var armored = [];
function continue_intro(tutorial) {
  if (tutorialfront == 1 && tutorialaerial == 1 && tutorialtroops == 1 && tutorialcom == 1){
    tutorial = 5;
  }
  if (tutorial == 1){
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
  if (tutorial == 2){
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
  if (tutorial == 3){
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
  if (tutorial == 4){
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
