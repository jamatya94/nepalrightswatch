# Real-Time Social Media & International News Setup Guide

This guide explains how to set up real-time social media feeds and international news coverage using free APIs and RSS services.

## Free APIs and RSS Sources Used

### 1. Reddit API (Free, No Key Required)
- **URL**: `https://www.reddit.com/r/subreddit/search.json`
- **Usage**: No authentication required for read-only access
- **Rate Limit**: ~60 requests per minute
- **Implementation**: Already working in the code

### 2. International News RSS Feeds (Free)
**Major International Sources:**
- **BBC World News**: `http://feeds.bbci.co.uk/news/world/asia/rss.xml`
- **CNN International**: `http://rss.cnn.com/rss/edition.rss`  
- **Reuters World News**: `https://feeds.reuters.com/reuters/worldNews`
- **Associated Press**: `https://feeds.apnews.com/rss/apf-topnews`
- **Al Jazeera**: `https://www.aljazeera.com/xml/rss/all.xml`
- **The Guardian**: Available via RSS2JSON
- **Wall Street Journal**: Public RSS feeds
- **New York Times**: International section RSS

**Nepal-Specific Sources:**
- **Kathmandu Post**: `https://kathmandupost.com/rss`
- **Online Khabar**: `https://www.onlinekhabar.com/feed`
- **My Republica**: `https://myrepublica.nagariknetwork.com/feed`

### 3. RSS2JSON (Free Tier)
- **Website**: https://rss2json.com/
- **Free Tier**: 10,000 requests per day
- **Setup**: 
  1. Visit https://rss2json.com/
  2. Get your API key (optional for basic usage)
  3. Use: `https://rss2json.com/api.json?rss_url=YOUR_RSS_FEED`
- **Implementation**: Integrated for international news aggregation

### 4. NewsAPI (Free Tier)
- **Website**: https://newsapi.org/
- **Free Tier**: 1,000 requests per day
- **Setup**:
  1. Go to https://newsapi.org/register
  2. Create free account
  3. Get your API key
  4. Replace 'demo' in script.js with your actual API key
- **Code Location**: Line in `fetchNewsAPI()` function

### 5. Mastodon API (Free, No Key Required)
- **Instance**: Using public instances like mastodon.social
- **Usage**: No authentication required for public timeline access
- **Implementation**: Already working in the code

## Setup Instructions

### Step 1: Get NewsAPI Key (Recommended)
```bash
1. Visit https://newsapi.org/register
2. Sign up with email
3. Verify email
4. Copy your API key
5. Replace 'demo' in script.js with your key
```

### Step 2: Update API Key in Code
Open `script.js` and find this line:
```javascript
const apiKey = 'demo'; // Replace with actual free API key from newsapi.org
```

Replace 'demo' with your actual API key:
```javascript
const apiKey = 'YOUR_ACTUAL_API_KEY_HERE';
```

### Step 3: Test the Implementation
1. Open your website in a browser
2. Navigate to the "Social Updates" section
3. You should see real-time posts loading
4. The loading indicator will show while fetching data

## Free Alternatives for Additional Sources

### 1. Public RSS Feeds
- **Nepal News Sources**: 
  - Kathmandu Post: `https://kathmandupost.com/rss`
  - Online Khabar: `https://www.onlinekhabar.com/feed`
  - My Republica: `https://myrepublica.nagariknetwork.com/feed`

### 2. Nitter (Twitter Alternative)
- **URL**: `https://nitter.net/search?q=nepal`
- **Usage**: Web scraping Twitter without API key
- **Note**: May require CORS proxy

### 3. YouTube Data API (Free Tier)
- **Free Tier**: 10,000 quota units per day
- **Setup**: Google Cloud Console
- **Usage**: Search for Nepal-related videos

### 4. Telegram Channel RSS
- **Format**: `https://rsshub.app/telegram/channel/CHANNEL_NAME`
- **Usage**: Get RSS feeds from public Telegram channels

## Implementation Features

### Current Working Features:
- ✅ Reddit post fetching (no key required)
- ✅ International RSS feed aggregation from major news outlets
  - BBC, CNN, Reuters, Associated Press, Al Jazeera
  - New York Times, The Guardian, Wall Street Journal
- ✅ Nepal-specific news sources (Kathmandu Post, Online Khabar, My Republica)
- ✅ Mastodon post fetching (no key required)
- ✅ Real-time loading indicators
- ✅ Hashtag filtering with Nepal protest-specific tags
- ✅ Auto-refresh every 5 minutes
- ✅ Intelligent content filtering for Nepal protest relevance
- ✅ Fallback to enhanced international news samples
- ✅ Platform-specific formatting (BBC, CNN, Reuters, etc.)

### Enhanced International Coverage:
- ✅ **BBC World News**: Asia section coverage of Nepal
- ✅ **CNN International**: Breaking news and analysis  
- ✅ **Reuters**: World news with Nepal focus
- ✅ **Associated Press**: Comprehensive news coverage
- ✅ **Al Jazeera**: International perspective on Nepal events
- ✅ **Major Newspapers**: NY Times, Guardian, WSJ international sections
- ✅ **Smart Content Detection**: Filters for Nepal + protest keywords
- ✅ **Enhanced Hashtag Assignment**: Context-aware tagging

### With NewsAPI Key:
- ✅ Latest news articles about Nepal
- ✅ Better content quality and relevance
- ✅ More diverse sources

## Testing the Setup

1. **Check Console**: Open browser developer tools to see API responses
2. **Network Tab**: Monitor API calls and responses
3. **Error Handling**: The system falls back to sample data if real APIs fail
4. **Loading States**: Loading indicators show when fetching real-time data

## Troubleshooting

### Common Issues:
1. **CORS Errors**: Some APIs may require server-side proxy
2. **Rate Limiting**: Free tiers have request limits
3. **API Key Issues**: Ensure NewsAPI key is valid and active

### Solutions:
1. **CORS Proxy**: Use services like `https://cors-anywhere.herokuapp.com/`
2. **Caching**: Implement local storage to reduce API calls
3. **Error Handling**: System automatically falls back to sample data

## Cost-Free Operation
- Reddit API: Always free for read-only
- RSS feeds: Always free
- Mastodon API: Always free for public content
- NewsAPI: Free tier (1,000 requests/day) sufficient for this use case

The system is designed to work even without any API keys by using Reddit and RSS feeds, with enhanced functionality when NewsAPI key is added.