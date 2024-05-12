// Accordion 
function myAccFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("myBtn1").click();
document.getElementById("myBtn2").click();
document.getElementById("myBtn3").click();
document.getElementById("myBtn4").click();
document.getElementById("myBtn5").click();

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Highlight only the selected item in the Shoes dropdown menu
function highlightItem(item) {
  var links = document.querySelectorAll("#demoAcc2 a");
  links.forEach(function(link) {
    link.classList.remove("w3-light-grey");
  });
  item.classList.add("w3-light-grey");
}
