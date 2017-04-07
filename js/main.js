var logo = './img/logo.png';

var boardButtonCallback = function(t){
  return t.popup({
    title: 'Freija Opciones',
    items: [
      {
        text: 'Freija',
        callback: function(t){
          return t.boardBar({
            url: './opciones.html',
            height: 200
          })
          .then(function(){
            return t.closePopup();
          });
        }
      }
    ]
  });
};

TrelloPowerUp.initialize(
{
  'board-buttons': function(t, options)
  {
    return [
    {
      icon: logo,
      text: 'Freija',
      callback: boardButtonCallback
    }];
  }
});
