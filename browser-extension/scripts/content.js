function redactAll( request ){
  Array.prototype.map.call( document.querySelectorAll( '*' ), function( curr ){
    curr.style.fontFamily = request.font;
  } );
}

chrome.runtime.onMessage.addListener( function( request ){
  if ( request && request.style && request.font ){
    let headElement = document.getElementsByTagName("head")[0],
        linkElement = document.createElement("link");

    let styles = document.createElement('style');
        styles.type = 'text/css';
        styles.textContent = '@font-face { font-family: "' + request.font + '"; src: url("'
            + chrome.extension.getURL( `fonts/redacted-${ request.style }.woff` )
            + '"); }';

    document.head.appendChild( styles );

    try{
      const selectedText = window.getSelection().toString();
      if ( selectedText && selectedText.length ){
        let selection = window.getSelection();
        selection = selection.getRangeAt( 0 );

        let selectedText = selection.extractContents();
        let span = document.createElement( 'span' );

        span.style.fontFamily = request.font;
        span.appendChild( selectedText );
        selection.insertNode( span );
        let innerSpans = span.querySelectorAll( 'span' );
        if ( innerSpans && innerSpans.length > 0 ){
          for ( let i = 0, j = innerSpans.length; i < j; i++ ){
            if ( innerSpans[i].getAttribute('style') && innerSpans[i].getAttribute('style').indexOf( 'Redacted' ) !== -1 ){
              innerSpans[i].style = '';
            }
          }
        }
      } else {
        redactAll( request );
      }
    } catch( err ){
      console.log( 'Redacted error:', err );
      redactAll( request );
    }
  }
} );
