import connectionDb from "../config/database.js";

async function create({ name, author, userId }) {
  await connectionDb.query(
    `
        INSERT INTO books (name, author, "userId")
        VALUES ($1, $2, $3)
        `,
    [name, author, userId]
  );
}

async function findByName(name) {
  return await connectionDb.query(
    `
        SELECT * FROM books WHERE name = $1;
    `,
    [name]
  );
}

async function findAll() {
  return await connectionDb.query(
    `
        SELECT 
          b.id, b.name, b.author, b.available, 
          u.name as "createdBy"
        FROM books b
        JOIN users u
        ON b."userId" = u.id;
    `
  );
}

export default { create, findByName, findAll };
