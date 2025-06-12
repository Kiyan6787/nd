// File: api/sort.js

export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { data } = req.body;
  
    if (typeof data !== 'string') {
      return res.status(400).json({ error: '"data" must be a string' });
    }
  
    const sorted = data.split('').sort();
    return res.status(200).json({ word: sorted });
  }
  