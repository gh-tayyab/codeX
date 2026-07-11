import { NextResponse } from "next/server";
import { sql } from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      phone,
      firstName,
      lastName,
      email,
    } = body;

    if (
      !phone ||
      !firstName ||
      !lastName ||
      !email
    ) {
      return NextResponse.json({
        success: false,
        message: "Missing Fields",
      });
    }

    await sql`
      INSERT INTO internship_applications
      (
        phone,
        first_name,
        last_name,
        email
      )
      VALUES
      (
        ${phone},
        ${firstName},
        ${lastName},
        ${email}
      )
    `;

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}