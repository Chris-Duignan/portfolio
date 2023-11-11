import { NextResponse } from "next/server";
import { table, minifyItems } from "@/utils/airtableConnection";

export async function GET(request: Request) {

  try {
    const records = await table.select({}).firstPage();
    // const res = await fetch(
    //   `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/projects`,
    //   {
    //     cache: "no-store",
    //     headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
    //   }
    // );
    const minifiedItems = minifyItems(records);

    
    console.info('Response received', records)
    

    return NextResponse.json(minifiedItems, {
      status: 200,
    });


  } catch (err) {
    console.error(err)
    return NextResponse.json(err, {status: 500})
  }
}
