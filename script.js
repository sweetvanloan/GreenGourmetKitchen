let currentItem = 0;

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Function to show a specific item
    function showItem(itemIndex) {
        items.forEach(item => item.style.display = 'none');
        items[itemIndex].style.display = 'block';
    }

    // Function to move the carousel
    window.moveCarousel = function(direction) {
        currentItem = (currentItem + direction + totalItems) % totalItems;
        showItem(currentItem);
    };

    // Auto-rotate carousel every 5 seconds
     setInterval(() => moveCarousel(1), 5000);

    // Initialize the carousel to show the first item
    showItem(currentItem);
});
