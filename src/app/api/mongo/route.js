import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

//ibrahimghani
//sde40eOVUybN982b

export async function GET(request) {
    const uri = "mongodb+srv://ibrahimghani:sde40eOVUybN982b@cluster0.nrdkghd.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    try {
        const database = client.db('Portfolio');
        const movies = database.collection('Users');

        const query = {};
        const movie = await movies.find(query).toArray();

        console.log(movie);
        return NextResponse.json({ "DB Connection Successfull !": movie })
    } finally {
        await client.close();
    }

}