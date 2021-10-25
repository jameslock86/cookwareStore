import clientPromise from "../lib/mongodb";
export const getDB = async () => {
  const db = await clientPromise;
  const dbState = await db.db("cookwarestore");
  // console.log("inside getdb function", dbState);
  return dbState;
};

module.exports = { getDB };
