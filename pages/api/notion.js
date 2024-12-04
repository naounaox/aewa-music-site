import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const notion = new Client({
    auth: process.env.NOTION_TOKEN
  });

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    });

    res.status(200).json(response.results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error fetching posts' });
  }
}