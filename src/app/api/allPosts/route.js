import prisma from "@/src/utils/connect.js";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");

  const POST_PER_PAGE = 2;

  try {
    const allPosts = await prisma.post.findMany({ take: POST_PER_PAGE, skip: POST_PER_PAGE * (page - 1) });
    return new NextResponse(JSON.stringify(allPosts, null, 200));
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
