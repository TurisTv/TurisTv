$(document).ready(function(){
  toggleNav();
});

function toggleNav() {
  var $button = $('.toggle-button');
  $button.on('click', function(e) {
          var $this = $(this);
          e.preventDefault();
         toggleContent($this);
  });
}

function toggleContent(button) {
  var $content = button.next('.toggle-content');
  
  $content.slideToggle();
}