import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // MongoDBに接続
//       const client = await MongoClient.connect(process.env.MONGODB_URI);
//       const db = client.db('notifications');
      
//       // 購読情報を保存
//       const subscription = {
//         subscription: req.body.subscription,
//         userPreferences: req.body.preferences || {},
//         createdAt: new Date()
//       };
      
//       await db.collection('subscriptions').insertOne(subscription);
      
//       await client.close();
//       res.status(201).json({ message: 'Subscription saved successfully' });
//     } catch (error) {
//       console.error('Subscription error:', error);
//       res.status(500).json({ error: 'Error saving subscription' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


export const sendNotification = async (subscription, payload) => {
  // Web Push APIを使用した通知送信のロジック
};