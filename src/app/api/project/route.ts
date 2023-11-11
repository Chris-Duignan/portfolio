import { NextResponse } from "next/server";
// import { table, minifyItems } from "@/utils/airtableConnection";
const Airtable = require('airtable')

const minifyItems = (records: any) =>
  records.map((record: any) => getMinifiedItem(record));

const getMinifiedItem = (record: any) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};
export async function GET(request: Request) {

  try {

  Airtable.configure({
      apiKey: process.env.AIRTABLE_TOKEN,
  });
  
  const base = Airtable.base(process.env.AIRTABLE_BASE)
  
  const table = base('projects')
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
