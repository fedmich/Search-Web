document.addEventListener("DOMContentLoaded", function () {
    const URL_API = 'https://fedmich.github.io/Search-Web/results/web/';

    const loadingScreen = document.getElementById('loading-screen');
    const searchResults = document.getElementById('search-results');
    const queryTitle = document.getElementById('query-title');
    const resultsContainer = document.getElementById('results');
    const searchInput = document.getElementById('u');

    // Function to get query from URL (default to 'nextjs')
    const getQuery = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return (urlParams.get('q') || 'nextjs').trim().toLowerCase();
    };

    // Function to construct URL for API
    const getApiUrl = (query) => {
        const firstLetter = query.charAt(0);
        const fname = query.toLowerCase();
        return `${URL_API}${firstLetter}/${fname}.json`;
    };

    // Function to fetch and display results
    const fetchResults = async (query) => {
        const url = getApiUrl(query);
        try {
            const response = await fetch(url);
            const data = await response.json();

            // Update title with query
            queryTitle.textContent = `Web results - ${query}`;

            // Clear existing results
            resultsContainer.innerHTML = '';

            // Loop through results and create result items
            data.results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';

                resultItem.innerHTML = `
                    <a href="${result.u}" target="_blank">${result.t}</a>
                    <p>${result.d}</p>
                    <p><small>${result.p}</small></p>
                `;

                resultsContainer.appendChild(resultItem);
            });

        } catch (error) {
            console.error('Error fetching results:', error);
            resultsContainer.innerHTML = '<p>Failed to load results. Please try again later.</p>';
        }
    };

    // Simulate loading delay and then fetch results
    setTimeout(() => {
        const query = getQuery();
        loadingScreen.classList.add('hidden');
        searchResults.classList.remove('hidden');
        fetchResults(query);
    }, 900); // 0.9 seconds delay

    // On lost focus, trim the input value
    searchInput.addEventListener('blur', function () {
        this.value = this.value.trim();
    });
});
