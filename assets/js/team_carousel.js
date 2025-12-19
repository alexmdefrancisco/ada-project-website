document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.getElementById('teamCarousel');
  if (!wrapper) return;

  const bubbles = wrapper.querySelectorAll('.person-bubble');
  const track = wrapper.querySelector('.carousel-text-track');
  const prevBtn = wrapper.querySelector('.prev-btn');
  const nextBtn = wrapper.querySelector('.next-btn');
  
  let currentIndex = 0;
  const totalPeople = bubbles.length;
  let autoScrollInterval;
  let isPaused = false;

  // Function to update the view
  function updateCarousel(index) {
    // 1. Update Bubbles
    bubbles.forEach((b, i) => {
      if (i === index) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    // 2. Slide the text track
    // transform: translateX(-0%), -100%, -200% etc.
    track.style.transform = `translateX(-${index * 100}%)`;

    currentIndex = index;
  }

  // Navigation Logic
  function nextPerson() {
    const newIndex = (currentIndex + 1) % totalPeople;
    updateCarousel(newIndex);
  }

  function prevPerson() {
    // Adding totalPeople ensures modulo works for negative numbers
    const newIndex = (currentIndex - 1 + totalPeople) % totalPeople;
    updateCarousel(newIndex);
  }

  // Event Listeners
  if(prevBtn) prevBtn.addEventListener('click', () => {
    prevPerson();
    resetAutoScroll();
  });
  
  if(nextBtn) nextBtn.addEventListener('click', () => {
    nextPerson();
    resetAutoScroll();
  });

  bubbles.forEach((bubble) => {
    bubble.addEventListener('click', () => {
      const index = parseInt(bubble.getAttribute('data-index'));
      updateCarousel(index);
      resetAutoScroll();
    });
  });

  // Auto Scroll Logic (5 seconds)
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isPaused) {
        nextPerson();
      }
    }, 5000);
  }

  function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
  }

  // Pause on Hover
  wrapper.addEventListener('mouseenter', () => { isPaused = true; });
  wrapper.addEventListener('mouseleave', () => { isPaused = false; });

  // Initialize
  startAutoScroll();
});