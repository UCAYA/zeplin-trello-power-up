/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();

var zeplinUriSelector = document.getElementById('zeplinuri');

t.render(function(){
  return Promise.all([
    t.get('board', 'private', 'zeplinuri')
  ])
  .spread(function(savedZeplinUri){
    if(savedZeplinUri && /[a-z]+/.test(savedZeplinUri)){
      zeplinUriSelector.value = savedZeplinUri;
    }
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

document.getElementById('save').addEventListener('click', function(){
  return t.set('board', 'private', 'zeplinuri', zeplinUriSelector.value)
  .then(function(){
    t.closePopup();
  })
})
