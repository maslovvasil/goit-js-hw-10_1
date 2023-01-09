$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<span class="arrow-owl arrow-right"> <<< </span>',
    '<span class="arrow-owl arrow-left"> >>> </span>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
})
