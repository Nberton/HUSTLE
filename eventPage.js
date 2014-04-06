chrome.runtime.onInstalled.addListener(function(details){
	window.alert("It's Business Time");
	var BadgeID=localStorage.getItem("BadgeID");
    chrome.storage.sync.set({'badgeID': BadgeID}, function(){window.alert('Badge was saved');});
});
/*
function initializeBadge(){
	window.alert("It's Business Time");
}*/