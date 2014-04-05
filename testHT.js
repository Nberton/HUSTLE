function submit(){
  if(document.getElementById('chrome').checked){
    var element = document.getElementById('dc');
    element.innerHTML += "Download Starting";
    window.location.href = "/home/nate/Dan's stuff/tuzag/Hack-a-Thon/HUSTLE.crx"
  }
}