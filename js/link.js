/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

t.render(function(){
  // make sure your rendering logic lives here, since we will
  // recall this method as the user adds and removes attachments
  var link = document.getElementById('link');
  link.textContent = t.arg('text');
  link.href = t.arg('url');
});
