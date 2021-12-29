let downloadButton = document.getElementById('download');

downloadButton.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({file: "js/content.js"});
  });
};