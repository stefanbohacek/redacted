function ready( fn ) {
  if ( document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading' ){
    fn();
  } else {
    document.addEventListener( 'DOMContentLoaded', fn );
  }
}

ready( function(){
  document.querySelectorAll( '.apply-style' ).forEach( function( btn ){
    btn.addEventListener( 'click', function( ev ){
      chrome.tabs.query( { active: true, currentWindow: true }, function( activeTabs ){
        chrome.tabs.sendMessage( activeTabs[0].id, {
          style: ev.target.dataset.style,
          font: ev.target.dataset.font
        } );
      } );
    } );
  } );
  document.querySelectorAll( '.clear-styles' ).forEach( function( btn ){
    btn.addEventListener( 'click', function( ev ){
      chrome.tabs.query( { active: true, currentWindow: true }, function( activeTabs ){
        chrome.tabs.sendMessage( activeTabs[0].id, {
          action: 'clear_styles'
        } );
      } );
    } );
  } );
} );
