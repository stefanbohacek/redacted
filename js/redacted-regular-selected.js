(function(){
  var headElement = document.getElementsByTagName("head")[0],
      linkElement = document.createElement("link");
  linkElement.setAttribute("rel", "stylesheet");
  linkElement.setAttribute("type", "text/css");
  linkElement.setAttribute("href", "https://cdn-ftfish.rhcloud.com/redactedjs/css/redacted-regular.css");
  headElement.appendChild(linkElement);
/*
  Credits: http://stackoverflow.com/a/6328851/2207606
*/  
  var selection = window.getSelection().getRangeAt(0);
  var selectedText = selection.extractContents();
  var span = document.createElement("span");
  span.style.fontFamily = "Redacted Regular";
  span.appendChild(selectedText);
  selection.insertNode(span);
})();
