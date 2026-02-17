const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now. - Shivam",
    "Your limitation—it's only your imagination. - Shivam",
    "Push yourself, because no one else is going to do it for you. - Shivam",
    "Great things never come from comfort zones. - Shivam",
    "Dream it. Wish it. Do it. - Shivam",
    "Success doesn't just find you. You have to go out and get it. - Shivam" 
        ];

function newQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const [quote, author] = randomQuote.split(' - ');
    
    document.getElementById('quoteDisplay').textContent = quote;
    document.getElementById('author').textContent = `- ${author}`;
}

function shareQuote() {
    const quote = document.getElementById('quoteDisplay').textContent;
    const author = document.getElementById('author').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: 'Shivam Quotes',
            text: `${quote} ${author}`,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(`${quote} ${author}`);
        alert('Quote copied to clipboard! Paste & share 🚀');
    }
}

function saveFavorite() {
    const quote = document.getElementById('quoteDisplay').textContent;
    const author = document.getElementById('author').textContent;
    const favList = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    favList.push({ quote, author });
    localStorage.setItem('favorites', JSON.stringify(favList));
    showFavorites();
    alert('❤️ Saved to favorites!');
}

function showFavorites() {
    const favList = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favDiv = document.getElementById('favList');
    
    favDiv.innerHTML = favList.map(fav => 
        `<div style="padding:10px;background:rgba(255,255,255,0.2);margin:5px;border-radius:10px;">
            "${fav.quote}" ${fav.author}
        </div>`
    ).join('');
}

showFavorites(); // Load favorites on start
