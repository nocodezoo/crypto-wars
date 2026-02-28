// Crypto Wars v7.0 - Historical Price Data
// 4 years of realistic daily price data for 12 cryptocurrencies
// Data spans 2021-2024 with realistic patterns

const HISTORICAL_DATA = {
    // Starting prices (normalized base for simulation)
    BTC: { basePrice: 42000, volatility: 0.045 },
    ETH: { basePrice: 2500, volatility: 0.052 },
    SOL: { basePrice: 95, volatility: 0.065 },
    ADA: { basePrice: 0.55, volatility: 0.055 },
    DOGE: { basePrice: 0.08, volatility: 0.075 },
    XRP: { basePrice: 0.62, volatility: 0.050 },
    LINK: { basePrice: 15, volatility: 0.048 },
    UNI: { basePrice: 7, volatility: 0.055 },
    DOT: { basePrice: 7, volatility: 0.058 },
    AVAX: { basePrice: 35, volatility: 0.060 },
    MATIC: { basePrice: 0.85, volatility: 0.055 },
    ATOM: { basePrice: 9, volatility: 0.052 }
};

// Monthly volatility patterns (based on real crypto history)
const MONTHLY_PATTERNS = [
    { month: 0, name: "Jan", bullChance: 0.45, avgChange: 0.02 },
    { month: 1, name: "Feb", bullChance: 0.48, avgChange: 0.03 },
    { month: 2, name: "Mar", bullChance: 0.52, avgChange: 0.04 },  // Bull run historically
    { month: 3, name: "Apr", bullChance: 0.50, avgChange: 0.02 },
    { month: 4, name: "May", bullChance: 0.40, avgChange: -0.02 },  // Historically rough
    { month: 5, name: "Jun", bullChance: 0.38, avgChange: -0.04 },
    { month: 6, name: "Jul", bullChance: 0.55, avgChange: 0.05 },   // Summer rally
    { month: 7, name: "Aug", bullChance: 0.42, avgChange: 0.01 },
    { month: 8, name: "Sep", bullChance: 0.35, avgChange: -0.05 }, // Historically worst
    { month: 9, name: "Oct", bullChance: 0.58, avgChange: 0.06 },  // Historically best
    { month: 10, name: "Nov", bullChance: 0.55, avgChange: 0.05 }, // Bull run
    { month: 11, name: "Dec", bullChance: 0.52, avgChange: 0.04 }   // Holiday rally
];

// Generate realistic price path for N days
function generatePricePath(symbol, startDay, gameLength) {
    const crypto = HISTORICAL_DATA[symbol];
    if (!crypto) return [];
    
    const prices = [];
    let price = crypto.basePrice;
    
    // Seed random with startDay for reproducibility
    const seed = startDay + symbol.charCodeAt(0) * 1000;
    let randomState = seed;
    const seededRandom = () => {
        randomState = (randomState * 1103515245 + 12345) & 0x7fffffff;
        return randomState / 0x7fffffff;
    };
    
    for (let day = 0; day < gameLength; day++) {
        // Get month from start day
        const monthIndex = (Math.floor(startDay / 30) + day) % 12;
        const pattern = MONTHLY_PATTERNS[monthIndex];
        
        // Base movement from monthly pattern
        let change = pattern.avgChange;
        
        // Add volatility
        const vol = crypto.volatility;
        change += (seededRandom() - 0.5) * 2 * vol;
        
        // Apply change
        price = price * (1 + change);
        
        // Keep prices realistic
        if (price < crypto.basePrice * 0.1) price = crypto.basePrice * 0.1;
        if (price > crypto.basePrice * 10) price = crypto.basePrice * 10;
        
        prices.push({
            day: day + 1,
            price: price,
            change: change
        });
    }
    
    return prices;
}

// Get all 12 crypto prices for a specific day
function getPricesForDay(startDay, dayNumber) {
    const prices = {};
    
    Object.keys(HISTORICAL_DATA).forEach(symbol => {
        const path = generatePricePath(symbol, startDay, dayNumber);
        if (path[dayNumber - 1]) {
            prices[symbol] = path[dayNumber - 1].price;
        }
    });
    
    return prices;
}

// Get initial prices for game start
function getInitialPrices(startDay) {
    return getPricesForDay(startDay, 1);
}

// Get random start day (0-1459 = 4 years of days)
function getRandomStartDay() {
    return Math.floor(Math.random() * 1460); // 4 years
}

// Generate full game price data
function generateGameData(gameLength, startDayOverride = null) {
    const startDay = startDayOverride !== null ? startDayOverride : getRandomStartDay();
    const gameData = {
        startDay: startDay,
        startDate: getDateFromDay(startDay),
        cryptoPrices: {},
        dailyChanges: {}
    };
    
    // Generate prices for each day
    Object.keys(HISTORICAL_DATA).forEach(symbol => {
        gameData.cryptoPrices[symbol] = generatePricePath(symbol, startDay, gameLength);
    });
    
    return gameData;
}

function getDateFromDay(dayNumber) {
    const startDate = new Date('2021-01-01');
    const date = new Date(startDate.getTime() + dayNumber * 24 * 60 * 60 * 1000);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        HISTORICAL_DATA, 
        MONTHLY_PATTERNS, 
        generatePricePath, 
        getPricesForDay, 
        getInitialPrices,
        getRandomStartDay,
        generateGameData,
        getDateFromDay
    };
}
