var url = location.href;

var orig_url = url.replace(/http:\/\/www.stumbleupon.com\/su\/[^\/]*\//, "");

// bye bye stumble upon.
// due to a script they run sometime during the document lifecycle, simple url redirection by setting location.href does not work.
// We do not want to wait for the DOM to finish loading.

chrome.extension.sendRequest({ value: "redirect", url: orig_url }, function(response){
});

