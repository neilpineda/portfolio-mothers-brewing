$(document).ready(function() {
    // start scroll triggered anims ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();

      if(wScroll > $('.banner').offset().top - ($(window).height() / 10)) {
        $('.nav-bar').addClass('custom-nav');
        document.getElementById('nav-logo').src = 'images/logo-flat.png';
        $('.banner').css({
          'margin-top': '4.5%'
        })
      }
      else{
        $('.nav-bar').removeClass('custom-nav');
        document.getElementById('nav-logo').src = 'images/logo-colored.png';
        $('.banner').css({
          'margin-top': '0'
        })
      }

      // start banner-mask anim ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if(wScroll > $('.banner').offset().top - ($(window).height() / 2)) {
        $('.banner-mask').css({
          'left': '0'
        })
        $('.banner-content').css({
          'right': '0',
          'opacity': '1'
        })
      }
      else{
        $('.banner-mask').css({
          'left': '-50%'
        })
        $('.banner-content').css({
          'right': '-5%',
          'opacity': '0'
        })
      }

      // start closing-mask anim ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if(wScroll > $('.closing-banner').offset().top - ($(window).height() / 2)) {
        $('.closing-mask').css({
          'left': '0'
        })
        $('.closing-content').css({
          'right': '0',
          'opacity': '1'
        })
      }
      else{
        $('.closing-mask').css({
          'left': '-50%'
        })
        $('.closing-content').css({
          'right': '-5%',
          'opacity': '0'
        })
      }

      // start insta-content anim ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      if(wScroll > $('.insta-content').offset().top - ($(window).height() / 1.01)) {
        $('.insta-content div').each(function(i) {
          setTimeout(function() {
            $('.insta-content div').eq(i).addClass('is-visible');
          },  100 * (i+1));
        });
      }
      else{
        $('.insta-content div').each(function(i) {
          $('.insta-content div').eq(i).removeClass('is-visible');
        });
      }
    }); // end window.scroll ~~~

    // start bottle-slider animation ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var maxLoop = 11;
    var minLoop = 0;
    var currentLoop = 0;
    var slide = 0;
    setInterval(function () {
        currentLoop++;
        slide += 4.54;
        $('.bottle-slider ul').css({
          'transition': 'all ease-in-out 0.5s',
          'transform': 'translateX(-'+ slide +'%)'
        })

        if(currentLoop === maxLoop) {
          currentLoop = minLoop;
          setTimeout(function() {
            slide = 0;
            $('.bottle-slider ul').css({
              'transition': 'none',
              'transform': 'translateX('+ slide +')'
            })
          },500)
        } // end if ~~
      }, 1000); // end setInterval

    // function bottleSlide() {
    //   currentLoop++;
    //   slide += 4.54;
    //   $('.bottle-slider ul').css({
    //     'transition': 'all ease-in-out 0.5s',
    //     'transform': 'translateX(-'+ slide +'%)'
    //   });
    //
    //   if(currentLoop === maxLoop) {
    //     currentLoop = minLoop;
    //     setTimeout(function() {
    //       slide = 0;
    //       $('.bottle-slider ul').css({
    //         'transition': 'none',
    //         'transform': 'translateX('+ slide +')'
    //       })
    //     },500);
    //   } // end if ~~
    // }
    //
    // var slide = setInterval(function() {
    //   bottleSlide();
    // }, 1000);
}); // end document.ready ~~~
