
$(document).ready(setTimeout(function(){
  $(".explained").removeClass("hide");
  $(".what-is-it").addClass("fadeOut");
  $(".who-plays-it").addClass("fadeOut");
  $(".explained").addClass("fadeIn");
  setInterval(explained, 20000);
}, 5000))

$("#esports-logo").click(explained);

function explained() {
  $(".explained").toggleClass("fadeIn fadeOut");
  $(".what-is-it").toggleClass("fadeOut fadeIn");
  $(".who-plays-it").toggleClass("fadeOut fadeIn");
}
