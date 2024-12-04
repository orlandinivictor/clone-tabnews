import database from "infra/database.js";

export default async function access(request, response) {
  const allowedMethods = ["GET", "POST"];
  if (!allowedMethods.includes(request.method)) {
    return response.status(405).json({
      error: `Method ${request.method} not allowed`,
    });
  }

  let dbClient;
  try {
    dbClient = await database.getNewClient();

    if (request.method === "GET") {
      const databaseResponse = await database.query("SELECT * FROM access;");
      return response.status(200).json({ data: databaseResponse.rows });
    }

    if (request.method === "POST") {
      const parsedBody = JSON.parse(request.body);
      if (!parsedBody.ip) {
        return response.status(404).json({
          error: `Ip missing`,
        });
      }

      await database.query({
        text: "INSERT INTO access (ip) VALUES ($1)",
        values: [parsedBody.ip],
      });
      return response.status(201).send("data saved");
    }
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    await dbClient.end();
  }
}
