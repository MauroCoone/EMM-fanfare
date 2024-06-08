document.addEventListener('DOMContentLoaded', (event) => {
  console.log('testtesttest');
  const radios = document.querySelectorAll('input[name="slider"]');
  let currentIndex = Array.from(radios).findIndex(radio => radio.checked);

  function switchCarouselSlide() {
      radios[currentIndex].checked = false;
      currentIndex = (currentIndex + 1) % radios.length;
      radios[currentIndex].checked = true;
  }

  setInterval(switchCarouselSlide, 3000);
});
