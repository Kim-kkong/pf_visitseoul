// DinoWorks Common JS
$(document).ready(function() {
  preventDefaultAnchor();


  //헤더
  $('#gnb > ul.pc-gnb > li > a').on('mouseenter focus', function() {
    $(this).parent().addClass('open');
  });
  $('#gnb > ul.pc-gnb > li > a').on('mouseleave focus', function() {
    $(this).parent().removeClass('open');
  });
  $('#gnb > ul.pc-gnb > li > div.sub').on('mouseenter focus', function() {
    $(this).parent().addClass('open');
  });
  $('#gnb > ul.pc-gnb > li > div.sub').on('mouseleave focus', function() {
    $(this).parent().removeClass('open');
  });
    


  //side-menu
  $('#side-menu > li').on('click focus', function(){
    $(this).toggleClass('open');
  });



  //quick-menu
  var classOn = true;

  $('#wrapper > div.quick-menu > p').on('click focus', function() {
    if (classOn === true) {
      menuOn();
    } else {
      menuOff();
    }
  });


  function menuOn() {
    $('#wrapper > div.quick-menu').addClass('on'); 
    $('#wrapper > div.quick-menu').css({'transition': 'all 0.3s'});
    classOn = false;
  }

  function menuOff() {
    $('#wrapper > div.quick-menu').removeClass('on'); 
    $(this).css({'transition': 'all 0.3s'});
    classOn = true;
  }


  //mobile gnb
  $('#header a.menu').on('click', function() {
    $('#gnb').addClass('open');
    $('body.main').css({'overflow' : 'hidden'});
    });
    
    $('#gnb div.mobile-gnb > div.title > a > img.close').on('click', function() {
    $('#gnb').removeClass('open');
    $('body.main').removecss({'overflow' : 'hidden'});
    });
    
    $('#gnb ul.sub-menu > li > a').on('click', function() {
      $(this).parent().find('.select').toggleClass('on');
    });
    
    $('#gnb > ul.pc-gnb > li').on('click', function(e) {
        $('#gnb > ul.pc-gnb > li').removeClass('on');
        $(this).addClass('on');
    });

    $('#wrapper a.top-button').on('click', function() {
      $('html, body').stop(true).animate({'scrollTop': 0}, 500);
    });
  
});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}




  