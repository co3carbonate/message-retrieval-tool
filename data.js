// Merge all chat files into a single chat array

var chat = [];
var lastChatFile = 7; // <-- modify accordingly

(function() {

var currentChatFile = 0;

function loadChatFiles() {
	var script = document.createElement('script');
	document.head.appendChild(script);
	script.onload = function() {		    
		currentChatFile++;
		if(currentChatFile <= lastChatFile) {
			loadChatFiles();
		} else {
			chatFilesLoaded();
		}
	};
	script.onerror = function() {
		loadChatFiles();
	};
	script.src = 'chat' +currentChatFile+ '.js?v=' +Date.now(); // prevent caching
}
loadChatFiles();

function chatFilesLoaded() {
	for(var i = lastChatFile; i >= 0; i--) {
		chat.push.apply(chat, window['chat' + i]);
	}
}

})();