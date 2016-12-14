const $ = require('jquery')

function myFunction() {
    // make the request to poe server
    $.get( "http://api.pathofexile.com/public-stash-tabs", function( data ) {
        var el = $('#sellerNames');
        let stashes = data.stashes;
        stashes.forEach(function(stash) {
            el.append('<div>' + stash.accountName + '</div>\n');
        });
    });
}