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
