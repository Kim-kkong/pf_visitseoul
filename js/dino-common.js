// DinoWorks Common JS
$(document).ready(function() {
  preventDefaultAnchor();
});


function preventDefaultAnchor() {
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });
}




  