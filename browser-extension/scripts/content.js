function redactAll( request ){
  Array.prototype.map.call( document.querySelectorAll( '*' ), function( curr ){
    curr.style.fontFamily = request.font;
  } );
}

chrome.runtime.onMessage.addListener( function( request ){
  if ( request ){
    if ( request.action ){
      switch ( request.action ){
        case 'clear_styles':
          let els = document.querySelectorAll( '*' );
          for ( let i = 0, j = els.length; i < j; i++ ){
            if ( els[i].getAttribute( 'style' ) && els[i].style.fontFamily.indexOf( 'Redacted' ) !== -1 ){
              els[i].style.fontFamily = '';
            }            
          }


          break;
      }
    } else if ( request.style && request.font ){
      let headElement = document.getElementsByTagName( 'head' )[0],
          linkElement = document.createElement( 'link' );

      let styles = document.createElement( 'style' );
          styles.classList.add( 'ftf-redacted-style' );
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
              if ( innerSpans[i].getAttribute( 'style' ) && innerSpans[i].getAttribute( 'style' ).indexOf( 'Redacted' ) !== -1 ){
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
  }
} );
