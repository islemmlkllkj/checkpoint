
function bolde(){ 
  event.preventDefault();
  var  getId=document.getElementById("texte") ;
  getId.style.fontWeight="bold";
  }
function ITALICE(){
  event.preventDefault();
  var getID=document.getElementById("texte");
  getID.style.fontStyle="italic"
  }
   function Underline(){
    event.preventDefault();
    var getID=document.getElementById("texte");
    getID.style.textDecoration ="underline";
    }
    function SIZE(){
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontSize=document.getElementById("fs").value;
    }
     function STYLE() {
      event.preventDefault();
      var getID=document.getElementById("texte");

      getID.style.fontFamily=document.getElementById("islem").value;
    }