import { NextResponse } from "next/server";
import Airtable from "airtable";

export async function GET(request: Request) {

    const revalidate = 0;
  try {
        if (!process.env.AIRTABLE_BASE) throw new Error('Base missing')
        const base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base(process.env.AIRTABLE_BASE)

    const records = await base('Projects').select({}).firstPage()

    const minifiedRecords = records.map((record) => {
        return record.fields
    })

    const cacheHeaders = {
        'Cache-Control': 'no-store, max-age=0',
      };

    return NextResponse.json(minifiedRecords, { status: 200, headers: cacheHeaders });
  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ message: err.message }, { status: err.status });
  }
}
