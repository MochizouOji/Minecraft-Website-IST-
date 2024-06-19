<script src="Javascript.js"></script>

function toggleList(sublistId) {
    var sublist = document.getElementById(sublistId);
    sublist.style.display = (sublist.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
});