
(function () {
  'use strict';

  var $buffer = document.getElementById('homepage__buffer');

  function imageReady () {
    var classNames = $buffer.className;
    $buffer.setAttribute('class', classNames + ' homepage__buffer--ready');
  }

  $buffer.onload = imageReady;
})();
