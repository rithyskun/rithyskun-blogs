import clientPromise from "~/lib/mongodb";
import { ObjectId } from "mongodb";

export default defineEventHandler(async (event) => {
  const client = await clientPromise;
  const db = client.db("todos");

  const body = await readBody(event);
  const id = event.context.params.id;

  if (event.node.req.method === "PUT") {
    try {
      const result = await db.collection("todos").updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: body,
        }
      );
      return result;
    } catch (error: any) {
      console.error(error);
      throw new error(error).message;
    }
  }

  if (event.node.req.method === "DELETE") {
    try {
      await db.collection("todos").deleteOne({
        _id: new ObjectId(id),
      });
      return "success";
    } catch (error: any) {
      console.error(error);
      throw new error(error).message;
    }
  }
});
