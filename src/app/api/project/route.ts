import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const axiosClient = axios.create({ baseURL: "https://api.airtable.com/v0" });

  const response = await axiosClient.get(
    `${process.env.AIRTABLE_BASE}/projects`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      },
    }
  );

  return NextResponse.json(
      response.data,
    {
      status: 200,
    }
  );
}
