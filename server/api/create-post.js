import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  console.log(body);

  const { userId, name, image, text, picture } = body;
  const res = await prisma.posts.create({
    data: {
      userId,
      name,
      image,
      text,
      picture,
    },
  });

  return res;
});
