// pages/api/notifications/subscriptions.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  
  try {
    switch (req.method) {
      case 'GET':
        const subscriptions = await db.collection('subscriptions').find({}).toArray();
        res.status(200).json(subscriptions);
        break;
        
      case 'POST':
        await db.collection('subscriptions').insertOne(req.body);
        res.status(201).json({ message: 'Subscription saved' });
        break;
        
      case 'DELETE':
        await db.collection('subscriptions').deleteOne({ endpoint: req.body.endpoint });
        res.status(200).json({ message: 'Subscription removed' });
        break;
        
      default:
        res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database operation failed:', error);
    res.status(500).json({ message: 'Database operation failed' });
  } finally {
    await client.close();
  }
}