import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

import connect from "./Db/connectDb.mjs";
import Post from "./models/Post.mjs";


const start = async () => {
  try {
    await connect(process.env.DATABASE_URL);
    await Post.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("/src/app/data/allPostData.json", import.meta.url))
    );
    await Post.create(jsonProducts);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start ()