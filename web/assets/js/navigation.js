// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

window.addEventListener('scroll', function() {
  var navigationBar = document.getElementById('navigationBar');
  if (window.pageYOffset > 0) {
      navigationBar.classList.add('scrolled');
  } else {
      navigationBar.classList.remove('scrolled');
  }
});


// open mobile navigation

document.getElementById('mobileMenuButton').addEventListener('click', function () {
  console.log('clicked');
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

// close mobile navigation
document.getElementById('mobileMenuCloseButton').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.add('hidden');
});