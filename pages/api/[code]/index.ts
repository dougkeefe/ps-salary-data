import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Define the path to the JSON file
    const filePath = path.join(process.cwd(), 'data', 'data.json');

    // Check if the file exists
    try {
      await fs.access(filePath);
    } catch {
      return res.status(404).json({ error: 'File not found' });
    }

    // Read the file asynchronously
    const data = await fs.readFile(filePath, 'utf8');

    // Attempt to parse the JSON
    let jsonData;
    try {
      jsonData = JSON.parse(data);
    } catch (parseError) {
      return res.status(400).json({ error: 'Failed to parse the JSON file' });
    }

    // Extract the desired subset based on the dynamic segment (code)
    const desiredSubset = req.query.code?.toString().toUpperCase();

    if (desiredSubset && jsonData[desiredSubset]) {
      res.status(200).json(jsonData[desiredSubset]);
    } else {
      res.status(404).json({ error: 'Subset not found' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}
