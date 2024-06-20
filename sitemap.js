<script src="Javascript.js"></script>

function toggleList(sublistId) {
    var sublist = document.getElementById(sublistId);
    sublist.style.display = (sublist.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
    document.querySelector('.sitemap').classList.add('loaded');

    document.querySelectorAll('.sitemap > li > a').forEach(function(element) {
        element.addEventListener('click', function(event) {
            var sublist = this.nextElementSibling;
            if (sublist && sublist.tagName === 'UL') {
                event.preventDefault();
                sublist.style.display = (sublist.style.display === 'block') ? 'none' : 'block';
            }
        });
    });
});