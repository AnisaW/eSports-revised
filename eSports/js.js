
$(document).read(setTimeout(function(){
  $(".explained").removeClass("hide");
  $(".what-is-it").addClass("fadeOut");
  $(".who-plays-it").addClass("fadeOut");
  $(".explained").addClass("fadeInUpBig");
  setInterval(explained, 20000);
}, 5000))

$("#esports-logo").click(explained);

function explained() {
  $(".explained").toggleClass("fadeInDownBig fadeOut");
  $(".what-is-it").toggleClass("fadeOut fadeInDownBig");
  $(".who-plays-it").toggleClass("fadeOut fadeInUpBig");
}
