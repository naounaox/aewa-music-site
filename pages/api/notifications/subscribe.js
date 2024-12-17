// import { MongoClient } from 'mongodb';
// import webpush from 'web-push';

// // const MONGODB_URI = process.env.MONGODB_URI;

// // webpush.setVapidDetails(
// //   'mailto:your-email@aewasongs.com',
// //   process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
// //   process.env.VAPID_PRIVATE_KEY
// // );

// // // export default async function handler(req, res) {
// // //   if (req.method === 'POST') {
// // //     try {
// // //       const client = await MongoClient.connect(MONGODB_URI);
// // //       const db = client.db('aewa-notifications');
      
// // //       const subscription = {
// // //         endpoint: req.body.endpoint,
// // //         keys: req.body.keys,
// // //         createdAt: new Date(),
// // //         preferences: req.body.preferences || {}
// // //       };

// // //       await db.collection('subscriptions').insertOne(subscription);
      
// // //       await client.close();
      
// // //       res.status(201).json({ message: 'Subscription saved' });
// // //     } catch (error) {
// // //       res.status(500).json({ error: 'Error saving subscription' });
// // //     }
// // //   }
// // // }


// // export default async function handler(req, res) {
// //   if (req.method !== 'POST') {
// //     return res.status(405).json({ error: 'Method not allowed' });
// //   }

// //   try {
// //     const subscription = req.body;
    
// //     // サブスクリプションをDBに保存
// //     // MongoDBの処理をここに記述

// //     res.status(201).json({ message: 'Subscription saved' });
// //   } catch (error) {
// //     console.error('Error saving subscription:', error);
// //     res.status(500).json({ error: 'Error saving subscription' });
// //   }
// // }

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     // 購読情報の保存処理
//   }
// };