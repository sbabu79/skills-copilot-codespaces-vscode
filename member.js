function skillsmember() {  
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("skillsmember").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "skillsmember.php?member="+member+"&skills="+skills, true);
  xhttp.send();
}
