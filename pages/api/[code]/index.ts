import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

type JsonData = {
  [key: string]: any;
};

function findAllInKeys(data: JsonData, searchStr: string): JsonData {
  let matches: JsonData = {};
  for (let key in data) {
    if (key.startsWith(searchStr)) {
      matches[key] = data[key];
    }
  }
  return matches;
}

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

    const validData = jsonData as JsonData;

    // Extract the desired subset based on the dynamic segment (code)
    const desiredSubset = req.query.code?.toString().toUpperCase();

    if (!desiredSubset) {
      return res.status(400).json({ error: 'Please provide a subset to search for.' });
    }

    // Search based on a string in the key
    const results = findAllInKeys(validData, desiredSubset);

    if (Object.keys(results).length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ error: 'Subset ' + desiredSubset + ' not found in any keys. A common error is not including a leading zero in the classification (eg: AS-01).' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }

}

