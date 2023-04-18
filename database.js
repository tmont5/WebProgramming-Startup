const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('startup').collection('user');
const countCollection = client.db('startup').collection('count');

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// Counts
async function incrementCount(itemName, type) {
  counts = await countCollection.findOne({ name: itemName });
  if (!counts) {
    createCount(itemName);
  }

  if (type === 'like') {
    updateDoc = { $inc: { likes: 1 } };
  }
  else {
    updateDoc = { $inc: { dislikes: 1} };
  }
  const filter = { name: itemName }
  const updateResult = await countCollection.updateOne(filter, updateDoc);
  return updateResult;
}

async function getCount(itemName) {
  counts = await countCollection.findOne( { name: itemName } )
  if (counts) {
    return counts;
  }
  return createCount(itemName);
}

async function createCount(itemName) {
  const count = {
    name: itemName,
    likes: 0,
    dislikes: 0,
  };
  await countCollection.insertOne(count)
  return count;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  incrementCount,
  getCount
};
