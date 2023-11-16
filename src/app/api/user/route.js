import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

//ibrahimghani
//sde40eOVUybN982b

export async function GET(request) {
  const uri =
    "mongodb+srv://ibrahimghani:sde40eOVUybN982b@cluster0.nrdkghd.mongodb.net/Portfolio";
  const client = new MongoClient(uri);
  try {
    const database = client.db("Portfolio");
    const Users = database.collection("Users");

    const query = {};
    const users = await Users.find(query).toArray();

    console.log(users);
    return NextResponse.json({ "DB Connection Successfull !": users });
  } finally {
    await client.close();
  }
}

//post
export async function POST(request) {
  const body = await request.json();
  const uri =
    "mongodb+srv://ibrahimghani:sde40eOVUybN982b@cluster0.nrdkghd.mongodb.net/Portfolio";
  const client = new MongoClient(uri);
  try {
    const database = client.db("Portfolio");
    const Users = database.collection("Users");

    const query = {};
    const user = await Users.insertOne(body);

    console.log(user);
    return NextResponse.json({ "User Added": user });
  } finally {
    await client.close();
  }
}
