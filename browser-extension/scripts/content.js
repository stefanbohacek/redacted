chrome.runtime.onMessage.addListener( function( request ){
  // console.log( request );
  if ( request && request.style && request.font ){
    let headElement = document.getElementsByTagName("head")[0],
        linkElement = document.createElement("link");

    let styles = document.createElement('style');
        styles.type = 'text/css';
        styles.textContent = '@font-face { font-family: "' + request.font + '"; src: url("'
            + chrome.extension.getURL( `fonts/redacted-${ request.style }.woff` )
            + '"); }';

    document.head.appendChild( styles );
    // console.log( chrome.extension.getURL( `fonts/redacted-${ request.style }.woff` ) )
    let selection = window.getSelection();
    if ( selection && selection.rangeCount ){
      selection = selection.getRangeAt( 0 );
      var selectedText = selection.extractContents();
      var span = document.createElement( "span" );
      span.style.fontFamily = request.font;
      span.appendChild( selectedText );
      selection.insertNode( span );
    } else {
      Array.prototype.map.call( document.querySelectorAll( '*' ), function( curr ){
        curr.style.fontFamily = request.font;
      } );
    }
  }
} );
