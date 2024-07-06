document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
    this.classList.toggle('fa-bars');
    this.classList.toggle('fa-times');
    this.classList.toggle('rotate'); // Add rotate class for transition
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
  } else {
      navbar.classList.remove('navbar-scrolled');
  }
});


document.addEventListener('scroll', function() {
  const ball = document.getElementById('ball');
  const path = document.getElementById('path');
  const pathLength = path.getTotalLength();
  const section2 = document.querySelector('.section2');
  const section2Top = section2.offsetTop;
  const section2Height = section2.offsetHeight;
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;

  if (scrollPosition >= section2Top - viewportHeight && scrollPosition < section2Top + section2Height) {
      const relativeScroll = scrollPosition - (section2Top - viewportHeight);
      const progress = relativeScroll / (section2Height + viewportHeight);
      const pointAtLength = progress * pathLength;
      const point = path.getPointAtLength(pointAtLength);

      ball.setAttribute('cx', point.x);
      ball.setAttribute('cy', point.y);
  }
});




$(function () {
    $(document).scroll(function () {
      var $nav = $(".custom-navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });



