$(function() {
  $('.js-nav a, .js-connect').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

var arrowBounce = function() {
  var arrow = $(".arrow");
  
  if (arrow.hasClass("lift")) {
    arrow.removeClass("lift");
  } else {
    arrow.addClass("lift");
  }
};

setInterval(arrowBounce, 800);

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

"use strict";

class Example {
  constructor(options) {
    this.root = options.root;
    this.init();
    setTimeout(this.showImages.bind(this), 1000);
  }

  init() {
    this.scroll = new LocomotiveScroll({
      el: this.root,
      direction: 'horizontal',
      smooth: true,
      lerp: 0.05,
      tablet: {
        smooth: true
      },
      smartphone: {
        smooth: true
      }
    });
    this.images = this.root.querySelectorAll('.image');
    [].forEach.call(this.images, image => {
      image.addEventListener('click', () => {
        image.classList.add('-clicked');
        this.hideImages();
      });
    });
  }

  showImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-clicked');
      image.classList.add('-active');
    });
  }

  hideImages() {
    [].forEach.call(this.images, image => {
      image.classList.remove('-active');
    });
    setTimeout(this.showImages.bind(this), 2000);
  }

}

window.addEventListener('DOMContentLoaded', event => {
  const example = new Example({
    root: document.querySelector('.scroll-animations')
  });
});
