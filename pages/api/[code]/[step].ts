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
    const desiredCode = req.query.code?.toString().toUpperCase();

    // Validate the provided code
    if (!desiredCode || !jsonData[desiredCode]) {
      return res.status(404).json({ error: 'Code not found' });
    }

    const rates = jsonData[desiredCode]["annual-rates-of-pay"];
    const lastRate = rates[rates.length - 1];

    // Extract the desired step based on the dynamic segment (step)
    const desiredStep = req.query.step?.toString();

    // Validate the provided step and return the corresponding value
    if (desiredStep && lastRate[desiredStep]) {
      res.status(200).json({ [desiredStep]: lastRate[desiredStep] });
    } else {
      res.status(404).json({ error: 'Step not found' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}
