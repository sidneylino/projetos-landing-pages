document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const searchTerm = document.getElementById('searchInput').value;
        window.location.href = `#${encodeURIComponent(searchTerm)}`;
    });
});