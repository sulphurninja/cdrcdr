// pages/api/upifind.js
import axios from 'axios';

export default async function handler(req, res) {
  const { vpa } = req.query;

  if (!vpa) {
    return res.status(400).json({ error: 'UPI ID is required' });
  }

  try {
    const response = await axios.post('https://upi-verification.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_vpa', 
      {
        task_id: 'UUID',
        group_id: 'UUID',
        data: { vpa: vpa }
      }, 
      {
        headers: {
          'x-rapidapi-key': '2a5693d34cmsh4d9d8123750aa5fp1c224fjsnc509101cb29e',
          'x-rapidapi-host': 'upi-verification.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API request failed:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API' });
  }
}
