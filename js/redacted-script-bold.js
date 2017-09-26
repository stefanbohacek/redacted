(function(){
  var headElement = document.getElementsByTagName("head")[0],
      linkElement = document.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("type", "text/css");
  linkElement.setAttribute("href", "https://redacted.glitch.me/css/redacted-script-bold.css");
  headElement.appendChild(linkElement);
  Array.prototype.map.call(document.querySelectorAll("*"), function(curr){curr.style.fontFamily = "Redacted Script Bold";});
})();
