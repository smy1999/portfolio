// api/getData.js

import { MongoClient } from 'mongodb';
import process from "../.eslintrc.cjs";

const uri = process.env.MONGODB_URI; // 从环境变量读取 MongoDB URI
let client = new MongoClient(uri);

const handler = async (req, res) => {

  console.log(uri)
  try {
    if (!client.isConnected) {
      await client.connect(); // 连接 MongoDB
    }

    const db = client.db('protfolio'); // 选择数据库
    const collection = db.collection('project'); // 选择集合

    const data = await collection.find({}).toArray(); // 查询数据
    res.status(200).json(data); // 返回数据
  } catch (error) {
    console.error('Failed to fetch data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

export default handler;
