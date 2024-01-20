import prisma from "@/src/utils/connect.js";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const recentPosts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(recentPosts, null, 200));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify(
        { msg: "something went wrong, please try again later!" },
        null,
        500
      )
    );
  }
};