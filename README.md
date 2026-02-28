# Crypto Wars 🦞🔥

A mobile-first cryptocurrency trading game where you buy, sell, and survive 30, 45, or 60 days in the volatile crypto market.

---

## 🎮 How to Play

### Goal
Survive as many days as possible while growing your net worth. You start with **$5,000 cash** (borrowed from a loan shark!) and must pay back your debt while building wealth.

### Starting Conditions
- **Cash:** $5,000 (from loan shark)
- **Debt:** $5,000 (0.5% daily interest!)
- **Wallet Capacity:** 500 coins
- **Crypto Holdings:** None

---

## 📱 Screen Layout

```
┌─────────────────────────────────────────────┐
│ ████████████ ORANGE BAR ████████████ (10px) │
├─────────────────────────────────────────────┤
│  CRYPTO WARS    [Day/30]     $5,000 cash  │
│  Exchange • Location                       │
├─────────────────────────────────────────────┤
│                                             │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐            │
│   │ BTC│ │ ETH│ │SOL │ │DOGE│   CRYPTO   │
│   │    │ │    │ │    │ │    │   GRID    │
│   └────┘ └────┘ └────┘ └────┘   (12)    │
│   ┌────┐ ┌────┐ ┌────┐ ┌────┐            │
│   │LINK│ │UNI │ │DOT │ │AVAX│            │
│   └────┘ └────┘ └────┘ └────┘            │
│                                             │
├─────────────────────────────────────────────┤
│ ░▒▓ THE STORY ▓▒░                        │
│  Event messages appear here...              │
│  (up to 4-6 lines)                       │
├─────────────────────────────────────────────┤
│  ┌─ LOG ──────────────────────────────┐    │
│  │ Day 1 started                      │    │
│  │ Whale bought BTC!                 │    │
│  │ WALLET: 3/500                    │    │
│  │ [████████░░] 60%                 │    │
│  │ 10BTC 5ETH 100SOL               │    │
│  │ CASH: $5,000  DEBT: $5,000     │    │
│  └───────────────────────────────────┘    │
├─────────────────────────────────────────────┤
│ [SAVE] [TRAVEL] [UPGRADES] [DAY] [DEFI]  │
└─────────────────────────────────────────────┘
```

---

## 🔴 Top Bar (Orange)
- 10px gradient bar across the top
- Visual accent marking the app header

---

## 🏠 Header Section

### Day Counter (Left of Cash)
- Shows progress: **5/30** (or 45/60)
- Circular progress ring
- Visual indicator of game progress

### Cash Display (Right)
- Shows current **cash on hand** in green
- Updates in real-time as you trade

### Location Info (Below Title)
- Current **Exchange** (e.g., Coinbase, Binance)
- Current **Location** multiplier (e.g., Tokyo 1.1x)

---

## 💰 Crypto Grid

### 12 Cryptocurrencies
| Coin | Symbol | Base Price |
|------|---------|-------------|
| Bitcoin | BTC | $42,000 |
| Ethereum | ETH | $2,500 |
| Solana | SOL | $95 |
| Cardano | ADA | $0.55 |
| Dogecoin | DOGE | $0.08 |
| Ripple | XRP | $0.62 |
| Chainlink | LINK | $15 |
| Uniswap | UNI | $7 |
| Polkadot | DOT | $7 |
| Avalanche | AVAX | $35 |
| Polygon | MATIC | $0.85 |
| Cosmos | ATOM | $9 |

### Price Changes
- Prices **fluctuate daily** based on:
  - Location multiplier
  - Exchange fees
  - Random events
- **Green = up**, **Red = down**

### Tapping a Crypto
1. Opens **TRADE MODAL**
2. Shows current price with fees
3. Toggle **BUY** or **SELL**
4. Enter amount or use quick buttons (MAX, 50%, 25%)
5. See total cost/revenue before confirming

---

## 📖 THE STORY Section

Located below the crypto grid, this shows:
- **Random events** that affect the market
- **Whale activities** (big trades)
- **News** (Elon tweets, regulations, etc.)
- **Game messages** (warnings, achievements)

### Example Events
- 🐋 **WHALE DUMP** - A whale sells everything!
- 🚀 **BULL RUN** - To the moon!
- 📢 **ELON TWEETS** - Elon tweets about crypto!
- 📉 **BLOODBATH** - Massive selloff!
- 💰 **AIRDROP** - Free tokens!

---

## 📝 LOG / WALLET Section

Located on the right side of the screen:

### Log Messages
- Shows last ~8-10 game actions
- Transaction confirmations
- Price updates
- Event notifications

### Wallet Display
- **WALLET** title
- Capacity bar (e.g., 3/500)
- Your **crypto holdings** (click to sell!)

### Stats
- **CASH** - Your available money (green)
- **DEBT** - Money owed to loan shark (red)

---

## 🎛️ Bottom Toolbar

### SAVE
- Saves game to browser localStorage
- Can continue later

### TRAVEL
- 8 global locations with multipliers:
  - New York (1.0x)
  - Tokyo (1.1x)
  - London (1.05x)
  - Dubai (1.15x)
  - Singapore (1.08x)
  - Hong Kong (1.12x)
  - Berlin (0.95x)
  - Sao Paulo (0.9x)

### UPGRADES
Purchase upgrades to gain advantages:

| Upgrade | Effect | Cost |
|---------|---------|------|
| Wallet+ | +500 capacity | $1,000 |
| Whale Alert | See whale trades | $500 |
| Diamond Hands | Reduce sell tax | $800 |
| FOMO Shield | Less event impact | $600 |
| Lucky Coin | Better events | $1,200 |
| HODL Master | Daily bonus | $1,500 |
| Paper Hands | Faster selling | $400 |
| Insider | Price boost | $2,000 |

### DAY
- **Advance to next day**
- Triggers:
  - Price fluctuations
  - Random events (40% chance)
  - Loan interest (0.5% daily)

### DEFI
- Borrow from loan shark or pay off debt
- **Interest:** 0.5% daily
- **Collateral:** 150% required

### EXCHANGE
- Switch between 6 exchanges:

| Exchange | Fee | Risk |
|----------|-----|------|
| Coinbase | 0.6% | Low |
| Binance | 0.4% | Medium |
| Kraken | 0.5% | Low |
| KuCoin | 0.4% | Medium |
| Gemini | 0.7% | Low |
| DEX | 0.8% | High |

---

## 💳 Wallet Rules

### Coin Limit
- Maximum **10 different cryptocurrencies** at once
- Must sell before buying new ones if at limit

### Capacity Limit
- Maximum **500 coins** (base) + upgrades
- Shown as progress bar in log

### Dark Logo Colors
- ADA, XRP, ATOM have dark logos
- Display with white text + colored background

---

## 💸 DEFI / Loan Shark

### Starting Debt
- **$5,000** at game start
- **0.5% daily interest** (compounds!)

### Borrowing
- Click DEFI button
- Choose 25%, 50%, or 75% of max
- Need 150% collateral in cash

### Paying Back
- Reduces debt
- Free up collateral

### Warning
- If collateral drops too low, risk liquidation!

---

## 🎲 Random Events

40 different events can trigger each day:

### Good Events (Price ↑)
- Bull Run, Airdrop, Whale Buy, Celebrity Endorsement, Partnership, Gold Standard

### Bad Events (Price ↓)
- Whale Dump, Bloodbath, SEC News, Hack Alert, Winter is Coming

### Mixed Events
- Elon Tweets, Exchange Down, Gamble Saturday

---

## 🏆 Game Over

Triggered after day 30, 45, or 60 (based on game length):

### Stats Shown
- Days Survived
- Final Net Worth
- Cash
- Debt
- Coins Held

### Options
- **MENU** - Return to start screen
- **RETRY** - Play again with same length
- **30/45/60 DAYS** - Quick restart

---

## 💾 Save System

- **Auto-save** not included
- Click **SAVE** to store progress
- Uses browser **localStorage**
- Can have 1 saved game at a time

---

## 🎯 Tips for Success

1. **Watch the fees** - They add up!
2. **Travel smart** - Higher multipliers = more volatile
3. **Pay debt early** - 0.5%/day compounds fast!
4. **Buy upgrades** - Wallet+ is essential
5. **Diversify** - But max 10 coins
6. **Watch events** - They move prices big
7. **Don't panic sell** - Prices recover!

---

## 🔧 Technical Info

- **Built with:** React 18, Tailwind CSS
- **Single HTML file** - No build required
- **Mobile-first** design
- **Local storage** for saves

---

## 📱 Mobile Support

- Responsive viewport
- Touch-optimized
- No pinch-zoom
- Fits iPhone screens

---

Enjoy the game! 🦞🔥
