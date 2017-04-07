var WHITE_ICON = './img/logo.png';
var GRAY_ICON = './img/logo.png';


TrelloPowerUp.initialize(
{
  'board-buttons': function(t, options)
  {
    return [
    {
      icon: WHITE_ICON,
      text: 'Template',
      callback: boardButtonCallback
    }];
  }
});
