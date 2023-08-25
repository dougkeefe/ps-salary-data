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

    // Extract the top values for each code and aggregate them into an object
    const result: any = {};

    // Loop over each key (pay scale code) in jsonData
    for (const code of Object.keys(jsonData)) {
      if (jsonData[code]) {
        const rates = jsonData[code]["annual-rates-of-pay"];
        if (rates && rates.length > 0) {
          const lastRate = rates[rates.length - 1];
          const keys = Object.keys(lastRate);
          if (keys.length > 0) {
            const lastStepKey = keys[keys.length - 1];
            if (lastRate[lastStepKey] !== undefined) {
              result[code] = lastRate[lastStepKey];
            }
          }
        }
      }
    }

    res.status(200).json(result);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}
