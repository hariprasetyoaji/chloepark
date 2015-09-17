
(function () {
  'use strict';

  var $buffer = document.getElementById('container__buffer');

  function imageReady () {
    var classNames = $buffer.className;
    $buffer.setAttribute('class', classNames + ' container__buffer--ready');
  }

  $buffer.onload = imageReady;
})();
