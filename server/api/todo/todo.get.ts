import clientPromise from "~/lib/mongodb";

export default defineEventHandler(async (event) => {
  const client = await clientPromise;
  const db = client.db("todos");

  try {
    const todos = await db
      .collection("todos")
      .find({})
      .sort({ isCompleted: 1, createdAt: -1 })
      .limit(50)
      .toArray();

    return todos;
  } catch (error: any) {
    console.error(error);
    throw new Error(error).message;
  }
});
