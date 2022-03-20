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






});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}




  