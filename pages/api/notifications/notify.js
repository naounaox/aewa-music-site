// // export default async function handler(req, res) {
// //     if (req.method !== 'POST') {
// //       return res.status(405).json({ error: 'Method not allowed' });
// //     }
  
// //     try {
// //       const { message } = req.body;
      
// //       // DBからすべてのサブスクリプションを取得
// //       // const subscriptions = await Subscription.find();
      
// //       // 各サブスクリプションに通知を送信
// //       const notifications = subscriptions.map(subscription => 
// //         webpush.sendNotification(subscription, JSON.stringify(message))
// //       );
      
// //       await Promise.all(notifications);
      
// //       res.status(200).json({ message: 'Notifications sent successfully' });
// //     } catch (error) {
// //       console.error('Error sending notifications:', error);
// //       res.status(500).json({ error: 'Error sending notifications' });
// //     }
// //   }

// // pages/api/notifications/notify.js
// import { MongoClient } from 'mongodb';
// import webpush from 'web-push';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const client = await MongoClient.connect(process.env.MONGODB_URI);
//   const db = client.db();

//   try {
//     const subscriptions = await db.collection('subscriptions').find({}).toArray();
//     const { title, body } = req.body;
    
//     const notifications = subscriptions.map(subscription => 
//       webpush.sendNotification(subscription, JSON.stringify({ title, body }))
//     );
    
//     await Promise.all(notifications);
//     res.status(200).json({ message: 'Notifications sent successfully' });
//   } catch (error) {
//     console.error('Error sending notifications:', error);
//     res.status(500).json({ message: 'Error sending notifications' });
//   } finally {
//     await client.close();
//   }
// }