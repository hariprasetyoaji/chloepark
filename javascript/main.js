
(function () {
  'use strict';

  // Transition to display background
  var $buffer = document.getElementById('homepage__buffer');

  function imageReady () {
    $buffer.classList.add('homepage__buffer--ready');
  }

  $buffer.onload = imageReady;

  // Transition for social links
  var $socialLinksList = document.getElementById('homepage__social-links');
  var $socialLinks = document.getElementsByClassName('homepage__social-link');
  var linkTransparentClass= 'homepage__social-link--transparent';

  function mouseEnterHandler (evt) {
    for (var i = 0; i < $socialLinks.length; i++) {
      if (evt.target === $socialLinks[i]) { continue; }
      var classNames = $socialLinks[i].className;
      $socialLinks[i].classList.add(linkTransparentClass);
    }
  }

  function mouseLeaveHandler (evt) {
    for (var i = 0; i < $socialLinks.length; i++) {
      $socialLinks[i].classList.remove(linkTransparentClass);
    }
  }

  function addMouseEventListener ($links) {
    for (var i = 0; i < $links.length; i++) {
      $links[i].addEventListener('mouseenter', mouseEnterHandler);
      $links[i].addEventListener('mouseleave', mouseLeaveHandler);
    }
  }

  addMouseEventListener($socialLinks);
})();
