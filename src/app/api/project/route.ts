import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {

  const res = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/projects`,
    {
      next: {revalidate: 3600},
      headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
    }
  );

  const projects = await res.json();

  return NextResponse.json(projects, {
    status: 200,
  });
}
