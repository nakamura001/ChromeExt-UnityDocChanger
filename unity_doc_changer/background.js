chrome.browserAction.onClicked.addListener(function(tab) {
var x="//docs.unity3d.com/";
var y="//docs-jp.unity3d.com/";

//var pattern=/\bBlocked/;
//if (pattern.test(window.document.title)) // if it matches pattern defined above

//  chrome.tabs.update(tab.id, {url: "http://unity3d.com"});
	chrome.tabs.getSelected(null,function(tab) {
		var newUrl;
		var enUrlPattrn = /http:\/\/docs\.unity3d\.com\//;
		var jpUrlPattrn = /http:\/\/docs-jp\.unity3d\.com\//
		
		if (enUrlPattrn.test(tab.url)) {
			newUrl = tab.url.replace(enUrlPattrn, "http://docs-jp.unity3d.com/");
		    chrome.tabs.update(tab.id, {url: newUrl});
		}
		if (jpUrlPattrn.test(tab.url)) {
			newUrl = tab.url.replace(jpUrlPattrn, "http://docs.unity3d.com/");
		    chrome.tabs.update(tab.id, {url: newUrl});
		}
	});
});
chrome.browserAction.setIcon({path:"icon.png"});
