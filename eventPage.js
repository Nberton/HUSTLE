chrome.runtime.onInstalled.addListener(function(details){
	window.alert("It's Business Time");
	var BadgeID=localStorage.getItem("BadgeID");
  window.alert(BadgeID);
  chrome.storage.sync.set({'badgeID': BadgeID});
  window.alert(chrome.storage.get('badgeID'));
});
/*
function initializeBadge(){
	window.alert("It's Business Time");
}*/