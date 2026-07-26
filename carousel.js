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

    // Independent state for this carousel instance
    var state = {
      isPaused: false,
      isDragging: false,
      startX: 0,
      scrollLeft: 0
    };

    /**
     * Calculate the full width of one item including its horizontal margins.
     */
    function getItemWidth() {
      var item = track.firstElementChild;
      var style = window.getComputedStyle(item);
      var margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return item.offsetWidth + margin;
    }

    /**
     * Seamless infinite looping — moves DOM elements and adjusts scroll
     * position so the carousel appears to loop endlessly in both directions.
     */
    function handleInfinite() {
      var itemWidth = getItemWidth();

      // Moving right-to-left (auto-scroll or dragging left)
      if (carousel.scrollLeft >= itemWidth) {
        track.appendChild(track.firstElementChild);
        carousel.scrollLeft -= itemWidth;
        // Adjust drag anchor so the user doesn't feel a jump
        if (state.isDragging) state.startX -= itemWidth;
      }

      // Moving left-to-right (dragging right)
      if (carousel.scrollLeft <= 0) {
        track.prepend(track.lastElementChild);
        carousel.scrollLeft += itemWidth;
        // Adjust drag anchor for the opposite direction
        if (state.isDragging) state.startX += itemWidth;
      }
    }

    /**
     * Animation loop — auto-scrolls 1px per frame when not paused/dragging.
     */
    function animate() {
      if (!state.isPaused && !state.isDragging) {
        carousel.scrollLeft += 1;
        handleInfinite();
      }
      requestAnimationFrame(animate);
    }

    // --- Mouse drag controls ---

    carousel.addEventListener('mousedown', function (e) {
      state.isDragging = true;
      carousel.style.cursor = 'grabbing';
      state.startX = e.clientX;
      state.scrollLeft = carousel.scrollLeft;
    });

    window.addEventListener('mousemove', function (e) {
      if (!state.isDragging) return;

      var walk = e.clientX - state.startX; // 1:1 movement ratio
      carousel.scrollLeft = state.scrollLeft - walk;

      handleInfinite();
    });

    window.addEventListener('mouseup', function () {
      if (!state.isDragging) return;
      state.isDragging = false;
      carousel.style.cursor = 'grab';
    });

    // --- Pause on hover ---

    carousel.addEventListener('mouseenter', function () {
      state.isPaused = true;
    });

    carousel.addEventListener('mouseleave', function () {
      state.isPaused = false;
    });

    // --- Initialize ---

    // Start at 1px so the "prepend" logic doesn't trigger immediately on load
    carousel.scrollLeft = 1;
    requestAnimationFrame(animate);
  });

});
