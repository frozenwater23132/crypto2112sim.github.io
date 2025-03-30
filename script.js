const marketPrices = {
    BTC: 45000, // Real-time price for Bitcoin
    ETH: 3000,  // Real-time price for Ethereum
    LTC: 150,    // Real-time price for Litecoin
    XRP: 0.5     // Real-time price for Ripple
};

function fetchRealTimePrices() {
    // Simulate fetching real-time prices
    // In a real application, you would fetch this data from an API
    marketPrices.BTC = (Math.random() * 50000).toFixed(2);
    marketPrices.ETH = (Math.random() * 4000).toFixed(2);
    marketPrices.LTC = (Math.random() * 200).toFixed(2);
    marketPrices.XRP = (Math.random() * 1).toFixed(2);
}

// Function to update market prices on the page
function updateMarketPrices() {
    document.getElementById('btc-price').innerText = marketPrices.BTC;
    document.getElementById('eth-price').innerText = marketPrices.ETH;
    document.getElementById('ltc-price').innerText = marketPrices.LTC;
    document.getElementById('xrp-price').innerText = marketPrices.XRP;
}

// Function to show the selected tab
function showTab(tabId) {
    document.getElementById('markets').style.display = 'none';
    document.getElementById('positions').style.display = 'none';
    document.getElementById('account').style.display = 'none';
    
    document.getElementById(tabId).style.display = 'block';
}

// Call the function to update prices when the page loads
window.onload = function() {
    fetchRealTimePrices();
    updateMarketPrices();
    
    // Set up tab navigation
    document.getElementById('markets-tab').onclick = function() {
        showTab('markets');
    };
    
    document.getElementById('positions-tab').onclick = function() {
        showTab('positions');
    };
    
    document.getElementById('account-tab').onclick = function() {
        showTab('account');
    };

    // Show the auth popup on first visit
    document.getElementById('auth-popup').style.display = 'block';
    
    document.getElementById('guest-button').onclick = function() {
        document.getElementById('auth-popup').style.display = 'none';
        showTab('markets');
    };

    document.getElementById('signup-button').onclick = function() {
        alert('Sign Up functionality not implemented yet.');
    };
};
