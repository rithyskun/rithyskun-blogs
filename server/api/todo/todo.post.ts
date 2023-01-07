import clientPromise from "~/lib/mongodb";

export default defineEventHandler(async (event) => {
  const client = await clientPromise;
  const db = client.db("todos");
  const body = await readBody(event);

  try {
    const todos = await db.collection("todos").insertOne(body);
    return todos;
  } catch (error: any) {
    console.error(error);
    throw new Error(error).message;
  }
});
