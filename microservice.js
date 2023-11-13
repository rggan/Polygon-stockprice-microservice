const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const polygonKey = process.env.POLYGON_API_KEY;

app.get('/v2/snapshot/locale/us/markets/stocks/:direction', async (req, res) => {
    const { direction } = req.params;

    if (!['gainers', 'losers'].includes(direction)) {
        return res.status(400).json({ error: 'Invalid direction' });
    }

    const apiKey = polygonKey;
    const baseUrl = `https://api.polygon.io/v2/snapshot/locale/us/markets/stocks/${direction}`;

    try {
        const response = await axios.get(baseUrl, { params: { apiKey } });
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status || 500).json({ error: `Failed to fetch data: ${error.message}` });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});