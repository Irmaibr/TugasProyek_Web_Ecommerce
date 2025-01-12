import product from "@/app/libs/models/Products";
import { connectMongoDB } from "@/app/libs/MongoConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectMongoDB()

        const data = await product.find()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({
            error,
            msg: "Something Went Wrong"
        }, 
        {status: 400}
    );
    }
}