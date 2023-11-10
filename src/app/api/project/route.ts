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
