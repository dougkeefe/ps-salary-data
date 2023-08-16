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

    // Extract the top values for each CS code and aggregate them into an object
    const result: any = {};

    enum PayScaleCode {
        CS_01 = 'CS-01',
        CS_02 = 'CS-02',
        CS_03 = 'CS-03',
        CS_04 = 'CS-04',
        CS_05 = 'CS-05',
        AS_01 = 'AS-1',
        AS_02 = 'AS-2',
        AS_03 = 'AS-3',
        AS_04 = 'AS-4',
        AS_05 = 'AS-5',
        AS_06 = 'AS-6',
        AS_07 = 'AS-7',
        AS_08 = 'AS-8',
    }
    
    for (const code of Object.values(PayScaleCode)) {
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
