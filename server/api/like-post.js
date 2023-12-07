import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { userId, postId } = body;
  const res = await prisma.likes.create({
    data: {
      userId,
      postId,
    },
  });

  return res;
});
