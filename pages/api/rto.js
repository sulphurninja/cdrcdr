// pages/api/rto.js
import axios from 'axios';

export default async function handler(req, res) {
  const { vid } = req.query;

  if (!vid) {
    return res.status(400).json({ error: 'Vehicle number is required' });
  }

  try {
    const response = await axios.get(
      `https://rto-vehicle-details.p.rapidapi.com/flash/rto`,
      {
        params: { regNo: vid },
        headers: {
          'x-rapidapi-key': '2a5693d34cmsh4d9d8123750aa5fp1c224fjsnc509101cb29e',
          'x-rapidapi-host': 'rto-vehicle-details.p.rapidapi.com',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
    res.status(500).json({ error: 'Failed to fetch vehicle data' });
  }
}
