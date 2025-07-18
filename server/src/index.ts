import cors from "cors";
import express from "express";
import { createClient } from "redis";
import { faker } from "@faker-js/faker";

const app = express();
app.use(cors());

const redis = createClient({ url: "redis://localhost:6379" });
redis.on("error", (err) => console.log("Redis client error: ", err));

app.get("/keys", async (req, res) => {
  try {
    const keys = [];
    let cursor = "0";
    do {
      const reply = await redis.scan(cursor, { MATCH: "*" });
      cursor = reply.cursor;
      keys.push(...reply.keys);
    } while (cursor != "0");

    if (keys.length === 0) {
      return res.json([]);
    }

    const data = await Promise.all(
      keys.map(async (key) => {
        const value = await redis.hGetAll(key);
        return { key, value };
      })
    );

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

app.get("/seed", async (req, res) => {
  try {
    await redis.flushAll();

    for (let i = 0; i < 20; i++) {
      const id = faker.string.uuid();
      const key = `user:${id}`;

      await redis.hSet(key, {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        country: faker.location.country(),
      });
    }

    res.status(201).json({ message: "Redis has been populated." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

async function start() {
  await redis.connect();
  app.listen(4000, () => {
    console.log("✅ Readicts running on 'http://localhost:4000/'");
  });
}

start();
