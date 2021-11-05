// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// };

// let client;
// let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
/************************************************************* */
// import { MongoClient } from "mongodb";

// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_DB = process.env.MONGODB_DB;

// // check the MongoDB URI
// if (!MONGODB_URI) {
//   throw new Error("Define the MONGODB_URI environmental variable");
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//   throw new Error("Define the MONGODB_DB environmental variable");
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // Connect to cluster
//   let client = new MongoClient(MONGODB_URI, opts);
//   await client.connect();
//   let db = client.db(MONGODB_DB);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   };
// }

/************************************************ */

import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
const URI = process.env.MONGODB_URI;

//variables
const dbName = process.env.MONGO_DB;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

/*************************************************************/

const client = new MongoClient(URI, mongoOptions);

const state = {
  db: null,
};

const connect = async (cb) => {
  if (state.db) {
    cb();
  } else {
    MongoClient.connect(URI, mongoOptions, (err, client) => {
      if (err) {
        cb(err);
      } else {
        state.db = client.db(dbName);
        cb();
      }
    });
  }
};

await connect((err) => {
  if (err) {
    console.log("unable to connect to database");
    process.exit(1);
  } else {
    console.log("connected to database, app listening on port 3000");
  }
});

export const getPrimaryKey = (_id) => {
  return ObjectId(_id);
};

export const getDB = async () => {
  return state.db;
};
export default { getDB, getPrimaryKey, connect, client };
