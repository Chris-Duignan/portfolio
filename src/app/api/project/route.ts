import { NextResponse } from "next/server";


export async function GET(request: Request) {

  // const {body} = request;

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/projects`,
      {
        cache: "no-store",
        headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
      }
    );
    
    console.info('Response received', res)
    
    const projects = await res.json();

    return NextResponse.json(projects, {
      status: res.status,
    });


  } catch (err) {
    console.error(err)
    return NextResponse.json(err, {status: 500})
  }
}

// export async function GET(request: Request) {

//   try {

//     if (!process.env.AIRTABLE_TOKEN || !process.env.AIRTABLE_BASE) throw (new Error('Airtable Config missing'))

//   const base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base(process.env.AIRTABLE_BASE)
  
//   const table = base('projects')

//     const records = await table.select({}).firstPage();
//     // const res = await fetch(
//     //   `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/projects`,
//     //   {
//     //     cache: "no-store",
//     //     headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
//     //   }
//     // );
//     const minifiedItems = minifyItems(records);

    
//     console.info('Response received', records)
    

//     return NextResponse.json(minifiedItems, {
//       status: 200,
//     });


//   } catch (err) {
//     console.error(err)
//     return NextResponse.json(err, {status: 500})
//   }
// }