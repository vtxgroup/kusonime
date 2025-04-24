import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Read query parameter
    const { q } = req.query;
    const query = typeof q === 'string' ? q.trim().toLowerCase() : '';

    // Load JSON files from data directory
    const dataDir = path.join(process.cwd(), 'data');
    const files = await fs.readdir(dataDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const dataPromises = jsonFiles.map(async (file) => {
      const filePath = path.join(dataDir, file);
      const fileContent = await fs.readFile(filePath, 'utf8');
      return JSON.parse(fileContent);
    });

    const rawData = await Promise.all(dataPromises);

    // Combine arrays or objects into a flat list
    const allItems = rawData.reduce((acc: any[], curr) => {
      if (Array.isArray(curr)) {
        return acc.concat(curr);
      }
      acc.push(curr);
      return acc;
    }, []);

    // Filter results if query provided
    const results = query
      ? allItems.filter(item => {
          const title = item.title || item.name || '';
          return title.toLowerCase().includes(query);
        })
      : allItems;

    // Respond with filtered (or all) items and creator info
    return res.status(200).json({
      creator: "VTX Group",
      results,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      creator: "VTX Group",
      error: 'Failed to read, parse, or filter JSON files'
    });
  }
}
