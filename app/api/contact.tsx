import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("bushido")
        const contacts = await db
        .collection("contacts")
        res.json(contacts)


    }
    catch(e){
console.log(e)
    }
}