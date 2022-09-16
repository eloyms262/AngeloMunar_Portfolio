import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, subject, body } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !body ||
      body.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }
    const newMessage = {
      email,
      name,
      body,
      subject,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://narnaru26:zwpvGmrefT0pIUOg@cluster0.utd89.mongodb.net/portfolio?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing Data Failed" });
      return;
    }
    client.close();
    res.status(201).json({ message: "Sent successfully", message: newMessage });
  }
}

export default handler;
