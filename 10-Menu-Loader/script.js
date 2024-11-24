/**
  * Accordion Menu
  *
  * https://codepen.io/maggiben/pen/rCIFu
  */
  $('.list-product-nav .list-product-cat').click(function(e) {
    e.preventDefault();
    $('.list-product-nav .list-product-subnav').slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation();

    var span = $(this).find('.glyphicon');
    span.toggleClass('glyphicon-menu-up glyphicon-menu-down');
  });




window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});