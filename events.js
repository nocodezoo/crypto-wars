// Crypto Wars - Extended Events System
// 50 unique events with dynamic gameplay effects

const GAME_EVENTS = [
    // === EXTREME POSITIVE EVENTS (Big Gains) ===
    { id: 1, text: "🚀 BULL RUN - All cryptos surging to the moon!", effect: "all", value: 0.40, type: "bull", emoji: "🚀" },
    { id: 2, text: "🐋 WHALE ACCUMULATING - Big money is buying heavily!", effect: "all", value: 0.35, type: "bull", emoji: "🐋" },
    { id: 3, text: "💎 DIAMOND HANDS - Strong holders refusing to sell!", effect: "all", value: 0.25, type: "bull", emoji: "💎" },
    { id: 4, text: "🎉 ETF APPROVAL - Major funds entering crypto!", effect: "all", value: 0.45, type: "bull", emoji: "🎉" },
    { id: 5, text: "🌟 CELEBRITY ENDORSEMENT - Famous star promotes crypto!", effect: "single", target: "RANDOM", value: 0.55, type: "bull", emoji: "🌟" },
    { id: 6, text: "🤝 PARTNERSHIP ANNOUNCEMENT - Big tech partners with crypto!", effect: "all", value: 0.30, type: "bull", emoji: "🤝" },
    { id: 7, text: "💰 GOVERNMENT ADOPTION - Country makes crypto legal tender!", effect: "all", value: 0.50, type: "bull", emoji: "💰" },
    { id: 8, text: "🏆 TOURNAMENT WINNER - Big prizes awarded in crypto!", effect: "cash", value: 800, type: "cash", emoji: "🏆" },
    
    // === POSITIVE EVENTS (Moderate Gains) ===
    { id: 9, text: "📢 ELON TWEETS - Elon shares his crypto thoughts again!", effect: "random", value: 0.25, type: "bull", emoji: "📢" },
    { id: 10, text: "🏄 DEFI SUMMER - Decentralized finance is booming!", effect: "all", value: 0.25, type: "bull", emoji: "🏄" },
    { id: 11, text: "💵 AIRDROP - Free tokens dropped into your wallet!", effect: "cash", value: 500, type: "cash", emoji: "💵" },
    { id: 12, text: "🔥 BURN NOTICE - Tokens burned reducing supply!", effect: "all", value: 0.18, type: "bull", emoji: "🔥" },
    { id: 13, text: "📊 WHITEPAPER UPDATE - Revolutionary changes announced!", effect: "all", value: 0.22, type: "bull", emoji: "📊" },
    { id: 14, text: "🤖 BOT WARS - Trading bots creating massive volume!", effect: "all", value: 0.18, type: "bull", emoji: "🤖" },
    { id: 15, text: "🌈 RAINBOW MOMENT - All your portfolio is turning green!", effect: "all", value: 0.15, type: "bull", emoji: "🌈" },
    { id: 16, text: "🥇 GOLD STANDARD - Crypto backed by gold reserves!", effect: "all", value: 0.28, type: "bull", emoji: "🥇" },
    { id: 17, text: "🎁 REWARD DROP - Loyalty program rewards distributed!", effect: "cash", value: 300, type: "cash", emoji: "🎁" },
    { id: 18, text: "🔄 HARD FORK - New version creates investor excitement!", effect: "all", value: 0.15, type: "bull", emoji: "🔄" },
    { id: 19, text: "🤝 MERGER NEWS - Two major cryptos announce merge!", effect: "all", value: 0.22, type: "bull", emoji: "🤝" },
    { id: 20, text: "🎪 CIRCUS DAY - Market volatility brings opportunity!", effect: "all", value: 0.20, type: "bull", emoji: "🎪" },
    
    // === MIXED/NEUTRAL EVENTS ===
    { id: 21, text: "📱 APP CRASH - Popular exchange experiences outage!", effect: "random", value: -0.10, type: "bear", emoji: "📱" },
    { id: 22, text: "🌍 GLOBAL NEWS - Economic shifts affect market!", effect: "all", value: 0.12, type: "mixed", emoji: "🌍" },
    { id: 23, text: "🎲 GAMBLE SATURDAY - High risk high reward day!", effect: "all", value: 0.35, type: "mixed", emoji: "🎲" },
    { id: 24, text: "😴 SLEEPY MARKET - Nothing happens today, boring...", effect: "none", value: 0, type: "neutral", emoji: "😴" },
    { id: 25, text: "👻 GHOST TOWN - Trading volume drops to zero!", effect: "all", value: -0.08, type: "bear", emoji: "👻" },
    { id: 26, text: "🔒 WALLET UPGRADE - Security improvements boost confidence!", effect: "all", value: 0.08, type: "bull", emoji: "🔒" },
    { id: 27, text: "🎭 DRAMA QUEEN - Celebrity feud creates crypto buzz!", effect: "random", value: 0.15, type: "mixed", emoji: "🎭" },
    
    // === NEGATIVE EVENTS (Moderate Losses) ===
    { id: 28, text: "🐋 WHALE DUMP - A whale sells everything at once!", effect: "all", value: -0.30, type: "bear", emoji: "🐋" },
    { id: 29, text: "📉 BLOODBATH - Massive panic selling across market!", effect: "all", value: -0.35, type: "bear", emoji: "📉" },
    { id: 30, text: "😱 PANIC SELL - Everyone is running for the exits!", effect: "all", value: -0.25, type: "bear", emoji: "😱" },
    { id: 31, text: "📰 FUD NEWS - Fear uncertainty and doubt spreading!", effect: "random", value: -0.15, type: "bear", emoji: "📰" },
    { id: 32, text: "👮‍♂️ SEC NEWS - Regulatory concerns weighs on market!", effect: "all", value: -0.12, type: "bear", emoji: "👮‍♂️" },
    { id: 33, text: "❄️ WINTER IS COMING - Crypto winter approaches!", effect: "all", value: -0.25, type: "bear", emoji: "❄️" },
    { id: 34, text: "💸 STABLECOIN DEPEG - Stablecoin loses its peg!", effect: "all", value: -0.20, type: "bear", emoji: "💸" },
    { id: 35, text: "📉 CORRECTION - Healthy market correction happening!", effect: "all", value: -0.15, type: "bear", emoji: "📉" },
    { id: 36, text: "🔌 EXCHANGE DOWN - Major exchange under maintenance!", effect: "random", value: 0.15, type: "mixed", emoji: "🔌" },
    
    // === EXTREME NEGATIVE EVENTS (Big Losses) ===
    { id: 37, text: "💣 BOMB THREAT - False alarm causes massive selloff!", effect: "all", value: -0.35, type: "bear", emoji: "💣" },
    { id: 38, text: "🚫 BAN THREAT - Country threatens to ban crypto!", effect: "random", value: -0.30, type: "bear", emoji: "🚫" },
    { id: 39, text: "💻 HACK ALERT - Major exchange gets compromised!", effect: "random", value: -0.35, type: "bear", emoji: "💻" },
    { id: 40, text: "🏦 BANK CRASH - Traditional bank fails affecting crypto!", effect: "all", value: -0.28, type: "bear", emoji: "🏦" },
    
    // === SPECIAL EVENTS ===
    { id: 41, text: "🐕 DOGE PUMP - Dogecoin sees massive community rally!", effect: "single", target: "DOGE", value: 0.50, type: "bull", emoji: "🐕" },
    { id: 42, text: "🎰 CASINO NIGHT - High volatility everywhere!", effect: "all", value: 0.30, type: "mixed", emoji: "🎰" },
    { id: 43, text: "🤫 INSIDER TIP - Rumors of upcoming major announcement!", effect: "all", value: 0.20, type: "bull", emoji: "🤫" },
    { id: 44, text: "📢 CLASS ACTION - Lawsuit announced against crypto firm!", effect: "random", value: -0.18, type: "bear", emoji: "📢" },
    { id: 45, text: "🎯 PUMP AND DUMP - Coordinated manipulation detected!", effect: "random", value: -0.22, type: "bear", emoji: "🎯" },
    { id: 46, text: "💎 WHALE ALERT - Large wallet moving millions!", effect: "all", value: 0.15, type: "bull", emoji: "💎" },
    { id: 47, text: "🚀 IPO NEWS - Crypto company going public!", effect: "all", value: 0.25, type: "bull", emoji: "🚀" },
    { id: 48, text: "🖥️ NFT MANIA - Digital collectibles driving volume!", effect: "all", value: 0.18, type: "bull", emoji: "🖥️" },
    { id: 49, text: "🌐 WEB3 ADOPTION - Major company adopts Web3 technology!", effect: "all", value: 0.22, type: "bull", emoji: "🌐" },
    { id: 50, text: "🎆 NEW YEAR RALLY - Holiday spirit lifts all boats!", effect: "all", value: 0.28, type: "bull", emoji: "🎆" }
];

// Event type helpers
const BULL_EVENTS = GAME_EVENTS.filter(e => e.type === "bull");
const BEAR_EVENTS = GAME_EVENTS.filter(e => e.type === "bear");
const MIXED_EVENTS = GAME_EVENTS.filter(e => e.type === "mixed");
const CASH_EVENTS = GAME_EVENTS.filter(e => e.type === "cash");

// Get random event with weighted probabilities
function getRandomEvent() {
    const rand = Math.random();
    
    // 40% chance of event (original behavior)
    if (rand > 0.4) return null;
    
    // Weight towards mixed/bull/bear based on randomness
    const eventRand = Math.random();
    
    if (eventRand < 0.35) {
        // 35% Bull events
        return BULL_EVENTS[Math.floor(Math.random() * BULL_EVENTS.length)];
    } else if (eventRand < 0.55) {
        // 20% Bear events  
        return BEAR_EVENTS[Math.floor(Math.random() * BEAR_EVENTS.length)];
    } else if (eventRand < 0.70) {
        // 15% Mixed events
        return MIXED_EVENTS[Math.floor(Math.random() * MIXED_EVENTS.length)];
    } else if (eventRand < 0.80) {
        // 10% Cash events (free money!)
        return CASH_EVENTS[Math.floor(Math.random() * CASH_EVENTS.length)];
    } else {
        // 20% Any event
        return GAME_EVENTS[Math.floor(Math.random() * GAME_EVENTS.length)];
    }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAME_EVENTS, getRandomEvent, BULL_EVENTS, BEAR_EVENTS, MIXED_EVENTS, CASH_EVENTS };
}
