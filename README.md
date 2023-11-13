# CS-361-microservice
#### Source info:
https://github.com/polygon-io/client-js/blob/master/examples/rest/stocks-snapshots_gainers_losers.js
https://polygon.io/docs/stocks/get_v2_snapshot_locale_us_markets_stocks__direction

## Prerequisites
Make sure Git, Node.js, Axios, and Express.js are installed.

## Cloning Repository
```
git clone <your-repo-url>
cd <repository-name>
```
## Start Microservice
Create a .env file and set POLYGON_API_KEY to your personal Polygon API key

Make sure you are in your repository location. Then open the terminal and run:
```
node microservice.js
```
# Microservice Communication Contract
## Request Data
### Example on how to request data for gainers for this microservice using Javascript and React
```
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/v2/snapshot/locale/us/markets/stocks/gainers');
        setStocks(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchStocks();
  }, []);

```

## Receive Data
### Example of how we can handle our data
```
const stocks = data.tickers
const stockSymbol = stocks[0].ticker;
const stockPrice = stocks[0].lastTrade.p;
```

### Example Response
```
const data = {
  "status": "OK",
  "tickers": [
    {
      "day": {
        "c": 14.2284,
        "h": 15.09,
        "l": 14.2,
        "o": 14.33,
        "v": 133963,
        "vw": 14.5311
      },
      "lastQuote": {
        "P": 14.44,
        "S": 11,
        "p": 14.2,
        "s": 25,
        "t": 1605195929997325600
      },
      "lastTrade": {
        "c": [
          63
        ],
        "i": "79372124707124",
        "p": 14.2284,
        "s": 536,
        "t": 1605195848258266000,
        "x": 4
      },
      "min": {
        "av": 133963,
        "c": 14.2284,
        "h": 14.325,
        "l": 14.2,
        "n": 5,
        "o": 14.28,
        "t": 1684428600000,
        "v": 6108,
        "vw": 14.2426
      },
      "prevDay": {
        "c": 0.73,
        "h": 0.799,
        "l": 0.73,
        "o": 0.75,
        "v": 1568097,
        "vw": 0.7721
      },
      "ticker": "PDS",
      "todaysChange": 13.498,
      "todaysChangePerc": 1849.096,
      "updated": 1605195848258266000
    }
  ]
}
```


