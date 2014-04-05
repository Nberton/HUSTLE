function submit(){
  if(document.getElementById('chrome').checked){
    var element = document.getElementById('dc');
    element.innerHTML += "<button type='button' id='bageButton' text-align='center' onclick='badge()'>Badge Init</button>";
    //window.location.href = "/home/nate/Dan's stuff/tuzag/Hack-a-Thon/HUSTLE.crx"
  }
}
