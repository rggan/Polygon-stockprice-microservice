# CS-361-microservice
## Description
A simple microservice that runs a server that makes a Get request to the Polygon API 
and returns the price of a specific stock symbol at a specific date to a simple example React app.

symbol = "AAPL" date = "2023-01-09"
-These are the example parameters that are hard written into the React app, listened to by the microservice, and sent to the API.

#### Source info:
https://polygon.io/docs/stocks/get_v1_open-close__stocksticker___date

## Prerequisites
Install Git, React, Node.js, Axios, Express.js, and Cors.

## Cloning Repository
```
git clone <your-repo-url>
cd <repository-name>
```
## Start Microservice
Create a .env file and ensure its in the same directory as microservice.js,
Set POLYGON_API_KEY to your personal Polygon API key in the .env file.

Make sure you are in your repository location. Then open the terminal and run:
```
node microservice.js
```
# Microservice Communication Contract
## Request Data
### Example on how to request data for gainers for this microservice using Javascript and React
```
import React, { useState, useEffect } from 'react';

const StockPrice = ({ symbol, date }) => {
  const [openPrice, setOpenPrice] = useState(null);
  const [closePrice, setClosePrice] = useState(null);
  const [lowPrice, setLowPrice] = useState(null);
  const [highPrice, setHighPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/stock/${symbol}/${date}`);
        const data = await response.json();

        setOpenPrice(data.open);
        setClosePrice(data.close);
        setLowPrice(data.low);
        setHighPrice(data.high);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [symbol, date]);

  return (
    <div>
      <h2>{symbol} {date}</h2>
      <p>{openPrice !== null ? `Open: $${openPrice}` : 'Loading...'}</p>
      <p>{closePrice !== null ? `Close: $${closePrice}` : 'Loading...'}</p>
      <p>{lowPrice !== null ? `Low: $${lowPrice}` : 'Loading...'}</p>
      <p>{highPrice !== null ? `High: $${highPrice}` : 'Loading...'}</p>
    </div>
  );
};

export default StockPrice;
```

## Receive Data
### Example of how we can handle our data
```
const data = await response.json();

        setOpenPrice(data.open);
        setClosePrice(data.close);
        setLowPrice(data.low);
        setHighPrice(data.high);
```

### Example Data Response from the Microservice
```
response = {
  "open": 130.465,
  "close": 130.15,
  "low": 129.89,
  "high": 133.41
}
```

### Example Data Response from the Polygon API
```
data = {
  "status": "OK",
  "from": "2023-01-09",
  "symbol": "AAPL",
  "open": 130.465,
  "high": 133.41,
  "low": 129.89,
  "close": 130.15,
  "volume": 70790813.0,
  "afterHours": 129.85,
  "preMarket": 129.6
}
```


