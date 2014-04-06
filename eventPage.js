chrome.runtime.onInstalled.addListener(function(details){
	window.alert("It's Business Time");
	var BadgeID=localStorage.getItem("BadgeID");
    chrome.storage.sync.set({'badgeID': BadgeID}, function(){window.alert('Badge was saved');});
   	window.alert(StorageArea.get("badgeID")) 
});
/*
function initializeBadge(){
	window.alert("It's Business Time");
}*/