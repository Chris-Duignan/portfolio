import { NextResponse } from "next/server";
import Airtable from "airtable";


export async function GET(request: Request) {
    const { body } = request

    try {
        if (!process.env.AIRTABLE_BASE) throw new Error('Base missing')
        const base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base(process.env.AIRTABLE_BASE)
        
    const records = await base('Projects').select({}).firstPage()

    const minifiedRecords = records.map((record) => {
        return record.fields
    })

    return NextResponse.json(minifiedRecords, {status: 200})
    } catch(err: any) {
        return NextResponse.json({message: err.message}, {status: err.status})
    }

}