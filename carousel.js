/**
 * Infinite Auto-Scroll Drag Carousel
 * 
 * Supports multiple carousels on a single page. Each .carousel-container
 * gets its own independent state (pause, drag, scroll position).
 *
 * Expected HTML structure:
 *   <div class="carousel-container">
 *     <div class="carousel-track">
 *       <div class="item"><img src="..." draggable="false"></div>
 *       ...
 *     </div>
 *   </div>
 */
document.addEventListener('DOMContentLoaded', function () {

  var carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track');
    if (!track || !track.firstElementChild) return;

    // Wait a frame for layout to settle before measuring
    requestAnimationFrame(function () {
      initCarousel(carousel, track);
    });
  });

  function initCarousel(carousel, track) {
    // Measure item width from the first rendered item
    var firstItem = track.firstElementChild;
    var style = window.getComputedStyle(firstItem);
    var itemWidth = firstItem.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);

    // If item has no width yet, bail (shouldn't happen after rAF)
    if (itemWidth <= 0) return;

    // Clone items until we have enough to fill 3x the container
    var originalItems = Array.from(track.children);
    var originalCount = originalItems.length;
    var containerWidth = carousel.offsetWidth;
    var neededItems = Math.ceil((containerWidth * 3) / itemWidth);

    while (track.children.length < neededItems) {
      for (var i = 0; i < originalCount; i++) {
        track.appendChild(originalItems[i].cloneNode(true));
      }
    }

    // State
    var state = {
      isPaused: false,
      isDragging: false,
      startX: 0,
      scrollLeft: 0
    };

    function handleInfinite() {
      // Moving right-to-left (auto-scroll direction)
      if (carousel.scrollLeft >= itemWidth) {
        track.appendChild(track.firstElementChild);
        carousel.scrollLeft -= itemWidth;
        if (state.isDragging) state.startX -= itemWidth;
      }

      // Moving left-to-right (drag right)
      if (carousel.scrollLeft <= 0) {
        track.prepend(track.lastElementChild);
        carousel.scrollLeft += itemWidth;
        if (state.isDragging) state.startX += itemWidth;
      }
    }

    function animate() {
      if (!state.isPaused && !state.isDragging) {
        carousel.scrollLeft += 1;
        handleInfinite();
      }
      requestAnimationFrame(animate);
    }

    // Mouse drag
    carousel.addEventListener('mousedown', function (e) {
      state.isDragging = true;
      carousel.style.cursor = 'grabbing';
      state.startX = e.clientX;
      state.scrollLeft = carousel.scrollLeft;
    });

    window.addEventListener('mousemove', function (e) {
      if (!state.isDragging) return;
      var walk = e.clientX - state.startX;
      carousel.scrollLeft = state.scrollLeft - walk;
      handleInfinite();
    });

    window.addEventListener('mouseup', function () {
      if (!state.isDragging) return;
      state.isDragging = false;
      carousel.style.cursor = 'grab';
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', function () {
      state.isPaused = true;
    });

    carousel.addEventListener('mouseleave', function () {
      state.isPaused = false;
    });

    // Start scrolled one item in so prepend logic doesn't fire immediately
    carousel.scrollLeft = itemWidth;
    requestAnimationFrame(animate);
  }
});
