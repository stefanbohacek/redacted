# REDACTED.JS

## About
A set of simple scripts/bookmarklets that change the font of the website you are visiting to the [Redacted font](https://github.com/christiannaths/Redacted-Font) created by [Christian Naths](https://github.com/christiannaths).

## Examples

![Redacted Regular](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/examples/redacted-regular.png)
*Redacted Regular*

![Redacted Script Regular](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/examples/redacted-script-regular.png)
*Redacted Script Regular*

![Redacted Script Bold](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/examples/redacted-script-bold.png)
*Redacted Script Bold*

![Redacted Script Light](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/examples/redacted-script-light.png)
*Redacted Script Light*

![Redacted -- Selected text only](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/examples/redacted-selected-text.png)
*New in 0.0.2 -- Apply any of the fonts above to a selected text only*

## How to Use

1. Open the [bookmarklets](https://github.com/fourtonfish/redacted.js/tree/master/bookmarklets) folder
2. Open one/each of the `bookmarklet-redacted-???.js` files, copy the content, and:

**In Google Chrome:**

3. Right-click the *Bookmarks bar*
4. Click *Add page...*
5. As *Name* you can use the name of the font you chose
6. Paste the code you copied in step #2 into the *URL* field
7. Click "Save"

![Redacted Regular](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/images/installation-chrome.png)

**In Firefox:**

3. Right-click the *Bookmarks toolbar*
4. Click *New Bookmark...*
5. As *Name* you can use the name of the font you chose
6. Paste the code you copied in step #2 into the *Location* field
7. Click "Add"

![Redacted Regular](https://raw.githubusercontent.com/fourtonfish/redacted.js/master/images/installation-chrome.png)


Now you can simply open the bookmarklet on any page where you want to use it. When using any of the *"Redacted ??? Selected Text"* bookmarklets, select some text on the page first.

## Known Issues

This is a public alpha. There are some issues I'm working on and also some limitations:

* A modern browser is necessary.
* The script doesn't work too well on very slow connections.
* Watch out for missing glyphs! (especially when a site uses icon web fonts such as [Font Awesome](http://fontawesome.io/)).
* The script will not replace text that has been inserted as an image :-)
* This script may not work on some sites (for example Github).

## Changelog

* **0.0.2** Bookmarklets to apply Redacted Font only to selected text.
* **0.0.1** First release.

## Notes

The way the bookmarklets work is that they actually inject a script (from the JS folder) that in turn injects custom CSS and then applies a class to either the selected text or all elements on the page. Now, while some people may object to this approach (injecting a 3rd party script that does all the work instead of doing it all transparently in the bookmarklet), two points:
 
* The project is open source -- you can easily modify this
* This modular approach allows me to fix bugs/add new functionality without people having to reinstall the bookmarklet
 
I'm also thinking about combining each of the bookmarklets (eg. *Redacted Regular* and *Redacted Regular (Selected Text)*) into one: if text is selected, the font will only be applied to the selection, otherwise to the whole page. I suppose the biggest challenge here is adding a reliable Undo function: if you make a mistake while trying to redact several parts of a page, the whole page will be "redacted" and you will have to refresh it and start over.

I am very open to more ideas and suggestions either through pull requests, opening an issue or at stefan@fourtonfish.com or [@fourtonfish](https://twitter.com/fourtonfish).
