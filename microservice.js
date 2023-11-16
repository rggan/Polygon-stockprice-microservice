const express = require('express');
const axios = require('axios');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;
const polygonKey = process.env.POLYGON_API_KEY;

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.get('/stock/:symbol/:date', async (req, res) => {
  const { symbol, date } = req.params;

  const apiUrl = `https://api.polygon.io/v1/open-close/${symbol}/${date}?adjusted=true`;

  try {
    const response = await axios.get(apiUrl, {headers: {Authorization: `Bearer ${polygonKey}`}});
    res.json({open: response.data.open, 
              close: response.data.close, 
              low: response.data.low, 
              high: response.data.high});

  } catch (error) {
    res.status(error.response.status || 500).json({ error: `Failed to fetch data: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
