// pages/api/imei-checker.js
import axios from 'axios';

export default async function handler(req, res) {
  const { imei } = req.query;

  if (!imei) {
    return res.status(400).json({ error: 'IMEI number is required' });
  }

  try {
    const response = await axios.get(`https://kelpom-imei-checker1.p.rapidapi.com/api`, {
      params: {
        service: 'model',
        imei: imei
      },
      headers: {
        'x-rapidapi-key': '2a5693d34cmsh4d9d8123750aa5fp1c224fjsnc509101cb29e',
        'x-rapidapi-host': 'kelpom-imei-checker1.p.rapidapi.com'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API request failed:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API' });
  }
}
