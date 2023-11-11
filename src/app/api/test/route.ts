import { NextResponse } from "next/server";
import Airtable from "airtable";


export async function GET(request: Request) {
    const { body } = request

    try {
    //     if (!process.env.AIRTABLE_BASE) throw new Error('Base missing')
    //     const base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base(process.env.AIRTABLE_BASE)
        
    // const records = await base('Projects').select({}).firstPage()

    // const minifiedRecords = records.map((record) => {
    //     return record.fields
    // })
    const records = await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/projects`, {
        headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` }    })

        const data = await records.json()

    return NextResponse.json(data, {status: 200})
    } catch(err: any) {
        return NextResponse.json({message: err.message}, {status: err.status})
    }

}