import clientPromise from "~/lib/mongodb";

export default defineEventHandler(async (event) => {
  const client = await clientPromise;
  const db = client.db("todos");
  const query = getQuery(event);
  const body = await readBody(event);

  if (event.node.req.method === "PUT") {
    try {
      const result = await db.collection("todos").updateOne(query, body);
      return result;
    } catch (error: any) {
      console.error(error);
      throw new error(error).message;
    }
  }

  if (event.node.req.method === "DELETE") {
    try {
      let id = event.context.params;
      await db.collection("todos").deleteOne({
        _id: id,
      });
      return "success";
    } catch (error: any) {
      console.error(error);
      throw new error(error).message;
    }
  }
});
